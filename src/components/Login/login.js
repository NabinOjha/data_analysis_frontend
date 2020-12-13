import React from 'react';
import { Formik } from 'formik';

import { Container, Form } from './../../commons/style';
import InputField from '../InputField/inputField';

const Login = () => {
	const intialFormValues = { email: '', password: '' };
	const validate = ({ email, password }) => {
		const errors = {};
		if (!email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
			errors.email = 'Invalid email';
		}
		if (!password) {
			errors.password = 'Required';
		}
		return errors;
	};
	const handleSubmit = (values) => {
		console.log(values);
	};
	return (
		<div className='login'>
			<Container>
				<Formik
					initialValues={intialFormValues}
					validate={validate}
					onSubmit={handleSubmit}>
					{({
						handleBlur,
						handleChange,
						errors,
						touched,
						handleSubmit,
						values,
					}) => {
						return (
							<Form minHeight='40vh' onSubmit={handleSubmit}>
								<h2 className='form-title'>Login</h2>
								<InputField
									type='email'
									name='email'
									label='Email'
									handleChange={handleChange}
									handleBlur={handleBlur}
									touched={touched}
									errors={errors}
									values={values}
								/>
								<InputField
									name='password'
									label='password'
									handleChange={handleChange}
									handleBlur={handleBlur}
									touched={touched}
									errors={errors}
									values={values}
								/>

								<button className='form-submit' type='submit'>
									Submit
								</button>
							</Form>
						);
					}}
				</Formik>
			</Container>
		</div>
	);
};

export default Login;
