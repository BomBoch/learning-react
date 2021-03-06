import { Field, FieldProps, Form, Formik } from "formik"
import React from "react"

const FormikComponent = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        terms: false,
        submitted: false,
      }}
      onSubmit={async ({ username, password }, { setFieldValue }) => {
        setFieldValue("submitted", true)
        try {
          // await UserAPI.register({ username, password })
          // redirect to profile
        } catch {
          // show error
        }
      }}
    >
      <Form aria-label="registration form">
        <div>
          <label>
            Username
            <Field name="username" />
          </label>
        </div>
        <div>
          <label>
            Password
            <Field type="password" name="password" />
          </label>
        </div>
        <div>
          <label>
            <Field type="checkbox" name="terms" />
            <span>I have read the Terms and Conditions</span>
          </label>
        </div>
        <button type="submit">Register</button>
        <Field>
          {({ form }) => <pre>{JSON.stringify(form.values, null, "  ")}</pre>}
        </Field>
      </Form>
    </Formik>
  )
}

export default FormikComponent
