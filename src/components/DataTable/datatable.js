import React from 'react';
import styled from 'styled-components';

import ReactPaginate from 'react-paginate';

const DataTable = ({ data, handlePagination, dataCount, limit }) => {
	const handlePageChange = ({ selected }) => {
		handlePagination(selected);
	};

	const renderData = () => {
		return data.map((business) => {
			const {
				id,
				name,
				business_type,
				phone,
				address,
				email,
				num_employees,
				avg_salary,
				established_date,
				total_branches,
			} = business;

			return (
				<tr key={id}>
					<td className='table-cell'>{id}</td>
					<td className='table-cell'>{name}</td>
					<td className='table-cell'>{business_type}</td>
					<td className='table-cell'>{address}</td>
					<td className='table-cell'>{phone}</td>
					<td className='table-cell'>{email}</td>
					<td className='table-cell'>{established_date}</td>
					<td className='table-cell'>$ {avg_salary}</td>
					<td className='table-cell'>{num_employees}</td>
					<td className='table-cell'>{total_branches}</td>
				</tr>
			);
		});
	};

	return (
		<DataTableStyled>
			<table>
				<thead>
					<tr className='heading-row'>
						<th className='table-head'>Index</th>
						<th className='table-head'>Name</th>
						<th className='table-head'>Business Type</th>
						<th className='table-head'>Address</th>
						<th className='table-head'>Phone</th>
						<th className='table-head'>Email</th>
						<th className='table-head'>Est. Date</th>
						<th className='table-head'>Average Salary</th>
						<th className='table-head'>Employee Count</th>
						<th className='table-head'>Total Branches</th>
					</tr>
				</thead>
				<tbody>{renderData()}</tbody>
			</table>
			<div className='pagination'>
				<ReactPaginate
					pageCount={dataCount / limit}
					pageRangeDisplayed={2}
					marginPagesDisplayed={2}
					initialPage={0}
					onPageChange={handlePageChange}
				/>
			</div>
		</DataTableStyled>
	);
};

const DataTableStyled = styled.div`
	width: 75%;
	margin: 5px auto;
	table {
		width: 100%;
		border-collapse: collapse;
		th {
			padding: 10px 18px;
			font-size: 15px;
			border-right: 0.5px solid #555;
		}

		.heading-row {
			background-color: #555;
			color: #fff;
		}
		.table-cell {
			padding: 10px 5px;
			text-align: center;
			background-color: #fff;
			border: 0.5px solid #555;
			font-size: 15px;
		}
	}
	.pagination {
		display: block;
		width: 525px;
		margin-left: auto;
		ul {
			display: flex;
			justify-content: space-between;
			list-style: none;
			margin-top: 10px;
			color: #fff;
			background-color: #20639b;

			li {
				padding: 4px 8px;
				a {
					padding: 2px 4px;
					display: inline-block;

					&:hover {
						cursor: pointer;
					}
				}
			}
		}
	}
	@media (max-width: 1450px) {
		width: 100%;

		.pagination {
			margin-right: auto;
			margin-left: 0;
		}
	}
`;

export default DataTable;
