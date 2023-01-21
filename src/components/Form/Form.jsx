import React from 'react';
import { Formik, Form, Field } from 'formik';

const FormAddContact = ({ onSubmit }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <label>
          Ім'я: <Field name="name" type="text"></Field>
        </label>
        <label>
          Телефон: <Field name="number" type="tel"></Field>
        </label>

        <button type="submit">Save contact</button>
      </Form>
    </Formik>
  );
};

export default FormAddContact;
