import React from "react";
import styled from "styled-components";
import callToactionImg from "../images/CallactionDesktop.png";
const CallToAction = () => {
	return (
		<Wrapper>
			<section className="text">
				<h1>Metabnb NFTs</h1>
				<p>
					Discover our NFT gift cards collection. Loyal customers gets amazing
					gift cards which are traded as NFTs. These NFTs gives our cutomer
					access to loads of our exclusive services.
				</p>
				<button>Learn More</button>
			</section>
			<section className="images">
				<img
					src={callToactionImg}
					alt="call-to-action"
					className="image image1"
				/>
			</section>
		</Wrapper>
	);
};

export default CallToAction;
const Wrapper = styled.article`
	background: var(--clr-primary);
	color: var(--clr-white);
	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	padding-block: 3rem;

	.text {
		text-align: center;
		p {
			line-height: 1.5;
			margin-block: 2rem;
		}
		button {
			color: #a02279;
			border: none;
			padding: 1rem;
			border-radius: 10px;
		}
	}

	.images {
		width: 17rem;
		position: relative;
		margin-inline-start: 2.7rem;
	}
	.image {
		width: 100%;
		height: auto;
		object-fit: cover;
	}
	@media (min-width: 40rem) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 30vh;
		padding: 2rem;
		place-items: center;
		.images {
			width: 20rem;
			margin-inline-end: 2rem;
		}
	}
	@media (min-width: 1010px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 90vh;

		.images {
			width: 40rem;
			position: relative;
			justify-self: center;
			margin-inline-end: 5rem;
		}
		.text {
			text-align: start;
			align-self: center;
			padding: 6rem;
			p {
				line-height: 2;
				margin-block: 2rem;
				padding-inline-end: 1rem;
			}
			button {
				color: #a02279;
				border: none;
				padding: 1rem;
				border-radius: 10px;
			}
		}
	}
`;
