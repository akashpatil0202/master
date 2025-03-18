// import React, { createContext, useState } from 'react';
// import { FormConfigContext } from '../user-profile/FormConfigProvider
// export const FormConfigContext = createContext();

// export const FormConfigProvider = ({ children }) => {
//   const [formSections, setFormSections] = useState([
//     {
//       id: 1,
//       title: "Personal Details",
//       icon: "👤",
//       color: "user-profile__bg-blue-100",
//       description: "Basic information about the applicant",
//       isExpanded: true,
//       fields: [
//         { id: 1, name: "applicantName", label: "Applicant Name", type: "text", required: true },
//         { id: 2, name: "mobileNo", label: "Mobile Number", type: "tel", required: true },
//         { id: 3, name: "email", label: "Email Address", type: "email", required: false }
//       ]
//     },
//     {
//       id: 2,
//       title: "Address",
//       icon: "🏠",
//       color: "user-profile__bg-green-100",
//       description: "Location information of the applicant",
//       isExpanded: false,
//       fields: [
//         { id: 1, name: "address", label: "Full Address", type: "textarea", required: true },
//         { id: 2, name: "city", label: "City", type: "text", required: true },
//         { id: 3, name: "pincode", label: "PIN Code", type: "text", required: true }
//       ]
//     }
//   ]);

//   return (
//     <FormConfigContext.Provider value={{ formSections, setFormSections }}>
//       {children}
//     </FormConfigContext.Provider>
//   );
// };