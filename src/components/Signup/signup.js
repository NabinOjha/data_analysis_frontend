import React, { useContext } from 'react';
import { Formik } from 'formik';

import { Container, Form } from '../../commons/style';
import InputField from '../InputField/inputField';
import useApiCall from '../../commons/hooks/apiCall';
import userContext from './../../commons/context/userContext';

const Signup = () => {
	const currentUser = useContext(userContext);
	const initialFormValues = { email: '', password: '', confirmPassword: '' };
	const [sendRequest, loading, error] = useApiCall();

	const validate = ({ email, password, confirmPassword }) => {
		const errors = {};
		if (!email) {
			errors.email = 'Required';
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
			errors.email = 'Invalid email address';
		}
		if (!password) {
			errors.password = 'Required';
		}
		if (!confirmPassword) {
			errors.confirmPassword = 'Required';
		}

		return errors;
	};

	const handleSubmit = (
		{ email, password, confirmPassword },
		{ resetForm }
	) => {
		const signUpUSer = async () => {
			const dataToSend = {
				email,
				password,
				password_confirmation: confirmPassword,
			};
			const response = await sendRequest('POST', '/auth', dataToSend);
			response &&
				currentUser.setCurrentUserCredentials(
					response.headers.uid,
					response.headers['access-token'],
					response.headers.client
				);
			resetForm(initialFormValues);
		};
		signUpUSer();
	};

	console.log({ loading, error });

	return (
		<div className='signup'>
			<Container>
				<Formik
					initialValues={initialFormValues}
					validate={validate}
					onSubmit={handleSubmit}>
					{({
						handleBlur,
						handleChange,
						handleSubmit,
						errors,
						values,
						touched,
					}) => {
						return (
							<Form onSubmit={handleSubmit}>
								<h2 className='form-title'>Signup</h2>
								<InputField
									name='email'
									label='Email'
									type='email'
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
									values={values}
									touched={touched}
								/>
								<InputField
									type='password'
									name='password'
									label='Password'
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
									values={values}
									touched={touched}
								/>
								<InputField
									type='password'
									name='confirmPassword'
									label=' Confirm password'
									handleChange={handleChange}
									handleBlur={handleBlur}
									errors={errors}
									values={values}
									touched={touched}
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

export default Signup;
