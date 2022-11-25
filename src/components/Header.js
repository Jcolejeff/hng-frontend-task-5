import styled from "styled-components";
import heroImage from "../Assets/hero-img.jpg";
import heroImg from "../Assets/hero-img-mobile.jpg";

import { Link } from "react-router-dom";
const Header = () => {
	return (
		<Wrapper>
			<section className="text">
				<header>
					<h1>
						Welcome to Insta
						<span className="pink-text"> loan</span>
					</h1>
				</header>

				<div className="input">
					<h3>get your loan agreement in 10 minutes</h3>
					<Link to="/userDetails" className="start-btn">
						Get Started
					</Link>
					<p> over 200,000 users have generated loan agreement</p>
				</div>
			</section>
		</Wrapper>
	);
};
export default Header;

const Wrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr;

	margin-inline: auto;
	align-items: center;
	min-height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${heroImg}) center/cover no-repeat;
	.start-btn {
		text-decoration: none;
		color: white;
		background-color: var(--clr-primary-0);
		font-size: 1rem;
		padding-inline: 2rem;
		padding-block: 1rem;
		border-radius: 8px;
		margin-block-start: 2rem;
	}

	.text {
		color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 1rem;

		h1 {
			font-style: normal;
			font-weight: 400;
			font-size: 2.1rem;
			color: white;
			margin: 0;
		}
		p {
			font-weight: 400;
			line-height: 1.5;
			font-size: 1rem;
		}
	}
	.pink-text {
		color: var(--clr-primary-0);
		font-weight: 600;
	}
	.input {
		text-align: center;
		h3 {
			margin-block-end: 1.5rem;
			font-size: 1.3rem;
		}
		p {
			margin-block-start: 1.5rem;
		}
	}

	@media (min-width: 40rem) {
		.input {
			text-align: center;
			h3 {
				margin-block-end: 3rem;
				font-size: 1.4rem;
			}
			p {
				margin-block-start: 1.5rem;
			}
		}
	}

	@media (min-width: 1010px) {
		background: url(${heroImage}) center/cover no-repeat;
		grid-template-columns: 1fr 1fr;
		.input {
			text-align: start;
		}
		.text {
			padding: 6rem;
			text-align: start;
			color: #434343;

			h1 {
				font-size: 3.5rem;
				color: #434343;
				font-weight: 600;
			}
			p {
				font-weight: 400;
				line-height: 1.5;
				font-size: 1.1rem;
			}
		}
	}
`;
