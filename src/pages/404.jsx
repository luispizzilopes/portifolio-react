import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faFaceSadTear } from "@fortawesome/free-regular-svg-icons";

import NavBar from "../components/common/navBar";
import Logo from "../components/common/logo";

import INFO from "../data/user";

import "./styles/404.css";

const Notfound = () => {
	useEffect(() => {
		document.title = `404 | ${INFO.main.title}`;
	}, []);

	return (
		<React.Fragment>
			<div className="not-found page-content">
				<NavBar />
				<div className="content-wrapper">
					<div className="notfound-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="notfound-container">
						<div className="notfound-message">
							<div className="notfound-title">
								Oops! <FontAwesomeIcon icon={faFaceSadTear} />
							</div>
							<div className="not-found-message">
							Não conseguimos encontrar a página que você está procurando.

								<br />
								A URL solicitada "{window.location.href}" was
								Não foi encontrado neste servidor.
							</div>
							<a href="/" className="not-found-link">
								Voltar para página Home
							</a>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Notfound;
