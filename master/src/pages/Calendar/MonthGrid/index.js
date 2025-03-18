import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//Import Icons
import FeatherIcon from "feather-icons-react";

import {
  Card,
  CardBody,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
} from "reactstrap";

import * as Yup from "yup";
import { useFormik } from "formik";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import multiMonthPlugin from "@fullcalendar/multimonth";
import Flatpickr from "react-flatpickr";

//redux
import { useSelector, useDispatch } from "react-redux";

import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DeleteModal from "../../../Components/Common/DeleteModal";

//Simple bar
import SimpleBar from "simplebar-react";
import UpcommingEvents from "../Maincalender/UpcommingEvents";
import listPlugin from "@fullcalendar/list";

import {
  getEvents as onGetEvents,
  getCategories as onGetCategories,
  addNewEvent as onAddNewEvent,
  deleteEvent as onDeleteEvent,
  updateEvent as onUpdateEvent,
  getUpCommingEvent as onGetUpCommingEvent,
} from "../../../slices/thunks";
import { createSelector } from "reselect";

import { Search, Edit, Trash, FileText, Users, UserPlus } from 'lucide-react';
import { color } from "echarts";

const MonthGrid = () => {
//   const dispatch = useDispatch();
//   const [event, setEvent] = useState({});
//   const [modal, setModal] = useState(false);
//   const [selectedNewDay, setSelectedNewDay] = useState();
//   const [isEdit, setIsEdit] = useState(false);
//   const [isEditButton, setIsEditButton] = useState(true);
//   const [deleteModal, setDeleteModal] = useState(false);
//   const [deleteEvent, setDeleteEvent] = useState("");
//   const [eventName, setEventName] = useState("");

//   const selectLayoutState = (state) => state.Calendar;
//   const calendarDataProperties = createSelector(selectLayoutState, (state) => ({
//     events: state.events,
//     categories: state.categories,
//     isEventUpdated: state.isEventUpdated,
//   }));
//   // Inside your component
//   const { events, categories, isEventUpdated } = useSelector(
//     calendarDataProperties
//   );

//   useEffect(() => {
//     dispatch(onGetEvents());
//     dispatch(onGetCategories());
//     dispatch(onGetUpCommingEvent());
//     new Draggable(document.getElementById("external-events"), {
//       itemSelector: ".external-event",
//     });
//   }, [dispatch]);

//   useEffect(() => {
//     if (isEventUpdated) {
//       setIsEdit(false);
//       setEvent({});
//     }
//   }, [dispatch, isEventUpdated]);

//   /**
//    * Handling the modal state
//    */
//   const toggle = () => {
//     if (modal) {
//       setModal(false);
//       setEvent(null);
//       setIsEdit(false);
//       setIsEditButton(true);
//     } else {
//       setModal(true);
//     }
//   };
//   /**
//    * Handling date click on calendar
//    */

//   const handleDateClick = (arg) => {
//     const date = arg["date"];
//     setSelectedNewDay(date);
//     toggle();
//   };

//   const str_dt = function formatDate(date) {
//     var monthNames = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     var d = new Date(date),
//       month = "" + monthNames[d.getMonth()],
//       day = "" + d.getDate(),
//       year = d.getFullYear();
//     if (month.length < 2) month = "0" + month;
//     if (day.length < 2) day = "0" + day;
//     return [day + " " + month, year].join(",");
//   };

//   /**
//    * Handling click on event on calendar
//    */

//   const handleEventClick = (arg) => {
//     const event = arg.event;

//     const st_date = event.start;
//     const ed_date = event.end;
//     const r_date =
//       ed_date == null
//         ? str_dt(st_date)
//         : str_dt(st_date) + " to " + str_dt(ed_date);
//     const er_date = ed_date === null ? [st_date] : [st_date, ed_date];

//     setEvent({
//       id: event.id,
//       title: event.title,
//       start: event.start,
//       end: event.end,
//       className: event.classNames,
//       category: event.classNames[0],
//       location: event._def.extendedProps.location
//         ? event._def.extendedProps.location
//         : "No Loaction",
//       description: event._def.extendedProps.description,
//       defaultDate: er_date,
//       datetag: r_date,
//     });
//     setEventName(event.title);
//     setDeleteEvent(event.id);
//     setIsEdit(true);
//     setIsEditButton(false);
//     toggle();
//   };
//   /**
//    * On delete event
//    */
//   const handleDeleteEvent = () => {
//     dispatch(onDeleteEvent(deleteEvent));
//     setDeleteModal(false);
//   };

//   // events validation
//   const validation = useFormik({
//     // enableReinitialize : use this flag when initial values needs to be changed
//     enableReinitialize: true,

//     initialValues: {
//       id: (event && event.id) || "",
//       title: (event && event.title) || "",
//       category: (event && event.category) || "",
//       location: (event && event.location) || "",
//       description: (event && event.description) || "",
//       defaultDate: (event && event.defaultDate) || [],
//       datetag: (event && event.datetag) || "",
//       start: (event && event.start) || "",
//       end: (event && event.end) || "",
//     },

//     validationSchema: Yup.object({
//       title: Yup.string().required("Please Enter Your Event Name"),
//       category: Yup.string().required("Please Select Your Category"),
//       location: Yup.string().required("Please Enter Your Location"),
//       description: Yup.string().required("Please Enter Your Description"),
//       start: Yup.date().required("Start Time is required"),
//       end: Yup.date().required("End Time is required"),
//       defaultDate: Yup.array()
//         .of(Yup.date())
//         .required("Date range is required")
//         .min(2, "Select at least two dates"),
//     }),
//     onSubmit: (values) => {
//       var updatedDay = "";
//       if (selectedNewDay) {
//         updatedDay = new Date(selectedNewDay[1]);
//         updatedDay.setDate(updatedDay.getDate() + 1);
//       }

//       if (isEdit) {
//         const updateEvent = {
//           id: event.id,
//           title: values.title,
//           className: values.category,
//           start: selectedNewDay ? selectedNewDay[0] : event.start,
//           end: selectedNewDay ? updatedDay : event.end,
//           location: values.location,
//           description: values.description,
//         };
//         // update event
//         dispatch(onUpdateEvent(updateEvent));
//         validation.resetForm();
//       } else {
//         const newEvent = {
//           id: Math.floor(Math.random() * 100),
//           title: values["title"],
//           start: selectedNewDay[0],
//           end: updatedDay,
//           className: values["category"],
//           location: values["location"],
//           description: values["description"],
//         };
//         // save new event
//         dispatch(onAddNewEvent(newEvent));
//         validation.resetForm();
//       }

//       // setSelectedDay(null);
//       setSelectedNewDay(null);
//       toggle();
//     },
//   });

//   const submitOtherEvent = () => {
//     document.getElementById("form-event")?.classList.remove("view-event");

//     document
//       .getElementById("event-title")
//       ?.classList.replace("d-none", "d-block");
//     document
//       .getElementById("event-category")
//       ?.classList.replace("d-none", "d-block");
//     document
//       .getElementById("event-start-date")
//       ?.parentNode.classList.remove("d-none");
//     document
//       .getElementById("event-start-date")
//       ?.classList.replace("d-none", "d-block");
//     document
//       .getElementById("event-location")
//       ?.classList.replace("d-none", "d-block");
//     document
//       .getElementById("event-description")
//       ?.classList.replace("d-none", "d-block");
//     document
//       .getElementById("event-start-date-tag")
//       ?.classList.replace("d-block", "d-none");
//     document
//       .getElementById("event-location-tag")
//       ?.classList.replace("d-block", "d-none");
//     document
//       .getElementById("event-description-tag")
//       ?.classList.replace("d-block", "d-none");

//     setIsEditButton(true);
//   };

//   /**
//    * On category darg event
//    */
//   const onDrag = (event) => {
//     event.preventDefault();
//   };

//   /**
//    * On calendar drop event
//    */
//   const onDrop = (event) => {
//     const date = event["date"];
//     const day = date.getDate();
//     const month = date.getMonth();
//     const year = date.getFullYear();

//     const currectDate = new Date();
//     const currentHour = currectDate.getHours();
//     const currentMin = currectDate.getMinutes();
//     const currentSec = currectDate.getSeconds();
//     const modifiedDate = new Date(
//       year,
//       month,
//       day,
//       currentHour,
//       currentMin,
//       currentSec
//     );

//     const draggedEl = event.draggedEl;
//     const draggedElclass = draggedEl.className;
//     if (
//       draggedEl.classList.contains("external-event") &&
//       draggedElclass.indexOf("fc-event-draggable") === -1
//     ) {
//       const modifiedData = {
//         id: Math.floor(Math.random() * 1000),
//         title: draggedEl.innerText,
//         start: modifiedDate,
//         className: draggedEl.className,
//       };
//       dispatch(onAddNewEvent(modifiedData));
//     }
//   };

//   document.title =
//     "Month Grid Calendar | Velzon - React Admin & Dashboard Template";
//   return (
//     <React.Fragment>
//       <DeleteModal
//         show={deleteModal}
//         onDeleteClick={handleDeleteEvent}
//         onCloseClick={() => {
//           setDeleteModal(false);
//         }}
//         recordId={""}
//       />
//       <div className="page-content">
//         <Container fluid>
//           <BreadCrumb title="Month Grid" pageTitle="Apps" />
//           <Row>
//             <Col xs={12}>
//               <Row>
//                 <Col xl={3}>
//                   <Card className="card-h-100">
//                     <CardBody>
//                       <button
//                         className="btn btn-primary w-100"
//                         id="btn-new-event"
//                         onClick={toggle}
//                       >
//                         <i className="mdi mdi-plus"></i> Create New Event
//                       </button>

//                       <div id="external-events">
//                         <br />
//                         <p className="text-muted">
//                           Drag and drop your event or click in the calendar
//                         </p>
//                         {categories &&
//                           categories.map((category) => (
//                             <div
//                               className={`bg-${category.type}-subtle external-event fc-event text-${category.type}`}
//                               key={"cat-" + category.id}
//                               draggable
//                               onDrag={(event) => {
//                                 onDrag(event);
//                               }}
//                             >
//                               <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
//                               {category.title}
//                             </div>
//                           ))}
//                       </div>
//                     </CardBody>
//                   </Card>
//                   <div>
//                     <h5 className="mb-1">Upcoming Events</h5>
//                     <p className="text-muted">Don't miss scheduled events</p>
//                     <SimpleBar
//                       className="pe-2 me-n1 mb-3"
//                       style={{ height: "400px" }}
//                     >
//                       <div id="upcoming-event-list">
//                         {events &&
//                           (events || []).map((event, key) => (
//                             <React.Fragment key={key}>
//                               <UpcommingEvents event={event} />
//                             </React.Fragment>
//                           ))}
//                       </div>
//                     </SimpleBar>
//                   </div>

//                   <Card>
//                     <CardBody className="bg-info-subtle">
//                       <div className="d-flex">
//                         <div className="flex-shrink-0">
//                           <FeatherIcon
//                             icon="calendar"
//                             className="text-info icon-dual-info"
//                           />
//                         </div>
//                         <div className="flex-grow-1 ms-3">
//                           <h6 className="fs-15">Welcome to your Calendar!</h6>
//                           <p className="text-muted mb-0">
//                             Event that applications book will appear here. Click
//                             on an event to see the details and manage applicants
//                             event.
//                           </p>
//                         </div>
//                       </div>
//                     </CardBody>
//                   </Card>
//                 </Col>

//                 <Col xl={9}>
//                   <Card className="card-h-100">
//                     <CardBody>
//                       <FullCalendar
//                         plugins={[
//                           BootstrapTheme,
//                           dayGridPlugin,
//                           interactionPlugin,
//                           listPlugin,
//                           multiMonthPlugin,
//                         ]}
//                         initialView="multiMonthYear"
//                         slotDuration={"00:15:00"}
//                         handleWindowResize={true}
//                         themeSystem="bootstrap"
//                         headerToolbar={{
//                           left: "prev,next today",
//                           center: "title",
//                           right:
//                             "multiMonthYear,dayGridMonth,dayGridWeek,dayGridDay,listWeek",
//                         }}
//                         events={events}
//                         editable={true}
//                         droppable={true}
//                         selectable={true}
//                         dateClick={handleDateClick}
//                         eventClick={handleEventClick}
//                         drop={onDrop}
//                       />
//                     </CardBody>
//                   </Card>
//                 </Col>
//               </Row>

//               <div style={{ clear: "both" }}></div>

//               <Modal isOpen={modal} id="event-modal" centered>
//                 <ModalHeader
//                   toggle={toggle}
//                   tag="h5"
//                   className="p-3 bg-info-subtle modal-title"
//                 >
//                   {!!isEdit ? eventName : "Add Event"}
//                 </ModalHeader>
//                 <ModalBody>
//                   <Form
//                     className={
//                       !!isEdit
//                         ? "needs-validation view-event"
//                         : "needs-validation"
//                     }
//                     name="event-form"
//                     id="form-event"
//                     onSubmit={(e) => {
//                       e.preventDefault();
//                       validation.handleSubmit();
//                       return false;
//                     }}
//                   >
//                     {!!isEdit ? (
//                       <div className="text-end">
//                         <Link
//                           to="#"
//                           className="btn btn-sm btn-soft-primary"
//                           id="edit-event-btn"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             submitOtherEvent();
//                             return false;
//                           }}
//                         >
//                           Edit
//                         </Link>
//                       </div>
//                     ) : null}
//                     <div className="event-details">
//                       <div className="d-flex mb-2">
//                         <div className="flex-grow-1 d-flex align-items-center">
//                           <div className="flex-shrink-0 me-3">
//                             <i className="ri-calendar-event-line text-muted fs-16"></i>
//                           </div>
//                           <div className="flex-grow-1">
//                             <h6
//                               className="d-block fw-semibold mb-0"
//                               id="event-start-date-tag"
//                             >
//                               {event ? event.datetag : ""}
//                             </h6>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center mb-2">
//                         <div className="flex-shrink-0 me-3">
//                           <i className="ri-time-line text-muted fs-16"></i>
//                         </div>
//                         <div className="flex-grow-1">
//                           <h6 className="d-block fw-semibold mb-0">
//                             <span id="event-timepicker1-tag">12:00 AM</span> -{" "}
//                             <span id="event-timepicker2-tag">5:30 AM</span>
//                           </h6>
//                         </div>
//                       </div>
//                       <div className="d-flex align-items-center mb-2">
//                         <div className="flex-shrink-0 me-3">
//                           <i className="ri-map-pin-line text-muted fs-16"></i>
//                         </div>
//                         <div className="flex-grow-1">
//                           <h6 className="d-block fw-semibold mb-0">
//                             <span id="event-location-tag">
//                               {event && event.location !== undefined
//                                 ? event.location
//                                 : "No Location"}
//                             </span>
//                           </h6>
//                         </div>
//                       </div>
//                       <div className="d-flex mb-3">
//                         <div className="flex-shrink-0 me-3">
//                           <i className="ri-discuss-line text-muted fs-16"></i>
//                         </div>
//                         <div className="flex-grow-1">
//                           <p
//                             className="d-block text-muted mb-0"
//                             id="event-description-tag"
//                           >
//                             {event && event.description !== undefined
//                               ? event.description
//                               : "No Description"}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                     <Row className="event-form">
//                       <Col xs={12}>
//                         <div className="mb-3">
//                           <Label className="form-label">Type</Label>
//                           <Input
//                             className={
//                               !!isEdit
//                                 ? "form-select d-none"
//                                 : "form-select d-block"
//                             }
//                             name="category"
//                             id="event-category"
//                             type="select"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.category || ""}
//                           >
//                             <option value="bg-danger-subtle">Danger</option>
//                             <option value="bg-success-subtle">Success</option>
//                             <option value="bg-primary-subtle">Primary</option>
//                             <option value="bg-info-subtle">Info</option>
//                             <option value="bg-dark-subtle">Dark</option>
//                             <option value="bg-warning-subtle">Warning</option>
//                           </Input>
//                           {validation.touched.category &&
//                           validation.errors.category ? (
//                             <FormFeedback type="invalid" className="d-block">
//                               {validation.errors.category}
//                             </FormFeedback>
//                           ) : null}
//                         </div>
//                       </Col>
//                       <Col xs={12}>
//                         <div className="mb-3">
//                           <Label className="form-label">Event Name</Label>
//                           <Input
//                             className={!!isEdit ? "d-none" : "d-block"}
//                             placeholder="Enter event name"
//                             type="text"
//                             name="title"
//                             id="event-title"
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.title || ""}
//                           />
//                           {validation.touched.title &&
//                           validation.errors.title ? (
//                             <FormFeedback type="invalid" className="d-block">
//                               {validation.errors.title}
//                             </FormFeedback>
//                           ) : null}
//                         </div>
//                       </Col>
//                       <Col xs={12}>
//                         <div className="mb-3">
//                           <Label>Event Date</Label>
//                           <div
//                             className={
//                               !!isEdit ? "input-group d-none" : "input-group"
//                             }
//                           >
//                             <Flatpickr
//                               className="form-control"
//                               id="event-start-date"
//                               name="defaultDate"
//                               placeholder="Select Date"
//                               value={validation.values.defaultDate || ""}
//                               options={{
//                                 mode: "range",
//                                 dateFormat: "Y-m-d",
//                               }}
//                               onChange={(date) => {
//                                 setSelectedNewDay(date);
//                                 validation.setFieldValue("defaultDate", date);
//                               }}
//                             />
//                             <span className="input-group-text">
//                               <i className="ri-calendar-event-line"></i>
//                             </span>
//                           </div>
//                           {validation.touched.defaultDate &&
//                           validation.errors.defaultDate ? (
//                             <FormFeedback type="invalid" className="d-block">
//                               {validation.errors.defaultDate}{" "}
//                             </FormFeedback>
//                           ) : null}
//                         </div>
//                       </Col>
//                       <Col xs={6}>
//                         <div className="mb-3">
//                           <Label>Start Time</Label>
//                           <div className="input-group">
//                             <Flatpickr
//                               className="form-control"
//                               name="start"
//                               value={validation.values.start || ""}
//                               onChange={(date) =>
//                                 validation.setFieldValue("start", date[0])
//                               }
//                               options={{
//                                 enableTime: true,
//                                 noCalendar: true,
//                                 dateFormat: "H:i",
//                               }}
//                             />
//                             <span className="input-group-text">
//                               {" "}
//                               <i className="ri-calendar-event-line"></i>{" "}
//                             </span>
//                           </div>
//                           {validation.touched.start &&
//                           validation.errors.start ? (
//                             <FormFeedback type="invalid" className="d-block">
//                               {validation.errors.start}{" "}
//                             </FormFeedback>
//                           ) : null}
//                         </div>
//                       </Col>

//                       <Col xs={6}>
//                         <div className="mb-3">
//                           <Label>End Time</Label>
//                           <div className="input-group">
//                             <Flatpickr
//                               className="form-control input-group"
//                               name="end"
//                               value={validation.values.end || ""}
//                               onChange={(date) =>
//                                 validation.setFieldValue("end", date[0])
//                               }
//                               options={{
//                                 enableTime: true,
//                                 noCalendar: true,
//                                 dateFormat: "H:i",
//                               }}
//                             />
//                             <span className="input-group-text">
//                               {" "}
//                               <i className="ri-calendar-event-line"></i>{" "}
//                             </span>
//                           </div>
//                           {validation.touched.end && validation.errors.end ? (
//                             <FormFeedback type="invalid" className="d-block">
//                               {validation.errors.end}{" "}
//                             </FormFeedback>
//                           ) : null}
//                         </div>
//                       </Col>
//                       <Col xs={12}>
//                         <div className="mb-3">
//                           <Label htmlFor="event-location">Location</Label>
//                           <div>
//                             <Input
//                               type="text"
//                               className={!!isEdit ? "d-none" : "d-block"}
//                               name="location"
//                               id="event-location"
//                               placeholder="Event location"
//                               onChange={validation.handleChange}
//                               onBlur={validation.handleBlur}
//                               value={validation.values.location}
//                             />
//                             {validation.touched.location &&
//                             validation.errors.location ? (
//                               <FormFeedback type="invalid" className="d-block">
//                                 {validation.errors.location}
//                               </FormFeedback>
//                             ) : null}
//                           </div>
//                         </div>
//                       </Col>
//                       <Col xs={12}>
//                         <div className="mb-3">
//                           <Label className="form-label">Description</Label>
//                           <textarea
//                             className={
//                               !!isEdit
//                                 ? "form-control d-none"
//                                 : "form-control d-block"
//                             }
//                             id="event-description"
//                             name="description"
//                             placeholder="Enter a description"
//                             rows={3}
//                             onChange={validation.handleChange}
//                             onBlur={validation.handleBlur}
//                             value={validation.values.description}
//                           ></textarea>
//                           {validation.touched.description &&
//                           validation.errors.description ? (
//                             <FormFeedback type="invalid" className="d-block">
//                               {validation.errors.description}
//                             </FormFeedback>
//                           ) : null}
//                         </div>
//                       </Col>
//                     </Row>
//                     <div className="hstack gap-2 justify-content-end">
//                       {!!isEdit && (
//                         <button
//                           type="button"
//                           className="btn btn-soft-danger"
//                           id="btn-delete-event"
//                           onClick={() => {
//                             toggle();
//                             setDeleteModal(true);
//                           }}
//                         >
//                           <i className="ri-close-line align-bottom"></i> Delete
//                         </button>
//                       )}
//                       {isEditButton && (
//                         <button
//                           type="submit"
//                           className="btn btn-success"
//                           id="btn-save-event"
//                         >
//                           {!!isEdit ? "Edit Event" : "Add Event"}
//                         </button>
//                       )}
//                     </div>
//                   </Form>
//                 </ModalBody>
//               </Modal>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </React.Fragment>
//   );
// };

// MonthGrid.propTypes = {
//   events: PropTypes.any,
//   categories: PropTypes.array,
//   className: PropTypes.string,
//   onGetEvents: PropTypes.func,
//   onAddNewEvent: PropTypes.func,
//   onUpdateEvent: PropTypes.func,
//   onDeleteEvent: PropTypes.func,
//   onGetCategories: PropTypes.func,
// };

// export default MonthGrid;



  // Initial members data based on the image
  const initialMembers = [
    { id: 1, name: 'George Livepool', mobile: '+35 23 83', email: 'careers@omega.ru', status: 'Active' },
    { id: 2, name: 'Eric Dyer', mobile: '+125 25 65', email: 'consider.yang@gov.no', status: 'Active' },
    { id: 3, name: 'Hailem Assami', mobile: '+345 22 21', email: 'hailem@gmail.com', status: 'Active' },
    { id: 4, name: 'Michael Campbell', mobile: '+756 52 73', email: 'camp@hotmail.com', status: 'Inactive' },
    { id: 5, name: 'Ashley Williams', mobile: '+895 43 11', email: 'williams.ash@email.com', status: 'Active' },
    { id: 6, name: 'Vanessa Parad', mobile: '+634 12 39', email: 'parad.van@google.com', status: 'Active' },
    { id: 7, name: 'Lora Palmer', mobile: '+900 54 33', email: 'lora.palm@gmail.com', status: 'Active' },
    { id: 8, name: 'Christy Newton', mobile: '+254 75 12', email: 'chris@newton.com', status: 'Inactive' },
    { id: 9, name: 'Nick Jaded', mobile: '+698 43 12', email: 'jaded1234@google.com', status: 'Active' },
    { id: 10, name: 'Tina Lawrson', mobile: '+543 83 33', email: 'tina.law@gmail.com', status: 'Active' },
    { id: 11, name: 'Malisha Mains', mobile: '+234 33 96', email: 'mains34@hotmail.com', status: 'Active' },
  ];

  // Initial groups data based on your request
  const initialGroups = [
    { id: 3, name: 'Weighbridge', members: 12, status: 'Active' },
    { id: 1, name: 'H&T', members: 8, status: 'Active' },
    { id: 4, name: 'Store', members: 15, status: 'Active' },
    { id: 5, name: 'Engineering Section', members: 24, status: 'Active' },
    { id: 6, name: 'Electrical Department', members: 19, status: 'Active' },
    { id: 7, name: 'Sales', members: 31, status: 'Active' },
    { id: 2, name: 'Accounts', members: 17, status: 'Active' },
  ];

  // State for members and groups
  const [members, setMembers] = useState(initialMembers);
  const [groups, setGroups] = useState(initialGroups);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalMembers] = useState(2000);
  const [currentUsers] = useState(1800);
  const [newMemberData, setNewMemberData] = useState({ name: '', mobile: '', email: '', status: 'Active' });
  const [newGroupData, setNewGroupData] = useState({ name: '', members: 0, status: 'Active' });
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAddGroupModal, setShowAddGroupModal] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [editingGroup, setEditingGroup] = useState(null);
  const [activeTab, setActiveTab] = useState('groups'); // Default to 'groups' to show your data first

  // Filter members based on search term
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter groups based on search term
  const filteredGroups = groups.filter(group => 
    group.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle member deletion
  const handleDeleteMember = (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      setMembers(members.filter(member => member.id !== id));
    }
  };

  // Handle group deletion
  const handleDeleteGroup = (id) => {
    if (window.confirm('Are you sure you want to delete this group?')) {
      setGroups(groups.filter(group => group.id !== id));
    }
  };

  // Handle status toggle
  const handleStatusToggle = (id) => {
    setMembers(members.map(member => 
      member.id === id ? 
        { ...member, status: member.status === 'Active' ? 'Inactive' : 'Active' } : 
        member
    ));
  };

  // Handle group status toggle
  const handleGroupStatusToggle = (id) => {
    setGroups(groups.map(group => 
      group.id === id ? 
        { ...group, status: group.status === 'Active' ? 'Inactive' : 'Active' } : 
        group
    ));
  };

  // Handle adding new member
  const handleAddMember = () => {
    if (!newMemberData.name || !newMemberData.email) {
      alert('Name and Email are required!');
      return;
    }
    
    const newMember = {
      id: members.length + 1,
      ...newMemberData
    };
    
    setMembers([...members, newMember]);
    setNewMemberData({ name: '', mobile: '', email: '', status: 'Active' });
    setShowAddModal(false);
  };

  // Handle adding new group
  const handleAddGroup = () => {
    if (!newGroupData.name) {
      alert('Group Name is required!');
      return;
    }
    
    const newGroup = {
      id: groups.length + 1,
      ...newGroupData
    };
    
    setGroups([...groups, newGroup]);
    setNewGroupData({ name: '', members: 0, status: 'Active' });
    setShowAddGroupModal(false);
  };

  // Handle editing member
  const handleEditMemberClick = (member) => {
    setEditingMember({...member});
    setShowAddModal(true);
  };

  // Handle editing group
  const handleEditGroupClick = (group) => {
    setEditingGroup({...group});
    setShowAddGroupModal(true);
  };

  // Handle update member
  const handleUpdateMember = () => {
    if (!editingMember.name || !editingMember.email) {
      alert('Name and Email are required!');
      return;
    }
    
    setMembers(members.map(member => 
      member.id === editingMember.id ? editingMember : member
    ));
    
    setEditingMember(null);
    setShowAddModal(false);
  };

  // Handle update group
  const handleUpdateGroup = () => {
    if (!editingGroup.name) {
      alert('Group Name is required!');
      return;
    }
    
    setGroups(groups.map(group => 
      group.id === editingGroup.id ? editingGroup : group
    ));
    
    setEditingGroup(null);
    setShowAddGroupModal(false);
  };

  // CSS Styles
  const styles = {
    container: {
      marginTop: '60px',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '24px',
      fontFamily: 'Arial, sans-serif'
    },
    card: {
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    },
    tabContainer: {
      display: 'flex',
      borderBottom: '1px solid #e2e8f0'
    },
    tab: {
      padding: '16px 24px',
      fontWeight: '500',
      cursor: 'pointer'
    },
    activeTab: {

      borderBottom: '2px solid #7c3aed',
      color: '#7c3aed'
    },
    inactiveTab: {
      color: '#718096'
    },
    contentContainer: {
      
      padding: '24px'
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      marginleft: '80px',
      alignItems: 'center',
      marginBottom: '24px',
    },

    headerContainer : {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginleft: '80px',
      marginBottom: '24px',
      justifyContent: 'space-between', /* Pushes content apart */
    },
    
     buttonContainer : {
      marginLeft: 'auto', /* Pushes the button to the extreme right */
    },
    headerContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: '80%',
      marginBottom: '24px',
      justifyContent: 'space-between', // Pushes content apart
    },
    buttonGroup: {
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
      marginLeft: 'auto', // Moves the button group to the extreme right
    },
    
   
    primaryButton: {
      backgroundColor: '#405189',
      color: '#ffffff',
      padding: '8px 16px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: 'none',
      cursor: 'pointer'
    },
    secondaryButton: {
      backgroundColor: '#ffffff',
      color: '#4a5568',
      padding: '8px 16px',
      borderRadius: '4px',
      border: '1px solid #e2e8f0',
      cursor: 'pointer'
    },
    statsContainer: {
      textAlign: 'right'
    },
    statText: {
      fontSize: '14px',
      color: '#718096'
    },
    searchFilterContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      marginBottom: '24px'
    },
    searchContainer: {

      position: 'relative',
      width: '700px'
    },
    searchInput: {
      width: '100%',
      paddingLeft: '40px',
      paddingRight: '16px',
      paddingTop: '8px',
      paddingBottom: '8px',
      border: '1px solid rgb(177, 184, 194)',
      borderRadius: '4px'
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      top: '10px',
      color: '#a0aec0'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse'
    },
    tableHead: {
      backgroundColor: '#f7fafc',
      textAlign: 'left',
      color: '#718096',
      fontSize: '14px'
    },
    tableHeadCell: {
      color:'white',
      backgroundColor:"#405189",
      padding: '12px 16px'
    },
    tableRow: {
      borderTop: '1px solid #e2e8f0',
      transition: 'background-color 0.2s'
    },
    tableRowHover: {
      backgroundColor: '#f7fafc'
    },
    tableCell: {
      padding: '12px 16px',
      fontSize: '14px'
    },
    profileImage: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      overflow: 'hidden',
      backgroundColor: '#e2e8f0'
    },
    statusBadge: {
      fontSize: '12px',
      padding: '4px 8px',
      borderRadius: '9999px',
      cursor: 'pointer'
    },
    activeStatus: {
      backgroundColor: '#c6f6d5',
      color: '#2f855a'
    },
    inactiveStatus: {
      backgroundColor: '#fed7d7',
      color: '#c53030'
    },
    actionContainer: {
      display: 'flex',
      gap: '8px'
    },
    editButton: {
      color: '#4299e1',
      cursor: 'pointer'
    },
    deleteButton: {
      color: '#e53e3e',
      cursor: 'pointer'
    },
    saveButton: {
      backgroundColor: '#7c3aed',
      color: '#ffffff',
      fontSize: '12px',
      padding: '4px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer'
    },
    modalOverlay: {
      position: 'fixed',
      inset: '0',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '50'
    },
    modalContent: {
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: '8px',
      width: '384px'
    },
    modalTitle: {
      fontSize: '20px',
      fontWeight: '700',
      marginBottom: '16px'
    },
    formGroup: {
      marginBottom: '16px'
    },
    formLabel: {
      fontFamily:"'Inter', sans-serif",
      display: 'block',
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '4px'
    },
    formInput: {
      width: '100%',
      padding: '8px',
      border: '1px solid #e2e8f0',
      borderRadius: '4px'
    },
    modalButtonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '8px'
    },
   
    
  };

  // Modal for adding/editing member
  

  // Modal for adding/editing group
  const renderGroupModal = () => {
    return (
      <div style={styles.modalOverlay}>
        
        <div style={styles.modalContent}>
          <h2 style={styles.modalTitle}>{editingGroup ? 'Edit Group' : 'Add New Group'}</h2>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Group Name</label>
            <input 
              type="text" 
              style={styles.formInput}
              value={editingGroup ? editingGroup.name : newGroupData.name}
              onChange={(e) => editingGroup ? 
                setEditingGroup({...editingGroup, name: e.target.value}) : 
                setNewGroupData({...newGroupData, name: e.target.value})}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Number of Members</label>
            <input 
              type="number" 
              style={styles.formInput}
              value={editingGroup ? editingGroup.members : newGroupData.members}
              onChange={(e) => {
                const value = parseInt(e.target.value) || 0;
                if (editingGroup) {
                  setEditingGroup({...editingGroup, members: value});
                } else {
                  setNewGroupData({...newGroupData, members: value});
                }
              }}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.formLabel}>Status</label>
            <select 
              style={styles.formInput}
              value={editingGroup ? editingGroup.status : newGroupData.status}
              onChange={(e) => editingGroup ? 
                setEditingGroup({...editingGroup, status: e.target.value}) : 
                setNewGroupData({...newGroupData, status: e.target.value})}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>
          <div style={styles.modalButtonContainer}>
            <button 
              style={{...styles.secondaryButton, padding: '8px 16px'}}
              onClick={() => {
                setShowAddGroupModal(false);
                setEditingGroup(null);
              }}
            >
              Cancel
            </button>
            <button 
              style={{...styles.primaryButton, padding: '8px 16px'}}
              onClick={editingGroup ? handleUpdateGroup : handleAddGroup}
            >
              {editingGroup ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
     </div>
      
    );
  };





  // Render groups table
  const renderGroupsTable = () => {
    return (
      <div style={{ overflowX: 'auto' }}>
       
        <table style={styles.table}>
          <thead style={styles.tableHead}>
            <tr>
              <th style={styles.tableHeadCell}>Group Code</th>
              <th style={styles.tableHeadCell}>Group Name</th>
              <th style={styles.tableHeadCell}>Members</th>
              <th style={styles.tableHeadCell}>Status</th>
              <th style={styles.tableHeadCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredGroups.map((group) => (
              <tr key={group.id} style={styles.tableRow}>
                <td style={{...styles.tableCell, fontWeight: '500'}}>{group.id}</td>
                <td style={styles.tableCell}>{group.name}</td>
                <td style={styles.tableCell}>{group.members}</td>
                <td style={styles.tableCell}>
                  <span 
                    style={{
                      ...styles.statusBadge,
                      ...(group.status === 'Active' ? styles.activeStatus : styles.inactiveStatus)
                    }}
                    onClick={() => handleGroupStatusToggle(group.id)}
                  >
                    {group.status}
                  </span>
                </td>
                <td style={styles.tableCell}>
                  <div style={styles.actionContainer}>
                    <div 
                      style={styles.editButton}
                      onClick={() => handleEditGroupClick(group)}
                    >
                      <Edit size={16} />
                    </div>
                    <div 
                      style={styles.deleteButton}
                      onClick={() => handleDeleteGroup(group.id)}
                    >
                      <Trash size={16} />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
   
        {/* Tab Navigation */}
        {/* <div style={styles.tabContainer}>
          <div 
            style={{
              ...styles.tab,
              ...(activeTab === 'members' ? styles.activeTab : styles.inactiveTab)
            }}
            onClick={() => setActiveTab('members')}
          >
            Members      
          </div>
          <div 
            style={{
              ...styles.tab,
              ...(activeTab === 'groups' ? styles.activeTab : styles.inactiveTab)
            }}
            onClick={() => setActiveTab('groups')}
          >
            Groups
          </div>
          <div style={{...styles.tab, ...styles.inactiveTab}}>
            Admins
          </div>
        </div> */}

        {/* Main Content */}
        <div style={styles.contentContainer}>
        <h2 style={{fontFamily:"'Inter', sans-serif",fontWeight:'bold' , marginLeft:'40%', padding:'8px',color:'#405189', marginTop:'0px'}} >GROUP LIST</h2>
        <hr style={{color:'#405189', fontWeight:'bold'}}/>
          {/* Summary Stats and Buttons */}
          <div style={styles.headerContainer}>
            
            <div style={styles.buttonGroup}>
              {activeTab === 'members' ? (
                <button 
                  style={styles.primaryButton}
                  onClick={() => {
                    setEditingMember(null);
                    setShowAddModal(true);
                  }}
                >
                  <UserPlus size={16} />
                  <span>Add new</span>
                </button>
              ) : (
                <button 
                  style={styles.primaryButton}
                  onClick={() => {
                    setEditingGroup(null);
                    setShowAddGroupModal(true);
                  }}
                >
                  <Users size={16} />
                  <span>Add new group</span>
                </button>
                
              )}
              {activeTab === 'members' && (
                <>
                  <button style={styles.secondaryButton}>
                    Import members
                  </button>
                  <button style={styles.secondaryButton}>
                    Export members (Excel)
                  </button>
                </>
              )}
            </div>
            {activeTab === 'members' && (
              <div style={styles.statsContainer}>
                <div style={styles.statText}>Total members: {totalMembers}</div>
                <div style={styles.statText}>Current users: {currentUsers}</div>
              </div>
            )}
          
          
            <div style={styles.buttonGroup}>
              {activeTab === 'members' ? (
                <button 
                  style={styles.primaryButton}
                  onClick={() => {
                    setEditingMember(null);
                    setShowAddModal(true);
                  }}
                >
                  <UserPlus size={16} />
                  <span>Add new</span>
                </button>
              ) : (
                <button 
                  style={styles.primaryButton}
                  onClick={() => {
                    setEditingGroup(null);
                    setShowAddGroupModal(true);
                  }}
                >
                  <Users size={16} />
                  <span>Add new User</span>
                </button>
                
              )}
              {activeTab === 'members' && (
                <>
                  <button style={styles.secondaryButton}>
                    Import members
                  </button>
                  <button style={styles.secondaryButton}>
                    Export members (Excel)
                  </button>
                </>
              )}
            </div>
            {activeTab === 'members' && (
              <div style={styles.statsContainer}>
                <div style={styles.statText}>Total members: {totalMembers}</div>
                <div style={styles.statText}>Current users: {currentUsers}</div>
              </div>
            )}
          </div>

          Search and Filter
          <div style={styles.searchFilterContainer}>
            <div style={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search..."
                style={styles.searchInput}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div style={styles.searchIcon}>
                <Search size={16} />
              </div>
            </div>
            {/* <button style={styles.primaryButton}>
              <span>Filter</span>
            </button> */}
          </div>

          {/* Table Content */}
          {activeTab === 'members' ? renderMembersTable() : renderGroupsTable()}
        </div>
      </div>

      {/* Add/Edit Modals */}
      {showAddModal && renderMemberModal()}
      {showAddGroupModal && renderGroupModal()}
    </div>
  );
};

export default MonthGrid;
