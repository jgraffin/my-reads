import React from 'react'
import { Loaders } from 'loaders.css'

const Loader = (props) => {
	return (
		<div className="loading">
			<div className="loading__spinner">
				<div className="loading__spinner-balls">
					<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
				</div>
			</div>
			<div className="loading__text">
				<strong>{props.loadText}</strong>
			</div>	
		</div>
	)
}

export default Loader