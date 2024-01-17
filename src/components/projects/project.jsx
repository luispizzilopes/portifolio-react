import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { logo, logo2,title, subtitle,description, linkText, link } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
							{logo2 != "" ? <img src={logo2} alt="logo2"/> : <></>}
						</div>
						<div className="project-title">{title}</div>
						<small className="project-subtitle">{subtitle}</small>
						<div className="project-description">{description}</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
