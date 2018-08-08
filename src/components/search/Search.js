import React, { Component } from 'react'
import Filter from '../filter/Filter'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends Component {

	state = {
		query: '',
		results: []
	}

	updateAdvancedQuery = (query) => {
		this.setState({
			query: query
		}, () => {
			if (this.state.query && this.state.query.length > 1) {
				if (this.state.query.length % 2 === 0) {
					this.getInfo()
				}
			}
		})
	}

	getInfo = () => {
		BooksAPI.search().then((query) => {
			this.setState({ results: query })
		})

		// axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
		// 	.then(({ data }) => {
		// 		this.setState({
		// 			results: data.data
		// 		})
		// 	})
	}

	render() {
		console.log(this.state.results)

		// let showingBooks, getTitle
		// const match = new RegExp(escapeRegExp(this.state.query), 'i')

		// getTitle = this.state.books.filter((b) => match.test(b.title))
		// this.state.query ? showingBooks = getTitle : showingBooks = this.state.books

		// showingBooks.sort(sortBy('name'))

		return (
			<div className="mr-search">
				<div className="container">
					<Link to="/" className="mr-search-button mr-search-button--close">
						<svg className="mr-search-button__icon mr-search-button__icon-close" viewBox="0 0 24 24">
							<path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
						</svg>
					</Link>
					<h2 className="mr-search-title">
						<svg className="mr-search-button mr-search-button__icon" viewBox="0 0 24 24">
							<path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
						</svg>
						<strong>Advanced Search</strong>
					</h2>

					<Filter onUpdateQuery={this.updateAdvancedQuery} />

					<div className="mr-search-results">
						<p>{this.state.query}</p>
						{/* <table>
							{
								this.state.books.map((b) => (
									<tr key={b.id}>
										<td className="mr-search-results__image">
											<img src={b.imageLinks.smallThumbnail} alt={b.title} />
										</td>
										<td className="mr-search-results__text">
											<table>
												<tr>
													<td className="text-col text-col-title">
														<h2>{b.title.length >= 16 ? b.title.substr(0, 16) + '...' : b.title}</h2>
													</td>
													<td className="text-col text-col-authors">
														<strong>Authors</strong>
														<ul>
															{
																b.authors.map((author) =>
																	<li key={author}>{author}</li>
																)
															}
														</ul>
													</td>
													<td className="text-col text-col-description">
														<strong>Description</strong>
														<p>{b.description.substr(0, 80) + '...'}</p>
													</td>
													<td className="text-col text-col-category">
														<strong>Categories</strong>
														<p>{b.categories}</p>
													</td>
												</tr>
											</table>
										</td>
									</tr>
								))
							}
						</table> */}
					</div>
				</div>
			</div>
		)
	}
}

export default Search