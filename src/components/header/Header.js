import React from 'react'
import Styled from 'styled-components'

// Header style
const Head = Styled.header`
	background-color: #dadada;
	display: flex;
	padding: 20px;
	width: 100%;
`

const Header = (props) => (
	<Head>
		<div className="container">{this.props}</div>
	</Head>
)

export default Header