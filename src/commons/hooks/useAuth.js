import React, { useEffect, useState } from 'react';

const useAuth = () => {
	const [uid, setUid] = useState(null),
		[accessToken, setAccessToken] = useState(null),
		[client, setClient] = useState(null);

	const setCurrentUserCredentials = (uid, accessToken, client) => {
		setUid(uid);
		setClient(client);
		setAccessToken(accessToken);
		localStorage.setItem(
			'userData',
			JSON.stringify({ uid, client, accessToken })
		);
	};

	const logout = () => {
		setUid(null);
		setClient(null);
		setClient(null);
		localStorage.removeItem('userData');
	};

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('userData'));
		if (user && user.uid && user.client && user.accessToken) {
			setCurrentUserCredentials(user.uid, user.accessToken, user.client);
		}
	}, []);

	return {
		uid,
		client,
		accessToken,
		logout,
		setCurrentUserCredentials,
	};
};

export default useAuth;
