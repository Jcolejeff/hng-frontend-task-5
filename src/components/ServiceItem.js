import React from "react";
import styled from "styled-components";
const ServiceItem = ({ image, text }) => {
	return (
		<Wrapper image={image}>
			<div className="container">
				<button>{text}</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.article`
	padding: 1rem;
	padding-block-end: 1rem;
	border: 1px solid #d7d7d7;
	height: 30vh;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	background: url(${(props) => props.image}) center/cover no-repeat;
	button {
		text-decoration: none;
		color: white;
		background-color: var(--clr-primary-0);
		font-size: 1rem;
		padding-inline: 2rem;
		padding-block: 1rem;
		border-radius: 8px;
		margin-block-start: 2rem;
		border: none;
	}
	@media (min-width: 40rem) {
	}
	@media (min-width: 1100px) {
		height: 60vh;
	}
`;
export default ServiceItem;
