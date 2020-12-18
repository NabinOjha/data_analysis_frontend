import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ handleChange }) => {
	const [currentDate, setCurrentDate] = useState(new Date());

	const handleDateChange = (date) => {
		const formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
		setCurrentDate(date);
		handleChange(formattedDate);
	};
	return (
		<DatePicker
			selected={currentDate}
			onChange={handleDateChange}
			// dateFormat='yyyy-mm-dd'
		/>
	);
};

export default DatePickerComponent;
