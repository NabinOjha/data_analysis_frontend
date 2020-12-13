import React from 'react';
import styled from 'styled-components';

import { Container } from '../../commons/style';
import Sidebar from './../SideBar/sidebar';
import DataTable from './../DataTable/datatable';

const AnalysisDashBoard = () => {
	return (
		<section className='dashboard'>
			<Container maxWidth='2160px'>
				<DashboardWrapper>
					<Sidebar />
					<DataTable />
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
