import React from 'react'

function Filter(props) {
	return (
		<div className="filter-group">
			<input
				onChange={(event) => props.onUpdateQuery(event.target.value)}
				required
				spellCheck="false"
				type="search"
				value={props.query}
			/>
			<span className="highlight"></span>
			<span className="bar"></span>
			<label>Type something</label>
		</div>
	)
}

export default Filter