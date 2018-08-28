import React, { Component } from 'react'
import MyBooks from '../my-books/MyBooks'
import Filter from '../filter/Filter'
import * as BooksAPI from '../../utils/BooksAPI'
import escapeRegExp from 'escape-string-regexp'
import Loader from '../loader/Loader'

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
		books: [],
		query: '',
		loading: true
	}

	// Monta o componente com os dados da api.
	// Muda o estado de books, preenchendo-o com os dados da api.
	// Após 500 microsegundos a lista é mostrada na tela.
	componentDidMount = () => {
		BooksAPI.getAll().then((books) => {
			if (books) {
				setTimeout(() => this.setState({
					books,
					loading: false
				}), 500)
			}
		})
	}

	// Passsa os valores de "shelf" e "book" via props para ser atualizado no componente pai.
	// Dessa forma todos os componentes filhos recebem a mesma atualização.
	changeStatus = (shelf, book) => {
		this.props.onChangeBooks(shelf, book)
	}

	// Recebe o valor do filtro e atualiza o valor a propriedade query.
	// Limpa os espaços em branco da string digitada
	updateQuery = (query) => {
		this.setState({
			query: query.trim()
		})
	}

	render = () => {

		const { loading } = this.state;

		let showingBooks, getTitle
		const match = new RegExp(escapeRegExp(this.state.query), 'i')

		// Pega o array e faz um filtro, onde o teste é feito no título.
		// Se o título for igual ao valor que está listado nas prateleiras, o mesmo é retornado.
		getTitle = this.state.books.filter((b) => match.test(b.title))
		this.state.query ? showingBooks = getTitle : showingBooks = this.state.books

		if (loading) {
			return (
				<Loader loadText="Loading Shelfs ..." />
			)
		}

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

