import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import WebFont from 'webfontloader'
import './components/header/header.css'

WebFont.load({
	google: {
	  families: ['Montserrat:400,600,700,900', 'sans-serif']
	}
 });

ReactDOM.render(<App />, document.getElementById('root'))

