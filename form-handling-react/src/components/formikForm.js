import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
const ValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.number().required('Password is required')
});
const FormikForm = ()=>(
    <Formik initialValues={{name: '', email:'', password: ''}} validationSchema={ValidationSchema} onSubmit={(values) => {console.log(values)}}>
        {() =>(
            <Form>
                <label htmlFor="name">Name</label>
                <Field type="text" name="name" />
                <ErrorMessage name= "name" component= "div" />
                <label htmlFor="email">email</label>
                <Field type="email" name="email" />
                <ErrorMessage name= "email" component= "div" />
                <label htmlFor="password">Password</label>
                <Field type ="number" name= "Password" />
                <ErrorMessage name="password" component= "div" />
                <button type='submit'>Submit</button>
            </Form>
        )}

    </Formik>
);
export default FormikForm;