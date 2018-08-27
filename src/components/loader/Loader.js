import React from 'react'

const Loader = (props) => {
	return (
		<div className="loading">
			<div className="book">
				<div className="book__page"></div>
				<div className="book__page"></div>
				<div className="book__page"></div>
			</div>
			<div className="loading__text">
				<strong>{props.loadText}</strong>
			</div>
		</div>
	)
}

export default Loader