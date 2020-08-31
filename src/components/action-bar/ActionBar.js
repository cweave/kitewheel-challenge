import React from 'react';
import Filter from './Filter';
import Dropdown from './Dropdown';
import Button from './Button';

const ActionBar = () => {

	return (
		<div className="action-bar">
			<Dropdown orgName="Kitewheel" /> { /* pass in some type of default value / selected organization */ }
			<Filter />
			<Button title="Create Project" type="primary" />
		</div>
	);
};

export default ActionBar;

/*
I also has the dropdown as more of a broken down component like this, but for the sake of simplicity, I put it all in Dropdown:
let organizations = [
		{ key: "o1", value: "Option 1" },
		{ key: "o2", value: "Option 2" },
		{ key: "o3", value: "Option 3" }
	];

	return (
		<div>
			{organizations.length === 0 ? (
				<h1>No projects to show</h1>
			) : (
				organizations.map((org) => (
					<Dropdown
						orgName={org.value}
						key={org.keu}
					/>
				)
			))}
	...
*/