// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
// import { bestSellingProducts } from "../../common/data";
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Dashboard.css';
// import { Line, Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const BestSellingProducts = () => {
//     return (
//         // 
//         <>
//        <h1>Rohit</h1>
    
//     const lineData = {
//     labels: ['2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
//     datasets: [
//       {
//         label: 'Number of lions',
//         data: [2, 5, 3, 8, 6, 12, 4, 0, 6, 1, 3, 2],
//         borderColor: '#4169e1',
//         backgroundColor: 'rgba(65, 105, 225, 0.1)',
//         tension: 0.3,
//         pointRadius: 4,
//         pointBackgroundColor: 'white',
//         pointBorderColor: '#4169e1',
//         pointBorderWidth: 2,
//       },
//     ],
//   };

//   // Data for bar chart
//   const barData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'Blue Data',
//         data: [2500, 3200, 2700, 3000, 2800],
//         backgroundColor: '#4169e1',
//       },
//       {
//         label: 'Green Data',
//         data: [3200, 2500, 3300, 2000, 3000],
//         backgroundColor: '#20b2aa',
//       },
//     ],
//   };

//   // Chart options
//   const lineOptions = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 14,
//         ticks: {
//           stepSize: 2,
//         },
//       },
//     },
//     maintainAspectRatio: false,
//   };

//   const barOptions = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 3500,
//         ticks: {
//           stepSize: 500,
//         },
//       },
//     },
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="content-container">
//         <div className="trusted-badge">
//           <span className="icon">⬡</span> 100% TRUSTED PLATFORM
//         </div>
        
//         <h1 className="main-heading">
//           CREATE CHARTS &<br />
//           DASHBOARD <span className="highlight">EFFORTLESSLY</span>
//         </h1>
        
//         <p className="subtitle">
//           Visualize your data using the powerful and easy to use charting tools!
//         </p>
        
//         <div className="action-buttons">
//           <button className="btn create-btn">
//             Create New chart <span className="icon">→</span>
//           </button>
//           <button className="btn call-btn">
//             Call Now <span className="icon">📞</span>
//           </button>
//         </div>
        
//         <div className="chart-type-selector">
//           <button className="chart-type-btn pie-btn">
//             <span className="icon">📊</span> Pie Chart
//           </button>
//           <button className="chart-type-btn bar-btn active">
//             <span className="icon">📊</span> Bar Chart
//           </button>
//           <button className="chart-type-btn line-btn">
//             <span className="icon">📈</span> Line Chart
//           </button>
//         </div>
        
//         <div className="charts-container">
//           <div className="chart-card">
//             <h3 className="chart-title">Number of lions</h3>
//             <div className="chart-wrapper">
//               <Line data={lineData} options={lineOptions} height={240} />
//             </div>
//           </div>
          
//           <div className="chart-card">
//             <h3 className="chart-title">Bar Chart</h3>
//             <div className="chart-wrapper">
//               <Bar data={barData} options={barOptions} height={240} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
//         </>
//     );
// };

// export default BestSellingProducts;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './maindashboard.css';
// import { Line, Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const Dashboard = () => {
//   // Data for line chart (lions)
//   const lineData = {
//     labels: ['2008', '2010', '2012', '2014', '2016', '2018', '2020', '2022', '2024'],
//     datasets: [
//       {
//         label: 'Number of lions',
//         data: [2, 5, 3, 8, 6, 12, 4, 0, 6, 1, 3, 2],
//         borderColor: '#4169e1',
//         backgroundColor: 'rgba(65, 105, 225, 0.1)',
//         tension: 0.3,
//         pointRadius: 4,
//         pointBackgroundColor: 'white',
//         pointBorderColor: '#4169e1',
//         pointBorderWidth: 2,
//       },
//     ],
//   };

//   // Data for bar chart
//   const barData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
//     datasets: [
//       {
//         label: 'Blue Data',
//         data: [2500, 3200, 2700, 3000, 2800],
//         backgroundColor: '#4169e1',
//       },
//       {
//         label: 'Green Data',
//         data: [3200, 2500, 3300, 2000, 3000],
//         backgroundColor: '#20b2aa',
//       },
//     ],
//   };

//   // Chart options
//   const lineOptions = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 14,
//         ticks: {
//           stepSize: 2,
//         },
//       },
//     },
//     maintainAspectRatio: false,
//   };

//   const barOptions = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 3500,
//         ticks: {
//           stepSize: 500,
//         },
//       },
//     },
//     maintainAspectRatio: false,
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="content-container">
        
        
//         <h1 className="main-heading">SHRI. SOMESHWAR SAHAKARI KARKHANE NIYAMYIT
//         <br />SUGAR
//         <span className="highlight"></span>
//         </h1>
        
//         <p className="subtitle">
//         श्री सोमेश्वर सहकारी साखर कारखाना लि.,सोमेश्वरनगर
//         </p>
        
//         <div className="action-buttons">
//           <button className="btn create-btn">
//             Create New chart <span className="icon">→</span>
//           </button>
//           <button className="btn call-btn">
//             Call Now <span className="icon">📞</span>
//           </button>
//         </div>
        
//         <div className="chart-type-selector">
//           <button className="chart-type-btn pie-btn">
//             <span className="icon">📊</span> Pie Chart
//           </button>
//           <button className="chart-type-btn bar-btn active">
//             <span className="icon">📊</span> Bar Chart
//           </button>
//           <button className="chart-type-btn line-btn">
//             <span className="icon">📈</span> Line Chart
//           </button>
//         </div>
        
//         <div className="charts-container">
//           <div className="chart-card">
//             <h3 className="chart-title">Number of lions</h3>
//             <div className="chart-wrapper">
//               <Line data={lineData} options={lineOptions} height={240} />
//             </div>
//           </div>
          
//           <div className="chart-card">
//             <h3 className="chart-title">Bar Chart</h3>
//             <div className="chart-wrapper">
//               <Bar data={barData} options={barOptions} height={240} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Line, Bar } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// // Register ChartJS components
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );
// import './maindashboard.css';

// const Dashboard = () => {
//   const [showFullText, setShowFullText] = useState(false);
//   const fullHeadingText = "SHRI. SOMESHWAR SAHAKARI KARKHANE NIYAMYIT";
//   const [displayText, setDisplayText] = useState("");
//   const [isBirthday, setIsBirthday] = useState(false);
//   const [showBirthdayDialog, setShowBirthdayDialog] = useState(false);
//   const [showFestivalWishes, setShowFestivalWishes] = useState(false);
//   const [festivalMessage, setFestivalMessage] = useState("");
//   const [showWishesText, setShowWishesText] = useState(false);
//   const [wishesText, setWishesText] = useState("");
//   const [currentWishIndex, setCurrentWishIndex] = useState(0);
//   const [showMarquee, setShowMarquee] = useState(false);
//   const [marqueeText, setMarqueeText] = useState("");

//   // Get user details from localStorage
//   const name = localStorage.getItem('name') || "User";
//   const dob = localStorage.getItem('dob');

//   // Wishes text arrays
//   const birthdayWishes = [
//     `Happy Birthday, ${name}! Wishing you a fantastic day filled with joy and happiness!`,
//     `May your special day be filled with memories and love. Happy Birthday, ${name}!`,
//     `Wishing you health, wealth, and happiness on your birthday and every day, ${name}!`
//   ];

//   const festivalWishes = [
//     "Merry Christmas! Wishing you and your family a joyful holiday season!",
//     "Happy Diwali! May this festival of lights bring joy and prosperity to your life!",
//     "Happy New Year! Wishing you success and happiness in the coming year!"
//   ];

//   // Check for birthday and festival wishes
//   useEffect(() => {
//     const today = new Date();
//     const userDob = dob ? new Date(dob + "T00:00:00Z") : null; // Parse dob with UTC timezone

//     // Check if today is the user's birthday
//     if (userDob && 
//       today.getMonth() === userDob.getMonth() &&
//       today.getDate() === userDob.getDate()
//     ) {
//       setIsBirthday(true);
//       setShowBirthdayDialog(true);
//     }

//     // Check for festival (example: Christmas)
//     const festivalDate = new Date("2023-12-25T00:00:00Z"); // Add time and UTC timezone
//     if (
//       today.getMonth() === festivalDate.getMonth() &&
//       today.getDate() === festivalDate.getDate()
//     ) {
//       setFestivalMessage("Merry Christmas! Wishing you and your family a joyful holiday season!");
//       setShowFestivalWishes(true);
//     }
//   }, [dob, name]);

//   // Typewriter effect for the heading
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowFullText(true);
//     }, 500);

//     let index = 0;
//     const textInterval = setInterval(() => {
//       if (index <= fullHeadingText.length) {
//         setDisplayText(fullHeadingText.substring(0, index));
//         index++;
//       } else {
//         clearInterval(textInterval);
        
//         // After main heading is completed, check if we should show wishes
//         if (isBirthday || showFestivalWishes) {
//           setShowWishesText(true);
//         }
//       }
//     }, 100);

//     return () => {
//       clearTimeout(timer);
//       clearInterval(textInterval);
//     };
//   }, [fullHeadingText, isBirthday, showFestivalWishes]);

//   // Effect for displaying running wishes text after main heading
//   useEffect(() => {
//     if (!showWishesText) return;
    
//     // Determine which wishes text to show (birthday takes precedence)
//     const currentWishes = isBirthday ? birthdayWishes : festivalWishes;
    
//     // Set up interval to cycle through different wishes
//     const wishesInterval = setInterval(() => {
//       setCurrentWishIndex((prevIndex) => (prevIndex + 1) % currentWishes.length);
//     }, 3000);
    
//     // Set initial wishes text
//     setWishesText(currentWishes[currentWishIndex]);
    
//     // Update wishes text when currentWishIndex changes
//     return () => clearInterval(wishesInterval);
//   }, [showWishesText, currentWishIndex, isBirthday, birthdayWishes, festivalWishes]);

//   // Update wishes text when currentWishIndex changes
//   useEffect(() => {
//     if (!showWishesText) return;
    
//     const currentWishes = isBirthday ? birthdayWishes : festivalWishes;
//     setWishesText(currentWishes[currentWishIndex]);
//   }, [currentWishIndex, isBirthday, birthdayWishes, festivalWishes, showWishesText]);

//   // Close birthday dialog handler
//   const handleCloseBirthdayDialog = () => {
//     setShowBirthdayDialog(false);
//     // Set marquee text and show it
//     setMarqueeText(birthdayWishes.join(' ★ '));
//     setShowMarquee(true);
//   };

//   // Close festival dialog handler
//   const handleCloseFestivalDialog = () => {
//     setShowFestivalWishes(false);
//     // Set marquee text and show it
//     setMarqueeText(festivalWishes.join(' ★ '));
//     setShowMarquee(true);
//   };

//   // Data for line chart (sugar production)
//   const lineData = {
//     labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
//     datasets: [
//       {
//         label: 'Sugar Production (Tons)',
//         data: [42500, 56200, 48900, 60300, 52700, 65800, 58200, 70500, 64300, 75200],
//         borderColor: '#405189',
//         backgroundColor: 'rgba(64, 81, 137, 0.1)',
//         tension: 0.3,
//         pointRadius: 4,
//         pointBackgroundColor: 'white',
//         pointBorderColor: '#405189',
//         pointBorderWidth: 2,
//         fill: true,
//       },
//     ],
//   };

//   // Data for bar chart (sugarcane crush per month)
//   const barData = {
//     labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
//     datasets: [
//       {
//         label: 'Sugarcane Crushed (Tons)',
//         data: [125000, 182000, 195000, 178000, 142000],
//         backgroundColor: 'rgba(64, 81, 137, 0.8)',
//         borderRadius: 6,
//       },
//       {
//         label: 'Recovery Rate (%)',
//         data: [10.2, 11.5, 12.3, 11.8, 10.5],
//         backgroundColor: 'rgba(81, 86, 190, 0.8)',
//         borderRadius: 6,
//       },
//     ],
//   };

//   // Chart options
//   const lineOptions = {
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//         labels: {
//           boxWidth: 15,
//           usePointStyle: true,
//           pointStyle: 'circle',
//           padding: 20,
//           font: {
//             family: "'Poppins', sans-serif",
//             size: 12
//           }
//         }
//       },
//       tooltip: {
//         backgroundColor: 'rgba(0, 0, 0, 0.8)',
//         titleFont: {
//           family: "'Poppins', sans-serif",
//           size: 13
//         },
//         bodyFont: {
//           family: "'Poppins', sans-serif",
//           size: 12
//         },
//         padding: 12,
//         cornerRadius: 8,
//         callbacks: {
//           label: function (context) {
//             return `Production: ${context.raw.toLocaleString()} Tons`;
//           },
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 80000,
//         grid: {
//           color: 'rgba(200, 200, 200, 0.2)',
//           drawBorder: false,
//         },
//         ticks: {
//           stepSize: 10000,
//           font: {
//             family: "'Poppins', sans-serif",
//             size: 11
//           },
//           callback: function (value) {
//             return value.toLocaleString();
//           },
//         },
//         title: {
//           display: true,
//           text: 'Tons',
//           font: {
//             family: "'Poppins', sans-serif",
//             size: 12,
//             weight: '500'
//           }
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//           drawBorder: false,
//         },
//         ticks: {
//           font: {
//             family: "'Poppins', sans-serif",
//             size: 11
//           }
//         }
//       }
//     },
//     maintainAspectRatio: false,
//   };

//   const barOptions = {
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//         labels: {
//           boxWidth: 15,
//           usePointStyle: true,
//           pointStyle: 'circle',
//           padding: 20,
//           font: {
//             family: "'Poppins', sans-serif",
//             size: 12
//           }
//         }
//       },
//       tooltip: {
//         backgroundColor: 'rgba(0, 0, 0, 0.8)',
//         titleFont: {
//           family: "'Poppins', sans-serif",
//           size: 13
//         },
//         bodyFont: {
//           family: "'Poppins', sans-serif",
//           size: 12
//         },
//         padding: 12,
//         cornerRadius: 8,
//         callbacks: {
//           label: function (context) {
//             if (context.datasetIndex === 0) {
//               return `Crushed: ${context.raw.toLocaleString()} Tons`;
//             } else {
//               return `Recovery: ${context.raw}%`;
//             }
//           },
//         },
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         max: 200000,
//         position: 'left',
//         grid: {
//           color: 'rgba(200, 200, 200, 0.2)',
//           drawBorder: false,
//         },
//         ticks: {
//           stepSize: 50000,
//           font: {
//             family: "'Poppins', sans-serif",
//             size: 11
//           },
//           callback: function (value) {
//             return value.toLocaleString();
//           },
//         },
//         title: {
//           display: true,
//           text: 'Crushed (Tons)',
//           font: {
//             family: "'Poppins', sans-serif",
//             size: 12,
//             weight: '500'
//           }
//         },
//       },
//       y1: {
//         beginAtZero: true,
//         max: 15,
//         position: 'right',
//         grid: {
//           drawOnChartArea: false,
//           drawBorder: false,
//         },
//         ticks: {
//           stepSize: 3,
//           font: {
//             family: "'Poppins', sans-serif",
//             size: 11
//           },
//           callback: function (value) {
//             return value + '%';
//           },
//         },
//         title: {
//           display: true,
//           text: 'Recovery (%)',
//           font: {
//             family: "'Poppins', sans-serif",
//             size: 12,
//             weight: '500'
//           }
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//           drawBorder: false,
//         },
//         ticks: {
//           font: {
//             family: "'Poppins', sans-serif",
//             size: 11
//           }
//         }
//       }
//     },
//     maintainAspectRatio: false,
//   };

//   // Card data for sugar factory metrics
//   const cardData = [
//     { title: 'Farmers Registered', value: '12,856', icon: '👨‍🌾', change: '+8.24%', color: '#405189' },
//     { title: 'Revenue', value: '₹256.7 Cr', icon: '💰', change: '+12.57%', color: '#0ab39c' },
//     { title: 'Avg. Recovery', value: '11.2%', icon: '📈', change: '+0.8%', color: '#5156be' },
//     { title: 'Cane Crushed', value: '8.22L MT', icon: '🌱', change: '+15.08%', color: '#f7b84b' },
//   ];

//   return (
//     <div className="dashboard-container">
//       {/* Birthday Dialog */}
//       {showBirthdayDialog && (
//         <div className="modern-dialog birthday-dialog-overlay">
//           <div className="modern-dialog-content birthday-dialog-content">
//             <div className="dialog-header">
//               <div className="dialog-emoji">🎂</div>
//               <h3>Happy Birthday, {name}!</h3>
//             </div>
//             <div className="dialog-body">
//               <div className="celebration-animation">
//                 <div className="confetti confetti-1"></div>
//                 <div className="confetti confetti-2"></div>
//                 <div className="confetti confetti-3"></div>
//                 <div className="confetti confetti-4"></div>
//                 <div className="confetti confetti-5"></div>
//                 <div className="confetti confetti-6"></div>
//               </div>
//               <p>On this special day, we wish you a year filled with success, happiness, and prosperity!</p>
//               <div className="birthday-cake">
//                 <div className="cake-top"></div>
//                 <div className="cake-middle"></div>
//                 <div className="cake-bottom"></div>
//                 <div className="candle">
//                   <div className="flame"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="dialog-actions">
//               <button className="dialog-btn thank-you-btn" onClick={handleCloseBirthdayDialog}>
//                 Thank You! <span className="btn-icon">🎉</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Festival Wishes Dialog */}
//       {showFestivalWishes && (
//         <div className="modern-dialog festival-dialog-overlay">
//           <div className="modern-dialog-content festival-dialog-content">
//             <div className="dialog-header">
//               <div className="dialog-emoji">✨</div>
//               <h3>Festival Wishes</h3>
//             </div>
//             <div className="dialog-body">
//               <div className="festival-animation">
//                 <div className="festival-light light-1"></div>
//                 <div className="festival-light light-2"></div>
//                 <div className="festival-light light-3"></div>
//                 <div className="festival-light light-4"></div>
//                 <div className="festival-light light-5"></div>
//               </div>
//               <p>{festivalMessage}</p>
//               <div className="festival-decoration">
//                 <div className="diya-container">
//                   <div className="diya">
//                     <div className="diya-flame"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="dialog-actions">
//               <button className="dialog-btn thank-you-btn" onClick={handleCloseFestivalDialog}>
//                 Thank You! <span className="btn-icon">🪔</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="content-container">
//         <div className="dashboard-header">
//           <div className="logo-container">
//             {/* <div className="factory-logo">
//               <span className="factory-icon">🏭</span>
//             </div> */}
//           </div>
//           <div className="main-heading-container">
//             <h1 className="main-heading gradient-text">
//               Someshwar Sahakari Sakhar Karkhana Ltd.
//             </h1>
//           </div>

//           <p className="subtitle">
//             श्री सोमेश्वर सहकारी साखर कारखाना लि.,सोमेश्वर
//           </p>
//         </div>

//         {/* Marquee section for wishes - displayed after Thank You button is clicked */}
//         {showMarquee && (
//           <div className="marquee-container" >
//             <div className="marquee-wrapper">
//               <marquee behavior="scroll" direction="left" scrollamount="">
//                 <span className="marquee-text">{marqueeText}</span>
//               </marquee>
//             </div>
//           </div>
//         )}

//         <div className="action-buttons">
//           <button className="btn create-btn">
//             Generate Season Report <span className="icon">→</span>
//           </button>
//         </div>

//         <div className="stats-overview">
//           <div className="stats-cards">
//             {cardData.map((card, index) => (
//               <div key={index} className="metric-card" onClick={() => console.log(`Card ${index} clicked`)}>
//                 <div className="card-icon" style={{ backgroundColor: `${card.color}20`, color: card.color }}>
//                   <span>{card.icon}</span>
//                 </div>
//                 <div className="card-content">
//                   <div className="card-title">{card.title}</div>
//                   <div className="card-value" style={{ color: card.color }}>{card.value}</div>
//                   <div className={`card-change ${card.change.startsWith('+') ? 'positive' : 'negative'}`}>
//                     {card.change}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="charts-container">
//           <div className="chart-card line-chart">
//             <h3 className="chart-title">Annual Sugar Production</h3>
//             <div className="chart-wrapper">
//               <Line data={lineData} options={lineOptions} height={240} />
//             </div>
//           </div>

//           <div className="chart-card bar-chart-section">
//             <h3 className="chart-title">Crushing Season 2023-24</h3>
//             <div className="chart-wrapper">
//               <Bar data={barData} options={barOptions} height={240} />
//             </div>
//           </div>
//         </div>

//         <div className="season-highlights mt-4">
//           <div className="row">
//             <div className="col-md-6">
//               <div className="chart-card highlight-card">
//                 <h3 className="chart-title">Current Season Highlights</h3>
//                 <div className="season-stats p-3">
//                   <div className="stat-row">
//                     <span className="stat-label">Crushing Started</span>
//                     <strong className="stat-value">Nov 15, 2023</strong>
//                   </div>
//                   <div className="stat-row">
//                     <span className="stat-label">Crushing Capacity</span>
//                     <strong className="stat-value">5,000 TCD</strong>
//                   </div>
//                   <div className="stat-row">
//                     <span className="stat-label">Avg. Sugar Recovery</span>
//                     <strong className="stat-value">11.2%</strong>
//                   </div>
//                   <div className="stat-row">
//                     <span className="stat-label">Power Generation</span>
//                     <strong className="stat-value">22 MW</strong>
//                   </div>
//                   <div className="stat-row">
//                     <span className="stat-label">Ethanol Production</span>
//                     <strong className="stat-value">60 KLPD</strong>
//                   </div>
//                   <div className="stat-row">
//                     <span className="stat-label">Total Area Under Cane</span>
//                     <strong className="stat-value">12,450 Hectares</strong>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="chart-card payment-card">
//                 <h3 className="chart-title">Payments to Farmers</h3>
//                 <div className="chart-wrapper">
//                   <div className="farmer-payment-status p-3">
//                     <div className="progress-container mb-4">
//                       <div className="progress-header">
//                         <span className="progress-label">FRP Payment Status</span>
//                         <strong className="progress-value">₹ 182.5 Cr</strong>
//                       </div>
//                       <div className="progress">
//                         <div
//                           className="progress-bar"
//                           role="progressbar"
//                           style={{ width: "92%" }}
//                           aria-valuenow="92"
//                           aria-valuemin="0"
//                           aria-valuemax="100"
//                         >
//                           92%
//                         </div>
//                       </div>
//                     </div>
//                     <div className="progress-container mb-4">
//                       <div className="progress-header">
//                         <span className="progress-label">Total Cane Payments (Target)</span>
//                         <strong className="progress-value">₹ 198.7 Cr</strong>
//                       </div>
//                       <div className="progress">
//                         <div
//                           className="progress-bar target-bar"
//                           role="progressbar"
//                           style={{ width: "100%" }}
//                           aria-valuenow="100"
//                           aria-valuemin="0"
//                           aria-valuemax="100"
//                         >
//                           100%
//                         </div>
//                       </div>
//                     </div>
//                     <div className="farmer-stats">
//                       <div className="stat-block">
//                         <div className="stat-value">₹ 2,850</div>
//                         <div className="stat-label">Avg. Rate per Ton</div>
//                       </div>
//                       <div className="stat-block">
//                         <div className="stat-value">7 Days</div>
//                         <div className="stat-label">Avg. Payment Time</div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;




import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './maindashboard.css';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [showFullText, setShowFullText] = useState(false);
  const fullHeadingText = "SHRI. SOMESHWAR SAHAKARI KARKHANE NIYAMYIT";
  const [displayText, setDisplayText] = useState("");
  const [isBirthday, setIsBirthday] = useState(false);
  const [showBirthdayDialog, setShowBirthdayDialog] = useState(false);
  const [showFestivalWishes, setShowFestivalWishes] = useState(false);
  const [festivalMessage, setFestivalMessage] = useState("");
  const [showWishesText, setShowWishesText] = useState(false);
  const [wishesText, setWishesText] = useState("");
  const [currentWishIndex, setCurrentWishIndex] = useState(0);
  const [showMarquee, setShowMarquee] = useState(false);
  const [marqueeText, setMarqueeText] = useState("");

  // Get user details from localStorage
  const name = localStorage.getItem('name') || "User";
  const dob = localStorage.getItem('dob');

  // Wishes text arrays
  const birthdayWishes = [
    `Happy Birthday, ${name}! Wishing you a fantastic day filled with joy and happiness!`,
    `May your special day be filled with memories and love. Happy Birthday, ${name}!`,
    `Wishing you health, wealth, and happiness on your birthday and every day, ${name}!`
  ];

  const festivalWishes = [
    "Merry Christmas! Wishing you and your family a joyful holiday season!",
    "Happy Diwali! May this festival of lights bring joy and prosperity to your life!",
    "Happy New Year! Wishing you success and happiness in the coming year!"
  ];

  // Check for birthday and festival wishes
 // Check for birthday and festival wishes
// Check for birthday and festival wishes
// Check for birthday and festival wishes
useEffect(() => {
  const today = new Date();
  const userDob = dob ? new Date(dob + "T00:00:00Z") : null; // Parse dob with UTC timezone
  
  // Get login status
  const isJustLoggedIn = localStorage.getItem('justLoggedIn');
  
  // Check if today is the user's birthday AND user has just logged in
  if (userDob && 
    today.getMonth() === userDob.getMonth() &&
    today.getDate() === userDob.getDate() &&
    isJustLoggedIn === 'true'
  ) {
    setIsBirthday(true);
    setShowBirthdayDialog(true);
    // Reset login flag after showing birthday dialog
    localStorage.setItem('justLoggedIn', 'false');
  }

  // Similarly for festival wishes
  const festivalDate = new Date("2023-12-25T00:00:00Z"); // Add time and UTC timezone
  
  if (
    today.getMonth() === festivalDate.getMonth() &&
    today.getDate() === festivalDate.getDate() &&
    isJustLoggedIn === 'true'
  ) {
    setFestivalMessage("Merry Christmas! Wishing you and your family a joyful holiday season!");
    setShowFestivalWishes(true);
    // Reset login flag after showing festival wishes
    localStorage.setItem('justLoggedIn', 'false');
  }
}, [dob, name]);

  // Typewriter effect for the heading
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFullText(true);
    }, 500);

    let index = 0;
    const textInterval = setInterval(() => {
      if (index <= fullHeadingText.length) {
        setDisplayText(fullHeadingText.substring(0, index));
        index++;
      } else {
        clearInterval(textInterval);
        
        // After main heading is completed, check if we should show wishes
        if (isBirthday || showFestivalWishes) {
          setShowWishesText(true);
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    };
  }, [fullHeadingText, isBirthday, showFestivalWishes]);

  // Effect for displaying running wishes text after main heading
  useEffect(() => {
    if (!showWishesText) return;
    
    // Determine which wishes text to show (birthday takes precedence)
    const currentWishes = isBirthday ? birthdayWishes : festivalWishes;
    
    // Set up interval to cycle through different wishes
    const wishesInterval = setInterval(() => {
      setCurrentWishIndex((prevIndex) => (prevIndex + 1) % currentWishes.length);
    }, 3000);
    
    // Set initial wishes text
    setWishesText(currentWishes[currentWishIndex]);
    
    // Update wishes text when currentWishIndex changes
    return () => clearInterval(wishesInterval);
  }, [showWishesText, currentWishIndex, isBirthday, birthdayWishes, festivalWishes]);

  // Update wishes text when currentWishIndex changes
  useEffect(() => {
    if (!showWishesText) return;
    
    const currentWishes = isBirthday ? birthdayWishes : festivalWishes;
    setWishesText(currentWishes[currentWishIndex]);
  }, [currentWishIndex, isBirthday, birthdayWishes, festivalWishes, showWishesText]);

  // Close birthday dialog handler
  const handleCloseBirthdayDialog = () => {
    setShowBirthdayDialog(false);
    // Set marquee text and show it
    setMarqueeText(birthdayWishes.join(' ★ '));
    setShowMarquee(true);
  };

  // Close festival dialog handler
  const handleCloseFestivalDialog = () => {
    setShowFestivalWishes(false);
    // Set marquee text and show it
    setMarqueeText(festivalWishes.join(' ★ '));
    setShowMarquee(true);
  };

  // Data for line chart (sugar production)
  const lineData = {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: 'Sugar Production (Tons)',
        data: [42500, 56200, 48900, 60300, 52700, 65800, 58200, 70500, 64300, 75200],
        borderColor: '#405189',
        backgroundColor: 'rgba(64, 81, 137, 0.1)',
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: 'white',
        pointBorderColor: '#405189',
        pointBorderWidth: 2,
        fill: true,
      },
    ],
  };

  // Data for bar chart (sugarcane crush per month)
  const barData = {
    labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
    datasets: [
      {
        label: 'Sugarcane Crushed (Tons)',
        data: [125000, 182000, 195000, 178000, 142000],
        backgroundColor: 'rgba(64, 81, 137, 0.8)',
        borderRadius: 6,
      },
      {
        label: 'Recovery Rate (%)',
        data: [10.2, 11.5, 12.3, 11.8, 10.5],
        backgroundColor: 'rgba(81, 86, 190, 0.8)',
        borderRadius: 6,
      },
    ],
  };

  // Chart options
  const lineOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 15,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            family: "'Poppins', sans-serif",
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: "'Poppins', sans-serif",
          size: 13
        },
        bodyFont: {
          family: "'Poppins', sans-serif",
          size: 12
        },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: function (context) {
            return `Production: ${context.raw.toLocaleString()} Tons`;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 80000,
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
          drawBorder: false,
        },
        ticks: {
          stepSize: 10000,
          font: {
            family: "'Poppins', sans-serif",
            size: 11
          },
          callback: function (value) {
            return value.toLocaleString();
          },
        },
        title: {
          display: true,
          text: 'Tons',
          font: {
            family: "'Poppins', sans-serif",
            size: 12,
            weight: '500'
          }
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "'Poppins', sans-serif",
            size: 11
          }
        }
      }
    },
    maintainAspectRatio: false,
  };

  const barOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          boxWidth: 15,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          font: {
            family: "'Poppins', sans-serif",
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          family: "'Poppins', sans-serif",
          size: 13
        },
        bodyFont: {
          family: "'Poppins', sans-serif",
          size: 12
        },
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: function (context) {
            if (context.datasetIndex === 0) {
              return `Crushed: ${context.raw.toLocaleString()} Tons`;
            } else {
              return `Recovery: ${context.raw}%`;
            }
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 200000,
        position: 'left',
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
          drawBorder: false,
        },
        ticks: {
          stepSize: 50000,
          font: {
            family: "'Poppins', sans-serif",
            size: 11
          },
          callback: function (value) {
            return value.toLocaleString();
          },
        },
        title: {
          display: true,
          text: 'Crushed (Tons)',
          font: {
            family: "'Poppins', sans-serif",
            size: 12,
            weight: '500'
          }
        },
      },
      y1: {
        beginAtZero: true,
        max: 15,
        position: 'right',
        grid: {
          drawOnChartArea: false,
          drawBorder: false,
        },
        ticks: {
          stepSize: 3,
          font: {
            family: "'Poppins', sans-serif",
            size: 11
          },
          callback: function (value) {
            return value + '%';
          },
        },
        title: {
          display: true,
          text: 'Recovery (%)',
          font: {
            family: "'Poppins', sans-serif",
            size: 12,
            weight: '500'
          }
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            family: "'Poppins', sans-serif",
            size: 11
          }
        }
      }
    },
    maintainAspectRatio: false,
  };

  // Card data for sugar factory metrics
  const cardData = [
    { title: 'Farmers Registered', value: '12,856', icon: '👨‍🌾', change: '+8.24%', color: '#405189' },
    { title: 'Revenue', value: '₹256.7 Cr', icon: '💰', change: '+12.57%', color: '#0ab39c' },
    { title: 'Avg. Recovery', value: '11.2%', icon: '📈', change: '+0.8%', color: '#5156be' },
    { title: 'Cane Crushed', value: '8.22L MT', icon: '🌱', change: '+15.08%', color: '#f7b84b' },
  ];

  return (
    <div className="dashboard-container">
      {/* Birthday Dialog */}
      {showBirthdayDialog && (
        <div className="modern-dialog-overlay">
          <div className="modern-dialog-content">
            <div className="dialog-header">
              <div className="dialog-emoji">🎂</div>
              <h3>Happy Birthday, {name}!</h3>
            </div>
            <div className="dialog-body">
              <div className="celebration-animation">
                <div className="confetti confetti-1"></div>
                <div className="confetti confetti-2"></div>
                <div className="confetti confetti-3"></div>
                <div className="confetti confetti-4"></div>
                <div className="confetti confetti-5"></div>
                <div className="confetti confetti-6"></div>
              </div>
              <p>On this special day, we wish you a year filled with success, happiness, and prosperity!</p>
              <div className="birthday-cake">
                <div className="cake-top"></div>
                <div className="cake-middle"></div>
                <div className="cake-bottom"></div>
                <div className="candle">
                  <div className="flame"></div>
                </div>
              </div>
            </div>
            <div className="dialog-actions">
              <button className="dialog-btn thank-you-btn" onClick={handleCloseBirthdayDialog}>
                Thank You! <span className="btn-icon">🎉</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Festival Wishes Dialog */}
      {showFestivalWishes && (
        <div className="modern-dialog-overlay">
          <div className="modern-dialog-content">
            <div className="dialog-header">
              <div className="dialog-emoji">✨</div>
              <h3>Festival Wishes</h3>
            </div>
            <div className="dialog-body">
              <div className="festival-animation">
                <div className="festival-light light-1"></div>
                <div className="festival-light light-2"></div>
                <div className="festival-light light-3"></div>
                <div className="festival-light light-4"></div>
                <div className="festival-light light-5"></div>
              </div>
              <p>{festivalMessage}</p>
              <div className="festival-decoration">
                <div className="diya-container">
                  <div className="diya">
                    <div className="diya-flame"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dialog-actions">
              <button className="dialog-btn thank-you-btn" onClick={handleCloseFestivalDialog}>
                Thank You! <span className="btn-icon">🪔</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className={`content-container ${showBirthdayDialog || showFestivalWishes ? 'blur-background' : ''}`}>
        <div className="dashboard-header">
          <div className="logo-container">
            {/* <div className="factory-logo">
              <span className="factory-icon">🏭</span>
            </div> */}
          </div>
          <div className="main-heading-container">
            <h1 className="main-heading gradient-text">
              Someshwar Sahakari Sakhar Karkhana Ltd.Someshwar
            </h1>
          </div>

          <p className="subtitle">
            श्री सोमेश्वर सहकारी साखर कारखाना लि.,सोमेश्वर
          </p>
        </div>

        {/* Marquee section for wishes - displayed after Thank You button is clicked */}
        {/* {showMarquee && (
          <div className="marquee-container" >
            <div className="marquee-wrapper">
              <marquee behavior="scroll" direction="left" scrollamount="">
                <span className="marquee-text">{marqueeText}</span>
              </marquee>
            </div>
          </div>
        )} */}

        <div className="action-buttons">
          <button className="btn create-btn">
            Generate Season Report <span className="icon">→</span>
          </button>
        </div>

        <div className="stats-overview">
          <div className="stats-cards">
            {cardData.map((card, index) => (
              <div key={index} className="metric-card" onClick={() => console.log(`Card ${index} clicked`)}>
                <div className="card-icon" style={{ backgroundColor: `${card.color}20`, color: card.color }}>
                  <span>{card.icon}</span>
                </div>
                <div className="card-content">
                  <div className="card-title">{card.title}</div>
                  <div className="card-value" style={{ color: card.color }}>{card.value}</div>
                  <div className={`card-change ${card.change.startsWith('+') ? 'positive' : 'negative'}`}>
                    {card.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="charts-container">
          <div className="chart-card line-chart">
            <h3 className="chart-title">Annual Sugar Production</h3>
            <div className="chart-wrapper">
              <Line data={lineData} options={lineOptions} height={240} />
            </div>
          </div>

          <div className="chart-card bar-chart-section">
            <h3 className="chart-title">Crushing Season 2023-24</h3>
            <div className="chart-wrapper">
              <Bar data={barData} options={barOptions} height={240} />
            </div>
          </div>
        </div>

        <div className="season-highlights mt-4">
          <div className="row">
            <div className="col-md-6">
              <div className="chart-card highlight-card">
                <h3 className="chart-title">Current Season Highlights</h3>
                <div className="season-stats p-3">
                  <div className="stat-row">
                    <span className="stat-label">Crushing Started</span>
                    <strong className="stat-value">Nov 15, 2023</strong>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Crushing Capacity</span>
                    <strong className="stat-value">5,000 TCD</strong>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Avg. Sugar Recovery</span>
                    <strong className="stat-value">11.2%</strong>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Power Generation</span>
                    <strong className="stat-value">22 MW</strong>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Ethanol Production</span>
                    <strong className="stat-value">60 KLPD</strong>
                  </div>
                  <div className="stat-row">
                    <span className="stat-label">Total Area Under Cane</span>
                    <strong className="stat-value">12,450 Hectares</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="chart-card payment-card">
                <h3 className="chart-title">Payments to Farmers</h3>
                <div className="chart-wrapper">
                  <div className="farmer-payment-status p-3">
                    <div className="progress-container mb-4">
                      <div className="progress-header">
                        <span className="progress-label">FRP Payment Status</span>
                        <strong className="progress-value">₹ 182.5 Cr</strong>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "92%" }}
                          aria-valuenow="92"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          92%
                        </div>
                      </div>
                    </div>
                    <div className="progress-container mb-4">
                      <div className="progress-header">
                        <span className="progress-label">Total Cane Payments (Target)</span>
                        <strong className="progress-value">₹ 198.7 Cr</strong>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar target-bar"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow="100"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          100%
                        </div>
                      </div>
                    </div>
                    <div className="farmer-stats">
                      <div className="stat-block">
                        <div className="stat-value">₹ 2,850</div>
                        <div className="stat-label">Avg. Rate per Ton</div>
                      </div>
                      <div className="stat-block">
                        <div className="stat-value">7 Days</div>
                        <div className="stat-label">Avg. Payment Time</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;