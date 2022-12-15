import { Formik, Form } from 'formik';
import { Input } from './Input';
import * as Yup from 'yup';
import 'yup-phone';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useState } from 'react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const validationSchema = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    telephone: Yup.string()
      .phone('US', false, 'Invalid phone number')
      .required('Required'),
    message: Yup.string().max(500).required('Required'),
  });
  return (
    <div className="bg-white px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div className="mx-auto max-w-lg lg:max-w-none">
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            telephone: '',
            message: '',
          }}
          onSubmit={async (values, { resetForm }) => {
            try {
              await axios.post('/api/hubspot/submitForm', {
                values: values,
                hubspotUtkCookie: getCookie('hubspotutk'),
                location: window.location.href,
              });
              setSubmitted(true);
              resetForm();
            } catch (e) {
              console.log(e);
            }
          }}
        >
          {(formik) => (
            <Form className="grid grid-cols-1 gap-y-6">
              <Input
                htmlFor="firstName"
                type="text"
                name="firstName"
                id="firstName"
                autoComplete="given-name"
                placeholder="First name"
              />
              <Input
                htmlFor="lastName"
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                placeholder="Last name"
              />
              <Input
                htmlFor="email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Email"
              />
              <Input
                htmlFor="telephone"
                type="text"
                name="telephone"
                id="telephone"
                autoComplete="tel"
                placeholder="Phone Number"
              />
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  {...formik.getFieldProps('message')}
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Message"
                />
                {formik.errors.message && formik.touched.message && (
                  <div className="text-xs text-red-600 text-left mt-1 ml-1">
                    {formik.errors.message}
                  </div>
                )}
              </div>
              <div>
                <button
                  disabled={formik.isSubmitting || submitted}
                  type="submit"
                  className="disabled:opacity-75 disabled:hover:bg-primary inline-flex justify-center rounded-md border border-transparent bg-primary py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-darkBlue focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {submitted ? 'Submitted' : 'Submit'}
                </button>

                <div
                  onClick={() => {
                    formik.resetForm();
                    setSubmitted(false);
                  }}
                  className="disabled:opacity-75 inline-flex justify-center py-3 px-6 text-base font-medium cursor-pointer hover:underline"
                >
                  Reset Form
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
