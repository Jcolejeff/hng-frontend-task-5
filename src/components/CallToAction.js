import React from "react";
import styled from "styled-components";
import callToactionImg from "../Assets/callToActionImage.png";
const CallToAction = () => {
	return (
		<Wrapper>
			<section className="text">
				<h1>Are you a First Timer?</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
					nesciunt necessitatibus laboriosam recusandae velit fugiat culpa amet
					ullam aliquid quasi, at quia quo rem ipsa quod quisquam? Voluptates,
					velit a!
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
	color: black;
	display: flex;
	flex-direction: column-reverse;
	justify-content: center;
	padding-block: 3rem;
	align-items: center;
	border: 1px solid #d7d7d7;
	width: 85%;
	margin-inline: auto;
	padding-inline: 2rem;

	.text {
		text-align: center;
		p {
			line-height: 1.5;
			margin-block: 2rem;
		}
		button {
			color: white;
			border: none;
			padding: 1rem;
			border-radius: 10px;
			background-color: var(--clr-primary-0);
		}
		h1 {
			color: var(--clr-primary-0);
		}
	}

	.images {
		width: 17rem;
		position: relative;
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
		}
	}
	@media (min-width: 1010px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		min-height: 90vh;
		border: none;

		.images {
			width: 40rem;
			position: relative;
			justify-self: center;
		}
		.text {
			text-align: start;
			align-self: center;
			padding: 2rem;
			p {
				line-height: 2;
				margin-block: 2rem;
				padding-inline-end: 1rem;
			}
			button {
				border: none;
				padding-inline: 2rem;
				border-radius: 10px;
			}
		}
	}
`;
