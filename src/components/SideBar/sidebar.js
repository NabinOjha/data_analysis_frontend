import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import RangeSlider from './../RangeSlider/rangeslider';
import DatePicker from './../DatePicker/DatePicker';
import useApiCall from './../../commons/hooks/apiCall';

const SideBar = ({ handleRequestFilter }) => {
	const ranges = useRef({});
	const filter = useRef({});
	const [sendRequest] = useApiCall();
	const [name, setName] = useState({
			nameField: '',
			nameValue: '',
		}),
		[dateRange, setDateRange] = useState({
			startDate: '',
			endDate: '',
		});

	useEffect(() => {
		const fetchRanges = async () => {
			const rangesResponse = await sendRequest('GET', '/ranges');
			ranges.current = rangesResponse.data;
		};
		fetchRanges();
	}, []);

	const handleNameChange = (e) => {
		setName({ ...name, [e.target.name]: e.target.value.trim() });
	};

	const handleStartDate = (startDate) => {
		setDateRange({ ...dateRange, startDate });
	};

	const handleEndDate = (endDate) => {
		setDateRange({ ...dateRange, endDate });
	};

	const checkAndUpdate = (filterName) => {
		if (filter.current[filterName]) {
			delete filter.current[filterName];
		}
	};

	const handleNameFilter = (e) => {
		e.preventDefault();
		const filterName = name.nameField;

		if (filter.current[filterName]) checkAndUpdate(filterName);
		filter.current[filterName] = `${name.nameField}='${name.nameValue}'`;

		handleRequestFilter(filter.current);
	};

	const handleSalaryRange = (salaryRange) => {
		const minSalary = salaryRange[0];
		const maxSalary = salaryRange[1];
		const filterName = 'avg_salary';
		if (filter.current[filterName]) checkAndUpdate(filterName);
		filter.current[
			filterName
		] = `avg_salary={"lte":"${maxSalary}", "gte":"${minSalary}"}`;

		handleRequestFilter(filter.current);
	};

	const handleBranchesRange = (branchRange) => {
		const minBranches = branchRange[0];
		const maxBranches = branchRange[1];
		const filterName = 'total_branches';

		if (filter.current[filterName]) checkAndUpdate(filterName);
		filter.current[
			filterName
		] = `total_branches={"lte":"${maxBranches}", "gte":"${minBranches}"}`;

		handleRequestFilter(filter.current);
	};

	const handleEmployeesRange = (employeesRange) => {
		const minEmpolyees = employeesRange[0];
		const maxEmployees = employeesRange[1];
		const filterName = 'num_employees';

		if (filter.current[filterName]) checkAndUpdate(filterName);
		filter.current[
			filterName
		] = `num_employees={"lte":"${maxEmployees}", "gte":"${minEmpolyees}"}`;

		handleRequestFilter(filter.current);
	};

	const handleDateFilter = () => {
		const filterName = 'established_date';

		if (filter.current[filterName]) checkAndUpdate(filterName);

		filter.current[
			filterName
		] = `established_date={"lte":"${dateRange.endDate}", "gte":"${dateRange.startDate}"}`;

		handleRequestFilter(filter.current);
	};

	const handleSort = (e) => {
		const filterName = 'sort';
		if (filter.current[filterName]) checkAndUpdate(filterName);

		filter.current[filterName] = `sort=${e.target.value}`;

		handleRequestFilter(filter.current);
	};

	return (
		<SideBarStyled>
			<h3 className='filter-heading'>Filter Data</h3>
			<form className='form-filter' onSubmit={handleNameFilter}>
				<label htmlFor='filter-field' className='field-label'>
					Select field
				</label>
				<select
					className='field-select'
					name='nameField'
					id='filter-field'
					value={name.nameField}
					onChange={handleNameChange}>
					<option value=''>Select field</option>
					<option value='name'>Name</option>
					<option value='business_type'>Business Type</option>
					<option value='address'>Address</option>
					<option value='email'>Email</option>
				</select>
				<label htmlFor='field-value' className='value-label'>
					Enter field value
				</label>
				<input
					className='form-input'
					name='nameValue'
					id='field-value'
					placeholder='Field Value'
					onChange={handleNameChange}
					value={name.nameValue}
				/>
				<button className='filter-submit' type='submit'>
					Filter
				</button>
			</form>
			<div className='filter-ranges'>
				<div className='salary-filter'>
					<h3 className='filter-title'>Filter By Salary</h3>
					<RangeSlider
						min={ranges.salary_range && ranges.current.salary_range.min_salary}
						max={
							ranges.current.salary_range &&
							ranges.current.salary_range.max_salary
						}
						step={0.5}
						handleChange={handleSalaryRange}
					/>
				</div>

				<div className='num-branches-filter'>
					<h3 className='filter-title'>Filter By branches number</h3>
					<RangeSlider
						min={
							ranges.current.branches_range &&
							ranges.current.branches_range.min_branches
						}
						max={
							ranges.current.branches_range &&
							ranges.current.branches_range.max_branches
						}
						step={1}
						handleChange={handleBranchesRange}
					/>
				</div>
				<div className='num-employees-filter'>
					<h3 className='filter-title'>Filter By number of employees</h3>
					<RangeSlider
						min={
							ranges.current.num_employees_ranges &&
							ranges.current.num_employees_ranges.min_num_employees
						}
						max={
							ranges.current.num_employees_ranges &&
							ranges.current.num_employees_ranges.max_num_employees
						}
						step={1}
						handleChange={handleEmployeesRange}
					/>
				</div>
				<div className='established-date-filter'>
					<h3 className='filter-title'>Filter By date</h3>
					<div className='react-date-picker'>
						<div className='date-picker start-date-picker'>
							<span className='start-date'>From:</span>
							<DatePicker handleChange={handleStartDate} />
						</div>
						<div className='date-picker end-date-picker'>
							<span className='end-date'>To:</span>
							<DatePicker handleChange={handleEndDate} />
						</div>
						<button className='filter-submit' onClick={handleDateFilter}>
							Filter
						</button>
					</div>
				</div>
			</div>
			<div className='order-by'>
				<h3 className='order-title'>Sort By</h3>
				<select
					className='order-select'
					name='filter-field'
					onChange={handleSort}>
					<option value=''>Select field</option>
					{[
						'name',
						'business_type',
						'address',
						'phone',
						'num_empoyees',
						'total_branches',
						'avg_salary',
					].map((item, index) => {
						return (
							<option value={`${item}`} key={index}>
								{item.charAt(0).toUpperCase() + item.slice(1)}
							</option>
						);
					})}
				</select>
			</div>
		</SideBarStyled>
	);
};

const SideBarStyled = styled.aside`
	width: 20%;
	padding: 15px;
	background-color: #d9e4dd;

	.form-filter {
		display: flex;
		margin-top: 10px;
		flex-direction: column;
		background-color: #fbf7f0;
		padding: 25px;

		label {
			font-size: 18px;
		}
		input,
		select {
			padding: 6px;
			margin-top: 5px;
			option, &::placeholder {
				font-size: 16px;
			}
		}		
		}
		.filter-submit{
			font-size: 16px;
			
			padding: 10px;
			background-color: #20639b;
			color: #fff;
			border: none;
			margin-top: 15px;
			text-transform: uppercase;
			cursor: pointer;

		}
	}

	.filter-heading {
		font-size: 24px;
		font-weight: 300;
		text-transform: uppercase;
	}
	.filter-ranges{
		.filter-title{
			margin: 15px 0;
			text-transform: uppercase;
		}
		.established-date-filter{
			background-color: #fbf7f0;
			padding: 25px;
			margin-top: 15px;
			.react-date-picker{
				.date-picker{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					span{
						width: 30%;
						font-size: 20px;
					}
					input{
						padding: 6px;
						margin-top: 5px;
					}
				}
			}

		}
		
		
	}

	.order-by{
	
		select{
			width: 100%;
			padding: 10px;
			margin-top: 10px;
		}
	}


	@media(max-width: 1450px){
		width: 100%;

		.form-filter{
			display: grid;
			grid-gap:10px;
			grid-template-areas: "label1 label2"
								 "input1 input2"
								  "button .";
								  
			.field-label{
			   grid-area: label1;
			}
			.value-label{
				grid-area: label2;
			}
			.field-select{
				grid-area: input1;
			}
			.field-value{
				grid-area: input2;
			}
			 .filter-submit{
			 	grid-area: button;
			 }
			
		}
			.filter-ranges{
		padding: 30px 0;
		display: grid;
		grid-gap: 30px;
		grid-template-areas: "filter1 filter2 filter3"
		                      "date date date";
		


		.salary-filter{
			grid-area: filter1;
		}
		.num-branches-filter{
			grid-area: filter2;

		}
		.num-employees-filter{
			grid-area: filter3;

		}
		.established-date-filter{
			grid-area: date;
			.react-date-picker{
				display: flex;
				justify-content: space-between;

				.filter-submit{
				 width: 30%;
				align-self: flex-end;
				}
			}
		}

	}
	}

@media(max-width: 991px){
	.filter-ranges{
		display: flex;
		flex-direction: column;
		
		&>div{
			width: 100%;
			margin-right: auto;
		}
	}
}

@media(max-width: 768px){
	.filter-ranges{
          .established-date-filter{
             .react-date-picker{
				  flex-direction: column;
				  .filter-submit{
					  align-self: flex-start;
				  }
}
		  }
	}
}

`;
export default React.memo(SideBar);
