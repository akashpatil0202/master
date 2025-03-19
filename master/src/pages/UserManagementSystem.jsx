import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as XLSX from "xlsx";
import axios from "axios";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import "./usermanagement.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../src/services/api";
import { Modal, Button } from "react-bootstrap";

const UserManagementSystem = () => {
  const [activeTab, setActiveTab] = useState("registration");
  const [employees, setEmployees] = useState([]);
  const [jobRoles, setJobRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeToDelete, setEmployeeToDelete] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [currentFilterKey, setCurrentFilterKey] = useState("");

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
    address: "",
    departmentId: "",
    jobRoleId: "",
  });

  const [filters, setFilters] = useState({
    name: "",
    email: "",
    department: "",
    jobrole: "",
    dob: "",
  });

  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [groupBy, setGroupBy] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchDepartments();
        await fetchJobRoles();
        if (activeTab === "userList") {
          await fetchEmployees();
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const fetchDepartments = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/auth/departments"
      );
      const data = response.data || response || [];
      const transformedData = data.map((dept) => ({
        id: dept.id,
        name: dept.name,
      }));
      setDepartments(transformedData);
    } catch (error) {
      console.error("Error fetching departments:", error);
      toast.error("Failed to load departments");
    }
  };

  const fetchJobRoles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/auth/job-roles"
      );
      const data = response.data || response || [];
      const transformedData = data.map((role) => ({
        id: role.id,
        name: role.name,
      }));
      setJobRoles(transformedData);
    } catch (error) {
      console.error("Error fetching job roles:", error);
      toast.error("Failed to load job roles");
    }
  };

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/auth/users");
      setEmployees(response || []);
    } catch (error) {
      console.error("Error fetching employees:", error);
      toast.error("Failed to load employees");
      setEmployees([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        fullName: formData.name,
        email: formData.email,
        password: formData.password,
        dob: new Date(formData.dob).toISOString().split("T")[0],
        phoneNo: formData.phone,
        address: formData.address,
        departmentId: parseInt(formData.departmentId, 10),
        jobRoleId: parseInt(formData.jobRoleId, 10),
      };
  
      let response;
      if (formData.id) {
        // Update existing employee
        response = await axios.put(
          `http://localhost:8081/api/auth/users/${formData.id}`,
          payload
        );
        toast.success("Employee updated successfully!");
      } else {
        // Register new employee
        response = await registerUser(payload);
        toast.success("Employee registered successfully!");
      }
  
      // Reset form after successful registration/update
      setFormData({
        id: "",
        name: "",
        dob: "",
        phone: "",
        email: "",
        password: "",
        address: "",
        departmentId: "",
        jobRoleId: "",
      });
  
      // Refresh the employee list
      fetchEmployees();
    } catch (error) {
      console.error("Error saving employee:", error);
      toast.error(
        error?.response?.data?.message ||
          "Registration failed. Please try again."
      );
    }
  };
  const handleEditAndUpdate = async (id) => {
    if (id) {
      // Editing mode: Populate the form with the selected employee's data
      const employee = employees.find((emp) => emp.id === id);
      if (employee) {
        setFormData({
          id: employee.id,
          name: employee.fullName,
          dob: employee.dob,
          phone: employee.phoneNo,
          email: employee.email,
          password: "", // Password is not pre-filled for security reasons
          address: employee.address,
          departmentId: employee.department?.id || "", // Ensure this is correct
          jobRoleId: employee.jobRole?.id || "", // Ensure this is correct
        });
        setActiveTab("registration");
      } else {
        console.error("Employee not found");
        toast.error("Employee not found");
      }
    } else {
      // Update or Register mode
      try {
        const payload = {
          fullName: formData.name,
          email: formData.email,
          dob: new Date(formData.dob).toISOString().split("T")[0],
          phoneNo: formData.phone,
          address: formData.address,
          departmentId: parseInt(formData.departmentId, 10),
          jobRoleId: parseInt(formData.jobRoleId, 10),
        };
  
        if (formData.password) {
          payload.password = formData.password;
        }
  
        let response;
        if (formData.id) {
          // Update existing employee
          response = await axios.put(
            `http://localhost:8081/api/auth/users/${formData.id}`,
            payload
          );
          toast.success("Employee updated successfully!");
        } else {
          // Register new employee
          response = await registerUser(payload);
          toast.success("Employee registered successfully!");
        }
  
        // Reset form after successful registration/update
        setFormData({
          id: "",
          name: "",
          dob: "",
          phone: "",
          email: "",
          password: "",
          address: "",
          departmentId: "",
          jobRoleId: "",
        });
  
        // Refresh the employee list
        fetchEmployees();
      } catch (error) {
        console.error("Error saving employee:", error);
        toast.error(
          error.response?.data?.message || "Operation failed. Please try again."
        );
      }
    }
  };

  const handleDelete = async () => {
    if (employeeToDelete) {
      try {
        await axios.delete(
          `http://localhost:8081/api/auth/users/${employeeToDelete}`
        );
        fetchEmployees(); // Refresh the employee list
        toast.success("Employee deleted successfully!");
      } catch (error) {
        console.error("Error deleting employee:", error);
        toast.error("Failed to delete employee");
      }
    }
    setShowDeleteModal(false);
  };

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
    });
    setShowFilterModal(false);
  };

  // Clear a specific filter
  const clearFilter = (key) => {
    setFilters({
      ...filters,
      [key]: "",
    });
  };

  // Clear all filters
  const clearAllFilters = () => {
    setFilters({
      name: "",
      email: "",
      department: "",
      jobrole: "",
      dob: "",
    });
  };

  // Handle sorting
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Filter employees
  const filteredEmployees = React.useMemo(() => {
    return (employees || []).filter((employee) => {
      const matchesName = (employee.fullName?.toLowerCase() || "").includes(
        filters.name.toLowerCase()
      );
      const matchesEmail = (employee.email?.toLowerCase() || "").includes(
        filters.email.toLowerCase()
      );
      const matchesDepartment = (
        employee.departmentName?.toLowerCase() || ""
      ).includes(filters.department.toLowerCase());
      const matchesJobRole = (employee.jobRoleName?.toLowerCase() || "").includes(
        filters.jobrole.toLowerCase()
      );
      const matchesDob = employee.dob?.includes(filters.dob) || "";
      const matchesSearchQuery =
        (employee.fullName?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        (employee.email?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        (employee.departmentName?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        ) ||
        (employee.jobRoleName?.toLowerCase() || "").includes(
          searchQuery.toLowerCase()
        );

      return (
        (filters.name ? matchesName : true) &&
        (filters.email ? matchesEmail : true) &&
        (filters.department ? matchesDepartment : true) &&
        (filters.jobrole ? matchesJobRole : true) &&
        (filters.dob ? matchesDob : true) &&
        (searchQuery ? matchesSearchQuery : true)
      );
    });
  }, [employees, filters, searchQuery]);

  // Sort employees
  const sortedEmployees = React.useMemo(() => {
    if (!sortConfig.key) return filteredEmployees;

    return [...filteredEmployees].sort((a, b) => {
      let aValue, bValue;

      if (sortConfig.key === "dob") {
        // Extract year from date of birth for sorting
        aValue = new Date(a.dob).getFullYear();
        bValue = new Date(b.dob).getFullYear();
      } else {
        aValue = a[sortConfig.key];
        bValue = b[sortConfig.key];
      }

      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [filteredEmployees, sortConfig]);

  // Group employees
  const groupedEmployees = React.useMemo(() => {
    if (!groupBy) return { "All Employees": sortedEmployees || [] };

    return sortedEmployees.reduce((acc, employee) => {
      const key =
        employee[
          groupBy === "department"
            ? "departmentName"
            : groupBy === "jobRole"
            ? "jobRoleName"
            : "dob"
        ] || "Unknown";
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(employee);
      return acc;
    }, {});
  }, [sortedEmployees, groupBy]);

  const exportToExcel = () => {
    const data = sortedEmployees.map((employee) => ({
      "Full Name": employee.fullName,
      Email: employee.email,
      "Phone No": employee.phoneNo,
      Department: employee.departmentName,
      "Job Role": employee.jobRoleName,
      "Date of Birth": employee.dob,
    }));

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "Employees.xlsx");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();

    autoTable(doc, {
      head: [
        [
          "Full Name",
          "Email",
          "Phone No",
          "Department",
          "Job Role",
          "Date of Birth",
        ],
      ],
      body: sortedEmployees.map((employee) => [
        employee.fullName,
        employee.email,
        employee.phoneNo,
        employee.departmentName || "N/A",
        employee.jobRoleName || "N/A",
        employee.dob,
      ]),
    });

    doc.save("Employees.pdf");
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.bootstrap) {
      const tooltipTriggerList = [].slice.call(
        document.querySelectorAll('[data-bs-toggle="tooltip"]')
      );
      tooltipTriggerList.map((tooltipTriggerEl) => {
        return new window.bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }, [employees]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="container-fluid p-4 bg-light min-vh-100">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-header bg-primary text-white py-3">
                <h2 className="card-title text-center text-white mb-0">
                  User Management System
                </h2>
              </div>
              <div className="card-body">
                {/* Tab Navigation */}
                <ul className="nav nav-tabs nav-fill mb-4">
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "registration" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("registration")}
                    >
                      <i className="bi bi-person-plus"></i> Employee
                      Registration
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "userList" ? "active" : ""
                      }`}
                      onClick={() => {
                        setActiveTab("userList");
                        fetchEmployees();
                      }}
                    >
                      <i className="bi bi-list-ul"></i> Employee List
                    </button>
                  </li>
                </ul>

                {/* Registration Form */}
                {activeTab === "registration" && (
                  <div className="tab-pane fade show active">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label fw-bold">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Enter full name"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-bold">
                            Date of Birth
                          </label>
                          <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-bold">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Enter phone number"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-bold">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Enter email address"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-bold">Password</label>
                          <input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleInputChange}
  className="form-control"
  placeholder="Enter password"
  disabled={!!formData.id} // Disable if editing
  required={!formData.id} // Required only for new registration
/>
                          {formData.id && (
                            <small className="text-muted">
                              Password cannot be changed here.
                            </small>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-bold">Address</label>
                          <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Enter complete address"
                            rows="3"
                            required
                          ></textarea>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-bold">
                            Department
                          </label>
                          <select
  name="departmentId"
  value={formData.departmentId}
  onChange={handleInputChange}
  className="form-select"
  required
>
  <option value="">Select Department</option>
  {departments.map((dept) => (
    <option key={dept.id} value={dept.id}>
      {dept.name}
    </option>
  ))}
</select>
                        </div>
                        <div className="col-md-6">
                          <label className="form-label fw-bold">Job Role</label>
                          <select
  name="jobRoleId"
  value={formData.jobRoleId}
  onChange={handleInputChange}
  className="form-select"
  required
>
  <option value="">Select Job Role</option>
  {jobRoles.map((role) => (
    <option key={role.id} value={role.id}>
      {role.name}
    </option>
  ))}
</select>
                        </div>
                        <div className="col-12 d-flex justify-content-start gap-2 mt-4">
                          <button
                            type="button"
                            onClick={() =>
                              setFormData({
                                id: "",
                                name: "",
                                dob: "",
                                phone: "",
                                email: "",
                                password: "",
                                address: "",
                                departmentId: "",
                                jobRoleId: "",
                              })
                            }
                            className="btn btn-secondary"
                          >
                            <i className="bi bi-arrow-counterclockwise me-1"></i>{" "}
                            Reset
                          </button>
                          <button type="submit" className="btn btn-primary">
                            <i className="bi bi-save me-1"></i>
                            {formData.id
                              ? "Update Employee"
                              : "Register Employee"}
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}

                {/* Employee List */}
                {activeTab === "userList" && (
                  <div className="tab-pane fade show active">
                    <div className="row mb-3">
                      {/* Search Bar - Left Side */}
                      <div className="col-md-6 col-12 mb-3 mb-md-0">
                        <div className="input-group  w-75">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search employees..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <button
                            className="btn btn-outline-primary"
                            type="button"
                          >
                            <i className="bi bi-search"></i>
                          </button>
                        </div>
                      </div>

                      {/* Grouping Dropdown and Export Button - Right Side */}
                      <div className="col-md-6 col-12 d-flex align-items-start gap-2">
                        {/* Grouping Dropdown - Smaller Size */}
                        <div className="flex-grow-1 mb-3 mb-md-0">
                          {" "}
                          {/* Added mb-3 for margin-bottom on small screens */}
                          <select
                            className="form-select w-75"
                            value={groupBy}
                            onChange={(e) => handleGroupBy(e.target.value)}
                          >
                            <option value="">No Grouping</option>
                            <option value="department">
                              Group by Department
                            </option>
                            <option value="jobRole">Group by Job Role</option>
                            <option value="dob">Group by Date of Birth</option>
                          </select>
                        </div>

                        {/* Export Dropdown - Right Side with Top Margin */}
                        <div className="mt-2 mt-md-0">
                          <div className="dropdown">
                            <button
                              className="btn btn-success dropdown-toggle"
                              type="button"
                              id="exportDropdown"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i className="bi bi-download me-1"></i> Export
                            </button>
                            <ul
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="exportDropdown"
                            >
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={exportToExcel}
                                >
                                  <i className="bi bi-file-earmark-excel me-2"></i>
                                  Export to Excel
                                </button>
                              </li>
                              <li>
                                <button
                                  className="dropdown-item"
                                  onClick={exportToPDF}
                                >
                                  <i className="bi bi-file-earmark-pdf me-2"></i>
                                  Export to PDF
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card shadow-sm">
                      <div className="card-body p-0">
                        <div className="table-responsive">
                          <table
                            className="table table-hover table-striped mb-0"
                            style={{ minWidth: "800px" }}
                          >
                            {" "}
                            <thead className="table-light">
                              <tr>
                                <th style={{ width: "5%", minWidth: "50px" }}>
                                  <div className="d-flex align-items-center">
                                    <span>Sr. No</span>
                                    <div className="ms-auto">
                                      <button
                                        className="btn btn-sm btn-link p-0 me-1"
                                        onClick={() => requestSort("id")}
                                        title="Sort by ID"
                                      >
                                        <i
                                          className={`bi bi-arrow-down-up ${
                                            sortConfig.key === "id" &&
                                            sortConfig.direction === "asc"
                                              ? "text-primary"
                                              : ""
                                          }`}
                                        ></i>
                                      </button>
                                      <button
                                        className="btn btn-sm btn-link p-0"
                                        onClick={() => {
                                          setCurrentFilterKey("id");
                                          setShowFilterModal(true);
                                        }}
                                        title="Filter by ID"
                                      >
                                        <i className="bi bi-funnel"></i>
                                      </button>
                                      {filters.id && (
                                        <button
                                          className="btn btn-sm btn-link p-0 ms-1"
                                          onClick={() => clearFilter("id")}
                                          title="Clear filter"
                                        >
                                          <i className="bi bi-x-circle"></i>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </th>
                                <th style={{ width: "20%", minWidth: "150px" }}>
                                  <div className="d-flex align-items-center">
                                    <span>Name</span>
                                    <div className="ms-auto">
                                      <button
                                        className="btn btn-sm btn-link p-0 me-1"
                                        onClick={() => requestSort("name")}
                                        title="Sort by name"
                                      >
                                        <i
                                          className={`bi bi-arrow-down-up ${
                                            sortConfig.key === "name" &&
                                            sortConfig.direction === "asc"
                                              ? "text-primary"
                                              : ""
                                          }`}
                                        ></i>
                                      </button>
                                      <button
                                        className="btn btn-sm btn-link p-0"
                                        onClick={() => {
                                          setCurrentFilterKey("name");
                                          setShowFilterModal(true);
                                        }}
                                        title="Filter by name"
                                      >
                                        <i className="bi bi-funnel"></i>
                                      </button>
                                      {filters.name && (
                                        <button
                                          className="btn btn-sm btn-link p-0 ms-1"
                                          onClick={() => clearFilter("name")}
                                          title="Clear filter"
                                        >
                                          <i className="bi bi-x-circle"></i>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </th>
                                <th style={{ width: "20%", minWidth: "150px" }}>
                                  <div className="d-flex align-items-center">
                                    <span>Email</span>
                                    <div className="ms-auto">
                                      <button
                                        className="btn btn-sm btn-link p-0 me-1"
                                        onClick={() => requestSort("email")}
                                        title="Sort by email"
                                      >
                                        <i
                                          className={`bi bi-arrow-down-up ${
                                            sortConfig.key === "email" &&
                                            sortConfig.direction === "asc"
                                              ? "text-primary"
                                              : ""
                                          }`}
                                        ></i>
                                      </button>
                                      <button
                                        className="btn btn-sm btn-link p-0"
                                        onClick={() => {
                                          setCurrentFilterKey("email");
                                          setShowFilterModal(true);
                                        }}
                                        title="Filter by email"
                                      >
                                        <i className="bi bi-funnel"></i>
                                      </button>
                                      {filters.email && (
                                        <button
                                          className="btn btn-sm btn-link p-0 ms-1"
                                          onClick={() => clearFilter("email")}
                                          title="Clear filter"
                                        >
                                          <i className="bi bi-x-circle"></i>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </th>
                                <th style={{ width: "12%", minWidth: "120px" }}>
                                  <div className="d-flex align-items-center">
                                    <span>Phone</span>
                                    <div className="ms-auto">
                                      <button
                                        className="btn btn-sm btn-link p-0 me-1"
                                        onClick={() => requestSort("phone")}
                                        title="Sort by phone"
                                      >
                                        <i
                                          className={`bi bi-arrow-down-up ${
                                            sortConfig.key === "phone" &&
                                            sortConfig.direction === "asc"
                                              ? "text-primary"
                                              : ""
                                          }`}
                                        ></i>
                                      </button>
                                      <button
                                        className="btn btn-sm btn-link p-0"
                                        onClick={() => {
                                          setCurrentFilterKey("phone");
                                          setShowFilterModal(true);
                                        }}
                                        title="Filter by phone"
                                      >
                                        <i className="bi bi-funnel"></i>
                                      </button>
                                      {filters.phone && (
                                        <button
                                          className="btn btn-sm btn-link p-0 ms-1"
                                          onClick={() => clearFilter("phone")}
                                          title="Clear filter"
                                        >
                                          <i className="bi bi-x-circle"></i>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </th>
                                <th style={{ width: "12%", minWidth: "120px" }}>
                                  <div className="d-flex align-items-center">
                                    <span>Department</span>
                                    <div className="ms-auto">
                                      <button
                                        className="btn btn-sm btn-link p-0 me-1"
                                        onClick={() => requestSort("department")}
                                        title="Sort by department"
                                      >
                                        <i
                                          className={`bi bi-arrow-down-up ${
                                            sortConfig.key === "department" &&
                                            sortConfig.direction === "asc"
                                              ? "text-primary"
                                              : ""
                                          }`}
                                        ></i>
                                      </button>
                                      <button
                                        className="btn btn-sm btn-link p-0"
                                        onClick={() => {
                                          setCurrentFilterKey("department");
                                          setShowFilterModal(true);
                                        }}
                                        title="Filter by department"
                                      >
                                        <i className="bi bi-funnel"></i>
                                      </button>
                                      {filters.department && (
                                        <button
                                          className="btn btn-sm btn-link p-0 ms-1"
                                          onClick={() => clearFilter("department")}
                                          title="Clear filter"
                                        >
                                          <i className="bi bi-x-circle"></i>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </th>
                                <th style={{ width: "12%", minWidth: "120px" }}>
                                  <div className="d-flex align-items-center">
                                    <span>Job Role</span>
                                    <div className="ms-auto">
                                      <button
                                        className="btn btn-sm btn-link p-0 me-1"
                                        onClick={() => requestSort("jobRole")}
                                        title="Sort by job role"
                                      >
                                        <i
                                          className={`bi bi-arrow-down-up ${
                                            sortConfig.key === "jobRole" &&
                                            sortConfig.direction === "asc"
                                              ? "text-primary"
                                              : ""
                                          }`}
                                        ></i>
                                      </button>
                                      <button
                                        className="btn btn-sm btn-link p-0"
                                        onClick={() => {
                                          setCurrentFilterKey("jobrole");
                                          setShowFilterModal(true);
                                        }}
                                        title="Filter by job role"
                                      >
                                        <i className="bi bi-funnel"></i>
                                      </button>
                                      {filters.jobrole && (
                                        <button
                                          className="btn btn-sm btn-link p-0 ms-1"
                                          onClick={() => clearFilter("jobrole")}
                                          title="Clear filter"
                                        >
                                          <i className="bi bi-x-circle"></i>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </th>
                                <th style={{ width: "12%", minWidth: "120px" }}>
                                  <div className="d-flex align-items-center">
                                    <span>DOB</span>
                                    <div className="ms-auto">
                                      <button
                                        className="btn btn-sm btn-link p-0 me-1"
                                        onClick={() => requestSort("dob")}
                                        title="Sort by date of birth"
                                      >
                                        <i
                                          className={`bi bi-arrow-down-up ${
                                            sortConfig.key === "dob" &&
                                            sortConfig.direction === "asc"
                                              ? "text-primary"
                                              : ""
                                          }`}
                                        ></i>
                                      </button>
                                      <button
                                        className="btn btn-sm btn-link p-0"
                                        onClick={() => {
                                          setCurrentFilterKey("dob");
                                          setShowFilterModal(true);
                                        }}
                                        title="Filter by date of birth"
                                      >
                                        <i className="bi bi-funnel"></i>
                                      </button>
                                      {filters.dob && (
                                        <button
                                          className="btn btn-sm btn-link p-0 ms-1"
                                          onClick={() => clearFilter("dob")}
                                          title="Clear filter"
                                        >
                                          <i className="bi bi-x-circle"></i>
                                        </button>
                                      )}
                                    </div>
                                  </div>
                                </th>
                                <th
                                  style={{ width: "12%", minWidth: "140px" }}
                                  className="text-center"
                                >
                                  Actions
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {Object.entries(groupedEmployees).length > 0 ? (
                                Object.entries(groupedEmployees).map(
                                  ([group, employees], groupIndex) => (
                                    <React.Fragment key={group}>
                                      <tr className="bg-light">
                                        <td
                                          colSpan="8"
                                          className="fw-bold text-primary"
                                        >
                                          <i className="bi bi-folder me-2"></i>
                                          {group} ({employees.length})
                                        </td>
                                      </tr>
                                      {employees?.map((employee, index) => (
                                        <tr key={employee.id}>
                                          <td>{groupIndex * 100 + index + 1}</td>
                                          <td
                                            className="text-truncate"
                                            style={{ maxWidth: "200px" }}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={employee.fullName}
                                          >
                                            {employee.fullName}
                                          </td>
                                          <td
                                            className="text-truncate"
                                            style={{ maxWidth: "200px" }}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={employee.email}
                                          >
                                            {employee.email}
                                          </td>
                                          <td
                                            className="text-truncate"
                                            style={{ maxWidth: "120px" }}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={employee.phoneNo}
                                          >
                                            {employee.phoneNo}
                                          </td>
                                          <td
                                            className="text-truncate"
                                            style={{ maxWidth: "120px" }}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={
                                              employee.departmentName ?? "N/A"
                                            }
                                          >
                                            {employee.departmentName ?? "N/A"}
                                          </td>
                                          <td
                                            className="text-truncate"
                                            style={{ maxWidth: "140px" }}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={
                                              employee.jobRoleName ?? "N/A"
                                            }
                                          >
                                            {employee.jobRoleName ?? "N/A"}
                                          </td>
                                          <td
                                            className="text-truncate"
                                            style={{ maxWidth: "140px" }}
                                            data-bs-toggle="tooltip"
                                            data-bs-placement="top"
                                            title={employee.dob}
                                          >
                                            {employee.dob}
                                          </td>
                                          <td>
                                            <div>
                                              {/* Delete Confirmation Modal */}
                                              <Modal
                                                show={showDeleteModal}
                                                onHide={() =>
                                                  setShowDeleteModal(false)
                                                }
                                              >
                                                <Modal.Header closeButton>
                                                  <Modal.Title>
                                                    Confirm Delete
                                                  </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                  Are you sure you want to
                                                  delete this employee?
                                                </Modal.Body>
                                                <Modal.Footer>
                                                  <Button
                                                    variant="secondary"
                                                    onClick={() =>
                                                      setShowDeleteModal(false)
                                                    }
                                                  >
                                                    Cancel
                                                  </Button>
                                                  <Button
                                                    variant="danger"
                                                    onClick={handleDelete}
                                                  >
                                                    Delete
                                                  </Button>
                                                </Modal.Footer>
                                              </Modal>

                                              {/* Table and Buttons */}
                                              <div className="d-flex justify-content-center">
                                                {/* Edit Button */}
                                                <button
                                                  className="btn btn-xs btn-secondary me-2"
                                                  onClick={() =>
                                                    handleEditAndUpdate(
                                                      employee.id
                                                    )
                                                  }
                                                  title="Edit Employee"
                                                >
                                                  <i className="bi bi-pencil"></i>{" "}
                                                  Edit
                                                </button>

                                                {/* Delete Button */}
                                                <button
                                                  className="btn btn-xs btn-delete"
                                                  onClick={() =>
                                                    handleDeleteConfirmation(
                                                      employee.id
                                                    )
                                                  }
                                                  title="Delete Employee"
                                                >
                                                  <i className="bi bi-trash"></i>{" "}
                                                  Delete
                                                </button>
                                              </div>
                                            </div>
                                          </td>
                                        </tr>
                                      ))}
                                    </React.Fragment>
                                  )
                                )
                              ) : (
                                <tr>
                                  <td colSpan="8" className="text-center py-4">
                                    <i className="bi bi-exclamation-circle text-secondary me-1"></i>
                                    No employees found.
                                  </td>
                                </tr>
                              )}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      <Modal
        show={showFilterModal}
        onHide={() => setShowFilterModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Filter by {currentFilterKey}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            className="form-control"
            placeholder={`Enter ${currentFilterKey}`}
            value={filters[currentFilterKey]}
            onChange={(e) =>
              handleFilterChange(currentFilterKey, e.target.value)
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowFilterModal(false)}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => setShowFilterModal(false)}
          >
            Apply Filter
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Clear All Filters Button */}
      <div className="d-flex justify-content-end mt-3">
        <Button
          variant="outline-danger"
          onClick={clearAllFilters}
          disabled={
            !filters.name &&
            !filters.email &&
            !filters.department &&
            !filters.jobrole &&
            !filters.dob
          }
        >
          <i className="bi bi-x-circle me-2"></i>Clear All Filters
        </Button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </React.Fragment>
  );
};

export default UserManagementSystem;