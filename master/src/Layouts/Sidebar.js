// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import SimpleBar from "simplebar-react";
// import { Container } from "reactstrap";

// // Import Components
// import VerticalLayout from "./VerticalLayouts";
// import TwoColumnLayout from "./TwoColumnLayout";
// import HorizontalLayout from "./HorizontalLayout";

// // Import Logos
// import logoSm from "../assets/images/logo-sm.png";
// import logoDark from "../assets/images/logo-dark.png";
// import logoLight from "../assets/images/logo-light.png";

// const Sidebar = ({ layoutType }) => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [showTransactions, setShowTransactions] = useState(false);

//   useEffect(() => {
//     const fetchMenuData = async () => {
//         try {
//             const response = await fetch("http://localhost:8080/dashboard");
//             if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
//             const data = await response.json();
//             console.log("✅ Full API Response:", JSON.stringify(data, null, 2)); // Pretty print

//             if (Array.isArray(data)) {
//                 setMenuItems(data);
//             } else {
//                 throw new Error("API did not return an array");
//             }
//         } catch (error) {
//             console.error("🚨 Error fetching menu data:", error);
//         }
//     };

//     fetchMenuData();
// }, []);


//   useEffect(() => {
//     const verticalOverlay = document.getElementsByClassName("vertical-overlay");
//     if (verticalOverlay.length) {
//       verticalOverlay[0].addEventListener("click", () => {
//         document.body.classList.remove("vertical-sidebar-enable");
//       });
//     }
//   }, []);

//   const addEventListenerOnSmHoverMenu = () => {
//     const sidebarSize = document.documentElement.getAttribute("data-sidebar-size");
//     document.documentElement.setAttribute(
//       "data-sidebar-size",
//       sidebarSize === "sm-hover" ? "sm-hover-active" : "sm-hover"
//     );
//   };

//   return (
//     <React.Fragment>
//       <div className="app-menu navbar-menu">
//         <div className="navbar-brand-box">
//           <Link to="/" className="logo logo-dark">
//             <span className="logo-sm">
//               <img src={logoSm} alt="Logo" height="22" />
//             </span>
//             <span className="logo-lg">
//               <img src={logoDark} alt="Logo" height="17" />
//             </span>
//           </Link>

//           <Link to="/" className="logo logo-light">
//             <span className="logo-sm">
//               <img src={logoSm} alt="Logo" height="22" />
//             </span>
//             <span className="logo-lg">
//               <img src={logoLight} alt="Logo" height="17" />
//             </span>
//           </Link>

//           <button
//             onClick={addEventListenerOnSmHoverMenu}
//             type="button"
//             className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
//             id="vertical-hover"
//           >
//             <i className="ri-record-circle-line"></i>
//           </button>
//         </div>

//         {layoutType === "horizontal" ? (
//           <div id="scrollbar">
//             <Container fluid>
//               <ul className="navbar-nav" id="navbar-nav">
//                 <HorizontalLayout />
//               </ul>
//             </Container>
//           </div>
//         ) : layoutType === "twocolumn" ? (
//           <React.Fragment>
//             <TwoColumnLayout layoutType={layoutType} />
//             <div className="sidebar-background"></div>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <SimpleBar id="scrollbar" className="h-100">
//               <Container fluid>
//                 <ul className="navbar-nav" id="navbar-nav">
//                 {menuItems.map((item) => (
//     <li key={item.id} className="nav-item">
//         <div className="d-flex justify-between items-center">
//             <Link to={item.link || "#"} className="nav-link">
//                 {item.icon && <i className={item.icon}></i>}
//                 <span>{item.label}</span>
//             </Link>

//             {item.subItems?.length > 0 && (
//                 <i
//                     className={`ri-arrow-${showTransactions ? "up" : "down"}-s-line cursor-pointer`}
//                     onClick={() => setShowTransactions(!showTransactions)}
//                     style={{ marginLeft: "auto", cursor: "pointer" ,style:"color:white"}}
//                 ></i>
//             )}
//         </div>

//         {/* ✅ Show subItems if toggled */}
//         {item.subItems?.length > 0 && (
//             <ul className="sub-menu" style={{ display: showTransactions ? "block" : "none" }}>
//                 {item.subItems.map((sub) => (
//                     <li key={sub.id}>
//                         <Link to={sub.link || "#"}>{sub.label}</Link>

//                         {/* ✅ Handle deeper nested subItems */}
//                         {sub.subItems?.length > 0 && (
//                             <ul className="sub-menu" style={{ marginLeft: '20px' }}>
//                                 {sub.subItems.map((deepSub) => (
//                                     <li key={deepSub.id}>
//                                         <Link to={deepSub.link || "#"}>{deepSub.label}</Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </li>
//                 ))}
//             </ul>
//         )}
//     </li>
// ))}

//                 </ul>
//               </Container>
//             </SimpleBar>
//             <div className="sidebar-background"></div>
//           </React.Fragment>
//         )}
//       </div>
//       <div className="vertical-overlay"></div>
//     </React.Fragment>
//   );
// };

// export default Sidebar;
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import SimpleBar from "simplebar-react";
// import { Container } from "reactstrap";

// // Import Components
// import VerticalLayout from "./VerticalLayouts";
// import TwoColumnLayout from "./TwoColumnLayout";
// import HorizontalLayout from "./HorizontalLayout";

// // Import Logos
// import logoSm from "../assets/images/logo-sm.png";
// import logoDark from "../assets/images/logo-dark.png";
// import logoLight from "../assets/images/logo-light.png";

// const Sidebar = ({ layoutType }) => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [showTransactions, setShowTransactions] = useState(false);

//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/dashboard");
//         if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
//         const data = await response.json();
//         console.log("✅ Full API Response:", JSON.stringify(data, null, 2)); // Pretty print

//         if (Array.isArray(data)) {
//           setMenuItems(data);
//         } else {
//           throw new Error("API did not return an array");
//         }
//       } catch (error) {
//         console.error("🚨 Error fetching menu data:", error);
//       }
//     };

//     fetchMenuData();
//   }, []);

//   useEffect(() => {
//     const verticalOverlay = document.getElementsByClassName("vertical-overlay");
//     if (verticalOverlay.length) {
//       verticalOverlay[0].addEventListener("click", () => {
//         document.body.classList.remove("vertical-sidebar-enable");
//       });
//     }
//   }, []);

//   const addEventListenerOnSmHoverMenu = () => {
//     const sidebarSize = document.documentElement.getAttribute("data-sidebar-size");
//     document.documentElement.setAttribute(
//       "data-sidebar-size",
//       sidebarSize === "sm-hover" ? "sm-hover-active" : "sm-hover"
//     );
//   };

//   return (
//     <React.Fragment>
//       <div className="app-menu navbar-menu">
//         <div className="navbar-brand-box">
//           <Link to="/" className="logo logo-dark">
//             <span className="logo-sm">
//               <img src={logoSm} alt="Logo" height="22" />
//             </span>
//             <span className="logo-lg">
//               <img src={logoDark} alt="Logo" height="17" />
//             </span>
//           </Link>

//           <Link to="/" className="logo logo-light">
//             <span className="logo-sm">
//               <img src={logoSm} alt="Logo" height="22" />
//             </span>
//             <span className="logo-lg">
//               <img src={logoLight} alt="Logo" height="17" />
//             </span>
//           </Link>

//           <button
//             onClick={addEventListenerOnSmHoverMenu}
//             type="button"
//             className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover"
//             id="vertical-hover"
//           >
//             <i className="ri-record-circle-line"></i>
//           </button>
//         </div>

//         {layoutType === "horizontal" ? (
//           <div id="scrollbar">
//             <Container fluid>
//               <ul className="navbar-nav" id="navbar-nav">
//                 <HorizontalLayout />
//               </ul>
//             </Container>
//           </div>
//         ) : layoutType === "twocolumn" ? (
//           <React.Fragment>
//             <TwoColumnLayout layoutType={layoutType} />
//             <div className="sidebar-background"></div>
//           </React.Fragment>
//         ) : (
//           <React.Fragment>
//             <SimpleBar id="scrollbar" className="h-100">
//               <Container fluid>
//                 <ul className="navbar-nav" id="navbar-nav">
//                   {menuItems.map((item) => (
//                     <li key={item.id} className="nav-item">
//                       <div className="d-flex justify-between items-center">
//                         <Link
//                           to={item.link || "#"}
//                           className="nav-link"
//                           style={{
//                             color: "white",
//                             display: "flex",
//                             alignItems: "center",
//                           }}
//                         >
//                           {item.icon && (
//                             <i
//                               className={item.icon}
//                               style={{ marginRight: "8px", color: "white" }}
//                             ></i>
//                           )}
//                           <span>{item.label}</span>
//                         </Link>

//                         {item.subItems?.length > 0 && (
//                           <i
//                             className={`ri-arrow-${showTransactions ? "up" : "down"}-s-line`}
//                             onClick={() => setShowTransactions(!showTransactions)}
//                             style={{ marginLeft: "auto", cursor: "pointer", color: "white" }}
//                           ></i>
//                         )}
//                       </div>

//                       {item.subItems?.length > 0 && (
//                         <ul
//                           className="sub-menu"
//                           style={{ display: showTransactions ? "block" : "none" }}
//                         >
//                           {item.subItems.map((sub) => (
//                             <li key={sub.id}>
//                               <Link
//                                 to={sub.link || "#"}
//                                 style={{ color: "white", display: "flex", alignItems: "center" }}
//                               >
//                                 {sub.icon && (
//                                   <i
//                                     className={sub.icon}
//                                     style={{ marginRight: "5px", color: "white" }}
//                                   ></i>
//                                 )}
//                                 {sub.label}
//                               </Link>

//                               {sub.subItems?.length > 0 && (
//                                 <ul className="sub-menu" style={{ marginLeft: "20px" }}>
//                                   {sub.subItems.map((deepSub) => (
//                                     <li key={deepSub.id}>
//                                       <Link
//                                         to={deepSub.link || "#"}
//                                         style={{ color: "white", display: "flex", alignItems: "center" }}
//                                       >
//                                         {deepSub.icon && (
//                                           <i
//                                             className={deepSub.icon}
//                                             style={{ marginRight: "5px", color: "white" }}
//                                           ></i>
//                                         )}
//                                         {deepSub.label}
//                                       </Link>
//                                     </li>
//                                   ))}
//                                 </ul>
//                               )}
//                             </li>
//                           ))}
//                         </ul>
//                       )}
//                     </li>
//                   ))}
//                 </ul>
//               </Container>
//             </SimpleBar>
//             <div className="sidebar-background"></div>
//           </React.Fragment>
//         )}
//       </div>
//       <div className="vertical-overlay"></div>
//     </React.Fragment>
//   );
// };

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import SimpleBar from "simplebar-react";
// import { Container } from "reactstrap";
// // Import Logos
// import logoSm from "../assets/images/logo-sm.png";
// import logoDark from "../assets/images/logo.png";
// import logoLight from "../assets/images/logo.png";

// const Sidebar = ({ layoutType }) => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [openMenus, setOpenMenus] = useState({});

//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         const response = await fetch("http://localhost:8081/menu/all");
//         if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
//         const data = await response.json();
//         console.log("✅ Full API Response:", JSON.stringify(data, null, 2));
  
//         // Transform data if needed
//         const transformedData = data.map((item) => ({
//           id: item.id,
//           label: item.name,
//           icon: item.icon,
//           link: item.route,
//           isHeader: item.is_header,
//           isDisabled: item.is_disabled,
//           subItems: item.children || [], // Ensure children are mapped to subItems
//         }));
  
//         if (Array.isArray(transformedData)) {
//           setMenuItems(transformedData);
//         } else {
//           throw new Error("Transformed data is not an array");
//         }
//       } catch (error) {
//         console.error("🚨 Error fetching menu data:", error);
//       }
//     };
  
//     fetchMenuData();
//   }, []);

//   const toggleMenu = (id) => {
//     setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const renderMenuItems = (items, level = 0) => {
//     console.log("Rendering items:", items); // Debugging
//     return (
//       <ul style={{ listStyle: "none", paddingLeft: level > 0 ? "16px" : 0, margin: 0 }}>
//         {items.map((item) => {
//           console.log("Rendering item:", item); // Debugging
//           return (
//             <li key={item.id} style={{ marginBottom: "10px", transition: "all 0.2s ease" }}>
//               <div
//                 className="d-flex align-items-center"
//                 onClick={() => toggleMenu(item.id)}
//                 style={{
//                   cursor: "pointer",
//                   padding: "6px 10px",
//                   borderRadius: "6px",
//                   transition: "all 0.3s ease",
//                   border: "1px solid transparent",
//                 }}
//               >
//                 {item.icon && (
//                   <i
//                     className={item.icon}
//                     style={{
//                       color: "white",
//                       fontSize: "16px",
//                       marginRight: "12px",
//                       width: "20px",
//                       textAlign: "center",
//                     }}
//                   ></i>
//                 )}
  
//                 <Link
//                   to={item.link || "#"}
//                   style={{
//                     color: openMenus[item.id] ? "#ffffff" : "#d3d3d3",
//                     textDecoration: "none",
//                     flex: 1,
//                     fontSize: "14px",
//                     fontWeight: openMenus[item.id] ? "600" : "500",
//                     letterSpacing: "0.3px",
//                     padding: "4px 0",
//                     fontFamily: "'Inter', sans-serif",
//                     transition: "color 0.2s ease",
//                   }}
//                 >
//                   {item.label}
//                 </Link>
  
//                 {item.subItems?.length > 0 && (
//                   <i
//                     className={`ri-arrow-${openMenus[item.id] ? "down" : "right"}-s-line`}
//                     style={{
//                       color: openMenus[item.id] ? "#ffffff" : "rgba(211, 211, 211, 0.7)",
//                       marginLeft: "8px",
//                       fontSize: "14px",
//                       transition: "transform 0.2s ease",
//                     }}
//                   ></i>
//                 )}
//               </div>
  
//               {item.subItems?.length > 0 && openMenus[item.id] && (
//                 <div
//                   style={{
//                     padding: "4px 0 0 0",
//                     marginTop: "6px",
//                     borderLeft: "1px solid rgba(255,255,255,0.1)",
//                     marginLeft: "10px",
//                     maxHeight: "none",
//                     overflow: "visible",
//                   }}
//                 >
//                   {renderMenuItems(item.subItems, level + 1)}
//                 </div>
//               )}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   };

//   return (
//     <React.Fragment>
//       <div className="app-menu navbar-menu" style={{ 
//         padding: "20px 15px",
//         boxShadow: "0 0 15px rgba(255, 0, 0, 0.1)",
//         height: "100vh", 
//         overflowY: "auto", 
//         overflowX: "hidden"
//       }}>
//         <div className="navbar-brand-box" style={{ 
//           marginBottom: "25px",
//           padding: "0 10px"
//         }}>
//           <Link to="/" className="logo logo-light" style={{ display: "block", textAlign: "center" }}>
//             <span className="logo-sm">
//               <img src={logoSm} alt="Logo" height="24" />
//             </span>
//             <span className="logo-lg">
//               <img src={logoLight} alt="Logo" height="50" style={{ maxWidth: "100%" }} />
//             </span>
//           </Link>
//         </div>

//         <SimpleBar id="scrollbar" className="h-100" style={{ height: "100%" }}>
//           <Container fluid>
//             <ul className="navbar-nav" id="navbar-nav" style={{ padding: 0 }}>
//               {renderMenuItems(menuItems)}
//             </ul>
//           </Container>
//         </SimpleBar>

//         <div className="sidebar-background"></div>
//       </div>
//       <div className="vertical-overlay"></div>
//     </React.Fragment>
//   );
// };

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import SimpleBar from "simplebar-react";
// import { Container } from "reactstrap";

// // Import Logos
// import logoSm from "../assets/images/logo-sm.png";
// import logoDark from "../assets/images/logo.png";
// import logoLight from "../assets/images/logo.png";

// const Sidebar = ({ layoutType }) => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [openMenus, setOpenMenus] = useState({});

//   useEffect(() => {
//     const fetchMenuData = async () => {
//       try {
//         const response = await fetch("http://localhost:8081/api/menu/all");
//         if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
//         const data = await response.json();

//         console.log("✅ Full API Response:", JSON.stringify(data, null, 2));

//         // Transforming API response to frontend structure
//         const transformMenuData = (items) => {
//           return items.map((item) => ({
//             id: item.id,
//             name: item.label, // Mapping label to name
//             icon: item.icon,
//             route: item.link, // Mapping link to route
//             is_header: item.isHeader,
//             is_disabled: item.stateVariables, // Mapping stateVariables to is_disabled
//             children: item.subItems ? transformMenuData(item.subItems) : [],
//           }));
//         };

//         if (Array.isArray(data)) {
//           setMenuItems(transformMenuData(data));
//         } else {
//           throw new Error("API data is not an array");
//         }
//       } catch (error) {
//         console.error("🚨 Error fetching menu data:", error);
//       }
//     };

//     fetchMenuData();
//   }, []);

//   const toggleMenu = (id) => {
//     setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const renderMenuItems = (items, level = 0) => {
//     return (
//       <ul style={{ listStyle: "none", paddingLeft: level > 0 ? "16px" : 0, margin: 0 }}>
//         {items.map((item) => (
//           <li key={item.id} style={{ marginBottom: "10px", transition: "all 0.2s ease" }}>
//             <div
//               className="d-flex align-items-center"
//               onClick={() => toggleMenu(item.id)}
//               style={{
//                 cursor: "pointer",
//                 padding: "6px 10px",
//                 borderRadius: "6px",
//                 transition: "all 0.3s ease",
//                 border: "1px solid transparent",
//               }}
//             >
//               {item.icon && (
//                 <i
//                   className={item.icon}
//                   style={{
//                     color: "white",
//                     fontSize: "16px",
//                     marginRight: "12px",
//                     width: "20px",
//                     textAlign: "center",
//                   }}
//                 ></i>
//               )}

//               <Link
//                 to={item.route || "#"}
//                 style={{
//                   color: openMenus[item.id] ? "#ffffff" : "#d3d3d3",
//                   textDecoration: "none",
//                   flex: 1,
//                   fontSize: "14px",
//                   fontWeight: openMenus[item.id] ? "600" : "500",
//                   letterSpacing: "0.3px",
//                   padding: "4px 0",
//                   fontFamily: "'Inter', sans-serif",
//                   transition: "color 0.2s ease",
//                 }}
//               >
//                 {item.name}
//               </Link>

//               {item.children?.length > 0 && (
//                 <i
//                   className={`ri-arrow-${openMenus[item.id] ? "down" : "right"}-s-line`}
//                   style={{
//                     color: openMenus[item.id] ? "#ffffff" : "rgba(211, 211, 211, 0.7)",
//                     marginLeft: "8px",
//                     fontSize: "14px",
//                     transition: "transform 0.2s ease",
//                   }}
//                 ></i>
//               )}
//             </div>

//             {item.children?.length > 0 && openMenus[item.id] && (
//               <div
//                 style={{
//                   padding: "4px 0 0 0",
//                   marginTop: "6px",
//                   borderLeft: "1px solid rgba(255,255,255,0.1)",
//                   marginLeft: "10px",
//                   maxHeight: "none",
//                   overflow: "visible",
//                 }}
//               >
//                 {renderMenuItems(item.children, level + 1)}
//               </div>
//             )}
//           </li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <React.Fragment>
//       <div
//         className="app-menu navbar-menu"
//         style={{
//           padding: "20px 15px",
//           boxShadow: "0 0 15px rgba(255, 0, 0, 0.1)",
//           height: "100vh",
//           overflowY: "auto",
//           overflowX: "hidden",
//         }}
//       >
//         <div
//           className="navbar-brand-box"
//           style={{
//             marginBottom: "25px",
//             padding: "0 10px",
//           }}
//         >
//           <Link to="/" className="logo logo-light" style={{ display: "block", textAlign: "center" }}>
//             <span className="logo-sm">
//               <img src={logoSm} alt="Logo" height="24" />
//             </span>
//             <span className="logo-lg">
//               <img src={logoLight} alt="Logo" height="50" style={{ maxWidth: "100%" }} />
//             </span>
//           </Link>
//         </div>

//         <SimpleBar id="scrollbar" className="h-100" style={{ height: "100%" }}>
//           <Container fluid>
//             <ul className="navbar-nav" id="navbar-nav" style={{ padding: 0 }}>
//               {renderMenuItems(menuItems)}
//             </ul>
//           </Container>
//         </SimpleBar>

//         <div className="sidebar-background"></div>
//       </div>
//     </React.Fragment>
//   );
// };

// export default Sidebar;



import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";
import { Container } from "reactstrap";

// Import Logos
import logoSm from "../assets/images/logo_a.png";
import logoDark from "../assets/images/logo.png";
import logoLight from "../assets/images/logo.png";

const Sidebar = ({ layoutType }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [openMenus, setOpenMenus] = useState({});
// Add this to your Sidebar.jsx component or create a new file

// Function to toggle between mini and expanded sidebar
const toggleSidebarMode = () => {
  const sidebar = document.querySelector('.app-menu');
  const mainContent = document.querySelector('.main-content');
  
  // Toggle sidebar classes
  sidebar.classList.toggle('sidebar-expanded');
  sidebar.classList.toggle('sidebar-collapsed');
  
  // Toggle main content classes
  mainContent.classList.toggle('main-content-expanded');
  mainContent.classList.toggle('main-content-collapsed');
  
  // Store the user's preference (optional)
  const isMini = sidebar.classList.contains('sidebar-collapsed');
  localStorage.setItem('sidebarMode', isMini ? 'mini' : 'expanded');
};

// Function to initialize sidebar mode on page load
const initializeSidebarMode = () => {
  const sidebar = document.querySelector('.app-menu');
  const mainContent = document.querySelector('.main-content');
  
  // Set default or get user preference
  const preferredMode = localStorage.getItem('sidebarMode') || 'expanded';
  
  if (preferredMode === 'mini') {
    sidebar.classList.add('sidebar-collapsed');
    sidebar.classList.remove('sidebar-expanded');
    mainContent.classList.add('main-content-collapsed');
    mainContent.classList.remove('main-content-expanded');
  } else {
    sidebar.classList.add('sidebar-expanded');
    sidebar.classList.remove('sidebar-collapsed');
    mainContent.classList.add('main-content-expanded');
    mainContent.classList.remove('main-content-collapsed');
  }
};

// Update the toogleMenuBtn function in your Header.jsx
const toogleMenuBtn = () => {
  var windowSize = document.documentElement.clientWidth;
  
  // If on mobile/tablet, show/hide the sidebar
  if (windowSize <= 991.98) {
    const sidebar = document.querySelector('.app-menu');
    sidebar.classList.toggle('show');
  } else {
    // On desktop, toggle between mini and expanded mode
    toggleSidebarMode();
  }
  
  // Toggle hamburger icon animation
  document.querySelector('.hamburger-icon').classList.toggle('open');
};

// Call this when the page loads
document.addEventListener('DOMContentLoaded', initializeSidebarMode);
  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await fetch("http://localhost:8081/api/menu/all");
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        const data = await response.json();

        console.log("✅ Full API Response:", JSON.stringify(data, null, 2));

        // Transforming API response to frontend structure
        const transformMenuData = (items) => {
          return items.map((item) => ({
            id: item.id,
            name: item.label, // Mapping label to name
            icon: item.icon,
            route: item.link, // Mapping link to route
            is_header: item.isHeader,
            is_disabled: item.stateVariables, // Mapping stateVariables to is_disabled
            children: item.subItems ? transformMenuData(item.subItems) : [],
          }));
        };

        if (Array.isArray(data)) {
          setMenuItems(transformMenuData(data));
        } else {
          throw new Error("API data is not an array");
        }
      } catch (error) {
        console.error("🚨 Error fetching menu data:", error);
      }
    };

    fetchMenuData();
  }, []);

  const toggleMenu = (id) => {
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderMenuItems = (items, level = 0) => {
    return (
      <ul style={{ listStyle: "none", paddingLeft: level > 0 ? "16px" : 0, margin: 0 }}>
        {items.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px", transition: "all 0.2s ease" }}>
            <div
              className="d-flex align-items-center"
              onClick={() => toggleMenu(item.id)}
              style={{
                cursor: "pointer",
                padding: "6px 10px",
                borderRadius: "6px",
                transition: "all 0.3s ease",
                border: "1px solid transparent",
              }}
            >
              {item.icon && (
                <i
                  className={item.icon}
                  style={{
                    color: "white",
                    fontSize: "16px",
                    marginRight: "12px",
                    width: "20px",
                    textAlign: "center",
                  }}
                ></i>
              )}

              <Link
                to={item.route || "#"}
                style={{
                  color: openMenus[item.id] ? "#ffffff" : "#d3d3d3",
                  textDecoration: "none",
                  flex: 1,
                  fontSize: "14px",
                  fontWeight: openMenus[item.id] ? "600" : "500",
                  letterSpacing: "0.3px",
                  padding: "4px 0",
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis"
                }}
              >
                {item.name}
              </Link>

              {item.children?.length > 0 && (
                <i
                  className={`ri-arrow-${openMenus[item.id] ? "down" : "right"}-s-line`}
                  style={{
                    color: openMenus[item.id] ? "#ffffff" : "rgba(211, 211, 211, 0.7)",
                    marginLeft: "8px",
                    fontSize: "14px",
                    transition: "transform 0.2s ease",
                  }}
                ></i>
              )}
            </div>

            {item.children?.length > 0 && openMenus[item.id] && (
              <div
                style={{
                  padding: "4px 0 0 0",
                  marginTop: "6px",
                  borderLeft: "1px solid rgba(255,255,255,0.1)",
                  marginLeft: "10px",
                  maxHeight: "none",
                  overflow: "visible",
                }}
              >
                {renderMenuItems(item.children, level + 1)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <React.Fragment>
      <div
        className="app-menu navbar-menu"
        style={{
          padding: "20px 15px",
          boxShadow: "0 0 15px rgba(255, 0, 0, 0.1)",
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          width: "220px", // Decreased width (was likely around 250-280px by default)
          maxWidth: "220px", // Ensure it doesn't expand beyond this width
        }}
      >
        <div
          className="navbar-brand-box"
          style={{
            marginBottom: "25px",
            padding: "0 10px",
          }}
        >
        <Link
  to="/"
  className="logo logo-light"
  style={{ display: "block", marginLeft: "-20px" }} // Move left
>
  <span className="logo-sm">
    <img src={logoSm} alt="Logo" height="64" />
  </span>
  <span className="logo-lg">
    <img src={logoLight} alt="Logo" height="50" style={{ maxWidth: "100%" }} />
  </span>
</Link>

        </div>

        <SimpleBar id="scrollbar" className="h-100" style={{ height: "100%" }}>
          <Container fluid>
            <ul className="navbar-nav" id="navbar-nav" style={{ padding: 0 }}>
              {renderMenuItems(menuItems)}
            </ul>
          </Container>
        </SimpleBar>

        <div className="sidebar-background"></div>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;