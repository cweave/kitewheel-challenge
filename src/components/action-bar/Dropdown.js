import React, { useState } from 'react';
import Filter from './Filter';
import RightArrow from '../../assets/right-arrow.svg';

const Dropdown = ({ orgName }) => {

	const [selected, setSelected] = useState(orgName);
	const [opened, setOpened] = useState(false);
	const cssClass = opened ? 'show': 'hide';

	const organizations = [
		{ key: '1', value: 'Test Org' },
		{ key: '2', value: 'Christa\'s Org' },
		{ key: '3', value: 'Cool Org' },
		{ key: '4', value: 'Another IT Org' },
		{ key: '5', value: 'Aaaaahhhhhhh' },
		{ key: '6', value: 'Real Monsters' }
	];

	const toggleFilter = (e) => {
		// prevent the filter in the dropdown from closing the dropdown
		e.preventDefault();
		e.stopPropagation();
	}

	return (
		<div className="form-control select" onClick={() => setOpened(!opened)}>
			<span className="select__selected-item">{ selected }</span>

			<ul className={cssClass}>
				<Filter onClick={(e) => toggleFilter(e)}/>
				{organizations.length === 0 ? (
					<li>No organizations to show</li>
				) : (
					organizations.map((org, i) => (
						<li onClick={() => setSelected(org.value)} key={i}>
							{ org.value }
						</li>
				)))}
			</ul>

			<span className="arrow-bg">
				<img src={RightArrow} alt="Right arrow" className={!opened ? 'right': 'down'} />
			</span>
		</div>
	)
};

export default Dropdown;