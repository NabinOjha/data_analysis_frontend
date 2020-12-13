import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import userContext from './../../commons/context/userContext';

const Header = () => {
	const currentUser = useContext(userContext);

	console.log(currentUser);

	return (
		<HeaderStyle>
			<Link className='logo' to='/'>
				Logo
			</Link>

			<Navigation>
				<ul className='nav-list'>
					{!currentUser || !currentUser.loggedIn ? (
						<>
							<li className='nav-item'>
								<Link to='signup'>Sign Up</Link>
							</li>
							<li className='nav-item'>
								<Link to='/login'>Login</Link>
							</li>
						</>
					) : (
						<>
							{/* Link to invite users form Here */}
							<li className='nav-item'>
								<Link to='/login'>Invite users</Link>
							</li>
							<li className='nav-item user-email'>
								<Link to='/dashboard'>Dashboard</Link>
							</li>
						</>
					)}
				</ul>
			</Navigation>
		</HeaderStyle>
	);
};

const HeaderStyle = styled.header`
		background-color: #20639b;
		color: #fff;
		text-transform: uppercase;
		display: flex;
		padding: 25px 45px;
		justify-content: space-between;
		align-items: center;
		.logo {
			cursor: pointer;
			text-decoration: none;
			color: #fff;
		}
	`,
	Navigation = styled.nav`
		width: 32%;

		.nav-list {
			width: 100%;
			display: flex;
			list-style: none;
			justify-content: space-between;
			transistion: all 0.3s ease-in;
			.nav-item {
				a {
					font-size: 20px;
					color: #fff;
					&:link,
					&:visited {
						text-decoration: none;
						transistion: all 0.4s ease-out;
					}
					&:hover,
					&:active {
						cursor: pointer;
						color: #ddd;
					}
				}
			}
		}
		@media (max-width: 991px) {
			width: 50;

			.nav-list {
				.nav-item {
					a {
						font-size: 18px;
					}
				}
			}
		}
		@media (max-width: 768px) {
			width: 60%;

			.nav-list {
				.nav-item {
					a {
						font-size: 16px;
					}
				}
			}
		}
	`;

export default Header;
