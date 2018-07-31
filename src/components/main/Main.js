import React from 'react'
import Styled from 'styled-components'

const Wrap = Styled.main`
	display: block;
	width: 100%;
`

const Main = (props) => (
	<Wrap>
		<div className="container">
			{this.props}
		</div>
	</Wrap>
)

export default Main