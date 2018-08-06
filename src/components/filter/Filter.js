import React from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

function Filter(props){

		let showingBooks
		if (props.query) {
			const match = new RegExp(escapeRegExp(props.query), 'i')
			showingBooks = props.books.filter((book) => match.test(book.name))
		} else {
			showingBooks = props.books
		}
	
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
				<label>{props.label} </label>
			</div>
		)
}

export default Filter