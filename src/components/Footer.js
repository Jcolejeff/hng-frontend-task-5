import styled from "styled-components";
import { FaInstagram, FaTwitter } from "react-icons/fa";

import logo from "../Assets/logo.svg";

const Footer = () => {
	return (
		<Wrapper>
			<FooterContainer className="bottom">
				<article className="logo">
					<div className="images">
						<img src={logo} alt="logo" />
					</div>

					<div>
						<FaInstagram />
						<FaTwitter />
					</div>
				</article>

				<section>
					<article>
						<ul>
							<h3>Community</h3>
							<li>NFTs</li>
							<li>Tokens</li>
							<li>LandLords</li>
							<li>Discord</li>
						</ul>
					</article>
					<article>
						<ul>
							<h3>Places</h3>
							<li>Castle</li>
							<li>Farms</li>
							<li>Beach</li>
							<li>Learn More</li>
						</ul>
					</article>
					<article>
						<ul>
							<h3>About Us</h3>
							<li>Road Map</li>
							<li>Creators</li>
							<li>Careers</li>
							<li>Contact Us</li>
						</ul>
					</article>
				</section>
			</FooterContainer>
		</Wrapper>
	);
};

export default Footer;

const Wrapper = styled.footer`
	background-color: black;
	color: white;
	padding-block-start: 2rem;

	display: flex;
	flex-direction: column;
	padding-inline-start: 1rem;
	gap: 2rem;
	p {
		font-weight: 300;
		text-align: center;
	}
	@media (min-width: 40rem) {
		padding-inline: 4rem;
		align-items: flex-start;
		gap: 0rem;
	}
	@media (min-width: 992px) {
		align-items: flex-start;
	}
`;
const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;

	.logo {
		div {
			display: flex;
			justify-content: space-evenly;
			margin-block: 1rem;
		}
	}

	ul {
		list-style: none;
		padding-inline: 1rem;

		li {
			font-size: 1rem;
			font-weight: 200;
			margin-block-start: 1.5rem;
		}
	}
	section {
		display: flex;
		flex-direction: column;
	}
	@media (min-width: 40rem) {
		flex-direction: row;
		justify-content: space-around;
		gap: 5rem;
		section {
			display: flex;
			flex-direction: row;
			grid-template-columns: 1fr;
			grid-column-gap: 0rem;
		}
	}

	@media (min-width: 1010px) {
		flex-direction: row;
		justify-content: space-around;
		gap: 15rem;
		.logo {
			.images {
				margin-block-end: 7rem;
			}
			div {
				display: block;
				svg {
					margin-inline-end: 2rem;
				}
			}
		}

		section {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			grid-column-gap: 6rem;
		}
	}
`;
