// import React, { useState } from "react";

// const SimplePage = () => {
//   const [formName, setFormName] = useState("");
//   const [fields, setFields] = useState([]);
//   const [fieldName, setFieldName] = useState("");
//   const [fieldType, setFieldType] = useState("text");
//   const [selectedForm, setSelectedForm] = useState(null);
//   const [formData, setFormData] = useState({});
//   const [forms, setForms] = useState([]);

//   // Add field to form
//   const addField = () => {
//     if (fieldName.trim()) {
//       setFields([...fields, { name: fieldName, type: fieldType }]);
//       setFieldName("");
//     }
//   };

//   // Create a new form
//   const handleSubmitForm = (e) => {
//     e.preventDefault();
//     if (formName.trim() && fields.length) {
//       const newForm = { name: formName, fields };
//       setForms([...forms, newForm]);
//       setFormName("");
//       setFields([]);
//     }
//   };

//   // Handle form input changes
//   const handleInputChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   // Submit dynamic form
//   const handleSubmitData = (e) => {
//     e.preventDefault();
//     console.log("Form Data Submitted:", formData);
//   };

//   return (
//     <div>
//       <h2>Simple Page</h2>

//       {/* Admin Form Section */}
//       <div>
//         <h3>Create a Form</h3>
//         <form onSubmit={handleSubmitForm}>
//           <input
//             type="text"
//             placeholder="Form Name"
//             value={formName}
//             onChange={(e) => setFormName(e.target.value)}
//           />
//           <div>
//             <input
//               type="text"
//               placeholder="Field Name"
//               value={fieldName}
//               onChange={(e) => setFieldName(e.target.value)}
//             />
//             <select value={fieldType} onChange={(e) => setFieldType(e.target.value)}>
//               <option value="text">Text</option>
//               <option value="number">Number</option>
//               <option value="email">Email</option>
//             </select>
//             <button type="button" onClick={addField}>Add Field</button>
//           </div>
//           <button type="submit">Create Form</button>
//         </form>

//         <h3>Fields</h3>
//         <ul>
//           {fields.map((field, index) => (
//             <li key={index}>{field.name} ({field.type})</li>
//           ))}
//         </ul>
//       </div>

//       {/* Dynamic Form Section */}
//       <div>
//         <h3>Fill a Form</h3>
//         <select onChange={(e) => setSelectedForm(forms.find(f => f.name === e.target.value))}>
//           <option value="">Select a Form</option>
//           {forms.map((form, index) => (
//             <option key={index} value={form.name}>{form.name}</option>
//           ))}
//         </select>

//         {selectedForm && (
//           <form onSubmit={handleSubmitData}>
//             {selectedForm.fields.map((field, index) => (
//               <div key={index}>
//                 <label>{field.name}</label>
//                 <input
//                   type={field.type}
//                   onChange={(e) => handleInputChange(field.name, e.target.value)}
//                 />
//               </div>
//             ))}
//             <button type="submit">Submit</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SimplePage;




import React from 'react';

const MetricCard = ({ title, value, total, color, path }) => {
  return (
    <div className="w-full">
      <button 
        className="w-full rounded-2xl p-6 flex flex-col items-start justify-between h-32 transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-white"
        style={{ backgroundColor: color }}
        onClick={() => console.log(`${title} card clicked`)}
      >
        <svg width="100%" height="40" viewBox="0 0 100 30" className="mb-4">
          <path
            d={path}
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        
        <div className="text-white">
          <div className="text-sm font-medium opacity-90">{title}</div>
          <div className="flex items-baseline">
            <span className="text-xl font-bold mr-1">{value}</span>
            <span className="text-xs opacity-70">/ {total}</span>
          </div>
        </div>
      </button>
    </div>
  );
};

const SimplePage = () => {
  const firstRowMetrics = [
    {
      title: "Total Sale",
      value: "70",
      total: "100",
      color: "#7e5bef",
      path: "M0,15 Q10,5 20,15 T40,15 T60,15 T80,15 T100,15"
    },
    {
      title: "Total Visitors",
      value: "80",
      total: "100",
      color: "#ff7eb6",
      path: "M0,20 Q20,5 40,15 T60,10 T80,5 T100,10"
    },
    {
      title: "Total Stock",
      value: "65",
      total: "100",
      color: "#ffca64",
      path: "M0,10 Q20,25 40,10 T60,15 T80,20 T100,10"
    },
    {
      title: "Total Value",
      value: "90",
      total: "100",
      color: "#22d3ee",
      path: "M0,15 Q20,25 40,10 T60,20 T80,10 T100,15"
    }
  ];

  const secondRowMetrics = [
    {
      title: "New Users",
      value: "85",
      total: "100",
      color: "#14b8a6",
      path: "M0,20 Q25,5 50,20 T100,20"
    },
    {
      title: "Bounce Rate",
      value: "40",
      total: "100",
      color: "#f43f5e",
      path: "M0,10 Q25,25 50,5 T100,15"
    },
    {
      title: "Page Views",
      value: "95",
      total: "100",
      color: "#8b5cf6",
      path: "M0,15 Q25,5 50,25 T100,10"
    },
    {
      title: "Conversion",
      value: "60",
      total: "100",
      color: "#f59e0b",
      path: "M0,10 Q25,20 50,10 T75,15 T100,5"
    }
  ];

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h1 className="text-purple-600 font-bold text-xl">Default</h1>
          <p className="text-xs text-gray-500">ADMIN PANEL</p>
        </div>
        <div className="flex items-center text-xs text-gray-500 space-x-2">
          <span>/ Dashboard /</span>
          <span className="text-gray-400">Default</span>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {firstRowMetrics.map((metric, index) => (
            <MetricCard key={`row1-${index}`} {...metric} />
          ))}
        </div>
      </div>
      
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {secondRowMetrics.map((metric, index) => (
            <MetricCard key={`row2-${index}`} {...metric} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimplePage;
