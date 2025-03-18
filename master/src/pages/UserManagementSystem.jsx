import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as XLSX from "xlsx";
import axios from "axios";
import { jsPDF } from "jspdf"; // Correct import for jsPDF
import autoTable from "jspdf-autotable"; // Correct import for autoTable
import "./usermanagement.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerUser } from "../../src/services/api";
const UserManagementSystem = () => {
  const [activeTab, setActiveTab] = useState("registration");
  const [employees, setEmployees] = useState([]);

  const [jobRoles, setJobRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(true);
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
          await fetchEmployees(); // Fetch employees if the active tab is "userList"
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
      console.log("Departments API Response:", response);
      const data = response.data || response || []; // Access data directly from the response
      console.log("Departments Data Structure:", data); // Log the structure of data
      // Transform data to include only id and name
      const transformedData = data.map((dept) => ({
        id: dept.id,
        name: dept.name,
      }));
      console.log("Transformed Departments:", transformedData); // Log transformed data
      setDepartments(transformedData);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const fetchJobRoles = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/api/auth/job-roles"
      );
      console.log("Job Roles API Response:", response);
      const data = response.data || response || []; // Access data directly from the response
      console.log("Job Roles Data Structure:", data); // Log the structure of data
      // Transform data to include only id and name
      const transformedData = data.map((role) => ({
        id: role.id,
        name: role.name,
      }));
      console.log("Transformed Job Roles:", transformedData); // Log transformed data
      setJobRoles(transformedData);
    } catch (error) {
      console.error("Error fetching job roles:", error);
    }
  };
  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8081/api/auth/users");
      console.log("Employees API Response:", response); // Log the entire response
      console.log("Employees Data:", response); // Log the response directly
      setEmployees(response || []); // Set employees to the response array
    } catch (error) {
      console.error("Error fetching employees:", error);
      setEmployees([]); // Set employees to an empty array in case of an error
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
        dob: new Date(formData.dob).toISOString().split("T")[0], // Convert to YYYY-MM-DD format
        phoneNo: formData.phone,
        address: formData.address,
        departmentId: parseInt(formData.departmentId, 10), // Convert to number
        jobRoleId: parseInt(formData.jobRoleId, 10), // Convert to number
      };

      // Use the registerUser function from the API service
      const response = await registerUser(payload);
      console.log("Registration Response:", response);

      alert("Employee registered successfully!");

      // Reset form after successful registration
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
      toast.success("Registration successful! Redirecting to login...");
    } catch (error) {
      console.error("Error saving employee:", error);
      toast.error(error || "Registration failed. Please try again.");
    }
  };

  const handleEditAndUpdate = async (id) => {
    if (id) {
      // Editing mode: Populate the form with the selected employee's data
      const employee = employees.find((emp) => emp.id === id);
      if (employee) {
        setFormData({
          id: employee.id, // Ensure the ID is set
          name: employee.fullName,
          dob: employee.dob,
          phone: employee.phoneNo,
          email: employee.email,
          password: "", // Do not pre-fill the password field
          address: employee.address,
          departmentId: employee.department?.id || "",
          jobRoleId: employee.jobRole?.id || "",
        });
        setActiveTab("registration"); // Switch to the registration form
      } else {
        console.error("Employee not found");
        toast.error("Employee not found");
      }
    } else {
      // Update or Register mode: Submit the data to the backend
      try {
        const payload = {
          fullName: formData.name,
          email: formData.email,
          dob: new Date(formData.dob).toISOString().split("T")[0], // Convert to YYYY-MM-DD format
          phoneNo: formData.phone,
          address: formData.address,
          departmentId: parseInt(formData.departmentId, 10), // Convert to number
          jobRoleId: parseInt(formData.jobRoleId, 10), // Convert to number
        };
  
        // Only include password in the payload if it is provided
        if (formData.password) {
          payload.password = formData.password;
        }
  
        let response;
        if (formData.id) {
          // Update existing employee
          console.log("Updating employee with ID:", formData.id); // Debugging
          response = await axios.put(
            `http://localhost:8081/api/auth/users/${formData.id}`,
            payload
          );
          toast.success("Employee updated successfully!");
        } else {
          // Register new employee
          console.log("Registering new employee"); // Debugging
          response = await registerUser(payload);
          toast.success("Employee registered successfully!");
        }
  
        console.log("Registration/Update Response:", response);
  
        // Reset form after successful registration/update
        setFormData({
          id: "",
          name: "",
          dob: "",
          phone: "",
          email: "",
          password: "", // Clear the password field
          address: "",
          departmentId: "",
          jobRoleId: "",
        });
  
        // Refresh the employee list
        fetchEmployees();
      } catch (error) {
        console.error("Error saving employee:", error);
        toast.error(error.response?.data?.message || "Registration/Update failed. Please try again.");
      }
    }
  };
  // Handle delete employee
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/auth/users/${id}`);
      fetchEmployees(); // Refresh the employee list
      alert("Employee deleted successfully!");
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Failed to delete employee");
    }
  };

  // Handle filter changes
  const handleFilterChange = (key, value) => {
    setFilters({
      ...filters,
      [key]: value,
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

  // Handle group by
  const handleGroupBy = (key) => {
    setGroupBy(key);
  };

  const filteredEmployees = (employees || []).filter((employee) => {
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

  // .sort((a, b) => {
  //   if (sortConfig.key) {
  //     if (a[sortConfig.key] < b[sortConfig.key]) {
  //       return sortConfig.direction === "asc" ? -1 : 1;
  //     }
  //     if (a[sortConfig.key] > b[sortConfig.key]) {
  //       return sortConfig.direction === "asc" ? 1 : -1;
  //     }
  //   }
  //   return 0;
  // });

  const groupedEmployees = groupBy
    ? (filteredEmployees || []).reduce((acc, employee) => {
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
      }, {})
    : { "All Employees": filteredEmployees || [] };

  // console.log("Grouped Employees:", groupedEmployees);

  const exportToExcel = () => {
    const data = filteredEmployees.map((employee) => ({
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

    // Use autoTable to create the table
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
      body: filteredEmployees.map((employee) => [
        employee.fullName,
        employee.email,
        employee.phoneNo,
        employee.departmentName || "N/A",
        employee.jobRoleName || "N/A",
        employee.dob,
      ]),
    });

    // Save the PDF
    doc.save("Employees.pdf");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <div className="container-fluid p-4 bg-light min-vh-100">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg">
              <div className="card-header bg-primary text-white">
                {/* <h1 className="card-title text-center">Employee Management System</h1> */}
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
                      👤 Employee Registration
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "userList" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("userList")}
                    >
                      📋 Employee List
                    </button>
                  </li>
                </ul>

                {/* Registration Form */}
                {activeTab === "registration" && (
                  <div className="tab-pane fade show active">
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Full Name</label>
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
                          <label className="form-label">Date of Birth</label>
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
                          <label className="form-label">Phone Number</label>
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
                          <label className="form-label">Email Address</label>
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
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Enter password"
                            disabled={!!formData.id} // Disable if formData.id exists (edit mode)
                            required={!formData.id} // Make it required only for new registrations
                          />
                          {formData.id && (
                            <small className="text-muted">
                              Password cannot be changed here.
                            </small>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Address</label>
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
                          <label className="form-label">Department</label>
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
                          <label className="form-label">Job Role</label>
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
                        <div className="col-12 d-flex justify-content-start gap-2">
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
                            Reset
                          </button>
                          <button type="submit" className="btn btn-primary">
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
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex gap-2">
                        <div className="input-group" style={{ width: "300px" }}>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search employees..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                          >
                            🔍
                          </button>
                        </div>
                        <select
                          className="form-select"
                          style={{ width: "200px" }}
                          value={groupBy}
                          onChange={(e) => handleGroupBy(e.target.value)}
                        >
                          <option value="">No Grouping</option>
                          <option value="department">Department</option>
                          <option value="jobRole">Job Role</option>
                          <option value="dob">Date of Birth</option>
                        </select>
                      </div>
                      <div className="dropdown">
                        <button
                          className="btn btn-success dropdown-toggle"
                          type="button"
                          id="exportDropdown"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          📥 Export
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="exportDropdown"
                        >
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={exportToExcel}
                            >
                              Export to Excel
                            </button>
                          </li>
                          <li>
                            <button
                              className="dropdown-item"
                              onClick={exportToPDF}
                            >
                              Export to PDF
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>
                              <div className="d-flex align-items-center gap-2">
                                <span>Name</span>
                                <button
                                  className="btn btn-link p-0"
                                  onClick={() => requestSort("name")}
                                >
                                  {sortConfig.key === "name"
                                    ? sortConfig.direction === "asc"
                                      ? "↑"
                                      : "↓"
                                    : "↕️"}
                                </button>
                                <button
                                  className="btn btn-link p-0"
                                  onClick={() =>
                                    handleFilterChange(
                                      "name",
                                      prompt("Enter filter value for Name:")
                                    )
                                  }
                                >
                                  ⏳
                                </button>
                              </div>
                            </th>
                            <th>
                              <div className="d-flex align-items-center gap-2">
                                <span>Email</span>
                                <button
                                  className="btn btn-link p-0"
                                  onClick={() =>
                                    handleFilterChange(
                                      "email",
                                      prompt("Enter filter value for Email:")
                                    )
                                  }
                                >
                                  ⏳
                                </button>
                              </div>
                            </th>
                            <th>
                              <div className="d-flex align-items-center gap-2">
                                <span>Phone No</span>
                                <button
                                  className="btn btn-link p-0"
                                  onClick={() =>
                                    handleFilterChange(
                                      "phoneNo",
                                      prompt("Enter filter value for Phone No:")
                                    )
                                  }
                                >
                                  ⏳
                                </button>
                              </div>
                            </th>
                            <th>
                              <div className="d-flex align-items-center gap-2">
                                <span>Department</span>
                                <button
                                  className="btn btn-link p-0"
                                  onClick={() => requestSort("department")}
                                >
                                  {sortConfig.key === "department"
                                    ? sortConfig.direction === "asc"
                                      ? "↑"
                                      : "↓"
                                    : "↕️"}
                                </button>
                                <button
                                  className="btn btn-link p-0"
                                  onClick={() =>
                                    handleFilterChange(
                                      "department",
                                      prompt(
                                        "Enter filter value for Department:"
                                      )
                                    )
                                  }
                                >
                                  ⏳
                                </button>
                              </div>
                            </th>
                            <th>
                              <div className="d-flex align-items-center gap-2">
                                <span>Job Role</span>
                                <button
                                  className="btn btn-link p-0"
                                  onClick={() => requestSort("jobRole")}
                                >
                                  {sortConfig.key === "jobRole"
                                    ? sortConfig.direction === "asc"
                                      ? "↑"
                                      : "↓"
                                    : "↕️"}
                                </button>
                                <button
                                  className="btn btn-link p-0"
                                  onClick={() =>
                                    handleFilterChange(
                                      "jobRole",
                                      prompt("Enter filter value for Job Role:")
                                    )
                                  }
                                >
                                  ⏳
                                </button>
                              </div>
                            </th>
                            <th>
                              <div className="d-flex align-items-center gap-2">
                                <span>Date of Birth</span>
                                <button
                                  className="btn btn-link p-0"
                                  onClick={() => requestSort("dob")}
                                >
                                  {sortConfig.key === "dob"
                                    ? sortConfig.direction === "asc"
                                      ? "↑"
                                      : "↓"
                                    : "↕️"}
                                </button>
                                <button
                                  className="btn btn-link p-0"
                                  onClick={() =>
                                    handleFilterChange(
                                      "dob",
                                      prompt(
                                        "Enter filter value Date of Birth:"
                                      )
                                    )
                                  }
                                >
                                  ⏳
                                </button>
                              </div>
                            </th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(groupedEmployees).length > 0 ? (
                            Object.entries(groupedEmployees).map(
                              ([group, employees]) => (
                                <React.Fragment key={group}>
                                  <tr className="bg-light">
                                    <td colSpan="7" className="fw-bold">
                                      {group} ({employees.length})
                                    </td>
                                  </tr>
                                  {employees?.map((employee) => (
                                    <tr key={employee.id}>
                                      <td>{employee.fullName}</td>
                                      <td>{employee.email}</td>
                                      <td>{employee.phoneNo}</td>
                                      <td>
                                        {employee.departmentName ?? "N/A"}
                                      </td>
                                      <td>{employee.jobRoleName ?? "N/A"}</td>
                                      <td>{employee.dob}</td>
                                      <td>
                                        <button
                                          className="btn btn-warning btn-sm me-2"
                                          onClick={() =>
                                            handleEditAndUpdate(employee.id)
                                          }
                                        >
                                          Edit
                                        </button>
                                        <button
                                          className="btn btn-danger btn-sm"
                                          onClick={() =>
                                            handleDelete(employee.id)
                                          }
                                        >
                                          Delete
                                        </button>
                                      </td>
                                    </tr>
                                  ))}
                                </React.Fragment>
                              )
                            )
                          ) : (
                            <tr>
                              <td colSpan="7" className="text-center">
                                No employees found.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </React.Fragment>
  );
};
export default UserManagementSystem;
