import React from "react";
import styled from "styled-components";
import { ServicesList } from "../Utils/data";
import ServiceItem from "./ServiceItem";
const Services = () => {
	return (
		<Wrapper>
			<h2>Our Services</h2>
			<section className="items-container">
				{ServicesList.map((item) => {
					return <ServiceItem key={item.id} {...item} />;
				})}
			</section>
		</Wrapper>
	);
};

export default Services;

const Wrapper = styled.section`
	margin-block: 4rem;
	.items-container {
		display: grid;
		gap: 1rem;
		width: 85%;
		margin-inline: auto;
	}
	h2 {
		font-size: 2.3rem;
		text-align: center;
		color: var(--clr-primary-0);
	}
	@media (min-width: 40rem) {
		.items-container {
			width: 80%;

			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1170px) {
		.items-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}
`;
