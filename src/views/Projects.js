import React from 'react';
import Card from '../components/projects/Card.js';
const projectData = require('../static/projects.json');

const Projects = () => {
	return (
		<div className="project-row">
			{projectData.length === 0 ? (
				<h1>No projects to show</h1>
			) : (
				projectData.map((project, i) => (
					<Card
						name={project.name}
						description={project.description}
						link={project.link}
						key={i}
					/>
				)
			))}
		</div>

	);
};

export default Projects;