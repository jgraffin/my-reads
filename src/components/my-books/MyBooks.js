import React, { Component } from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class MyBooks extends Component {

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	render() {
		
		let showingBooks
		if (this.props.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i')
			showingBooks = this.state.books.filter((book) => match.test(book.name))
		} else {
			showingBooks = this.state.books
		}

		return(
			<div>
				<div className="filter-group">      
					<input
						type="search"
						spellCheck="false"
						value={this.state.query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
					<span className="highlight"></span>
					<span className="bar"></span>
					<label>{this.props.label} </label>
				</div>
				<ul>
					{
						this.props.books.map((b) => (
							<li key={b.id}>
								<div className="item-book--selection">
									{
										<select onChange={() => this.props.onChangeBookShelf(b)}>
											<option value="moveto" disabled>Move to...</option>
											<option value="wantToRead">Want to Read</option>
											<option value="read">Read</option>
											<option value="currentlyReading">Currently Reading</option>
											<option value="none">None</option>
										</select>
									}
								</div>
								<div className="item-book--img">
									<img src={b.imageLinks.smallThumbnail} alt={b.title} />
								</div>
								<div className="item-book--title">
									<h2>{b.title}</h2>
								</div>
								<div className="item-book--description">
									<p>{b.author}</p>
								</div>
							</li>
						))
					}
				</ul>
			</div>
		)
	}
}

export default MyBooks