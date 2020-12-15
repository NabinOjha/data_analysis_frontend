import { useState } from 'react';

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const useApiCall = () => {
	const [loading, setLoading] = useState(false),
		[error, setError] = useState(null);

	const sendRequest = async (
		method = 'GET',
		url,
		data = null,
		headers = {}
	) => {
		setLoading(true);
		try {
			const response = await axios({
				method: method.toLowerCase().trim(),
				url,
				data,
				headers,
			});
			setLoading(false);
			return response;
		} catch (error) {
			setError(error.response);
			setLoading(false);
		}
	};

	return [sendRequest, loading, error];
};

export default useApiCall;
