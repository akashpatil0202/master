import React from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";
import logoLight from "../../assets/images/Atharvalogo.png";
import ParticlesAuth from "../AuthenticationInner/ParticlesAuth";
import { registerUser } from "../../services/api"; // Import the API service

const Register = () => {
  const history = useNavigate();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: '',
      firstName: '', // Match the field name with the Spring Boot API
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Please Enter Your Email"),
      firstName: Yup.string().required("Please Enter Your First Name"),
      password: Yup.string().required("Please Enter Your Password"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords do not match")
        .required("Please Confirm Your Password"),
    }),
    onSubmit: async (values) => {
      try {
        const response = await registerUser({
          email: values.email,
          firstName: values.firstName,
          password: values.password,
          roles: ["USER"] // Add roles if required by your API
        });
        toast.success("Registration successful! Redirecting to login...");
        setTimeout(() => history("/login"), 3000);
      } catch (error) {
        toast.error(error || "Registration failed. Please try again.");
      }
    },
  });

  document.title = "Atharva SSSK Dashboard.";

  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content mt-lg-5">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      <img src={logoLight} alt="" height="77" />
                    </Link>
                  </div>
                  <p className="mt-3 fs-15 fw-medium">Shri Someshwar Sahakari Sakkare Karkhane Niyamit (SUGAR)</p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Create New Account</h5>
                    </div>
                    <div className="p-2 mt-4">
                      <Form onSubmit={validation.handleSubmit}>
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></Label>
                          <Input
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter email address"
                            type="email"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email}
                            invalid={validation.touched.email && !!validation.errors.email}
                          />
                          {validation.touched.email && validation.errors.email ? (
                            <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Enter first name"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.firstName}
                            invalid={validation.touched.firstName && !!validation.errors.firstName}
                          />
                          {validation.touched.firstName && validation.errors.firstName ? (
                            <FormFeedback type="invalid">{validation.errors.firstName}</FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></Label>
                          <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.password}
                            invalid={validation.touched.password && !!validation.errors.password}
                          />
                          {validation.touched.password && validation.errors.password ? (
                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                          ) : null}
                        </div>

                        <div className="mb-3">
                          <Label htmlFor="confirmPassword" className="form-label">Confirm Password <span className="text-danger">*</span></Label>
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm password"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.confirmPassword}
                            invalid={validation.touched.confirmPassword && !!validation.errors.confirmPassword}
                          />
                          {validation.touched.confirmPassword && validation.errors.confirmPassword ? (
                            <FormFeedback type="invalid">{validation.errors.confirmPassword}</FormFeedback>
                          ) : null}
                        </div>

                        <div className="mt-4">
                          <button className="btn btn-secondary w-100" type="submit">Sign Up</button>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-4 text-center">
                  <p className="mb-0">Already have an account? <Link to="/login" className="fw-semibold text-primary text-decoration-underline">Sign In</Link></p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Register;