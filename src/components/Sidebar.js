import React from "react";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { links } from "../Utils/data";
import styled from "styled-components";
import { useGlobalContext } from "../context/context";

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<SidebarContainer>
			<aside
				className={`${isSidebarOpen ? "sidebar show-sidebar" : " sidebar"}`}
			>
				<div className="sidebar-header">
					<img src={logo} alt="" className="logo" />
					<button type="button" className="close-btn" onClick={closeSidebar}>
						<FaTimes></FaTimes>
					</button>
				</div>
				<ul className="links">
					{links.map((link) => {
						const { id, text, url } = link;
						return (
							<li key={id}>
								<Link onClick={closeSidebar} to={url}>
									{text}
								</Link>
							</li>
						);
					})}
				</ul>
			</aside>
		</SidebarContainer>
	);
};

const SidebarContainer = styled.div`
	text-align: center;

	.sidebar-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		margin-top: -1rem;
	}
	.close-btn {
		font-size: 1.4rem;
		background: transparent;
		border-color: transparent;
		color: var(--clr-primary-5);
		transition: var(--transition);
		cursor: pointer;
		color: var(--clr-red-dark);
		margin-top: 0.2rem;
	}
	.close-btn:hover {
		color: var(--clr-red-light);
	}
	.logo {
		justify-self: center;
		height: 30px;
	}
	.links {
		list-style-type: none;
	}
	.links a {
		display: block;
		text-align: center;
		font-size: 1rem;
		text-transform: capitalize;
		padding: 1rem 1.5rem;
		color: var(--clr-grey-3);
		transition: var(--transition);
		letter-spacing: var(--spacing);
		text-decoration: none;
	}

	.links a:hover {
		padding: 1rem 1.5rem;
		padding-left: 2rem;
		background: var(--clr-grey-10);
		color: var(--clr-grey-2);
	}

	.sidebar {
		position: fixed;
		top: 0;
		right: 0;
		width: 70%;
		height: 100%;
		background: var(--clr-white);
		transition: var(--transition);
		transform: translate(100%);
		z-index: -1;
		display: flex;
		flex-direction: column;
		gap: 10rem;
		padding-block-start: 2.5rem;
	}
	.show-sidebar {
		transform: translate(0);
		z-index: 999;
	}

	@media screen and (min-width: 992px) {
		.sidebar {
			display: none;
		}
	}
`;

export default Sidebar;
