import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { isEmpty } from "lodash";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PlusCircle, Trash2, Edit, List, Users, FileText, Settings, ArrowLeft, FolderOpen, ClipboardList, PenTool, Bell } from 'lucide-react';
import { useSelector, useDispatch } from "react-redux";
import { Alert } from 'reactstrap'; // Import Alert for notifications

import './AdminDashboard.css'; // Import the CSS file
import { createSelector } from "reselect";
import avatar from "../../assets/images/users/avtaar11.png";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useNavigate for routing

  // State for user details
  const [email, setEmail] = useState(localStorage.getItem("email") || "admin@gmail.com");
  const [name, setName] = useState(localStorage.getItem("name") || "Admin");
  const [phoneNo, setPhoneNo] = useState(localStorage.getItem("phoneNo") || "");
  const [idx, setIdx] = useState("1");

  const selectLayoutState = (state) => state.Profile;
  const userprofileData = createSelector(
    selectLayoutState,
    (state) => ({
      user: state.user,
      success: state.success,
      error: state.error
    })
  );

  // Inside your component
  const {
    user, success, error
  } = useSelector(userprofileData);

  useEffect(() => {
    if (sessionStorage.getItem("authUser")) {
      const obj = JSON.parse(sessionStorage.getItem("authUser"));
      alert(obj);

      if (!isEmpty(user)) {
        obj.data.first_name = user.first_name;
        sessionStorage.removeItem("authUser");
        sessionStorage.setItem("authUser", JSON.stringify(obj));
      }

      setName(obj.data.first_name);
      setEmail(obj.data.email);
      setPhoneNo(obj.data.phoneNo || "");
      setIdx(obj.data._id || "1");

      setTimeout(() => {
        dispatch(resetProfileFlag());
      }, 3000);
    }
  }, [dispatch, user]);

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      first_name: name || 'Admin',
      idx: idx || '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Please Enter Your UserName"),
    }),
    onSubmit: (values) => {
      dispatch(editProfile(values));
    }
  });

  const [sections, setSections] = useState([]);
  const [editingSection, setEditingSection] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (activeCard === 'formBuilder') {
      fetchSections();
    }
  }, [activeCard]);

  const fetchSections = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/form-config');
      const data = await response.json();
      setSections(data);
    } catch (error) {
      console.error('Error fetching sections:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEditing
        ? `http://localhost:8081/api/form-config/${editingSection?.id}`
        : 'http://localhost:8081/api/form-config';

      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingSection),
      });

      if (response.ok) {
        fetchSections();
        setEditingSection(null);
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Error saving section:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:8081/api/form-config/${id}`, {
        method: 'DELETE',
      });
      fetchSections();
    } catch (error) {
      console.error('Error deleting section:', error);
    }
  };

  const addField = () => {
    if (editingSection) {
      setEditingSection({
        ...editingSection,
        fields: [
          ...editingSection.fields,
          { name: '', type: 'text', required: false },
        ],
      });
    }
  };

  const renderDashboardCards = () => {
    return (
      <div className="admin-dashboard-cards">
        {error && error ? <Alert color="danger">{error}</Alert> : null}
        {success ? <Alert color="success">Username Updated To {name}</Alert> : null}

        <div
          className={`admin-dashboard-card ${activeCard === 'formBuilder' ? 'active' : ''}`}
          onClick={() => {
            setActiveCard('formBuilder');
            setIsDialogOpen(true);
          }}
        >
          <div className="admin-card-content">
            <div className="admin-icon-container blue">
              <FileText size={40} />
            </div>
            <h3 className="admin-card-title">Form Builder</h3>
            <p className="admin-card-description">Create and manage custom forms</p>
          </div>
        </div>

        <div
          className={`admin-dashboard-card ${activeCard === 'users' ? 'active' : ''}`}
          onClick={() => navigate('/user-registration')} // Navigate to UserManagementSystem
        >
          <div className="admin-card-content">
            <div className="admin-icon-container green">
              <Users size={40} />
            </div>
            <h3 className="admin-card-title">User Management</h3>
            <p className="admin-card-description">Manage users and permissions</p>
          </div>
        </div>

        <div
          className={`admin-dashboard-card ${activeCard === 'reports' ? 'active' : ''}`}
          onClick={() => setActiveCard('reports')}
        >
          <div className="admin-card-content">
            <div className="admin-icon-container purple">
              <List size={40} />
            </div>
            <h3 className="admin-card-title">Reports</h3>
            <p className="admin-card-description">View and export analytics</p>
          </div>
        </div>

        <div
          className={`admin-dashboard-card ${activeCard === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveCard('settings')}
        >
          <div className="admin-card-content">
            <div className="admin-icon-container orange">
              <Settings size={40} />
            </div>
            <h3 className="admin-card-title">Settings</h3>
            <p className="admin-card-description">Configure system settings</p>
          </div>
        </div>

        <div
          className={`admin-dashboard-card ${activeCard === 'settings9' ? 'active' : ''}`}
          onClick={() => setActiveCard('settings')}
        >
          <div className="admin-card-content">
            <div className="admin-icon-container purple">
              <FolderOpen size={40} />
            </div>
            <h3 className="admin-card-title">Settings</h3>
            <p className="admin-card-description">Configure system settings</p>
          </div>
        </div>

        <div
          className={`admin-dashboard-card ${activeCard === 'settings1' ? 'active' : ''}`}
          onClick={() => setActiveCard('settings')}
        >
          <div className="admin-card-content">
            <div className="admin-icon-container orange">
              <ClipboardList size={40} />
            </div>
            <h3 className="admin-card-title">Settings</h3>
            <p className="admin-card-description">Configure system settings</p>
          </div>
        </div>

        <div
          className={`admin-dashboard-card ${activeCard === 'settings2' ? 'active' : ''}`}
          onClick={() => setActiveCard('settings')}
        >
          <div className="admin-card-content">
            <div className="admin-icon-container green">
              <PenTool size={40} />
            </div>
            <h3 className="admin-card-title">Settings</h3>
            <p className="admin-card-description">Configure system settings</p>
          </div>
        </div>

        <div
          className={`admin-dashboard-card ${activeCard === 'settings3' ? 'active' : ''}`}
          onClick={() => setActiveCard('settings')}
        >
          <div className="admin-card-content">
            <div className="admin-icon-container blue">
              <Bell size={40} />
            </div>
            <h3 className="admin-card-title">Settings</h3>
            <p className="admin-card-description">Configure system settings</p>
          </div>
        </div>
      </div>
    );
  };

  const renderFormBuilder = () => {
    return (
      <div className="admin-form-builder-container">
        <div className="admin-form-editor">
          <div className="admin-section-header">
            <div className="admin-header-content">
              <h2 className="admin-section-title">Form Configuration</h2>
              <button
                onClick={() => {
                  setEditingSection({ name: '', description: '', fields: [] });
                  setIsEditing(false);
                }}
                className="admin-add-button"
              >
                <PlusCircle size={20} />
                Add New Section
              </button>
            </div>
          </div>

          {editingSection && (
            <div className="admin-edit-section">
              <h2 className="admin-edit-title">
                {isEditing ? 'Edit Section' : 'New Section'}
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="admin-form-group">
                  <label className="admin-form-label">Section Name</label>
                  <input
                    type="text"
                    value={editingSection.name}
                    onChange={(e) => setEditingSection({ ...editingSection, name: e.target.value })}
                    className="admin-form-input"
                    required
                  />
                </div>
                <div className="admin-form-group">
                  <label className="admin-form-label">Description</label>
                  <textarea
                    value={editingSection.description}
                    onChange={(e) => setEditingSection({ ...editingSection, description: e.target.value })}
                    className="admin-form-textarea"
                    rows={3}
                  />
                </div>

                <div className="admin-form-group">
                  <div className="admin-fields-header">
                    <h3 className="admin-fields-title">Fields</h3>
                    <button
                      type="button"
                      onClick={addField}
                      className="admin-add-field-button"
                    >
                      <PlusCircle size={16} />
                      Add Field
                    </button>
                  </div>
                  {editingSection.fields.map((field, index) => (
                    <div key={index} className="admin-field-item">
                      <div className="admin-field-grid">
                        <input
                          type="text"
                          value={field.name}
                          onChange={(e) => {
                            const newFields = [...editingSection.fields];
                            newFields[index].name = e.target.value;
                            setEditingSection({ ...editingSection, fields: newFields });
                          }}
                          placeholder="Field Name"
                          className="admin-field-input"
                        />
                        <select
                          value={field.type}
                          onChange={(e) => {
                            const newFields = [...editingSection.fields];
                            newFields[index].type = e.target.value;
                            setEditingSection({ ...editingSection, fields: newFields });
                          }}
                          className="admin-field-select"
                        >
                          <option value="text">Text</option>
                          <option value="number">Number</option>
                          <option value="email">Email</option>
                          <option value="date">Date</option>
                          <option value="textarea">Textarea</option>
                        </select>
                        <div className="admin-field-actions">
                          <label className="admin-required-checkbox">
                            <input
                              type="checkbox"
                              checked={field.required}
                              onChange={(e) => {
                                const newFields = [...editingSection.fields];
                                newFields[index].required = e.target.checked;
                                setEditingSection({ ...editingSection, fields: newFields });
                              }}
                            />
                            Required
                          </label>
                          <button
                            type="button"
                            onClick={() => {
                              const newFields = editingSection.fields.filter((_, i) => i !== index);
                              setEditingSection({ ...editingSection, fields: newFields });
                            }}
                            className="admin-delete-field-button"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="admin-form-actions">
                  <button
                    type="button"
                    onClick={() => setEditingSection(null)}
                    className="admin-cancel-button"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="admin-save-button"
                  >
                    Save Section
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="admin-sections-list">
            {sections.map((section) => (
              <div key={section.id} className="admin-section-card">
                <div className="admin-section-header-content">
                  <div>
                    <h3 className="admin-section-name">{section.name}</h3>
                    <p className="admin-section-description">{section.description}</p>
                  </div>
                  <div className="admin-section-actions">
                    <button
                      onClick={() => {
                        setEditingSection(section);
                        setIsEditing(true);
                      }}
                      className="admin-edit-button"
                    >
                      <Edit size={20} />
                    </button>
                    <button
                      onClick={() => section.id && handleDelete(section.id)}
                      className="admin-delete-button"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
                <div className="admin-fields-list">
                  {section.fields.map((field, index) => (
                    <div key={index} className="admin-field-card">
                      <div className="admin-field-info">
                        <div>
                          <h4 className="admin-field-name">{field.name}</h4>
                          <p className="admin-field-meta">
                            Type: {field.type} | {field.required ? 'Required' : 'Optional'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="admin-form-preview">
          <h3 className="admin-preview-title">Live Preview</h3>
          {editingSection && (
            <div className="admin-preview-section">
              <h4>{editingSection.name}</h4>
              <p>{editingSection.description}</p>
              {editingSection.fields.map((field, index) => (
                <div key={index} className="admin-preview-field">
                  <label>{field.name}</label>
                  {field.type === 'text' && <input type="text" placeholder={field.name} />}
                  {field.type === 'number' && <input type="number" placeholder={field.name} />}
                  {field.type === 'email' && <input type="email" placeholder={field.name} />}
                  {field.type === 'date' && <input type="date" />}
                  {field.type === 'textarea' && <textarea placeholder={field.name} />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <img src={avatar} alt="Admin Avatar" className="avatar-md rounded-circle img-thumbnail" />
        <h1 className="admin-title">Hello {name || "Admin"}</h1>
      </div>

      <h2 style={{ color: "#405189", textAlign: "center", fontWeight: "bold" }}>ADMIN DASHBOARD</h2>
      <p className="admin-subtitle">Manage your application settings and configuration</p>

      {renderDashboardCards()}

      {isDialogOpen && activeCard === 'formBuilder' && (
        <div className="admin-dialog-overlay">
          <div className="admin-dialog">
            <div className="admin-dialog-header">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="admin-back-button"
              >
                <ArrowLeft size={20} />
              </button>
              <h3>Form Builder</h3>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="admin-close-button"
              >
                &times;
              </button>
            </div>
            <div className="admin-dialog-content">
              {renderFormBuilder()}
            </div>
          </div>
        </div>
      )}

      {activeCard === 'users' && (
        <div className="admin-content-section">
          <h2 className="admin-section-title">User Management</h2>
          <p className="admin-section-description">User management interface would go here.</p>
        </div>
      )}

      {activeCard === 'reports' && (
        <div className="admin-content-section">
          <h2 className="admin-section-title">Reports</h2>
          <p className="admin-section-description">Reports and analytics would go here.</p>
        </div>
      )}

      {activeCard === 'settings' && (
        <div className="admin-content-section">
          <h2 className="admin-section-title">Settings</h2>
          <p className="admin-section-description">System settings would go here.</p>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;