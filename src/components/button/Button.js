import React from 'react'
import Styled from 'styled-components'

// Generic Button style
const Btn = Styled.button`
	display: inline-block;
	font-family: Arial;
	font-weight: 300;
	padding: 6px 10px;
`

const Button = (props) => (
	<Btn className={'button button--' + props.color}>
		{props.children}
	</Btn>
)

export default Button