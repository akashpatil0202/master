
// // import React, { useEffect, useState } from "react";
//   import { useNavigate } from "react-router-om";

//   const Navata = () => {
//     const history = useNavigate();
//      state ata
//     const [isashboard, setIsDashboard] = useState(false);
//     const [isApps, setIsApps] = useState(false);
//     const [isAuth, setIsAuth] = useState(false);
//     const [isPages, setIsPages] = useState(false);
//     const [isBaseUi, setIsBaseUi] = useState(false);
//     const [isAdvanceUi, setIsAdvanceUi] = useState(false);
//     const [isForms, setIsForms] = useState(false);
//     const [isTables, setIsTables] = useState(false);
//     const [isCharts, setIsCharts] = useState(false);
//     const [isIcons, setIsIcons] = useState(false);
//     const [isMaps, setIsMaps] = useState(false);
//     const [isMultiLevel, setIsMultiLevel] = useState(false);

//      Calender
//     const [isCalender, setCalender] = useState(false);

//       Apps
//     const [isEmail, setEmail] = useState(false);
//     const [isSubEmail, setSubEmail] = useState(false);
//     const [isEcommerce, setIsEcommerce] = useState(false);
//     const [isProjects, setIsProjects] = useState(false);
//     const [isTasks, setIsTasks] = useState(false);
//     const [isCRM, setIsCRM] = useState(false);
//     const [isCrypto, setIsCrypto] = useState(false);
//     const [isInvoices, setIsInvoices] = useState(false);
//     const [isSupportTickets, setIsSupportTickets] = useState(false);
//     const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
//     const [isJobs, setIsJobs] = useState(false);
//     const [isJobList, setIsJobList] = useState(false);
//     const [isCandidateList, setIsCandidateList] = useState(false);

//       Authentication
//     const [isSignIn, setIsSignIn] = useState(false);
//     const [isSignUp, setIsSignUp] = useState(false);
//     const [isPasswordReset, setIsPasswordReset] = useState(false);
//     const [isPasswordCreate, setIsPasswordCreate] = useState(false);
//     const [isLockScreen, setIsLockScreen] = useState(false);
//     const [isLogout, setIsLogout] = useState(false);
//     const [isSuccessMessage, setIsSuccessMessage] = useState(false);
//     const [isVerification, setIsVerification] = useState(false);
//     const [isError, setIsError] = useState(false);

//       Pages
//     const [isProfile, setIsProfile] = useState(false);
//     const [isLanding, setIsLanding] = useState(false);
//     const [isBlog, setIsBlog] = useState(false);

//       Charts
//     const [isApex, setIsApex] = useState(false);

//       Multi Level
//     const [isLevel1, setIsLevel1] = useState(false);
//     const [isLevel2, setIsLevel2] = useState(false);

//     const [iscurrentState, setIscurrentState] = useState("Dashboard");

//     function updateIconSidebar(e) {
//       if (e && e.target && e.target.getAttribute("subitems")) {
//         const ul = document.getElementById("two-column-menu");
//         const iconItems = ul.querySelectorAll(".nav-icon.active");
//         let activeIconItems = [...iconItems];
//         activeIconItems.forEach((item) => {
//           item.classList.remove("active");
//           var id = item.getAttribute("subitems");
//           if (document.getElementById(id))
//             document.getElementById(id).classList.remove("show");
//         });
//       }
//     }

//     useEffect(() => {
//       document.body.classList.remove("twocolumn-panel");
//       if (iscurrentState !== "Dashboard") {
//         setIsDashboard(false);
//       }
//       if (iscurrentState !== "Apps") {
//         setIsApps(false);
//       }
//       if (iscurrentState !== "Auth") {
//         setIsAuth(false);
//       }
//       if (iscurrentState !== "Pages") {
//         setIsPages(false);
//       }
//       if (iscurrentState !== "BaseUi") {
//         setIsBaseUi(false);
//       }
//       if (iscurrentState !== "AdvanceUi") {
//         setIsAdvanceUi(false);
//       }
//       if (iscurrentState !== "Forms") {
//         setIsForms(false);
//       }
//       if (iscurrentState !== "Tables") {
//         setIsTables(false);
//       }
//       if (iscurrentState !== "Charts") {
//         setIsCharts(false);
//       }
//       if (iscurrentState !== "Icons") {
//         setIsIcons(false);
//       }
//       if (iscurrentState !== "Maps") {
//         setIsMaps(false);
//       }
//       if (iscurrentState !== "MuliLevel") {
//         setIsMultiLevel(false);
//       }
//       if (iscurrentState === "Widgets") {
//         history("/widgets");
//         document.body.classList.add("twocolumn-panel");
//       }
//       if (iscurrentState !== "Landing") {
//         setIsLanding(false);
//       }
//     }, [
//       history,
//       iscurrentState,
//       isDashboard,
//       isApps,
//       isAuth,
//       isPages,
//       isBaseUi,
//       isAdvanceUi,
//       isForms,
//       isTables,
//       isCharts,
//       isIcons,
//       isMaps,
//       isMultiLevel,
//     ]);

//     const menuItems = [
//       {
//         label: "Menu",
//         isHeader: true,
//       },
//       {
//         id: "dashboard",
//         label: "Dashboards",
//         icon: "ri-dashboard-2-line",
//         link: "/#",
//         stateVariables: isDashboard,
//         click: function (e) {
//           e.preventDefault();
//           setIsDashboard(!isDashboard);
//           setIscurrentState("Dashboard");
//           updateIconSidebar(e);
//         },
//         subItems: [
//           {
//             id: "analytics",
//             label: "Analytics",
//             link: "/dashboard-analytics",
//             parentId: "dashboard",
//           },
//           {
//             id: "crm",
//             label: "CRM",
//             link: "/dashboard-crm",
//             parentId: "dashboard",
//           },
//           {
//             id: "ecommerce",
//             label: "Ecommerce",
//             link: "/dashboard",
//             parentId: "dashboard",
//           },
//           {
//             id: "crypto",
//             label: "Crypto",
//             link: "/dashboard-crypto",
//             parentId: "dashboard",
//           },
//           {
//             id: "projects",
//             label: "Projects",
//             link: "/dashboard-projects",
//             parentId: "dashboard",
//           },
//           {
//             id: "nft",
//             label: "NFT",
//             link: "/dashboard-nft",
//             parentId: "dashboard",
//           },
//           {
//             id: "job",
//             label: "Job",
//             link: "/dashboard-job",
//             parentId: "dashboard",
//               badgeColor: "success",
//               badgeName: "New",
//           },
//           {
//             id: "blog",
//             label: "Blog",
//             link: "/dashboard-blog",
//             parentId: "dashboard",
//             badgeColor: "success",
//             badgeName: "New",
//         },
//         ],
//       },
//       {
//         id: "apps",
//         label: "Apps",
//         icon: "ri-apps-2-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsApps(!isApps);
//           setIscurrentState("Apps");
//           updateIconSidebar(e);
//         },
//         stateVariables: isApps,
//         subItems: [
//           {
//             id: "calendar",
//             label: "Calendar",
//             link: "/#",
//             parentId: "apps",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setCalender(!isCalender);
//             },
//             stateVariables: isCalender,
//             childItems: [
//               {
//                 id: 1,
//                 label: "Main Calender",
//                 link: "/apps-calendar",
//                 parentId: "apps",
//               },
//               {
//                 id: 2,
//                 label: "Month Grid",
//                 link: "/apps-calendar-month-grid",
//                 parentId: "apps",
//               },
//             ],
//           },
//           {
//             id: "chat",
//             label: "Chat",
//             link: "/apps-chat",
//             parentId: "apps",
//           },
//           {
//             id: "mailbox",
//             label: "Email",
//             link: "/#",
//             parentId: "apps",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setEmail(!isEmail);
//             },
//             stateVariables: isEmail,
//             childItems: [
//               {
//                 id: 1,
//                 label: "Mailbox",
//                 link: "/apps-mailbox",
//                 parentId: "apps",
//               },
//               {
//                 id: 2,
//                 label: "Email Templates",
//                 link: "/#",
//                 parentId: "apps",
//                 isChildItem: true,
//                 stateVariables: isSubEmail,
//                 click: function (e) {
//                   e.preventDefault();
//                   setSubEmail(!isSubEmail);
//                 },
//                 childItems: [
//                   {
//                     id: 2,
//                     label: "Basic Action",
//                     link: "/apps-email-basic",
//                     parentId: "apps",
//                   },
//                   {
//                     id: 3,
//                     label: "Ecommerce Action",
//                     link: "/apps-email-ecommerce",
//                     parentId: "apps",
//                   },
//                 ],
//               },
//             ],
//           },
//           {
//             id: "appsecommerce",
//             label: "Ecommerce",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsEcommerce(!isEcommerce);
//             },
//             parentId: "apps",
//             stateVariables: isEcommerce,
//             childItems: [
//               {
//                 id: 1,
//                 label: "Products",
//                 link: "/apps-ecommerce-products",
//                 parentId: "apps",
//               },
//               {
//                 id: 2,
//                 label: "Product Details",
//                 link: "/apps-ecommerce-product-details",
//                 parentId: "apps",
//               },
//               {
//                 id: 3,
//                 label: "Create Product",
//                 link: "/apps-ecommerce-add-product",
//                 parentId: "apps",
//               },
//               {
//                 id: 4,
//                 label: "Orders",
//                 link: "/apps-ecommerce-orders",
//                 parentId: "apps",
//               },
//               {
//                 id: 5,
//                 label: "Order Details",
//                 link: "/apps-ecommerce-order-details",
//                 parentId: "apps",
//               },
//               {
//                 id: 6,
//                 label: "Customers",
//                 link: "/apps-ecommerce-customers",
//                 parentId: "apps",
//               },
//               {
//                 id: 7,
//                 label: "Shopping Cart",
//                 link: "/apps-ecommerce-cart",
//                 parentId: "apps",
//               },
//               {
//                 id: 8,
//                 label: "Checkout",
//                 link: "/apps-ecommerce-checkout",
//                 parentId: "apps",
//               },
//               {
//                 id: 9,
//                 label: "Sellers",
//                 link: "/apps-ecommerce-sellers",
//                 parentId: "apps",
//               },
//               {
//                 id: 10,
//                 label: "Seller Details",
//                 link: "/apps-ecommerce-seller-details",
//                 parentId: "apps",
//               },
//             ],
//           },
//           {
//             id: "appsprojects",
//             label: "Projects",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsProjects(!isProjects);
//             },
//             parentId: "apps",
//             stateVariables: isProjects,
//             childItems: [
//               {
//                 id: 1,
//                 label: "List",
//                 link: "/apps-projects-list",
//                 parentId: "apps",
//               },
//               {
//                 id: 2,
//                 label: "Overview",
//                 link: "/apps-projects-overview",
//                 parentId: "apps",
//               },
//               {
//                 id: 3,
//                 label: "Create Project",
//                 link: "/apps-projects-create",
//                 parentId: "apps",
//               },
//             ],
//           },
//           {
//             id: "tasks",
//             label: "Tasks",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsTasks(!isTasks);
//             },
//             parentId: "apps",
//             stateVariables: isTasks,
//             childItems: [
//               { id: 1, label: "Kanban Board", link: "/apps-tasks-kanban", parentId: "apps", },
//               {
//                 id: 2,
//                 label: "List View",
//                 link: "/apps-tasks-list-view",
//                 parentId: "apps",
//               },
//               {
//                 id: 3,
//                 label: "Task Details",
//                 link: "/apps-tasks-details",
//                 parentId: "apps",
//               },
//             ],
//           },
//           {
//             id: "appscrm",
//             label: "CRM",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsCRM(!isCRM);
//             },
//             parentId: "apps",
//             stateVariables: isCRM,
//             childItems: [
//               { id: 1, label: "Contacts", link: "/apps-crm-contacts" },
//               { id: 2, label: "Companies", link: "/apps-crm-companies" },
//               { id: 3, label: "Deals", link: "/apps-crm-deals" },
//               { id: 4, label: "Leads", link: "/apps-crm-leads" },
//             ],
//           },
//           {
//             id: "appscrypto",
//             label: "Crypto",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsCrypto(!isCrypto);
//             },
//             parentId: "apps",
//             stateVariables: isCrypto,
//             childItems: [
//               { id: 1, label: "Transactions", link: "/apps-crypto-transactions" },
//               { id: 2, label: "Buy & Sell", link: "/apps-crypto-buy-sell" },
//               { id: 3, label: "Orders", link: "/apps-crypto-orders" },
//               { id: 4, label: "My Wallet", link: "/apps-crypto-wallet" },
//               { id: 5, label: "ICO List", link: "/apps-crypto-ico" },
//               { id: 6, label: "KYC Application", link: "/apps-crypto-kyc" },
//             ],
//           },
//           {
//             id: "invoices",
//             label: "Invoices",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsInvoices(!isInvoices);
//             },
//             parentId: "apps",
//             stateVariables: isInvoices,
//             childItems: [
//               { id: 1, label: "List View", link: "/apps-invoices-list" },
//               { id: 2, label: "Details", link: "/apps-invoices-details" },
//               { id: 3, label: "Create Invoice", link: "/apps-invoices-create" },
//             ],
//           },
//           {
//             id: "supportTickets",
//             label: "Support Tickets",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsSupportTickets(!isSupportTickets);
//             },
//             parentId: "apps",
//             stateVariables: isSupportTickets,
//             childItems: [
//               { id: 1, label: "List View", link: "/apps-tickets-list" },
//               { id: 2, label: "Ticket Details", link: "/apps-tickets-details" },
//             ],
//           },
//           {
//             id: "NFTMarketplace",
//             label: "NFT Marketplace",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsNFTMarketplace(!isNFTMarketplace);
//             },
//             parentId: "apps",
//             stateVariables: isNFTMarketplace,
//             childItems: [
//               { id: 1, label: "Marketplace", link: "/apps-nft-marketplace" },
//               { id: 2, label: "Explore Now", link: "/apps-nft-explore" },
//               { id: 3, label: "Live Auction", link: "/apps-nft-auction" },
//               { id: 4, label: "Item Details", link: "/apps-nft-item-details" },
//               { id: 5, label: "Collections", link: "/apps-nft-collections" },
//               { id: 6, label: "Creators", link: "/apps-nft-creators" },
//               { id: 7, label: "Ranking", link: "/apps-nft-ranking" },
//               { id: 8, label: "Wallet Connect", link: "/apps-nft-wallet" },
//               { id: 9, label: "Create NFT", link: "/apps-nft-create" },
//             ],
//           },
//           {
//             id: "filemanager",
//             label: "File Manager",
//             link: "/apps-file-manager",
//             parentId: "apps",
//           },
//           {
//             id: "todo",
//             label: "To Do",
//             link: "/apps-todo",
//             parentId: "apps",
//           },
//           {
//             id: "job",
//             label: "Jobs",
//             link: "/#",
//             parentId: "apps",
//               badgeName: "New",
//               badgeColor: "success",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsJobs(!isJobs);
//             },
//             stateVariables: isJobs,
//             childItems: [
//               {
//                 id: 1,
//                 label: "Statistics",
//                 link: "/apps-job-statistics",
//                 parentId: "apps",
//               },
//               {
//                 id: 2,
//                 label: "Job Lists",
//                 link: "/#",
//                 parentId: "apps",
//                 isChildItem: true,
//                 stateVariables: isJobList,
//                 click: function (e) {
//                   e.preventDefault();
//                   setIsJobList(!isJobList);
//                 },
//                 childItems: [
//                   {
//                     id: 1,
//                     label: "List",
//                     link: "/apps-job-lists",
//                     parentId: "apps",
//                   },
//                   {
//                     id: 2,
//                     label: "Grid",
//                     link: "/apps-job-grid-lists",
//                     parentId: "apps",
//                   },
//                   {
//                     id: 3,
//                     label: "Overview",
//                     link: "/apps-job-details",
//                     parentId: "apps",
//                   },
//                 ],
//               },
//               {
//                 id: 3,
//                 label: "Candidate Lists",
//                 link: "/#",
//                 parentId: "apps",
//                 isChildItem: true,
//                 stateVariables: isCandidateList,
//                 click: function (e) {
//                   e.preventDefault();
//                   setIsCandidateList(!isCandidateList);
//                 },
//                 childItems: [
//                   {
//                     id: 1,
//                     label: "List View",
//                     link: "/apps-job-candidate-lists",
//                     parentId: "apps",
//                   },
//                   {
//                     id: 2,
//                     label: "Grid View",
//                     link: "/apps-job-candidate-grid",
//                     parentId: "apps",
//                   },
//                 ],
//               },
//               {
//                 id: 4,
//                 label: "Application",
//                 link: "/apps-job-application",
//                 parentId: "apps",
//               },
//               {
//                 id: 5,
//                 label: "New Job",
//                 link: "/apps-job-new",
//                 parentId: "apps",
//               },
//               {
//                 id: 6,
//                 label: "Companies List",
//                 link: "/apps-job-companies-lists",
//                 parentId: "apps",
//               },
//               {
//                 id: 7,
//                 label: "Job Categories",
//                 link: "/apps-job-categories",
//                 parentId: "apps",
//               },
//             ],
//           },
//           {
//             id: "apikey",
//             label: "API Key",
//             link: "/apps-api-key",
//             parentId: "apps",
//               badgeName: "New",
//               badgeColor: "success"
//           },
//         ],
//       },
//       {
//         label: "pages",
//         isHeader: true,
//       },
//       {
//         id: "authentication",
//         label: "Authentication",
//         icon: "ri-account-circle-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsAuth(!isAuth);
//           setIscurrentState("Auth");
//           updateIconSidebar(e);
//         },
//         stateVariables: isAuth,
//         subItems: [
//           {
//             id: "signIn",
//             label: "Sign In",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsSignIn(!isSignIn);
//             },
//             parentId: "authentication",
//             stateVariables: isSignIn,
//             childItems: [
//               { id: 1, label: "Basic", link: "/auth-signin-basic" },
//               { id: 2, label: "Cover", link: "/auth-signin-cover" },
//             ],
//           },
//           {
//             id: "signUp",
//             label: "Sign Up",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsSignUp(!isSignUp);
//             },
//             parentId: "authentication",
//             stateVariables: isSignUp,
//             childItems: [
//               { id: 1, label: "Basic", link: "/auth-signup-basic" },
//               { id: 2, label: "Cover", link: "/auth-signup-cover" },
//             ],
//           },
//           {
//             id: "passwordReset",
//             label: "Password Reset",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsPasswordReset(!isPasswordReset);
//             },
//             parentId: "authentication",
//             stateVariables: isPasswordReset,
//             childItems: [
//               { id: 1, label: "Basic", link: "/auth-pass-reset-basic" },
//               { id: 2, label: "Cover", link: "/auth-pass-reset-cover" },
//             ],
//           },
//           {
//             id: "passwordCreate",
//             label: "Password Create",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsPasswordCreate(!isPasswordCreate);
//             },
//             parentId: "authentication",
//             stateVariables: isPasswordCreate,
//             childItems: [
//               { id: 1, label: "Basic", link: "/auth-pass-change-basic" },
//               { id: 2, label: "Cover", link: "/auth-pass-change-cover" },
//             ],
//           },
//           {
//             id: "lockScreen",
//             label: "Lock Screen",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsLockScreen(!isLockScreen);
//             },
//             parentId: "authentication",
//             stateVariables: isLockScreen,
//             childItems: [
//               { id: 1, label: "Basic", link: "/auth-lockscreen-basic" },
//               { id: 2, label: "Cover", link: "/auth-lockscreen-cover" },
//             ],
//           },
//           {
//             id: "logout",
//             label: "Logout",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsLogout(!isLogout);
//             },
//             parentId: "authentication",
//             stateVariables: isLogout,
//             childItems: [
//               { id: 1, label: "Basic", link: "/auth-logout-basic" },
//               { id: 2, label: "Cover", link: "/auth-logout-cover" },
//             ],
//           },
//           {
//             id: "successMessage",
//             label: "Success Message",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsSuccessMessage(!isSuccessMessage);
//             },
//             parentId: "authentication",
//             stateVariables: isSuccessMessage,
//             childItems: [
//               { id: 1, label: "Basic", link: "/auth-success-msg-basic" },
//               { id: 2, label: "Cover", link: "/auth-success-msg-cover" },
//             ],
//           },
//           {
//             id: "twoStepVerification",
//             label: "Two Step Verification",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsVerification(!isVerification);
//             },
//             parentId: "authentication",
//             stateVariables: isVerification,
//             childItems: [
//               { id: 1, label: "Basic", link: "/auth-twostep-basic" },
//               { id: 2, label: "Cover", link: "/auth-twostep-cover" },
//             ],
//           },
//           {
//             id: "errors",
//             label: "Errors",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsError(!isError);
//             },
//             parentId: "authentication",
//             stateVariables: isError,
//             childItems: [
//               { id: 1, label: "404 Basic", link: "/auth-404-basic" },
//               { id: 2, label: "404 Cover", link: "/auth-404-cover" },
//               { id: 3, label: "404 Alt", link: "/auth-404-alt" },
//               { id: 4, label: "500", link: "/auth-500" },
//               { id: 5, label: "Offline Page", link: "/auth-offline" },
//             ],
//           },
//         ],
//       },
//       {
//         id: "pages",
//         label: "Pages",
//         icon: "ri-pages-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsPages(!isPages);
//           setIscurrentState("Pages");
//           updateIconSidebar(e);
//         },
//         stateVariables: isPages,
//         subItems: [
//           {
//             id: "starter",
//             label: "Starter",
//             link: "/pages-starter",
//             parentId: "pages",
//           },
//           {
//             id: "profile",
//             label: "Profile",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsProfile(!isProfile);
//             },
//             parentId: "pages",
//             stateVariables: isProfile,
//             childItems: [
//               {
//                 id: 1,
//                 label: "Simple Page",
//                 link: "/pages-profile",
//                 parentId: "pages",
//               },
//               {
//                 id: 2,
//                 label: "Settings",
//                 link: "/pages-profile-settings",
//                 parentId: "pages",
//               },
//             ],
//           },
//           { id: "team", label: "Team", link: "/pages-team", parentId: "pages" },
//           {
//             id: "timeline",
//             label: "Timeline",
//             link: "/pages-timeline",
//             parentId: "pages",
//           },
//           { id: "faqs", label: "FAQs", link: "/pages-faqs", parentId: "pages" },
//           {
//             id: "pricing",
//             label: "Pricing",
//             link: "/pages-pricing",
//             parentId: "pages",
//           },
//           {
//             id: "gallery",
//             label: "Gallery",
//             link: "/pages-gallery",
//             parentId: "pages",
//           },
//           {
//             id: "maintenance",
//             label: "Maintenance",
//             link: "/pages-maintenance",
//             parentId: "pages",
//           },
//           {
//             id: "comingSoon",
//             label: "Coming Soon",
//             link: "/pages-coming-soon",
//             parentId: "pages",
//           },
//           {
//             id: "sitemap",
//             label: "Sitemap",
//             link: "/pages-sitemap",
//             parentId: "pages",
//           },
//           {
//             id: "searchResults",
//             label: "Search Results",
//             link: "/pages-search-results",
//             parentId: "pages",
//           },
//           {
//             id: "PrivecyPolicy",
//             label: "Privacy Policy",
//             link: "/pages-privacy-policy",
//             parentId: "pages",
//               badgeColor: "success", badgeName: "New",
//           },
//           {
//             id: "TermsCondition",
//             label: "Terms Condition",
//             link: "/pages-terms-condition",
//             parentId: "pages",
//               badgeColor: "success", badgeName: "New",
//           },
//           {
//             id: "blogs",
//             label: "Blogs",
//             link: "/#",
//             isChildItem: true,
//             badgeColor: "success", badgeName: "New",
//             click: function (e) {
//                 e.preventDefault();
//                 setIsBlog(!isBlog);
//             },
//             parentId: "pages",
//             stateVariables: isBlog,
//             childItems: [
//                 { id: 1, label: "List View", link: "/pages-blog-list", parentId: "pages" },
//                 { id: 2, label: "Grid View", link: "/pages-blog-grid", parentId: "pages" },
//                 { id: 3, label: "Overview", link: "/pages-blog-overview", parentId: "pages" },
//             ]
//         }
//         ],
//       },
//       {
//         id: "landing",
//         label: "Landing",
//         icon: "ri-rocket-line",
//         link: "/#",
//         stateVariables: isLanding,
//         click: function (e) {
//           e.preventDefault();
//           setIsLanding(!isLanding);
//           setIscurrentState("Landing");
//           updateIconSidebar(e);
//         },
//         subItems: [
//           {
//             id: "onePage",
//             label: "One Page",
//             link: "/landing",
//             parentId: "landing",
//           },
//           {
//             id: "nftLanding",
//             label: "NFT Landing",
//             link: "/nft-landing",
//             parentId: "landing",
//           },
//           {
//             id: "jobLanding",
//             label: "Job",
//             link: "/job-landing",
//             parentId: "landing",
//               badgeColor: "success", badgeName: "New"
//           },
//         ],
//       },
//       {
//         label: "Components",
//         isHeader: true,
//       },
//       {
//         id: "baseUi",
//         label: "Base UI",
//         icon: "ri-pencil-ruler-2-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsBaseUi(!isBaseUi);
//           setIscurrentState("BaseUi");
//           updateIconSidebar(e);
//         },
//         stateVariables: isBaseUi,
//         subItems: [
//           {
//             id: "alerts",
//             label: "Alerts",
//             link: "/ui-alerts",
//             parentId: "baseUi",
//           },
//           {
//             id: "badges",
//             label: "Badges",
//             link: "/ui-badges",
//             parentId: "baseUi",
//           },
//           {
//             id: "buttons",
//             label: "Buttons",
//             link: "/ui-buttons",
//             parentId: "baseUi",
//           },
//           {
//             id: "colors",
//             label: "Colors",
//             link: "/ui-colors",
//             parentId: "baseUi",
//           },
//           { id: "cards", label: "Cards", link: "/ui-cards", parentId: "baseUi" },
//           {
//             id: "carousel",
//             label: "Carousel",
//             link: "/ui-carousel",
//             parentId: "baseUi",
//           },
//           {
//             id: "dropdowns",
//             label: "Dropdowns",
//             link: "/ui-dropdowns",
//             parentId: "baseUi",
//           },
//           { id: "grid", label: "Grid", link: "/ui-grid", parentId: "baseUi" },
//           {
//             id: "images",
//             label: "Images",
//             link: "/ui-images",
//             parentId: "baseUi",
//           },
//           { id: "tabs", label: "Tabs", link: "/ui-tabs", parentId: "baseUi" },
//           {
//             id: "accordions",
//             label: "Accordion & Collapse",
//             link: "/ui-accordions",
//             parentId: "baseUi",
//           },
//           {
//             id: "modals",
//             label: "Modals",
//             link: "/ui-modals",
//             parentId: "baseUi",
//           },
//           {
//             id: "offcanvas",
//             label: "Offcanvas",
//             link: "/ui-offcanvas",
//             parentId: "baseUi",
//           },
//           {
//             id: "placeholders",
//             label: "Placeholders",
//             link: "/ui-placeholders",
//             parentId: "baseUi",
//           },
//           {
//             id: "progress",
//             label: "Progress",
//             link: "/ui-progress",
//             parentId: "baseUi",
//           },
//           {
//             id: "notifications",
//             label: "Notifications",
//             link: "/ui-notifications",
//             parentId: "baseUi",
//           },
//           {
//             id: "media",
//             label: "Media object",
//             link: "/ui-media",
//             parentId: "baseUi",
//           },
//           {
//             id: "embedvideo",
//             label: "Embed Video",
//             link: "/ui-embed-video",
//             parentId: "baseUi",
//           },
//           {
//             id: "typography",
//             label: "Typography",
//             link: "/ui-typography",
//             parentId: "baseUi",
//           },
//           { id: "lists", label: "Lists", link: "/ui-lists", parentId: "baseUi" },
//           {
//             id: "links",
//             label: "Links",
//             link: "/ui-links",
//             parentId: "baseUi",
//             badgeColor: "success",
//             badgeName: "New",
//           },
//           {
//             id: "general",
//             label: "General",
//             link: "/ui-general",
//             parentId: "baseUi",
//           },
//           {
//             id: "ribbons",
//             label: "Ribbons",
//             link: "/ui-ribbons",
//             parentId: "baseUi",
//           },
//           {
//             id: "utilities",
//             label: "Utilities",
//             link: "/ui-utilities",
//             parentId: "baseUi",
//           },
//         ],
//       },
//       {
//         id: "advanceUi",
//         label: "Advance UI",
//         icon: "ri-stack-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsAdvanceUi(!isAdvanceUi);
//           setIscurrentState("AdvanceUi");
//           updateIconSidebar(e);
//         },
//         stateVariables: isAdvanceUi,
//         subItems: [
//           {
//             id: "nestablelist",
//             label: "Nestable List",
//             link: "/advance-ui-nestable",
//             parentId: "advanceUi",
//           },
//           {
//             id: "scrollbar",
//             label: "Scrollbar",
//             link: "/advance-ui-scrollbar",
//             parentId: "advanceUi",
//           },
//           {
//             id: "animation",
//             label: "Animation",
//             link: "/advance-ui-animation",
//             parentId: "advanceUi",
//           },
//           {
//             id: "swiperslider",
//             label: "Swiper Slider",
//             link: "/advance-ui-swiper",
//             parentId: "advanceUi",
//           },
//           {
//             id: "ratings",
//             label: "Ratings",
//             link: "/advance-ui-ratings",
//             parentId: "advanceUi",
//           },
//           {
//             id: "highlight",
//             label: "Highlight",
//             link: "/advance-ui-highlight",
//             parentId: "advanceUi",
//           },
//         ],
//       },
//       {
//         id: "widgets",
//         label: "Widgets",
//         icon: "ri-honour-line",
//         link: "/widgets",
//         click: function (e) {
//           e.preventDefault();
//           setIscurrentState("Widgets");
//         },
//       },
//       {
//         id: "forms",
//         label: "Forms",
//         icon: "ri-file-list-3-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsForms(!isForms);
//           setIscurrentState("Forms");
//           updateIconSidebar(e);
//         },
//         stateVariables: isForms,
//         subItems: [
//           {
//             id: "basicelements",
//             label: "Basic Elements",
//             link: "/forms-elements",
//             parentId: "forms",
//           },
//           {
//             id: "formselect",
//             label: "Form Select",
//             link: "/forms-select",
//             parentId: "forms",
//           },
//           {
//             id: "checkboxsradios",
//             label: "Checkboxs & Radios",
//             link: "/forms-checkboxes-radios",
//             parentId: "forms",
//           },
//           {
//             id: "pickers",
//             label: "Pickers",
//             link: "/forms-pickers",
//             parentId: "forms",
//           },
//           {
//             id: "inputmasks",
//             label: "Input Masks",
//             link: "/forms-masks",
//             parentId: "forms",
//           },
//           {
//             id: "advanced",
//             label: "Advanced",
//             link: "/forms-advanced",
//             parentId: "forms",
//           },
//           {
//             id: "rangeslider",
//             label: "Range Slider",
//             link: "/forms-range-sliders",
//             parentId: "forms",
//           },
//           {
//             id: "validation",
//             label: "Validation",
//             link: "/forms-validation",
//             parentId: "forms",
//           },
//           {
//             id: "wizard",
//             label: "Wizard",
//             link: "/forms-wizard",
//             parentId: "forms",
//           },
//           {
//             id: "editors",
//             label: "Editors",
//             link: "/forms-editors",
//             parentId: "forms",
//           },
//           {
//             id: "fileuploads",
//             label: "File Uploads",
//             link: "/forms-file-uploads",
//             parentId: "forms",
//           },
//           {
//             id: "formlayouts",
//             label: "Form Layouts",
//             link: "/forms-layouts",
//             parentId: "forms",
//           },
//           {
//             id: "select2",
//             label: "Select2",
//             link: "/forms-select2",
//             parentId: "forms",
//           },
//         ],
//       },
//       {
//         id: "tables",
//         label: "Tables",
//         icon: "ri-layout-grid-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsTables(!isTables);
//           setIscurrentState("Tables");
//           updateIconSidebar(e);
//         },
//         stateVariables: isTables,
//         subItems: [
//           {
//             id: "basictables",
//             label: "Basic Tables",
//             link: "/tables-basic",
//             parentId: "tables",
//           },
//           {
//             id: "listjs",
//             label: "List Js",
//             link: "/tables-listjs",
//             parentId: "tables",
//           },
//           {
//             id: "reactdatatables",
//             label: "React Datatables",
//             link: "/tables-react",
//             parentId: "tables",
//           },
//         ],
//       },
//       {
//         id: "charts",
//         label: "Charts",
//         icon: "ri-pie-chart-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsCharts(!isCharts);
//           setIscurrentState("Charts");
//           updateIconSidebar(e);
//         },
//         stateVariables: isCharts,
//         subItems: [
//           {
//             id: "apexcharts",
//             label: "Apexcharts",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsApex(!isApex);
//             },
//             stateVariables: isApex,
//             childItems: [
//               { id: 1, label: "Line", link: "/charts-apex-line" },
//               { id: 2, label: "Area", link: "/charts-apex-area" },
//               { id: 3, label: "Column", link: "/charts-apex-column" },
//               { id: 4, label: "Bar", link: "/charts-apex-bar" },
//               { id: 5, label: "Mixed", link: "/charts-apex-mixed" },
//               { id: 6, label: "Timeline", link: "/charts-apex-timeline" },
//               {
//                 id: 7,
//                 label: "Range Area",
//                 link: "/charts-apex-range-area",
//                 parentId: "apexcharts",
//                 badgeColor: "success",
//                 badgeName: "New",
//               },
//               {
//                 id: 8,
//                 label: "Funnel",
//                 link: "/charts-apex-funnel",
//                 parentId: "apexcharts",
//                 badgeColor: "success",
//                 badgeName: "New",
//               },
//               { id: 9, label: "Candlstick", link: "/charts-apex-candlestick" },
//               { id: 10, label: "Boxplot", link: "/charts-apex-boxplot" },
//               { id: 11, label: "Bubble", link: "/charts-apex-bubble" },
//               { id: 12, label: "Scatter", link: "/charts-apex-scatter" },
//               { id: 13, label: "Heatmap", link: "/charts-apex-heatmap" },
//               { id: 14, label: "Treemap", link: "/charts-apex-treemap" },
//               { id: 15, label: "Pie", link: "/charts-apex-pie" },
//               { id: 16, label: "Radialbar", link: "/charts-apex-radialbar" },
//               { id: 17, label: "Radar", link: "/charts-apex-radar" },
//               { id: 18, label: "Polar Area", link: "/charts-apex-polar" },
//               { id: 19, label: "Slope", link: "/charts-apex-slope", parentId: "charts", badgeColor: "success", badgeName: "New" },
//             ],
//           },
//           {
//             id: "chartjs",
//             label: "Chartjs",
//             link: "/charts-chartjs",
//             parentId: "charts",
//           },
//           {
//             id: "echarts",
//             label: "Echarts",
//             link: "/charts-echarts",
//             parentId: "charts",
//           },
//         ],
//       },
//       {
//         id: "icons",
//         label: "Icons",
//         icon: "ri-compasses-2-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsIcons(!isIcons);
//           setIscurrentState("Icons");
//           updateIconSidebar(e);
//         },
//         stateVariables: isIcons,
//         subItems: [
//           {
//             id: "remix",
//             label: "Remix",
//             link: "/icons-remix",
//             parentId: "icons",
//           },
//           {
//             id: "boxicons",
//             label: "Boxicons",
//             link: "/icons-boxicons",
//             parentId: "icons",
//           },
//           {
//             id: "materialdesign",
//             label: "Material Design",
//             link: "/icons-materialdesign",
//             parentId: "icons",
//           },
//           {
//             id: "lineawesome",
//             label: "Line Awesome",
//             link: "/icons-lineawesome",
//             parentId: "icons",
//           },
//           {
//             id: "feather",
//             label: "Feather",
//             link: "/icons-feather",
//             parentId: "icons",
//           },
//           {
//             id: "crypto",
//             label: "Crypto SVG",
//             link: "/icons-crypto",
//             parentId: "icons",
//           },
//         ],
//       },
//       {
//         id: "maps",
//         label: "Maps",
//         icon: "ri-map-pin-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsMaps(!isMaps);
//           setIscurrentState("Maps");
//           updateIconSidebar(e);
//         },
//         stateVariables: isMaps,
//         subItems: [
//           {
//             id: "google",
//             label: "Google",
//             link: "/maps-google",
//             parentId: "maps",
//           },
//         ],
//       },
//       {
//         id: "multilevel",
//         label: "Multi Level",
//         icon: "ri-share-line",
//         link: "/#",
//         click: function (e) {
//           e.preventDefault();
//           setIsMultiLevel(!isMultiLevel);
//           setIscurrentState("MuliLevel");
//           updateIconSidebar(e);
//         },
//         stateVariables: isMultiLevel,
//         subItems: [
//           {
//             id: "level1.1",
//             label: "Level 1.1",
//             link: "/#",
//             parentId: "multilevel",
//           },
//           {
//             id: "level1.2",
//             label: "Level 1.2",
//             link: "/#",
//             isChildItem: true,
//             click: function (e) {
//               e.preventDefault();
//               setIsLevel1(!isLevel1);
//             },
//             stateVariables: isLevel1,
//             childItems: [
//               { id: 1, label: "Level 2.1", link: "/#" },
//               {
//                 id: "level2.2",
//                 label: "Level 2.2",
//                 link: "/#",
//                 isChildItem: true,
//                 click: function (e) {
//                   e.preventDefault();
//                   setIsLevel2(!isLevel2);
//                 },
//                 stateVariables: isLevel2,
//                 childItems: [
//                   { id: 1, label: "Level 3.1", link: "/#" },
//                   { id: 2, label: "Level 3.2", link: "/#" },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//     ];
//     return <React.Fragment>{menuItems}</React.Fragment>;
//   };
//   export default Navdata;

//   import React, { useEffect, useState } from "react";
//   import { useNavigate } from "react-router-dom";

//   import axios from 'axios';
//        // State variables for togglin

//   const Navdata = () => {
//       const history = useNavigate();
//       // state data
//      //const[menuItems, setMenuItems] = useState([]);
//       const [isDashboard, setIsDashboard] = useState(false);
//       const [isApps, setIsApps] = useState(false);
//       const [isAuth, setIsAuth] = useState(false);
//       const [isPages, setIsPages] = useState(false);
//       const [isBaseUi, setIsBaseUi] = useState(false);
//       const [isAdvanceUi, setIsAdvanceUi] = useState(false);
//       const [isForms, setIsForms] = useState(false);
//       const [isTables, setIsTables] = useState(false);
//       const [isCharts, setIsCharts] = useState(false);
//       const [isIcons, setIsIcons] = useState(false);
//       const [isMaps, setIsMaps] = useState(false);
//       const [isMultiLevel, setIsMultiLevel] = useState(false);
//         const [isListing, setIsListing] = useState(false);

//       // Calender
//       const [isCalender, setCalender] = useState(false);

//        //Apps
//       const [isEmail, setEmail] = useState(false);
//       const [isEcommerce, setIsEcommerce] = useState(false);
//       const [isProjects, setIsProjects] = useState(false);
//       const [isCaneBilling, setIsCaneBilling] = useState(false);
//       const [isCaneBillingList, setIsCaneBillingList] = useState(false);
//       const [isRepayment, setIsRepayment] = useState(false);
//       const [isRepaymentList] = useState(false);
//       const [isDieselPumpList, setIsDieselPumpList] = useState(false);
//       const [isPayrollList, setIsPayrollList] = useState(false);
//       const [isPayrollCalculationList, setIsPayrollCalculationList] = useState(false);
//       const [isOverTimeList, setIsOverTimeList] = useState(false);
//       const [isBonusList, setIsBonusList] = useState(false);
//       const [isFormsList, setIsFormsList] = useState(false);
//       const [isSystemList, setIsSystemList] = useState(false);
//       const [isRegistrationList, setIsRegistrationList] = useState(false);

//       const [isCRM, setIsCRM] = useState(false);
//       const [isCrypto, setIsCrypto] = useState(false);
//       const [isInvoices, setIsInvoices] = useState(false);  
//       const [isSupportTickets, setIsSupportTickets] = useState(false);
//       const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
//       const [isJobs, setIsJobs] = useState(false);
//       const [isJobList, setIsJobList] = useState(false);
//       const [isCandidateList, setIsCandidateList] = useState(false);
//       const [isAgriList, setIsAgriList] = useState(false);
//       const [isListingList, setIsListingList] = useState(false);


//       //  Authentication
//       const [isSignIn, setIsSignIn] = useState(false);
//       const [isSignUp, setIsSignUp] = useState(false);
//       const [isPasswordReset, setIsPasswordReset] = useState(false);
//       const [isPasswordCreate, setIsPasswordCreate] = useState(false);
//       const [isLockScreen, setIsLockScreen] = useState(false);
//       const [isLogout, setIsLogout] = useState(false);
//       const [isSuccessMessage, setIsSuccessMessage] = useState(false);
//       const [isVerification, setIsVerification] = useState(false);
//       const [isError, setIsError] = useState(false);

//        // Pages
//       const [isProfile, setIsProfile] = useState(false);
//       const [isLanding, setIsLanding] = useState(false);
//       const [isBlog, setIsBlog] = useState(false);

//        // Charts
//       const [isApex, setIsApex] = useState(false);

//        // Multi Level
//       const [isLevel1, setIsLevel1] = useState(false);
//       const [isLevel2, setIsLevel2] = useState(false);

//       const [iscurrentState, setIscurrentState] = useState('Dashboard');

//       function updateIconSidebar(e) {
//           if (e && e.target && e.target.getAttribute("subitems")) {
//               const ul = document.getElementById("two-column-menu");
//               const iconItems = ul.querySelectorAll(".nav-icon.active");
//               let activeIconItems = [...iconItems];
//               activeIconItems.forEach((item) => {
//                   item.classList.remove("active");
//                   var id = item.getAttribute("subitems");
//                   if (document.getElementById(id))
//                       document.getElementById(id).classList.remove("show");
//               });
//           }
//       }

//       useEffect(() => {
//           document.body.classList.remove('twocolumn-panel');
//           if (iscurrentState !== 'Dashboard') {
//               setIsDashboard(false);
//           }
//           if (iscurrentState !== 'Apps') {
//               setIsApps(false);
//           }
//           if (iscurrentState !== 'Auth') {
//               setIsAuth(false);
//           }
//           if (iscurrentState !== 'Pages') {
//               setIsPages(false);
//           }
//           if (iscurrentState !== 'BaseUi') {
//               setIsBaseUi(false);
//           }
//           if (iscurrentState !== 'AdvanceUi') {
//               setIsAdvanceUi(false);
//           }
//           if (iscurrentState !== 'Forms') {
//               setIsForms(false);
//           }
//           if (iscurrentState !== 'Tables') {
//               setIsTables(false);
//           }
//           if (iscurrentState !== 'Charts') {
//               setIsCharts(false);
//           }
//           if (iscurrentState !== 'Icons') {
//               setIsIcons(false);
//           }
//           if (iscurrentState !== 'Maps') {
//               setIsMaps(false);
//           }
//           if (iscurrentState !== 'MuliLevel') {
//               setIsMultiLevel(false);
//           }
//           if (iscurrentState === 'Widgets') {
//               history("/widgets");
//               document.body.classList.add('twocolumn-panel');
//           }
//           if (iscurrentState !== 'Landing') {
//               setIsLanding(false);
//           }
//       }, [
//           history,
//           iscurrentState,
//           isDashboard,
//           isApps,
//           isAuth,
//           isPages,
//           isBaseUi,
//           isAdvanceUi,
//           isForms,
//           isTables,
//           isCharts,
//           isIcons,
//           isMaps,
//           isMultiLevel
//       ]);

//       useEffect(() => {
//         const fetchMenuData = async () => {
//           try {
//             const response = await axios.get("http://localhost:8081/Dashboard/all");
//             console.log("Full API Response:", response);
//             console.log("Response Data:", response.data);
//             setMenuItems(response.data); // Ensure this is set correctly
//           } catch (error) {
//             console.error("Error fetching menu data:", error);
//           }
//         };
//         fetchMenuData();
//       }, []);
      
     
     
     
//       const menuItems = [
//           {
//               label: "Menu",
//               isHeader: true,
//           },

//           {
//               id: "Transaction",
//               label: "Transaction",
//               icon: "ri-apps-2-line",
//               link: "/#",
//               click: function (e) {
//                   e.preventDefault();
//                   setIsApps(!isApps);
//                   setIscurrentState('Apps');
//                   updateIconSidebar(e);
//               },
//               stateVariables: isApps,
//               subItems: [
//                   {
//                       id: "System Administartion",
//                       label: "System Administartion",
//                       link: "/#",
//                       parentId: "apps",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setCalender(!isCalender);
//                       },
//                       stateVariables: isCalender,
//                       childItems: [
//                           {
//                               id: 1,
//                               label: "Purchase Requisition-Rights",
//                               link: "/apps-calendar",
//                               parentId: "apps"
//                           },
//                           {
//                               id: 2,
//                               label: "Footer Setting",
//                               link: "/apps-calendar-month-grid",
//                               parentId: "apps",
//                           },
//                           {
//                               id: 3,
//                               label: "New Tickets  ",
//                               link: "/apps-calendar-month-grid",
//                               parentId: "apps",
//                           },
//                       ]
//                   },
//                   {
//                       id: "Registration",
//                       label: "Chat",
//                       link: "/apps-chat",
//                       parentId: "apps",
//                   },
//                   {
//                       id: "Agriculture",
//                       label: "Agriculture",
//                       link: "/#",
//                       parentId: "apps",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setEmail(!isEmail);
//                       },
//                       stateVariables: isEmail,
//                       childItems: [
//                           {
//                               id: 1,
//                               label: "Cane Resistration",
//                               link: "/apps-mailbox",
//                               parentId: "apps"
//                           },
//                           {
//                               id: 2,
//                               label: "Device Mapping",
//                               link: "/apps-mailbox",
//                               parentId: "apps"
//                           },
//                           {
//                               id: 3,
//                               label: "Slip Boy Mapping",
//                               link: "/apps-mailbox",
//                               parentId: "apps"
//                           },
//                           {
//                               id: 4,
//                               label: "Farmer Code Generation",
//                               link: "/apps-mailbox",
//                               parentId: "apps"
//                           },
//                           {
//                               id: 5,
//                               label: "Plot Sampling Order",
//                               link: "/apps-mailbox",
//                               parentId: "apps"
//                           },
//                           {
//                               id: 6,
//                               label: "Harvesting Program",
//                               link: "/apps-mailbox",
//                               parentId: "apps"
//                           },
//                           {
//                               id: 7,
//                               label: "Member Mapping",
//                               link: "/apps-mailbox",
//                               parentId: "apps"
//                           },
//                       ]
//                   },
//                   {
//                       id: "Harvesting/Transport",
//                       label: "Harvesting/Transport",
//                       link: "/#",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsEcommerce(!isEcommerce);
//                       },
//                       parentId: "apps",
//                       stateVariables: isEcommerce,
//                       childItems: [
//                           { id: 1, label: "Harvester & Transporter Agreement", link: "/apps-ecommerce-products", parentId: "apps" },
//                           { id: 2, label: "Harvester & Transpoter Agreement Ammendment", link: "/apps-ecommerce-product-details", parentId: "apps" },
//                           { id: 3, label: "Harvesting Order", link: "/apps-ecommerce-add-product", parentId: "apps" },
//                           { id: 4, label: "HARVESTING & MACHINE VEHICLE ATTACHMENT", link: "/apps-ecommerce-orders", parentId: "apps" },
                     
//                       ]
//                   },
//                   {
//                       id: "wb",
//                       label: "WB",
//                       link: "/#",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsProjects(!isProjects);
//                       },
//                       parentId: "apps",
//                       stateVariables: isProjects,
//                       childItems: [
//                           { id: 1, label: "List", link: "/apps-projects-list", parentId: "apps", },
//                           { id: 2, label: "Overview", link: "/apps-projects-overview", parentId: "apps", },
//                           { id: 3, label: "Create Project", link: "/apps-projects-create", parentId: "apps", },
//                       ]
//                   },
//                   {
//                       id: "Cane Billing",
//                       label: "Cane Billing",
//                       link: "/#",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsCaneBilling(!isCaneBilling);
//                       },
//                       parentId: "apps",
//                       stateVariables: isCaneBilling,
//                       childItems: [
//                           { id: "Deduction Priority",
//                           label: "Deduction Priority",
//                           link: "/apps-CaneBilling-List View",
//                           parentId: "apps",
//                           isChildItem: true,
//                           stateVariables: isCaneBillingList,
//                           click: function(e){
//                               e.preventDefault();
//                               setIsCaneBillingList(!isCaneBillingList);
//                           },
//                           childItems: [
//                               {
//                                   id: 1,
//                                   label: "Deduction Priority - Farmer",
//                                   link: "/apps-CaneBilling-list",
//                                   parentId: "apps",
//                               },
//                               {  
//                                   id: 2,
//                                   label: "Deduction Priority - Harvester & Transpoter",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                           ],
//                       },
                   
//                       { id: "Deduction ",
//                           label: "Deduction ",
//                           link: "/apps-CaneBilling-List View",
//                           parentId: "apps",
//                           isChildItem: true,
//                           stateVariables: isCaneBillingList,
//                           click: function(e){
//                               e.preventDefault();
//                               setIsCaneBillingList(!isCaneBillingList);
//                           },
//                           childItems: [
//                               {
//                                   id: 1,
//                                   label: "Deduction - Farmer",
//                                   link: "/apps-CaneBilling-list",
//                                   parentId: "apps",
//                               },
//                               {  
//                                   id: 2,
//                                   label: "Deduction - Transpoter",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                               {  
//                                   id: 3,
//                                   label: "Deduction - Harvester",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                           ],
//                       },

//                       { id: "Cane Bill  - Farmer",
//                           label: "Cane Bill  - Farmer ",
//                           link: "/apps-CaneBilling-List View",
//                           parentId: "apps",
//                           isChildItem: true,
//                           stateVariables: isCaneBillingList,
//                           click: function(e){
//                               e.preventDefault();
//                               setIsCaneBillingList(!isCaneBillingList);
//                           },
//                           childItems: [
//                               {
//                                   id: 1,
//                                   label: "Bill Period",
//                                   link: "/apps-CaneBilling-list",
//                                   parentId: "apps",
//                               },
//                               {  
//                                   id: 2,
//                                   label: "Bill Strategy",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                               {  
//                                   id: 3,
//                                   label: "Cane Bill Farmer",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                               {  
//                                   id: 4,
//                                   label: "Cane Bill Farmer - Final",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                           ],
//                       },

//                       { id: "Cane Bill  - HT ",
//                           label: "Cane Bill  - HT ",
//                           link: "/apps-CaneBilling-List View",
//                           parentId: "apps",
//                           isChildItem: true,
//                           stateVariables: isCaneBillingList,
//                           click: function(e){
//                               e.preventDefault();
//                               setIsCaneBillingList(!isCaneBillingList);
//                           },
//                           childItems: [
//                               {
//                                   id: 1,
//                                   label: "TDS Setting",
//                                   link: "/apps-CaneBilling-list",
//                                   parentId: "apps",
//                               },
//                               {  
//                                   id: 2,
//                                   label: "Transport/Harvesting Rate",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                               {  
//                                   id: 3,
//                                   label: "HT Bill Period",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                               {  
//                                   id: 4,
//                                   label: "Billing Harvester/Transporter",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                               {
//                               id: 5,
//                               label: "Bill - HT Final",
//                               link: "/apps-CaneBilling-List",
//                               parentId: "apps",
//                           },
//                               {
//                                   id: 6,
//                                   label: "HT Final Bill Delete",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                               {
//                                   id: 7,
//                                   label: "Commissions(%)-Transporter",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },
//                               {
//                                   id: 8,
//                                   label: "Commissions(%)-Harvester",
//                                   link: "/apps-CaneBilling-List",
//                                   parentId: "apps",
//                               },

//                               { id: "Stop Payment ",
//                                   label: "Stop Payment ",
//                                   link: "/apps-CaneBilling-List View",
//                                   parentId: "apps",
//                                   isChildItem: true,
//                                   stateVariables: isCaneBillingList,
//                                   click: function(e){
//                                       e.preventDefault();
//                                       setIsCaneBillingList(!isCaneBillingList);
//                               },
//                           },

//                       ]
                   
//                       },


//                   {
//                       id: "Stop Payment",
//                       label: "Stop Payment",
//                       link: "/#",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsCRM(!isCRM);
//                       },
//                   },
//                   {
//                       id: "Harvester Addition",
//                       label: "Crypto",
//                       link: "/#",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsCrypto(!isCrypto);
//                       },
//                   },
//                   {
//                       id: "Transporter Addition",
//                       label: "Transporter Addition",
//                       link: "/#",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsInvoices(!isInvoices);
//                       },
//                   },
//                   {
//                       id: "Diesel Rate Difference",
//                       label: "Diesel Rate Difference",
//                       link: "/#",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsSupportTickets(!isSupportTickets);
//                       },
//                   },
//                   {
//                       id: "TRTP RATE DIFFERENCE",
//                       label: "TRTP RATE DIFFERENCE",
//                       link: "/#",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsNFTMarketplace(!isNFTMarketplace);
//                       },
//                   },
//                   {
//                       id: "CART RATE DEDUCTION REVERSE",
//                       label: " CART RATE DEDUCTION REVERSE",
//                       link: "/apps-file-manager",
//                       parentId: "apps",
//                   },
//                   {
//                       id: "Repayment",
//                       label: "Repayment",
//                       link: "/#",
//                       parentId: "apps",
//                         badgeName: "New",
//                         badgeColor: "success",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsRepayment(!isRepayment);
//                       },
//                       stateVariables: isJobs,
//                       childItems: [
//                           {
//                               id: 1,
//                               label: "Repayment Transporter",
//                               link: "/apps-job-statistics",
//                               parentId: "apps",
//                           },
//                           {
//                               id: 2,
//                               label: "Repaymet Harvester",
//                               link: "/#",
//                               parentId: "apps",
//                               isChildItem: true,
//                               stateVariables: isRepaymentList,
//                               click: function (e) {
//                                   e.preventDefault();
//                                   setIsRepayment(!isRepayment);
//                               },
//                           },
//                       ]
//                   },


                   
//                   {
//                       id: "Harvester Rate Difference",
//                       label: "Harvester Rate Difference",
//                       link: "/apps-api-key",
//                       parentId: "apps",
//                   },

//                   {
//                       id: "Interest Calculation",
//                       label: "Interest Calculation",
//                       link: "/apps-api-key",
//                       parentId: "apps",
//                   },

//                   {
//                       id: "HT Interest Payment",
//                       label: "HT Interest Payment",
//                       link: "/apps-api-key",
//                       parentId: "apps",
//                   },


//               ],
//           },
//           {
//               label: "Accounts",
//               isHeader: true,
//           },


//           { id: "Diesel Pump ",
//               label: "Diesel Pump ",
//               link: "/apps-DieselPump-List View",
//               parentId: "apps",
//               isChildItem: true,
//               stateVariables: isDieselPumpList,
//               click: function(e){
//                   e.preventDefault();
//                   setIsDieselPumpList(!isDieselPumpList);
//               },
//               childItems: [
//                   {
//                       id: 1,
//                       label: "Diesel Sanction For Harvester Machine ",
//                       link: "/apps-DieselPump-list",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 2,
//                       label: "Diesel Rate",
//                       link: "/apps-DieselPump-List",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 3,
//                       label: "Diesel Sale",
//                       link: "/apps-DieselPump-List",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 4,
//                       label: "Diesel Sale (Comp/Govt Vehicle)",
//                       link: "/apps-DieselPump-List",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 5,
//                       label: "Contrator Details",
//                       link: "/apps-DieselPump-List",
//                       parentId: "apps",
//                   },
//               ]
//           },

//           { id: "Payroll ",
//               label: "Payroll ",
//               link: "/apps-CaneBilling-List View",
//               parentId: "apps",
//               isChildItem: true,
//               stateVariables: isPayrollList,
//               click: function(e){
//                   e.preventDefault();
//                   setIsPayrollList(!isPayrollList);
//               },
//               childItems: [
//                   {
//                       id: 1,
//                       label: "Update Employee Salary Type",
//                       link: "/apps-Payroll-list",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 2,
//                       label: "Allowance And Deduction Employee Wise",
//                       link: "/apps-Payroll-List",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 3,
//                       label: "Pay Scale",
//                       link: "/apps-Payroll-List",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 4,
//                       label: "Leave Transactions",
//                       link: "/apps-Payroll-List",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 5,
//                       label: "Over Time",
//                       link: "/apps-Payroll-List",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 6,
//                       label: "Employee Advance Transaction",
//                       link: "/apps-Payroll-List",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 7,
//                       label: "Muster",
//                       link: "/apps-Payroll-List",
//                       parentId: "apps",
//                   },
//                   {  
//                       id: 8,
//                       label: "Employee Transfer",
//                       link: "/apps-Payroll-List",
//                       parentId: "apps",
//                   },
               
//                   { id: 9,
//                       label: "Payroll Calculation ",
//                       link: "/apps-PayrollCalculation-List View",
//                       parentId: "apps",
//                       isChildItem: true,
//                       stateVariables: isPayrollCalculationList,
//                       click: function(e){
//                           e.preventDefault();
//                           setIsPayrollCalculationList(!isPayrollCalculationList);
//                       },
//                       childItems: [
//                           {
//                               id: 1,
//                               label: "Payroll Calculation ",
//                               link: "/apps-PayrollCalculation-list",
//                               parentId: "apps",
//                           },
//                           {
//                               id: 2,
//                               label: "Payroll Calculation Final ",
//                               link: "/apps-PayrollCalculation-list",
//                               parentId: "apps",
//                           },
//                       ]
//                   },
//                       {  
//                           id: 8,
//                           label: "Salary Slip",
//                           link: "/apps-Payroll-List",
//                           parentId: "apps",
//                       },
//                       {  
//                           id: 9,
//                           label: "SEASONAL BREAK",
//                           link: "/apps-Payroll-List",
//                           parentId: "apps",
//                       },


//                       { id: 10,
//                           label: " Over Time ",
//                           link: "/apps-OverTime-List View",
//                           parentId: "apps",
//                           isChildItem: true,
//                           stateVariables: isOverTimeList,
//                           click: function(e){
//                               e.preventDefault();
//                               setIsOverTimeList(!isOverTimeList);
//                           },
//                           childItems: [
//                               {
//                                   id: 1,
//                                   label: "Allowance and Deduction For OT ",
//                                   link: "/apps-OverTime-list",
//                                   parentId: "apps",
//                               },
//                               {
//                                   id: 2,
//                                   label: "OverTime - Multiple Factor ",
//                                   link: "/apps-OverTime-list",
//                                   parentId: "apps",
//                               },
//                               {
//                                   id: 3,
//                                   label: "OverTime - Payment Process",
//                                   link: "/apps-OverTime-list",
//                                   parentId: "apps",
//                               },
//                           ]
//                       },

//                       { id: 11,
//                           label: "BONUS ",
//                           link: "/apps-Bonus-List View",
//                           parentId: "apps",
//                           isChildItem: true,
//                           stateVariables: isBonusList,
//                           click: function(e){
//                               e.preventDefault();
//                               setIsBonusList(!isBonusList);
//                           },
//                           childItems: [
//                               {
//                                   id: 1,
//                                   label: "Allowance and Deduction For Bonus",
//                                   link: "/apps-Bonus-list",
//                                   parentId: "apps",
//                               },
//                               {
//                                   id: 2,
//                                   label: "Bonus Setting ",
//                                   link: "/apps-Bonus-list",
//                                   parentId: "apps",
//                               },
//                               {
//                                   id: 3,
//                                   label: "Bonus Process",
//                                   link: "/apps-Bonus-list",
//                                   parentId: "apps",
//                               },
//                           ]
//                       },
//                       {  
//                           id: 12,
//                           label: "NEXT MONTH",
//                           link: "/apps-Payroll-List",
//                           parentId: "apps",
//                       },
//               ]
//           },
//       ]
//   },
//                         // REPORT
//   {
//       id: "Report",
//       label: "Report",
//       icon: "ri-file-list-3-line",
//       link: "/#",
//       click: function (e) {
//         e.preventDefault();
//         setIsForms(!isForms);
//         setIscurrentState("Forms");
//         updateIconSidebar(e);
//       },
//       stateVariables: isForms,
//       subItems: [
//         {
//           id: "System Administration",
//           label: "System Administration",
//           link: "/forms-elements",
//           parentId: "forms",
//           isChildItem: true,
//           stateVariables: isSystemList,
//           click: function(e){
//               e.preventDefault();
//               setIsSystemList(!isSystemList);
//           },  
//           childItems: [
//               {
//                   id: 1,
//                   label: "PR/JR Approval Report",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//               },
//           ]

//         },
//         {
//           id: "Registration",
//           label: "Registration",
//           link: "/forms-elements",
//           parentId: "forms",
//           isChildItem: true,
//           stateVariables: isRegistrationList,
//           click: function(e){
//               e.preventDefault();
//               setIsRegistrationList(!isRegistrationList);
//           },
//           childItems: [
//               {
//                   id: 1,
//                   label: "Applicant",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//               },
//           ]
//         },

//                               // Agriculture
//         {
//           id: "Agriculture",
//           label: "Agriculture",
//           link: "/forms-checkboxes-radios",
//           parentId: "forms",
//           isChildItem: true,
//           stateVariables: isAgriList,
//           click: function(e){
//               e.preventDefault();
//               setIsAgriList(!isAgriList);
//           },

//           childItems: [
//               {
//                   id: "Listing",
//                   label: "Listing",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//                   isChildItem: true,
//                   stateVariables: isListingList,
//                    click: function(e){
//                    e.preventDefault();
//                    setIsListingList(!isListingList);
//               },
//               childItems: [
//               {
//                   id: 1,
//                   label: "Statewise List",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//               },
//               {
//                   id: 2,
//                   label: "District",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//               },
//               {
//                   id: 3,
//                   label: "Taluka",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//               },
//               {
//                   id:4,
//                   label: "Circle",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//               },
//               {
//                   id:5,
//                   label: "Document",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//               },
//               {
//                   id:6,
//                   label: "Village",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//               },
//               {
//                   id:7,
//                   label: "Bank List",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//               },
//               {
//                   id:8,
//                   label: "Bank Branch List",
//                   link: "/apps-forms-list",
//                   parentId: "apps",
//               },
//           ]
   
//         },
//         {
//           id: "Unmapped Village List",
//           label: "Unmapped Village List",
//           link: "/forms-pickers",
//           parentId: "forms",
//         },
//         {
//           id: "Village Wise Farmer List",
//           label: "Village Wise Farmer List",
//           link: "/forms-masks",
//           parentId: "forms",
//         },
//         {
//           id: "Circle Wise Applicant List",
//           label: "Circle Wise Applicant List",
//           link: "/forms-advanced",
//           parentId: "forms",
//         },
//         {
//           id: "Applicant List New",
//           label: "Applicant List New",
//           link: "/forms-range-sliders",
//           parentId: "forms",
//         },
//         {
//           id: "validation",
//           label: "Validation",
//           link: "/forms-validation",
//           parentId: "forms",
//         },
//         {
//           id: "wizard",
//           label: "Wizard",
//           link: "/forms-wizard",
//           parentId: "forms",
//         },
//         {
//           id: "editors",
//           label: "Editors",
//           link: "/forms-editors",
//           parentId: "forms",
//         },
//         {
//           id: "fileuploads",
//           label: "File Uploads",
//           link: "/forms-file-uploads",
//           parentId: "forms",
//         },
//         {
//           id: "formlayouts",
//           label: "Form Layouts",
//           link: "/forms-layouts",
//           parentId: "forms",
//         },
//         {
//           id: "select2",
//           label: "Select2",
//           link: "/forms-select2",
//           parentId: "forms",
//         },
//       ],
//     },
//   ],
//   },
                         


//   {
//       id: "Add On's",
//       label: "Add On's",
//       icon: "ri-dashboard-2-line",
//       link: "/#",
//       stateVariables: isDashboard,
//       click: function (e) {
//           e.preventDefault();
//           setIsDashboard(!isDashboard);
//           setIscurrentState('Dashboard');
//           updateIconSidebar(e);
//       },
//       subItems: [
//           {
//               id: "analytics",
//               label: "Analytics",
//               link: "/dashboard-analytics",
//               parentId: "dashboard",
//           },
//           {
//               id: "j",
//               label: "jjj",
//               link: "/dashboard-crm",
//               parentId: "dashboard",
//           },
//           {
//               id: "ecommerce",
//               label: "Ecommerce",
//               link: "/dashboard",
//               parentId: "dashboard",
//           },
//           {
//               id: "crypto",
//               label: "Crypto",
//               link: "/dashboard-crypto",
//               parentId: "dashboard",
//           },
//           {
//               id: "projects",
//               label: "Projects",
//               link: "/dashboard-projects",
//               parentId: "dashboard",
//           },
//           {
//               id: "nft",
//               label: "NFT",
//               link: "/dashboard-nft",
//               parentId: "dashboard",
//           },
//           {
//               id: "job",
//               label: "Job",
//               link: "/dashboard-job",
//               parentId: "dashboard",
//           },
//           {
//               id: "blog",
//               label: "Blog",
//               link: "/dashboard-blog",
//               parentId: "dashboard",
//               badgeColor: "success",
//               badgeName: "New",
//           },
//       ],
//   },
                         
               
//           {
//                 id: "Report",
//                 label: "Report",
//                 icon: "ri-rocket-line",
//                 link: "/#",
//                 stateVariables: isLanding,
//                 click: function (e) {
//                     e.preventDefault();
//                     setIsLanding(!isLanding);
//                     setIscurrentState('Landing');
//                     updateIconSidebar(e);
//                 },
//               childItems: [
//                   {

//                            id: 1,
//                           label: "Update Employee Salary Type ",
//                           link: "/apps-Bonus-List View",
//                           parentId: "apps",
//                           isChildItem: true,
//                           stateVariables: isBonusList,
//                           click: function(e){
//                               e.preventDefault();
//                               setIsBonusList(!isBonusList);
//                           },
//                           childItems: [
//                               {
//                                   id: 1,
//                                   label: "Allowance and Deduction For Bonus",
//                                   link: "/apps-Bonus-list",
//                                   parentId: "apps",
//                               },
//                               {
//                                   id: 2,
//                                   label: "Bonus Setting ",
//                                   link: "/apps-Bonus-list",
//                                   parentId: "apps",
//                               },
//               ]


           
//           },
//           {
//               label: "Components",
//               isHeader: true,
//           },
//           {
//               id: "baseUi",
//               label: "Base UI",
//               icon: "ri-pencil-ruler-2-line",
//               link: "/#",
//               click: function (e) {
//                   e.preventDefault();
//                   setIsBaseUi(!isBaseUi);
//                   setIscurrentState('BaseUi');
//                   updateIconSidebar(e);
//               },
//               stateVariables: isBaseUi,
//               subItems: [
//                   { id: "alerts", label: "Alerts", link: "/ui-alerts", parentId: "baseUi" },
//                   { id: "badges", label: "Badges", link: "/ui-badges", parentId: "baseUi" },
//                   { id: "buttons", label: "Buttons", link: "/ui-buttons", parentId: "baseUi" },
//                   { id: "colors", label: "Colors", link: "/ui-colors", parentId: "baseUi" },
//                   { id: "cards", label: "Cards", link: "/ui-cards", parentId: "baseUi" },
//                   { id: "carousel", label: "Carousel", link: "/ui-carousel", parentId: "baseUi" },
//                   { id: "dropdowns", label: "Dropdowns", link: "/ui-dropdowns", parentId: "baseUi" },
//                   { id: "grid", label: "Grid", link: "/ui-grid", parentId: "baseUi" },
//                   { id: "images", label: "Images", link: "/ui-images", parentId: "baseUi" },
//                   { id: "tabs", label: "Tabs", link: "/ui-tabs", parentId: "baseUi" },
//                   { id: "accordions", label: "Accordion & Collapse", link: "/ui-accordions", parentId: "baseUi" },
//                   { id: "modals", label: "Modals", link: "/ui-modals", parentId: "baseUi" },
//                   { id: "offcanvas", label: "Offcanvas", link: "/ui-offcanvas", parentId: "baseUi" },
//                   { id: "placeholders", label: "Placeholders", link: "/ui-placeholders", parentId: "baseUi" },
//                   { id: "progress", label: "Progress", link: "/ui-progress", parentId: "baseUi" },
//                   { id: "notifications", label: "Notifications", link: "/ui-notifications", parentId: "baseUi" },
//                   { id: "media", label: "Media object", link: "/ui-media", parentId: "baseUi" },
//                   { id: "embedvideo", label: "Embed Video", link: "/ui-embed-video", parentId: "baseUi" },
//                   { id: "typography", label: "Typography", link: "/ui-typography", parentId: "baseUi" },
//                   { id: "lists", label: "Lists", link: "/ui-lists", parentId: "baseUi" },
//                   { id: "links", label: "Links", link: "/ui-links", parentId: "baseUi", badgeColor: "success", badgeName: "New" },
//                   { id: "general", label: "General", link: "/ui-general", parentId: "baseUi" },
//                   { id: "ribbons", label: "Ribbons", link: "/ui-ribbons", parentId: "baseUi" },
//                   { id: "utilities", label: "Utilities", link: "/ui-utilities", parentId: "baseUi" },
//               ],
//           },
//           {
//               id: "advanceUi",
//               label: "Advance UI",
//               icon: "ri-stack-line",
//               link: "/#",
//               click: function (e) {
//                   e.preventDefault();
//                   setIsAdvanceUi(!isAdvanceUi);
//                   setIscurrentState('AdvanceUi');
//                   updateIconSidebar(e);
//               },
//               stateVariables: isAdvanceUi,
//               subItems: [
//                   { id: "nestablelist", label: "Nestable List", link: "/advance-ui-nestable", parentId: "advanceUi" },
//                   { id: "scrollbar", label: "Scrollbar", link: "/advance-ui-scrollbar", parentId: "advanceUi" },
//                   { id: "animation", label: "Animation", link: "/advance-ui-animation", parentId: "advanceUi" },
//                   { id: "swiperslider", label: "Swiper Slider", link: "/advance-ui-swiper", parentId: "advanceUi" },
//                   { id: "ratings", label: "Ratings", link: "/advance-ui-ratings", parentId: "advanceUi" },
//                   { id: "highlight", label: "Highlight", link: "/advance-ui-highlight", parentId: "advanceUi" },
//               ],
//           },
//           {
//               id: "widgets",
//               label: "Widgets",
//               icon: "ri-honour-line",
//               link: "/widgets",
//               click: function (e) {
//                   e.preventDefault();
//                   setIscurrentState('Widgets');
//               }
//           },
//           {
//               id: "forms",
//               label: "Forms",
//               icon: "ri-file-list-3-line",
//               link: "/#",
//               click: function (e) {
//                   e.preventDefault();
//                   setIsForms(!isForms);
//                   setIscurrentState('Forms');
//                   updateIconSidebar(e);
//               },
//               stateVariables: isForms,
//               subItems: [
//                   { id: "basicelements", label: "Basic Elements", link: "/forms-elements", parentId: "forms" },
//                   { id: "formselect", label: "Form Select", link: "/forms-select", parentId: "forms" },
//                   { id: "checkboxsradios", label: "Checkboxs & Radios", link: "/forms-checkboxes-radios", parentId: "forms" },
//                   { id: "pickers", label: "Pickers", link: "/forms-pickers", parentId: "forms" },
//                   { id: "inputmasks", label: "Input Masks", link: "/forms-masks", parentId: "forms" },
//                   { id: "advanced", label: "Advanced", link: "/forms-advanced", parentId: "forms" },
//                   { id: "rangeslider", label: "Range Slider", link: "/forms-range-sliders", parentId: "forms" },
//                   { id: "validation", label: "Validation", link: "/forms-validation", parentId: "forms" },
//                   { id: "wizard", label: "Wizard", link: "/forms-wizard", parentId: "forms" },
//                   { id: "editors", label: "Editors", link: "/forms-editors", parentId: "forms" },
//                   { id: "fileuploads", label: "File Uploads", link: "/forms-file-uploads", parentId: "forms" },
//                   { id: "formlayouts", label: "Form Layouts", link: "/forms-layouts", parentId: "forms" },
//                   { id: "select2", label: "Select2", link: "/forms-select2", parentId: "forms" },
//               ],
//           },
//           {
//               id: "tables",
//               label: "Tables",
//               icon: "ri-layout-grid-line",
//               link: "/#",
//               click: function (e) {
//                   e.preventDefault();
//                   setIsTables(!isTables);
//                   setIscurrentState('Tables');
//                   updateIconSidebar(e);
//               },
//               stateVariables: isTables,
//               subItems: [
//                   { id: "basictables", label: "Basic Tables", link: "/tables-basic", parentId: "tables" },
//                   { id: "listjs", label: "List Js", link: "/tables-listjs", parentId: "tables" },
//                   { id: "reactdatatables", label: "React Datatables", link: "/tables-react", parentId: "tables" },
//               ],
//           },
//           {
//               id: "charts",
//               label: "Charts",
//               icon: "ri-pie-chart-line",
//               link: "/#",
//               click: function (e) {
//                   e.preventDefault();
//                   setIsCharts(!isCharts);
//                   setIscurrentState('Charts');
//                   updateIconSidebar(e);
//               },
//               stateVariables: isCharts,
//               subItems: [
//                   {
//                       id: "apexcharts",
//                       label: "Apexcharts",
//                       link: "/#",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsApex(!isApex);
//                       },
//                       stateVariables: isApex,
//                       childItems: [
//                           { id: 1, label: "Line", link: "/charts-apex-line" },
//                           { id: 2, label: "Area", link: "/charts-apex-area" },
//                           { id: 3, label: "Column", link: "/charts-apex-column" },
//                           { id: 4, label: "Bar", link: "/charts-apex-bar" },
//                           { id: 5, label: "Mixed", link: "/charts-apex-mixed" },
//                           { id: 6, label: "Timeline", link: "/charts-apex-timeline" },
//                           {
//                               id: 7, label: "Range Area",
//                               link: "/charts-apex-range-area",
//                               badgeName: "New",
//                               badgeColor: "success",
//                           },
//                           {
//                               id: 8,
//                               label: "Funnel",
//                               link: "/charts-apex-funnel",
//                               badgeName: "New",
//                               badgeColor: "success",
//                           },
//                           { id: 9, label: "Candlstick", link: "/charts-apex-candlestick" },
//                           { id: 10, label: "Boxplot", link: "/charts-apex-boxplot" },
//                           { id: 11, label: "Bubble", link: "/charts-apex-bubble" },
//                           { id: 12, label: "Scatter", link: "/charts-apex-scatter" },
//                           { id: 13, label: "Heatmap", link: "/charts-apex-heatmap" },
//                           { id: 14, label: "Treemap", link: "/charts-apex-treemap" },
//                           { id: 15, label: "Pie", link: "/charts-apex-pie" },
//                           { id: 16, label: "Radialbar", link: "/charts-apex-radialbar" },
//                           { id: 17, label: "Radar", link: "/charts-apex-radar" },
//                           { id: 18, label: "Polar Area", link: "/charts-apex-polar" },
//                           { id: 19, label: "Slope", link: "/charts-apex-slope", parentId: "charts", badgeColor: "success", badgeName: "New" },
//                       ]
//                   },
//                   { id: "chartjs", label: "Chartjs", link: "/charts-chartjs", parentId: "charts" },
//                   { id: "echarts", label: "Echarts", link: "/charts-echarts", parentId: "charts" },

//               ],
//           },
//           {
//               id: "icons",
//               label: "Icons",
//               icon: "ri-compasses-2-line",
//               link: "/#",
//               click: function (e) {
//                   e.preventDefault();
//                   setIsIcons(!isIcons);
//                   setIscurrentState('Icons');
//                   updateIconSidebar(e);
//               },
//               stateVariables: isIcons,
//               subItems: [
//                   { id: "remix", label: "Remix", link: "/icons-remix", parentId: "icons" },
//                   { id: "boxicons", label: "Boxicons", link: "/icons-boxicons", parentId: "icons" },
//                   { id: "materialdesign", label: "Material Design", link: "/icons-materialdesign", parentId: "icons" },
//                   { id: "lineawesome", label: "Line Awesome", link: "/icons-lineawesome", parentId: "icons" },
//                   { id: "feather", label: "Feather", link: "/icons-feather", parentId: "icons" },
//                   { id: "crypto", label: "Crypto SVG", link: "/icons-crypto", parentId: "icons" },
//               ],
//           },
//           {
//               id: "maps",
//               label: "Maps",
//               icon: "ri-map-pin-line",
//               link: "/#",
//               click: function (e) {
//                   e.preventDefault();
//                   setIsMaps(!isMaps);
//                   setIscurrentState('Maps');
//                   updateIconSidebar(e);
//               },
//               stateVariables: isMaps,
//               subItems: [
//                   { id: "google", label: "Google", link: "/maps-google", parentId: "maps" },
//               ],
//           },
//           {
//               id: "multilevel",
//               label: "Multi Level",
//               icon: "ri-share-line",
//               link: "/#",
//               click: function (e) {
//                   e.preventDefault();
//                   setIsMultiLevel(!isMultiLevel);
//                   setIscurrentState('MuliLevel');
//                   updateIconSidebar(e);
//               },
//               stateVariables: isMultiLevel,
//               subItems: [
//                   { id: "level1.1", label: "Level 1.1", link: "/#", parentId: "multilevel" },
//                   {
//                       id: "level1.2",
//                       label: "Level 1.2",
//                       link: "/#",
//                       isChildItem: true,
//                       click: function (e) {
//                           e.preventDefault();
//                           setIsLevel1(!isLevel1);
//                       },
//                       stateVariables: isLevel1,
//                       childItems: [
//                           { id: 1, label: "Level 2.1", link: "/#" },
//                           {
//                               id: "level2.2",
//                               label: "Level 2.2",
//                               link: "/#",
//                               isChildItem: true,
//                               click: function (e) {
//                                   e.preventDefault();
//                                   setIsLevel2(!isLevel2);
//                               },
//                               stateVariables: isLevel2,
//                               childItems: [
//                                   { id: 1, label: "Level 3.1", link: "/#" },
//                                   { id: 2, label: "Level 3.2", link: "/#" },
//                               ]
//                           },
//                       ]
//                   },
//               ],
//           },
//       ],

//          }]
//       return<React.Fragment>{menuItems}</React.Fragment>;
//         };
//   export default Navdata;

 //   import React, { useEffect, useState } from 'react';
   // import axios from 'axios';

    //const Navdata = () => {
       // const [menuData, setMenuData] = useState([]);
// //     const [openMenus, setOpenMenus] = useState({});

// //     // Fetch menu data from the backend
// //     useEffect(() => {
// //         axios.get("http://localhost:8081/", {
// //             params: { t: new Date().getTime() } // Adding timestamp to ensure unique request URL
// //         })
// //         .then(response => {
// //             if (Array.isArray(response.data)) {
// //                 setMenuData(response.data);
// //             } else {
// //                 console.error("Invalid menu data format:", response.data);
// //                 setMenuData([]);
// //             }
// //         })
// //         .catch(error => {
// //             console.error('Error fetching menu data:', error);
// //             setMenuData([]);
// //         });
       
// //     }, []);

// //     // Toggle submenu visibility
// //     const toggleMenu = (id) => {
// //         setOpenMenus(prevState => ({
// //             ...prevState,
// //             [id]: !prevState[id]
// //         }));
// //     };

// //     // Recursive menu rendering with safeguards
// //     const renderMenu = (items) => {
// //         // Check if items is an array
// //         if (!Array.isArray(items)) return null;

// //         return items.map(item => (
// //             <li key={item.id}>
// //                 <a href={item.link} onClick={(e) => { e.preventDefault(); toggleMenu(item.id); }}>
// //                     {item.label}
// //                 </a>
// //                 {/* Check if subItems exists and is an array */}
// //                 {Array.isArray(item.subItems) && item.subItems.length > 0 && openMenus[item.id] && (
// //                     <ul>{renderMenu(item.subItems)}</ul>
// //                 )}
// //             </li>
// //         ));
// //     };

//       return (
//           <div>
//               <ul>{renderMenu(menuData)}</ul>
//           </div>
//       );
//   };

//   export default Navdata;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Menu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [isApps, setIsApps] = useState(false);
//   const [isCalender, setCalender] = useState(false);
//   const [isEmail, setEmail] = useState(false);
//   const [isEcommerce, setIsEcommerce] = useState(false);

//   useEffect(() => {
//     // Replace with your actual API endpoint
//     axios.get('http://localhost:8081/dashboard')
//       .then(response => {
//         setMenuItems(response.data.menuItems); // Assuming the response structure
//       })
//       .catch(error => {
//         console.error('Error fetching menu data:', error);
//       });
//   }, []);

//   const handleMenuClick = (id, clickFunction) => {
//     // Execute any click function provided in the menu data (e.g., toggle states)
//     clickFunction && clickFunction(id);
//   };

//   return (
//     <div className="menu">
//       <ul>
//         {menuItems.map(item => (
//           <li key={item.id}>
//             <a href={item.link} onClick={(e) => {
//               e.preventDefault();
//               handleMenuClick(item.id, item.click);
//             }}>
//               {item.icon && <i className={item.icon}></i>}
//               {item.label}
//             </a>
//             {item.subItems && (
//               <ul>
//                 {item.subItems.map(subItem => (
//                   <li key={subItem.id}>
//                     <a href={subItem.link} onClick={(e) => {
//                       e.preventDefault();
//                       handleMenuClick(subItem.id, subItem.click);
//                     }}>
//                       {subItem.label}
//                     </a>
//                     {subItem.subItems && (
//                       <ul>
//                         {subItem.subItems.map(childItem => (
//                           <li key={childItem.id}>
//                             <a href={childItem.link}>
//                               {childItem.label}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// //export default Menu;



import React, { useEffect, useState } from "react";
import axios from 'axios';

const Navdata = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [openMenus, setOpenMenus] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // ✅ Fetch menu data from Spring Boot backend
    
    // ✅ Toggle menu open/close
    const toggleMenu = (id, parentId = null) => {
        setOpenMenus((prev) => {
          const newState = { ...prev };
      
          if (parentId) {
            newState[parentId] = true; // Keep parent open
          }
      
          newState[id] = !prev[id]; // Toggle clicked menu
          return newState;
        });
      };
      

    // ✅ Recursive menu renderer with data validation
    const renderMenuItems = (items) => {
        if (!Array.isArray(items)) return null;

        return items.map((item) => (
            <li key={item.id}>
                <a 
                    href={item.link || "#"} 
                    onClick={(e) => {
                        e.preventDefault();
                        if (item.subItems.length) toggleMenu(item.id);
                    }}
                >
                    {item.icon && <i className={item.icon}></i>}
                    <span>{item.label}</span>

                    {/* ✅ Arrow icon for submenus */}
                    {item.subItems.length > 0 && (
                        <span 
                            className={`menu-arrow ${openMenus[item.id] ? 'open' : ''}`} 
                            onClick={() => toggleMenu(item.id)}
                            style={{ cursor: 'pointer', marginLeft: '8px' }}
                        >
                            {openMenus[item.id] ? '▼' : '▶'}
                        </span>
                    )}
                </a>

                {/* ✅ Render sub-items if open */}
                {item.subItems.length > 0 && openMenus[item.id] && (
                    <ul className="sub-menu" style={{ marginLeft: '20px' ,color:"white"}}>
                        {renderMenuItems(item.subItems)}
                        
                    </ul>
                    
                )
                }
                
            </li>
            
        ));
  
    };

    // ✅ Handle loading and error states
    if (loading) return <p>Loading menu...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;

    return (
        <ul className="navbar-nav" id="navbar-nav">
            {renderMenuItems(menuItems)}
        </ul>
    );
};

export default Navdata;
