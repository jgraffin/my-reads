import React, { Component } from 'react'
import MyBooks from '../my-books/MyBooks'
import Filter from '../filter/Filter'
import * as BooksAPI from '../../utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'

class Shelfs extends Component {

	// Instanciada uma variável Global "this.shelfs", com a finalidade de fazer o tratamento
	// de posicionamento dos livros nas respectivas prateleiras.
	constructor() {
		super()
		this.shelfs = [
			{ 'id': 'wantToRead', 'name': 'Want to Read' },
			{ 'id': 'currentlyReading', 'name': 'Currently Reading' },
			{ 'id': 'read', 'name': 'Read' }
		]
	}

	// books: Array vazio, que mudará o estado quando a api retornar os dados.
	// query: Vazio por padrão. Mudará somente quando o campo do filtro for preenchido.
	// loading: Enquanto a api não retornar com os dados, o loader continua visível.
	state = {
		query: ''
	}

	// Passsa os valores de "shelf" e "book" via props para ser atualizado no componente pai.
	// Dessa forma todos os componentes filhos recebem a mesma atualização.
	changeStatus = (shelf, book) => {
		this.setState({
			book: book.shelf = shelf
		})
		BooksAPI.update(book, shelf)
	}

	// Recebe o valor do filtro e atualiza o valor a propriedade query.
	// Limpa os espaços em branco da string digitada
	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		})
	}

	render = () => {

		// console.log(this.state.books)

		let showingBooks, listBooks
		const match = new RegExp(escapeRegExp(this.state.query), 'i')

		// Pega o array e faz um filtro, onde o teste é feito no título.
		// Se o título for igual ao valor que está listado nas prateleiras, o mesmo é retornado.
		listBooks = this.props.books.filter((b) => match.test(b.title))
		showingBooks = this.state.query ? listBooks : this.props.books

		return (
			<main className="mr-main">
				<div className="container">

					<Filter onUpdateQuery={this.updateQuery} />

					{
						// Mapeia todas as prateleiras.
						// onChangeBookShelf: Recebe o valor selecionado no combobox de "MyBooks" e envia o valor 
						// para o método "this.changeStatus" fazer o tratamento.
						// books: Distribui corretamente cada livro em sua respectiva prateleira no carregamento da página.
						this.shelfs.map((s) =>
							<div className="mr-shelf" key={s.id}>
								<div className="mr-shelf__title">
									<h2>{s.name}</h2>
								</div>
								<div className="mr-shelf__list">
									<MyBooks
										onChangeBookShelf={this.changeStatus}
										books={showingBooks.filter((b) => b.shelf === s.id)}
										bookSearch={this.props.books}
									/>
								</div>
							</div>
						)
					}
				</div>
			</main>
		)
	}
}

export default Shelfs

