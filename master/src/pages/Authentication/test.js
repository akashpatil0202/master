import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PlusCircle, Trash2, ChevronDown, ChevronUp, Save, Eye, Edit, X } from 'lucide-react';
import './style.css';
import ApplicantForm from '../Calendar/Maincalender/index.js';

const UserProfile = () => {
  const [formSections, setFormSections] = useState([]);
  const [activeModal, setActiveModal] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [previewMode, setPreviewMode] = useState(false);
  const cardData = [
    {
      id: 1,
      title: "Form Builder",
      description: "Configure form fields and sections",
      color: "user-profile__bg-blue-100",
      icon: "📝"
    },
    {
      id: 2,
      title: "Form Preview",
      description: "See how your form will appear to users",
      color: "user-profile__bg-green-100",
      icon: "👁️"
    },
    {
      id: 3,
      title: "Form Templates",
      description: "Save and load form templates",
      color: "user-profile__bg-purple-100",
      icon: "📋"
    }
  ];

  useEffect(() => {
    fetchFormSections();
  }, []);

  const fetchFormSections = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/sections');
      setFormSections(response.data);
    } catch (error) {
      console.error('Error fetching form sections:', error);
    }
  };

  const addSection = async () => {
    try {
      const response = await axios.post('http://localhost:8081/api/sections', newSection);
      setFormSections([...formSections, response.data]);
    } catch (error) {
      console.error('Error adding section:', error);
    }
  };

  const removeSection = async (sectionId) => {
    try {
      await axios.delete(`http://localhost:8081/api/section/{id}${sectionId}`);
      setFormSections(formSections.filter(section => section.id !== sectionId));
    } catch (error) {
      console.error('Error removing section:', error);
    }
  };

  const addFieldToSection = async (sectionId) => {
    try {
      const response = await axios.post('/api/fields', { ...newField, sectionId });
      setFormSections(formSections.map(section => 
        section.id === sectionId 
          ? { ...section, fields: [...section.fields, response.data] }
          : section
      ));
    } catch (error) {
      console.error('Error adding field:', error);
    }
  };

  const removeFieldFromSection = async (sectionId, fieldId) => {
    try {
      await axios.delete(`http://localhost:8081/api/fields/${fieldId}`);
      setFormSections(formSections.map(section => 
        section.id === sectionId 
          ? { ...section, fields: section.fields.filter(field => field.id !== fieldId) }
          : section
      ));
    } catch (error) {
      console.error('Error removing field:', error);
    }
  };

  // Handle section input change
  const handleSectionChange = (e) => {
    const { name, value } = e.target;
    setNewSection(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle field input change
  const handleFieldChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewField(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle editing section
  const handleEditSection = (sectionId) => {
    setEditingSectionId(sectionId);
    const section = formSections.find(s => s.id === sectionId);
    if (section) {
      setNewSection({
        title: section.title,
        icon: section.icon,
        color: section.color,
        description: section.description
      });
    }
  };

  // Save edited section
  const saveEditedSection = () => {
    if (editingSectionId) {
      setFormSections(prevSections => 
        prevSections.map(section => 
          section.id === editingSectionId 
            ? { ...section, ...newSection }
            : section
        )
      );
      setEditingSectionId(null);
      setNewSection({
        title: "",
        icon: "📄",
        color: "user-profile__bg-blue-100",
        description: "",
        fields: []
      });
    }
  };

  // Render admin form builder UI
  const renderFormBuilder = () => {
    return (
      <div className="user-profile__form-builder-container">
        <h2 className="user-profile__form-builder-title">Rohit</h2>
        
        <div className="user-profile__section-container">
          {formSections.map(section => (
            <div key={section.id} className={`user-profile__section-card ${section.color} user-profile__mb-6 user-profile__rounded-lg user-profile__shadow-md user-profile__overflow-hidden`}>
              <div className="user-profile__section-header user-profile__p-4 user-profile__flex user-profile__justify-between user-profile__items-center user-profile__cursor-pointer" 
                   onClick={() => toggleSectionExpansion(section.id)}>
                <div className="user-profile__flex user-profile__items-center">
                  <span className="user-profile__section-icon user-profile__mr-2 user-profile__text-2xl">{section.icon}</span>
                  <div>
                    <h3 className="user-profile__section-title user-profile__text-lg user-profile__font-bold">{section.title}</h3>
                    <p className="user-profile__section-description user-profile__text-sm user-profile__text-gray-600">{section.description}</p>
                  </div>
                </div>
                <div className="user-profile__flex user-profile__items-center">
                  <button 
                    className="user-profile__edit-btn user-profile__mr-2 user-profile__p-1 user-profile__rounded user-profile__hover:bg-gray-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditSection(section.id);
                    }}
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    className="user-profile__delete-btn user-profile__mr-2 user-profile__p-1 user-profile__rounded user-profile__hover:bg-gray-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeSection(section.id);
                    }}
                  >
                    <Trash2 size={16} />
                  </button>
                  {section.isExpanded ? 
                    <ChevronUp size={20} /> : 
                    <ChevronDown size={20} />
                  }
                </div>
              </div>
              
              {section.isExpanded && (
                <div className="user-profile__section-content user-profile__p-4 user-profile__bg-white">
                  <div className="user-profile__field-list">
                    {section.fields.map(field => (
                      <div key={field.id} className="user-profile__field-item user-profile__p-3 user-profile__mb-2 user-profile__border user-profile__rounded user-profile__flex user-profile__justify-between user-profile__items-center user-profile__hover:bg-gray-50">
                        <div>
                          <div className="user-profile__flex user-profile__items-center">
                            <span className="user-profile__text-sm user-profile__font-medium">{field.label}</span>
                            {field.required && <span className="user-profile__ml-2 user-profile__text-xs user-profile__text-red-500">*Required</span>}
                          </div>
                          <div className="user-profile__text-xs user-profile__text-gray-500">
                            Type: {fieldTypes.find(t => t.value === field.type)?.label || field.type}
                          </div>
                        </div>
                        <button 
                          className="user-profile__delete-field-btn user-profile__p-1 user-profile__rounded user-profile__hover:bg-gray-200"
                          onClick={() => removeFieldFromSection(section.id, field.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="user-profile__add-field-form user-profile__mt-4 user-profile__p-3 user-profile__border user-profile__rounded user-profile__bg-gray-50">
                    <h4 className="user-profile__text-md user-profile__font-medium user-profile__mb-2">Add New Field</h4>
                    <div className="user-profile__grid user-profile__grid-cols-2 user-profile__gap-3">
                      <div>
                        <label className="user-profile__block user-profile__text-sm user-profile__font-medium user-profile__mb-1">Field Name</label>
                        <input
                          type="text"
                          name="name"
                          value={newField.name}
                          onChange={handleFieldChange}
                          placeholder="e.g. fullName"
                          className="user-profile__w-full user-profile__p-2 user-profile__border user-profile__rounded"
                        />
                      </div>
                      <div>
                        <label className="user-profile__block user-profile__text-sm user-profile__font-medium user-profile__mb-1">Display Label</label>
                        <input
                          type="text"
                          name="label"
                          value={newField.label}
                          onChange={handleFieldChange}
                          placeholder="e.g. Full Name"
                          className="user-profile__w-full user-profile__p-2 user-profile__border user-profile__rounded"
                        />
                      </div>
                      <div>
                        <label className="user-profile__block user-profile__text-sm user-profile__font-medium user-profile__mb-1">Field Type</label>
                        <select
                          name="type"
                          value={newField.type}
                          onChange={handleFieldChange}
                          className="user-profile__w-full user-profile__p-2 user-profile__border user-profile__rounded"
                        >
                          {fieldTypes.map(type => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                          ))}
                        </select>
                      </div>
                      <div className="user-profile__flex user-profile__items-center user-profile__mt-6">
                        <input
                          type="checkbox"
                          id={`required-${section.id}`}
                          name="required"
                          checked={newField.required}
                          onChange={handleFieldChange}
                          className="user-profile__mr-2"
                        />
                        <label htmlFor={`required-${section.id}`} className="user-profile__text-sm">Required Field</label>
                      </div>
                    </div>
                    <button
                      onClick={() => addFieldToSection(section.id)}
                      className="user-profile__mt-3 user-profile__px-4 user-profile__py-2 user-profile__bg-blue-500 user-profile__text-white user-profile__rounded user-profile__flex user-profile__items-center user-profile__hover:bg-blue-600 user-profile__transition-colors"
                    >
                      <PlusCircle size={16} className="user-profile__mr-1" />
                      Add Field
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Add new section form */}
        <div className="user-profile__add-section-form user-profile__p-4 user-profile__border user-profile__rounded user-profile__bg-gray-50 user-profile__mt-4">
          <h3 className="user-profile__text-lg user-profile__font-medium user-profile__mb-3">
            {editingSectionId ? 'Edit Section' : 'Add New Section'}
          </h3>
          <div className="user-profile__grid user-profile__grid-cols-2 user-profile__gap-4">
            <div>
              <label className="user-profile__block user-profile__text-sm user-profile__font-medium user-profile__mb-1">Section Title</label>
              <input
                type="text"
                name="title"
                value={newSection.title}
                onChange={handleSectionChange}
                placeholder="e.g. Personal Details"
                className="user-profile__w-full user-profile__p-2 user-profile__border user-profile__rounded"
              />
            </div>
            <div>
              <label className="user-profile__block user-profile__text-sm user-profile__font-medium user-profile__mb-1">Icon (emoji)</label>
              <input
                type="text"
                name="icon"
                value={newSection.icon}
                onChange={handleSectionChange}
                placeholder="e.g. 📝"
                className="user-profile__w-full user-profile__p-2 user-profile__border user-profile__rounded"
              />
            </div>
            <div>
              <label className="user-profile__block user-profile__text-sm user-profile__font-medium user-profile__mb-1">Color Theme</label>
              <select
                name="color"
                value={newSection.color}
                onChange={handleSectionChange}
                className="user-profile__w-full user-profile__p-2 user-profile__border user-profile__rounded"
              >
                <option value="user-profile__bg-blue-100">Blue</option>
                <option value="user-profile__bg-green-100">Green</option>
                <option value="user-profile__bg-purple-100">Purple</option>
                <option value="user-profile__bg-amber-100">Amber</option>
                <option value="user-profile__bg-pink-100">Pink</option>
                <option value="user-profile__bg-teal-100">Teal</option>
              </select>
            </div>
            <div>
              <label className="user-profile__block user-profile__text-sm user-profile__font-medium user-profile__mb-1">Description</label>
              <input
                type="text"
                name="description"
                value={newSection.description}
                onChange={handleSectionChange}
                placeholder="Brief description of this section"
                className="user-profile__w-full user-profile__p-2 user-profile__border user-profile__rounded"
              />
            </div>
          </div>
          
          {editingSectionId ? (
            <div className="user-profile__flex user-profile__mt-4">
              <button
                onClick={saveEditedSection}
                className="user-profile__px-4 user-profile__py-2 user-profile__bg-green-500 user-profile__text-white user-profile__rounded user-profile__flex user-profile__items-center user-profile__hover:bg-green-600 user-profile__transition-colors user-profile__mr-2"
              >
                <Save size={16} className="user-profile__mr-1" />
                Save Changes
              </button>
              <button
                onClick={() => {
                  setEditingSectionId(null);
                  setNewSection({
                    title: "",
                    icon: "📄",
                    color: "user-profile__bg-blue-100",
                    description: "",
                    fields: []
                  });
                }}
                className="user-profile__px-4 user-profile__py-2 user-profile__bg-gray-500 user-profile__text-white user-profile__rounded user-profile__flex user-profile__items-center user-profile__hover:bg-gray-600 user-profile__transition-colors"
              >
                <X size={16} className="user-profile__mr-1" />
                Cancel
              </button>
            </div>
          ) : (
            <button
              onClick={addSection}
              className="user-profile__mt-4 user-profile__px-4 user-profile__py-2 user-profile__bg-blue-500 user-profile__text-white user-profile__rounded user-profile__flex user-profile__items-center user-profile__hover:bg-blue-600 user-profile__transition-colors"
              disabled={!newSection.title}
            >
              <PlusCircle size={16} className="user-profile__mr-1" />
              Add Section
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderFormPreview = () => {
    console.log("Form Sections in Preview:", formSections); 
    return (
      <div className="user-profile__form-preview-container user-profile__animate-fadeIn">
        <ApplicantForm formSections={formSections} />
      </div>
    );
  };

  
  return (
    <div className="user-profile__container user-profile__mx-auto user-profile__p-4">
      <div className="user-profile__admin-dashboard">
        <h2 className="user-profile__dashboard-title user-profile__text-2xl user-profile__font-bold user-profile__mb-6">Admin Dash</h2>
        
        {/* Cards Row */}
        <div className="user-profile__grid user-profile__grid-cols-1 sm:user-profile__grid-cols-2 lg:user-profile__grid-cols-5 user-profile__gap-3 user-profile__mb-8">
          {cardData.map(card => (
            <div key={card.id} className={`user-profile__card ${card.color} user-profile__rounded-lg user-profile__shadow-md user-profile__overflow-hidden user-profile__hover:shadow-lg user-profile__transition-shadow user-profile__duration-300`}>
              <div className="user-profile__card-body user-profile__p-4 user-profile__cursor-pointer" onClick={() => openModal(card.id)}>
                <div className="user-profile__card-icon user-profile__text-3xl user-profile__mb-2">{card.icon}</div>
                <h3 className="user-profile__card-title user-profile__text-lg user-profile__font-bold user-profile__mb-1">{card.title}</h3>
                <p className="user-profile__card-description user-profile__text-sm user-profile__text-gray-600 user-profile__mb-4">{card.description}</p>
                <div className="user-profile__card-button-container">
                  <button className="user-profile__card-button user-profile__px-4 user-profile__py-1 user-profile__bg-white user-profile__rounded-full user-profile__text-sm user-profile__hover:bg-gray-100 user-profile__transition-colors">
                    Open
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeModal && (
          <div className="user-profile__modal-overlay user-profile__fixed user-profile__inset-0 user-profile__bg-black user-profile__bg-opacity-50 user-profile__z-50 user-profile__flex user-profile__justify-center user-profile__items-center user-profile__p-4" onClick={handleOverlayClick}>
            <div className={`user-profile__modal user-profile__bg-white user-profile__rounded-lg user-profile__shadow-xl user-profile__w-full user-profile__max-w-5xl user-profile__max-h-screen user-profile__overflow-auto ${isClosing ? 'user-profile__animate-popOut' : 'user-profile__animate-popIn'}`}>
              <div className="user-profile__modal-header user-profile__bg-gray-100 user-profile__p-4 user-profile__flex user-profile__justify-between user-profile__items-center user-profile__sticky user-profile__top-0 user-profile__z-10">
                <h3 className="user-profile__modal-title user-profile__text-xl user-profile__font-bold">
                  {cardData.find(card => card.id === activeModal)?.title}
                </h3>
                <div className="user-profile__flex user-profile__items-center">
                  
                  {activeModal === 1 && (
                    <button 
                      onClick={() => {
                        setPreviewMode(true);
                        setActiveModal(2);
                      }}
                      className="user-profile__preview-button user-profile__flex user-profile__items-center user-profile__mr-4 user-profile__px-3 user-profile__py-1 user-profile__bg-blue-100 user-profile__rounded user-profile__text-blue-800 user-profile__hover:bg-blue-200 user-profile__transition-colors"
                    >
                      <Eye size={16} className="user-profile__mr-1" />
                      Preview
                    </button>
                  )}
                  <button 
                    onClick={handleCloseModal}
                    className="user-profile__modal-close user-profile__p-1 user-profile__rounded-full user-profile__hover:bg-gray-300 user-profile__transition-colors"
                    aria-label="Close modal"
                  >
                    <X size={24} />
                  </button>
                </div>
              </div>
              
              <div className="user-profile__modal-content user-profile__p-6">
                {activeModal === 1 && renderFormBuilder()}
                {activeModal === 2 && renderFormPreview()}
                {activeModal === 3 && (
                  <div className="user-profile__text-center user-profile__p-8">
                    <h3 className="user-profile__text-xl user-profile__mb-4">Form Templates</h3>
                    <p>You can save your current form as a template or load existing templates.</p>
                    <div className="user-profile__mt-6">
                      <button className="user-profile__px-4 user-profile__py-2 user-profile__bg-blue-500 user-profile__text-white user-profile__rounded user-profile__mr-4">Save as Template</button>
                      <button className="user-profile__px-4 user-profile__py-2 user-profile__bg-gray-200 user-profile__rounded">Load Template</button>
                    </div>
                  </div>
                )}
                {activeModal === 4 && (
                  <div className="user-profile__text-center user-profile__p-8">
                    <h3 className="user-profile__text-xl user-profile__mb-4">Form Settings</h3>
                    <p>Configure form behavior, appearance, and validation rules.</p>
                    <div className="user-profile__mt-6 user-profile__text-left user-profile__max-w-md user-profile__mx-auto">
                      <div className="user-profile__mb-4">
                        <label className="user-profile__block user-profile__text-sm user-profile__font-medium user-profile__mb-1">Form Title</label>
                        <input type="text" className="user-profile__w-full user-profile__p-2 user-profile__border user-profile__rounded" placeholder="Application Form" />
                      </div>
                      <div className="user-profile__mb-4">
                        <label className="user-profile__block user-profile__text-sm user-profile__font-medium user-profile__mb-1">Submit Button Text</label>
                        <input type="text" className="user-profile__w-full user-profile__p-2 user-profile__border user-profile__rounded" placeholder="Submit" />
                      </div>
                      <div className="user-profile__mb-4 user-profile__flex user-profile__items-center">
                        <input type="checkbox" id="enableValidation" className="user-profile__mr-2" checked />
                        <label htmlFor="enableValidation">Enable form validation</label>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="user-profile__modal-footer user-profile__bg-gray-100 user-profile__p-4 user-profile__flex user-profile__justify-end user-profile__sticky user-profile__bottom-0">
                <button 
                  onClick={handleCloseModal}
                  className="user-profile__modal-button user-profile__px-4 user-profile__py-2 user-profile__bg-gray-300 user-profile__rounded user-profile__hover:bg-gray-400 user-profile__transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

