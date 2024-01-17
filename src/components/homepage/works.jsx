import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experiência"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./grupo-felidae.png"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Grupo Felidae - Vansil Saúde Animal</div>
							<div className="work-subtitle">
								Analista de Sistemas
							</div>
							<div className="work-duration">Ago de 2023 - Presente</div>
						</div>

						<div className="work">
							<img
								src="./lf-solucoes.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">LF Soluções</div>
							<div className="work-subtitle">
								Desenvolvedor Full-Stack
							</div>
							<div className="work-duration">Jan de 2023 - Ago de 2023</div>
						</div>

						<div className="work">
							<img
								src="./empresa.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">AC Coméricio de Variedades</div>
							<div className="work-subtitle">
								Estagiário de TI
							</div>
							<div className="work-duration">Mar de 2021 - Set de 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
