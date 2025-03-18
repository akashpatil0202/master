import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle, Form } from "reactstrap";

// Import images
import logoSm1 from "../assets/images/logo_a.png";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";

// Import Components
import LanguageDropdown from "../Components/Common/LanguageDropdown";
import WebAppsDropdown from "../Components/Common/WebAppsDropdown";
import FullScreenDropdown from "../Components/Common/FullScreenDropdown";
import NotificationDropdown from "../Components/Common/NotificationDropdown";
import ProfileDropdown from "../Components/Common/ProfileDropdown";
import LightDark from "../Components/Common/LightDark";

import { changeSidebarVisibility } from "../slices/thunks";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";

const Header = ({ onChangeLayoutMode, layoutModeType, headerClass }) => {
  const dispatch = useDispatch();

  const selectDashboardData = createSelector(
    (state) => state.Layout,
    (state) => ({
      sidebarVisibilitytype: state.sidebarVisibilitytype,
    })
  );

  const { sidebarVisibilitytype } = useSelector(selectDashboardData);

  const [search, setSearch] = useState(false);
  const [marginLeft, setMarginLeft] = useState("-55px"); // Default margin

  const toggleSearch = () => {
    setSearch(!search);
  };

  const toggleMenuBtn = () => {
    var windowSize = document.documentElement.clientWidth;
    dispatch(changeSidebarVisibility("show"));

    setMarginLeft((prevMargin) => (prevMargin === "-55px" ? "-3px" : "-55px")); // Toggle margin

    if (windowSize > 767)
      document.querySelector(".hamburger-icon").classList.toggle("open");

    // For collapse horizontal menu
    if (document.documentElement.getAttribute("data-layout") === "horizontal") {
      document.body.classList.toggle("menu");
    }

    // For collapse vertical and semibox menu
    if (
      sidebarVisibilitytype === "show" &&
      ["vertical", "semibox"].includes(
        document.documentElement.getAttribute("data-layout")
      )
    ) {
      if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.setAttribute(
          "data-sidebar-size",
          document.documentElement.getAttribute("data-sidebar-size") === "sm"
            ? ""
            : "sm"
        );
      } else if (windowSize > 1025) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.setAttribute(
          "data-sidebar-size",
          document.documentElement.getAttribute("data-sidebar-size") === "lg"
            ? "sm"
            : "lg"
        );
      } else if (windowSize <= 767) {
        document.body.classList.add("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
      }
    }

    // Two-column menu
    if (document.documentElement.getAttribute("data-layout") === "twocolumn") {
      document.body.classList.toggle("twocolumn-panel");
    }
  };

  return (
    <React.Fragment>
      <header id="page-topbar" className={headerClass}>
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              {/* Logo */}
              <div className="navbar-brand-box horizontal-logo">
                <Link to="/" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src={logoSm1} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoDark} alt="" height="17" />
                  </span>
                </Link>

                <Link to="/" className="logo logo-light">
                  <span className="logo-sm">
                    <img src={logoSm1} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    <img src={logoLight} alt="" height="17" />
                  </span>
                </Link>
              </div>

              {/* Menu Button */}
              <button
                onClick={toggleMenuBtn}
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                id="topnav-hamburger-icon"
                style={{ marginLeft }}
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>

            {/* Right Side Icons */}
            <div className="d-flex align-items-center">
              <Dropdown
                isOpen={search}
                toggle={toggleSearch}
                className="d-md-none topbar-head-dropdown header-item"
              >
                <DropdownToggle
                  type="button"
                  tag="button"
                  className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                >
                  <i className="bx bx-search fs-22"></i>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                  <Form className="p-3">
                    <div className="form-group m-2" style={{ marginRight: "20px" }}>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search ..."
                          aria-label="Recipient's username"
                        />
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify"></i>
                        </button>
                      </div>
                    </div>
                  </Form>
                </DropdownMenu>
              </Dropdown>

              {/* Other Dropdowns */}
              <WebAppsDropdown />
              <FullScreenDropdown />
              <LightDark
                layoutMode={layoutModeType}
                onChangeLayoutMode={onChangeLayoutMode}
              />
              <NotificationDropdown />
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Dropdown, DropdownMenu, DropdownToggle, Form } from 'reactstrap';

// // Import images
// import logoSm from "../assets/images/logo-sm.png";
// import logoDark from "../assets/images/logo.png";
// import logoLight from "../assets/images/logo.png";

// // Import Components
// import SearchOption from '../Components/Common/SearchOption';
// import WebAppsDropdown from '../Components/Common/WebAppsDropdown';
// import FullScreenDropdown from '../Components/Common/FullScreenDropdown';
// import NotificationDropdown from '../Components/Common/NotificationDropdown';
// import ProfileDropdown from '../Components/Common/ProfileDropdown';

// const Header = ({ onChangeLayoutMode, layoutModeType, headerClass }) => {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//     const [isHovered, setIsHovered] = useState(false);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };

//     return (
//         <React.Fragment>
//             <style>{`
//                 /* Sidebar Base */
//                 .sidebar {
//                     width: ${isSidebarOpen ? '200px' : '60px'};
//                     height: 100vh;
//                     background-color: #343a40;
//                     position: fixed;
//                     top: 0;
//                     left: 0;
//                     transition: width 0.3s ease;
//                     color: #fff;
//                     z-index: 999;
//                 }

//                 /* Expanded Sidebar */
//                 .sidebar.open,
//                 .sidebar.hovered {
//                     width: 200px;
//                 }

//                 /* Sidebar Menu */
//                 .sidebar-menu {
//                     list-style: none;
//                     padding: 0;
//                     margin: 0;
//                 }

//                 .sidebar-menu li {
//                     padding: 15px;
//                     display: flex;
//                     align-items: center;
//                     cursor: pointer;
//                 }

//                 .sidebar-menu li i {
//                     margin-right: ${isSidebarOpen ? '10px' : '0'};
//                     font-size: 18px;
//                 }

//                 /* Collapsed Sidebar (Icons Only) */
//                 .sidebar.collapsed li span {
//                     display: ${isSidebarOpen ? 'inline' : 'none'};
//                 }

//                 /* Hovered Sidebar (Show Text on Hover) */
//                 .sidebar.hovered li span {
//                     display: inline;
//                 }

//                 /* Hover Effect */
//                 .sidebar-menu li:hover {
//                     background-color: rgba(255, 255, 255, 0.1); /* Transparent white */
//                 }
//             `}</style>

//             <header id="page-topbar" className={headerClass}>
//                 <div className="layout-width">
//                     <div className="navbar-header">
//                         <div className="d-flex">
//                             {/* Logo */}
//                             <div className="navbar-brand-box horizontal-logo">
//                                 <Link to="/" className="logo logo-dark">
//                                     <span className="logo-sm">
//                                         <img src={logoSm} alt="logo" height="22" />
//                                     </span>
//                                     <span className="logo-lg">
//                                         <img src={logoDark} alt="logo" height="17" />
//                                     </span>
//                                 </Link>
//                                 <Link to="/" className="logo logo-light">
//                                     <span className="logo-sm">
//                                         <img src={logoSm} alt="logo" height="22" />
//                                     </span>
//                                     <span className="logo-lg">
//                                         <img src={logoLight} alt="logo" height="17" />
//                                     </span>
//                                 </Link>
//                             </div>

//                             {/* Hamburger Icon */}
//                             <button
//                                 onClick={toggleSidebar}
//                                 type="button"
//                                 className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
//                                 id="topnav-hamburger-icon"
//                             >
//                                 <span className="hamburger-icon">
//                                     <span></span>
//                                     <span></span>
//                                     <span></span>
//                                 </span>
//                             </button>

//                             <SearchOption />
//                         </div>

//                         <div className="d-flex align-items-center">
//                             <Dropdown isOpen={false} className="d-md-none topbar-head-dropdown header-item">
//                                 <DropdownToggle tag="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle">
//                                     <i className="bx bx-search fs-22"></i>
//                                 </DropdownToggle>
//                                 <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
//                                     <Form className="p-3">
//                                         <div className="form-group m-0">
//                                             <div className="input-group">
//                                                 <input type="text" className="form-control" placeholder="Search ..." />
//                                                 <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
//                                             </div>
//                                         </div>
//                                     </Form>
//                                 </DropdownMenu>
//                             </Dropdown>

//                             <WebAppsDropdown />
//                             <FullScreenDropdown />
//                             <NotificationDropdown />
//                             <ProfileDropdown />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Sidebar */}
//                 <div
//                     className={`sidebar ${isSidebarOpen ? 'open' : 'collapsed'} ${isHovered ? 'hovered' : ''}`}
//                     onMouseEnter={() => setIsHovered(true)}
//                     onMouseLeave={() => setIsHovered(false)}
//                 >
//                     <ul className="sidebar-menu">
//                         <li><i className="bx bx-home"></i>{isSidebarOpen && <span>Home</span>}</li>
//                         <li><i className="bx bx-user"></i>{isSidebarOpen && <span>Profile</span>}</li>
//                         <li><i className="bx bx-cog"></i>{isSidebarOpen && <span>Settings</span>}</li>
//                     </ul>
//                 </div>
//             </header>
//         </React.Fragment>
//     );
// };

// export default Header;