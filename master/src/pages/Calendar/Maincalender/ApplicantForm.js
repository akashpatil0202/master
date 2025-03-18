// import React, { useState, useEffect } from 'react';
// import { Send } from 'lucide-react';

// const ApplicantForm = () => {
//   const [sections, setSections] = useState([]);
//   const [formData, setFormData] = useState({});

//   useEffect(() => {
//     fetchFormConfiguration();
//   }, []);

//   const fetchFormConfiguration = async () => {
//     try {
//       const response = await fetch('http://localhost:8081/api/form-config');
//       const data = await response.json();
//       setSections(data);
      
//       // Initialize form data
//       const initialData = {};
//       data.forEach((section) => {
//         section.fields.forEach((field) => {
//           initialData[`${section.id}_${field.id}`] = '';
//         });
//       });
//       setFormData(initialData);
//     } catch (error) {
//       console.error('Error fetching form configuration:', error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8081/api/applicants', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Application submitted successfully!');
//         // Reset form
//         const initialData = {};
//         sections.forEach((section) => {
//           section.fields.forEach((field) => {
//             initialData[`${section.id}_${field.id}`] = '';
//           });
//         });
//         setFormData(initialData);
//       }
//     } catch (error) {
//       console.error('Error submitting application:', error);
//       alert('Error submitting application. Please try again.');
//     }
//   };

//   const renderField = (field, sectionId) => {
//     const fieldId = `${sectionId}_${field.id}`;
//     const commonProps = {
//       id: fieldId,
//       name: fieldId,
//       value: formData[fieldId] || '',
//       onChange: (e) => {
//         setFormData({ ...formData, [fieldId]: e.target.value });
//       },
//       required: field.required,
//       className: "w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent",
//     };

//     switch (field.type) {
//       case 'textarea':
//         return (
//           <textarea
//             {...commonProps}
//             rows={4}
//           />
//         );
//       case 'date':
//         return (
//           <input
//             {...commonProps}
//             type="date"
//           />
//         );
//       case 'email':
//         return (
//           <input
//             {...commonProps}
//             type="email"
//           />
//         );
//       case 'number':
//         return (
//           <input
//             {...commonProps}
//             type="number"
//           />
//         );
//       default:
//         return (
//           <input
//             {...commonProps}
//             type="text"
//           />
//         );
//     }
//   };

//   return (
//     <div className="container mx-auto p-6 max-w-3xl">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         <h1 className="text-3xl font-bold mb-6 text-center">Application Form</h1>
        
//         <form onSubmit={handleSubmit} className="space-y-8">
//           {sections.map((section) => (
//             <div key={section.id} className="border-b pb-6 last:border-b-0">
//               <h2 className="text-2xl font-semibold mb-2">{section.name}</h2>
//               <p className="text-gray-600 mb-4">{section.description}</p>
              
//               <div className="space-y-4">
//                 {section.fields.map((field) => (
//                   <div key={field.id} className="space-y-2">
//                     <label htmlFor={`${section.id}_${field.id}`} className="block text-sm font-medium text-gray-700">
//                       {field.name}
//                       {field.required && <span className="text-red-500 ml-1">*</span>}
//                       }
//                     </label>
//                     {renderField(field, section.id)}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}

//           <div className="flex justify-end pt-6">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition-colors"
//             >
//               <Send size={20} />
//               Submit Application
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ApplicantForm;



import React, { useState, useEffect } from 'react';
import { Send, ArrowLeft, ArrowRight, Eye, CheckCircle } from 'lucide-react';
import './ApplicantForm.css'

const ApplicantForm = () => {
  const [sections, setSections] = useState([]);
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [isPreview, setIsPreview] = useState(false);
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    fetchFormConfiguration();
  }, []);

  const fetchFormConfiguration = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/form-config');
      const data = await response.json();
      setSections(data);
      
      // Initialize form data
      const initialData = {};
      data.forEach((section) => {
        section.fields.forEach((field) => {
          initialData[`${section.id}_${field.id}`] = '';
        });
      });
      setFormData(initialData);
    } catch (error) {
      console.error('Error fetching form configuration:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    
    // Check if current section is valid before submission
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      return;
    }

    if (isPreview) {
      try {
        const response = await fetch('http://localhost:8081/api/applicants', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Application submitted successfully!');
          // Reset form and return to first step
          const initialData = {};
          sections.forEach((section) => {
            section.fields.forEach((field) => {
              initialData[`${section.id}_${field.id}`] = '';
            });
          });
          setFormData(initialData);
          setCurrentStep(0);
          setIsPreview(false);
          setValidated(false);
        }
      } catch (error) {
        console.error('Error submitting application:', error);
        alert('Error submitting application. Please try again.');
      }
    } else {
      // If on the last section, go to preview
      if (currentStep === sections.length - 1) {
        setIsPreview(true);
      } else {
        // Otherwise go to next step
        setCurrentStep(currentStep + 1);
        setValidated(false);
      }
    }
  };

  const handlePrevious = () => {
    if (isPreview) {
      setIsPreview(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    setValidated(false);
  };

  const renderField = (field, sectionId) => {
    const fieldId = `${sectionId}_${field.id}`;
    const commonProps = {
      id: fieldId,
      name: fieldId,
      value: formData[fieldId] || '',
      onChange: (e) => {
        setFormData({ ...formData, [fieldId]: e.target.value });
      },
      required: field.required,
      className: "form-control custom-input",
    };

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={4}
          />
        );
      case 'date':
        return (
          <input
            {...commonProps}
            type="date"
          />
        );
      case 'email':
        return (
          <input
            {...commonProps}
            type="email"
          />
        );
      case 'number':
        return (
          <input
            {...commonProps}
            type="number"
          />
        );
      default:
        return (
          <input
            {...commonProps}
            type="text"
          />
        );
    }
  };

  const renderPreview = () => {
    return (
      <div className="preview-container">
        <h2 className="text-2xl font-semibold mb-4">Application Preview</h2>
        <p className="text-gray-600 mb-6">Please review your information before final submission</p>
        
        {sections.map((section) => (
          <div key={section.id} className="preview-section mb-4">
            <h3 className="preview-section-title">
              <span className="section-icon">
                <CheckCircle size={18} />
              </span>
              {section.name}
            </h3>
            <div className="preview-fields">
              {section.fields.map((field) => {
                const fieldId = `${section.id}_${field.id}`;
                return (
                  <div key={field.id} className="preview-field mb-3">
                    <span className="preview-label">{field.name}:</span>
                    <span className="preview-value">{formData[fieldId] || 'Not provided'}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderStepperNav = () => {
    return (
      <div className="stepper-nav mb-5">
        {sections.map((section, index) => (
          <div 
            key={section.id} 
            className={`stepper-item ${index <= currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
          >
            <div className="stepper-counter">{index + 1}</div>
            <div className="stepper-label">{section.name}</div>
          </div>
        ))}
        <div 
          className={`stepper-item ${isPreview ? 'active' : ''}`}
        >
          <div className="stepper-counter"><Eye size={16} /></div>
          <div className="stepper-label">Review</div>
        </div>
      </div>
    );
  };

  if (sections.length === 0) {
    return <div className="loading"><div className="spinner"></div>Loading form...</div>;
  }

  const renderNavigationButtons = () => {
    return (
      <div className="form-navigation mt-4 d-flex justify-content-between">
        {/* Only show previous button from second section onwards or in preview */}
        {(currentStep > 0 || isPreview) ? (
          <button
            type="button"
            className="btn btn-secondary d-flex align-items-center gap-2"
            onClick={handlePrevious}
          >
            <ArrowLeft size={16} />
            Previous
          </button>
        ) : (
          // Empty div to maintain spacing when no previous button
          <div></div>
        )}
        
        <button
          type="submit"
          className={`btn ${isPreview ? 'btn-success' : 'btn-primary'} d-flex align-items-center gap-2`}
        >
          {isPreview ? (
            <>
              <Send size={16} />
              Submit Application
            </>
          ) : (
            <>
              Next
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
    );
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="card shadow-lg">
        <div className="card-header py-3">
          <h1 className="text-center mb-0">Application Form</h1>
        </div>
        
        <div className="card-body p-4">
          {renderStepperNav()}
          
          <form onSubmit={handleSubmit} className={validated ? 'was-validated' : ''}>
            {isPreview ? (
              renderPreview()
            ) : (
              <div className="step-content">
                <h2 className="step-title">{sections[currentStep].name}</h2>
                <p className="step-description">{sections[currentStep].description}</p>
                
                <div className="fields-container mt-4">
                  {sections[currentStep].fields.map((field) => (
                    <div key={field.id} className="mb-3">
                      <label htmlFor={`${sections[currentStep].id}_${field.id}`} className="form-label">
                        {field.name}
                        {field.required && <span className="text-danger ms-1">*</span>}
                      </label>
                      {renderField(field, sections[currentStep].id)}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {renderNavigationButtons()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicantForm;