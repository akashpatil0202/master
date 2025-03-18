import React from 'react';

const FormSection = ({ section, onChange }) => {
  // Handle changes to field values
  const handleFieldChange = (fieldId, value) => {
    const updatedFields = section.fields.map((field) =>
      field.id === fieldId ? { ...field, value } : field
    );
    const updatedSection = { ...section, fields: updatedFields };
    onChange(updatedSection); // Notify the parent component of the change
  };

  return (
    <div className="form-section">
      <h3>{section.name}</h3>
      <p>{section.description}</p>
      {section.fields.map((field) => (
        <div key={field.id} className="form-field">
          <label>{field.name}</label>
          {field.type === 'text' && (
            <input
              type="text"
              value={field.value || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
            />
          )}
          {field.type === 'number' && (
            <input
              type="number"
              value={field.value || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
            />
          )}
          {field.type === 'date' && (
            <input
              type="date"
              value={field.value || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
            />
          )}
          {field.type === 'textarea' && (
            <textarea
              value={field.value || ''}
              onChange={(e) => handleFieldChange(field.id, e.target.value)}
            />
          )}
          {field.type === 'checkbox' && (
            <input
              type="checkbox"
              checked={field.value || false}
              onChange={(e) => handleFieldChange(field.id, e.target.checked)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FormSection;