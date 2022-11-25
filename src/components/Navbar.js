import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.svg";

import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../Utils/data";

import { useGlobalContext } from "../context/context";
const Nav = () => {
	const { openSidebar } = useGlobalContext();

	return (
		<NavContainer>
			<div className="nav-center">
				<div className="nav-header">
					<Link to="/" className="logo">
						<img src={logo} />
					</Link>
					<button onClick={openSidebar} type="button" className="nav-toggle">
						<FaBars></FaBars>
					</button>
				</div>
				<div className="container">
					{/* dynamic links for our react router */}
					<ul className="nav-links">
						{links.map((link) => {
							const { id, text, url } = link;
							return (
								<li key={id}>
									<Link to={url}>{text}</Link>
								</li>
							);
						})}
					</ul>
					<Link to="/userDetails" className="start-btn">
						Get Started
					</Link>
				</div>
			</div>
		</NavContainer>
	);
};

const NavContainer = styled.nav`
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	border-bottom: 1px solid #e6e6e6;
	background-color: var(--clr-white);
	.nav-center {
		width: 90vw;
		margin: 0 auto;
		max-width: var(--max-width);
	}
	.nav-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		img {
			width: 115px;
			margin-left: -15px;
		}
	}
	.nav-toggle {
		background: transparent;
		border: transparent;
		color: var(--clr-primary-5);
		cursor: pointer;
		svg {
			font-size: 1.4rem;
		}
	}
	.nav-links {
		display: none;
	}
	.logo {
	}

	.container {
		justify-content: space-around;
		align-items: center;
		display: none;
	}

	@media (min-width: 992px) {
		.nav-header {
			img {
				width: 175px;
				margin-left: -15px;
			}
		}
		.nav-toggle {
			display: none;
		}
		.container {
			display: flex;
		}
		.start-btn {
			text-decoration: none;
			color: white;
			background-color: var(--clr-primary-0);
			font-size: 1rem;
			padding-inline: 1.5rem;
			padding-block: 1rem;
			border-radius: 8px;
		}
		.nav-center {
			display: grid;
			grid-template-columns: auto 1fr auto;
			align-items: center;
		}
		.nav-links {
			display: flex;
			justify-content: center;
			list-style-type: none;

			li {
				margin: 0 0.5rem;
			}
			a {
				color: var(--clr-grey-3);
				font-size: 1rem;
				text-transform: capitalize;
				letter-spacing: var(--spacing);
				padding: 0.5rem;
				text-decoration: none;
				&:hover {
					border-bottom: 2px solid var(--clr-primary-7);
				}
			}
		}
	}
`;

export default Nav;
