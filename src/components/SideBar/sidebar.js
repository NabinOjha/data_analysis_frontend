import React, { useState } from 'react';
import styled from 'styled-components';

import RangeSlider from './../RangeSlider/rangeslider';
import DatePicker from './../DatePicker/DatePicker';

const SideBar = () => {
	const [name, setName] = useState({
		nameField: '',
		nameValue: '',
	});
	const [dateRange, setDateRange] = useState({
		startDate: '',
		endDate: '',
	});

	const handleNameChange = (e) => {
		setName({ ...name, [e.target.name]: e.target.value });
	};

	const handleNameFilter = (e) => {
		e.preventDefault();
		console.log(name);
	};

	const handleSalaryRange = (salaryRange) => {
		console.log(salaryRange);
	};

	const handleBranchesRange = (branchRange) => {
		console.log(branchRange);
	};

	const handleEmployeesRange = (employeesRange) => {
		console.log(employeesRange);
	};

	const handleStartDate = (startDate) => {
		setDateRange({ ...dateRange, startDate });
	};

	const handleEndDate = (endDate) => {
		setDateRange({ ...dateRange, endDate });
	};

	const handleSort = (e) => {
		console.log(e.target.name);
	};

	const handleDateFilter = () => {
		console.log(dateRange);
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
					<RangeSlider min={0} max={100} handleChange={handleSalaryRange} />
				</div>

				<div className='num-branches-filter'>
					<h3 className='filter-title'>Filter By branches number</h3>
					<RangeSlider min={0} max={100} handleChange={handleBranchesRange} />
				</div>
				<div className='num-employees-filter'>
					<h3 className='filter-title'>Filter By number of employees</h3>
					<RangeSlider min={0} max={100} handleChange={handleEmployeesRange} />
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
					name='filter-fieldh'
					onChange={handleSort}>
					<option value=''>Select field</option>
					<option value='name'>Name</option>
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
export default SideBar;
