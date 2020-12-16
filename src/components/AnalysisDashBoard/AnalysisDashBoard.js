import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { Container } from '../../commons/style';
import Sidebar from './../SideBar/sidebar';
import DataTable from './../DataTable/datatable';
import useApiCall from './../../commons/hooks/apiCall';

const AnalysisDashBoard = () => {
	const [tableData, setTableData] = useState([]),
		[page, setPage] = useState(0),
		[filter, setFilter] = useState(0),
		[dataCount, setDataCount] = useState(0),
		[limit] = useState(20);

	const [sendRequest, loading, error] = useApiCall();

	useEffect(() => {
		const fetchData = async () => {
			const dataResponse = await sendRequest(
				'GET',
				`/businesses?limit=${limit}&offset=${page}&${filter}`.trim()
			);

			setDataCount(dataResponse.data.count);

			setTableData(dataResponse.data.businesses);
		};
		fetchData();
	}, [page, filter]);

	const handlePagination = (pageNum) => {
		setPage(pageNum);
	};

	const handleRequestFilter = useCallback((filterObj) => {
		const filterString = Object.values(filterObj).join('&');
		setFilter(filterString);
	}, []);

	return (
		<section className='dashboard'>
			<Container maxWidth='2160px'>
				<DashboardWrapper>
					<Sidebar handleRequestFilter={handleRequestFilter} />
					<DataTable
						data={tableData}
						limit={limit}
						handlePagination={handlePagination}
						dataCount={dataCount}
					/>
				</DashboardWrapper>
			</Container>
		</section>
	);
};

const DashboardWrapper = styled.div`
	display: flex;
	min-height: 90vh;

	@media (max-width: 1450px) {
		flex-direction: column;
	}
`;

export default AnalysisDashBoard;
