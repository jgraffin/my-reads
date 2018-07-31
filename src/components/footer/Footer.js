import React from 'react'
import Styled from 'styled-components'

const Foot = Styled.footer`
	display: block;
	width: 100%;
`

const Footer = (props) => (
	<Foot>
		<div className="container">
			{this.props}
		</div>
	</Foot>
)

export default Footer