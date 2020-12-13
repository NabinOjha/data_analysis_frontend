import styled from 'styled-components';

export const Container = styled.div`
		${(props) =>
			props.maxWidth ? `max-width: ${props.maxWidth}` : 'max-width: 1240px'};
		margin: 0 auto;
	`,
	Form = styled.form`
		margin: 0 auto;
		background-color: #d9e4dd;
		${(props) =>
			props.minHeight ? `min-height: ${props.minHeight}` : 'min-height: 50vh'};
		margin-top: 25px;
		border-radius: 5px;
		padding: 20px 40px;
		width: 75%;

		.form-title {
			text-align: center;
			font-weight: 300;
			color: #20639b;
			font-size: 30px;
			text-transform: uppercase;
		}

		.form-control {
			display: flex;
			flex-direction: column;

			margin: 10px auto;

			&__label {
				font-size: 20px;
				text-align: left;
			}
			.label-error {
				color: red;
			}

			&__field {
				padding: 10px 5px;
				border: none;
				border-radius: 5px;
				outline: none;
				transistion: all 0.3s ease-in;
				margin-top: 5px;

				&:focus {
					outline: 0.5px solid #20639b;
					outline-radius: 5px;
				}
			}
			.field-error {
				outline: 0.5px solid red;
			}
			.form-error {
				color: red;
				padding: 5px 0;
			}
		}
		.form-submit {
			padding: 15px;
			font-size: 22px;
			color: #fff;
			background-color: #20639b;
			outline: none;
			border: none;
			border-radius: 5px;
			width: 200px;
			margin-right: auto;
			margin-top: 25px;
			transistion: all 0.3s ease-out;

			&:hover {
				cursor: pointer;
				filter: brightness(85%);
			}
		}
		@media (max-width: 768px) {
			width: 90%;
			.form-title {
				font-size: 28px;
			}
		}
	`;
