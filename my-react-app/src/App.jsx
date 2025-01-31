import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const MyForm = () => (
    <div>
        <h1>Fill up</h1>
        <Formik
            initialValues={{
                firstName: '',
                phone: '',
                email: '',
            }}
            validate={(values) => {
                const errors = {};


                if (!values.firstName) {
                    errors.firstName = "First name is required";
                }


                if (!values.phone) {
                    errors.phone = "Phone number is required";
                } else if (values.phone.length !== 12 || isNaN(values.phone)) {
                    errors.phone = "Phone number must be exactly 12 digits";
                }

                // Валідація email
                if (!values.email) {
                    errors.email = "Email is required";
                } else if (!values.email.includes("@")
                ) {
                    errors.email = "Invalid email format required @";
                }

                return errors;
            }}
            onSubmit={async (values, { setSubmitting }) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
            <Form>
                <label htmlFor="firstName">First Name</label>
                <Field id="firstName" name="firstName" placeholder="Jane" />
                <ErrorMessage name="firstName" component="div" className="error" />

                <label htmlFor="phone"> Phone</label>
                <Field id="phone" name="phone" placeholder="phone number" />
                <ErrorMessage name="phone" component="div" className="error" />

                <label htmlFor="email"> Email</label>
                <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                />
                <ErrorMessage name="email" component="div" className="error" />

                <button type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
                )}
        </Formik>
    </div>
);

export default MyForm;