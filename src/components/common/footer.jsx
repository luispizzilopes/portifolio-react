import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">Sobre</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Projetos</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contato</Link>
						</li>
					</ul>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
