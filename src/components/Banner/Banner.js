import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BannerImage from "./../../assets/images/Banner.jpg";

const Banner = () => {
	return (
		<BannerStyle>
			<h1 className='heading-primary'>
				Simple yet powerful data analysis tool for businesses.
			</h1>

			<Link to='/dashboard' className='analyse-btn'>
				Let's Analyze!
			</Link>
		</BannerStyle>
	);
};

const BannerStyle = styled.div`
	background-image: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0.6),
			rgba(0, 0, 0, 0.8)
		),
		url(${BannerImage});
	background-position: center;
	background-size: cover;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.heading-primary {
		text-align: center;
		color: #fff;
		font-size: 32px;
		width: 50%;
		text-transform: uppercase;
	}
	.analyse-btn {
		&:link,
		&:visited {
			background-color: #00416d;
			text-transform: uppercase;
			color: #fff;
			font-size: 20px;
			border-radius: 5px;
			margin-top: 25px;
			padding: 15px 60px;
			text-decoration: none;
			transistion: all 0.4s ease-out;

			&:hover,
			&:active {
				filter: brightness(120%);
			}
		}
	}

	@media (max-width: 768px) {
		.heading-primary {
			font-size: 28px;
			width: 70%;
		}
		.analyse-btn {
			&:link,
			&:visited,
			&:active,
			&:hover {
				font-size: 18px;
				padding: 10px 40px;
			}
		}
	}
`;

export default Banner;
