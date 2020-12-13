import React from 'react';
import styled from 'styled-components';

import ReactPaginate from 'react-paginate';

const DataTable = () => {
	const handlePageChange = (page) => {
		console.log(page);
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
				<tbody>
					<tr>
						<td className='table-cell'>1</td>
						<td className='table-cell'>Zoomzone</td>
						<td className='table-cell'>partnership</td>
						<td className='table-cell'>Peru</td>
						<td className='table-cell'>530-153-2247</td>
						<td className='table-cell'>mmatches1l@harvard.edu</td>
						<td className='table-cell'>12/13/2019</td>
						<td className='table-cell'>$ 53.74</td>
						<td className='table-cell'>4</td>
						<td className='table-cell'>12</td>
					</tr>
					<tr>
						<td className='table-cell'>2</td>
						<td className='table-cell'>Zoomzone</td>
						<td className='table-cell'>partnership</td>
						<td className='table-cell'>Peru</td>
						<td className='table-cell'>530-153-2247</td>
						<td className='table-cell'>mmatches1l@harvard.edu</td>
						<td className='table-cell'>12/13/2019</td>
						<td className='table-cell'>$ 53.74</td>
						<td className='table-cell'>4</td>
						<td className='table-cell'>12</td>
					</tr>
					<tr>
						<td className='table-cell'>3</td>
						<td className='table-cell'>Zoomzone</td>
						<td className='table-cell'>partnership</td>
						<td className='table-cell'>Peru</td>
						<td className='table-cell'>530-153-2247</td>
						<td className='table-cell'>mmatches1l@harvard.edu</td>
						<td className='table-cell'>12/13/2019</td>
						<td className='table-cell'>$ 53.74</td>
						<td className='table-cell'>4</td>
						<td className='table-cell'>12</td>
					</tr>
					<tr>
						<td className='table-cell'>4</td>
						<td className='table-cell'>Zoomzone</td>
						<td className='table-cell'>partnership</td>
						<td className='table-cell'>Peru</td>
						<td className='table-cell'>530-153-2247</td>
						<td className='table-cell'>mmatches1l@harvard.edu</td>
						<td className='table-cell'>12/13/2019</td>
						<td className='table-cell'>$ 53.74</td>
						<td className='table-cell'>4</td>
						<td className='table-cell'>12</td>
					</tr>
					<tr>
						<td className='table-cell'>5</td>
						<td className='table-cell'>Zoomzone</td>
						<td className='table-cell'>partnership</td>
						<td className='table-cell'>Peru</td>
						<td className='table-cell'>530-153-2247</td>
						<td className='table-cell'>mmatches1l@harvard.edu</td>
						<td className='table-cell'>12/13/2019</td>
						<td className='table-cell'>$ 53.74</td>
						<td className='table-cell'>4</td>
						<td className='table-cell'>12</td>
					</tr>
					<tr>
						<td className='table-cell'>5</td>
						<td className='table-cell'>Zoomzone</td>
						<td className='table-cell'>partnership</td>
						<td className='table-cell'>Peru</td>
						<td className='table-cell'>530-153-2247</td>
						<td className='table-cell'>mmatches1l@harvard.edu</td>
						<td className='table-cell'>12/13/2019</td>
						<td className='table-cell'>$ 53.74</td>
						<td className='table-cell'>4</td>
						<td className='table-cell'>12</td>
					</tr>
					<tr>
						<td className='table-cell'>6</td>
						<td className='table-cell'>Zoomzone</td>
						<td className='table-cell'>partnership</td>
						<td className='table-cell'>Peru</td>
						<td className='table-cell'>530-153-2247</td>
						<td className='table-cell'>mmatches1l@harvard.edu</td>
						<td className='table-cell'>12/13/2019</td>
						<td className='table-cell'>$ 53.74</td>
						<td className='table-cell'>4</td>
						<td className='table-cell'>12</td>
					</tr>
					<tr>
						<td className='table-cell'>7</td>
						<td className='table-cell'>Zoomzone</td>
						<td className='table-cell'>partnership</td>
						<td className='table-cell'>Peru</td>
						<td className='table-cell'>530-153-2247</td>
						<td className='table-cell'>mmatches1l@harvard.edu</td>
						<td className='table-cell'>12/13/2019</td>
						<td className='table-cell'>$ 53.74</td>
						<td className='table-cell'>4</td>
						<td className='table-cell'>12</td>
					</tr>
					<tr>
						<td className='table-cell'>8</td>
						<td className='table-cell'>Zoomzone</td>
						<td className='table-cell'>partnership</td>
						<td className='table-cell'>Peru</td>
						<td className='table-cell'>530-153-2247</td>
						<td className='table-cell'>mmatches1l@harvard.edu</td>
						<td className='table-cell'>12/13/2019</td>
						<td className='table-cell'>$ 53.74</td>
						<td className='table-cell'>4</td>
						<td className='table-cell'>12</td>
					</tr>
				</tbody>
			</table>
			<div className='pagination'>
				<ReactPaginate
					pageCount={10}
					pageRangeDisplayed={2}
					marginPagesDisplayed={2}
					initialPage={1}
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
