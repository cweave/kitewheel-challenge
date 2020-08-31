import React from 'react';
import Metrics from '../../assets/metrics.svg';

const Card = ({ name, description, link }) => {

	return (
		<div className="project-card">
			<header className="project-card__header">
				<h3>{ name }</h3>
				<a href={link} title={"Metrics for " + name}><img src={Metrics} alt="Metrics" /> View Metrics</a>
			</header>

			<p>{ description }</p>
		</div>
	);
};

export default Card;