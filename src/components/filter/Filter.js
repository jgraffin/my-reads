import React from 'react'

function Filter(props){	
		return (
			<div className="filter-group">
				<input
					type="search"
					spellCheck="false"
					value={props.query}
					onChange={(event) => props.onUpdateQuery(event.target.value)}
				/>
				<span className="highlight"></span>
				<span className="bar"></span>
				<label>Type some book</label>
			</div>
		)
}

export default Filter