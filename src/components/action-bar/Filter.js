import React from 'react';
import Search from '../../assets/search.svg';

const Filter = (props) => {
	return (
		<div className="form-control">
			<input type="text" placeholder="filter" className="input__filter" onClick={props.onClick} />
			<img src={Search} alt="Search" />
		</div>

	);
};

export default Filter;