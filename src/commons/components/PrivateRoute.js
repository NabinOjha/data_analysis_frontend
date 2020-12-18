import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UserContext from '../context/userContext';

const PrivateRoute = ({ component: Component, token, ...rest }) => {
	const user = useContext(UserContext);
	if (user && !user.findingUserDone) {
		return <p>Loading User</p>;
	} else {
		return (
			<Route
				{...rest}
				render={(props) => {
					return user && user.accessToken ? (
						<Component {...props} />
					) : (
						<Redirect to='/signup' />
					);
				}}
			/>
		);
	}
};

export default PrivateRoute;
