import React from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ handleChange }) => {
	return <DatePicker selected={new Date()} onChange={handleChange} />;
};

export default DatePickerComponent;
