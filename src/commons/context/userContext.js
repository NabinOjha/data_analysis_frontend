import React from 'react';

const UserContext = React.createContext({
	loggedIn: false,
	uid: null,
	accessToken: null,
	client: null,
	setUserCredentials: () => {},
	logout: () => {},
});

export default UserContext;
