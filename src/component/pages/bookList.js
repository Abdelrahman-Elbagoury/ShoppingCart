import React from 'react'
import { connect } from 'react-redux'
import { getBooks } from '../../actions/booksAction'
import { bindActionCreators } from 'redux'
import { Container, Col, Row } from 'react-bootstrap'
import BookItem from './bookItem'
import BooksForm from './booksForm'
import Cart from './cart'

class BookList extends React.Component {
    componentDidMount() {
        this.props.getBooks
    }
    render() {
        const booksList = this.props.books.map((bookArr) => {
            return (
                <BookItem
                    key={bookArr.id}
                    id={bookArr.id}
                    title={bookArr.title}
                    description={bookArr.description}
                    price={bookArr.price}
                />
            )
        })
        return (
            <Container>
                <h1 style={{ textAlign: 'center', color:'white', marginBottom:40, marginTop:20 }}> Redux project</h1>
                <Container>
                    <Row>
                        <Col xs={12} sm={6}>
                            <BooksForm />
                        </Col>
                        <Col>
                            {booksList}
                        </Col>

                    </Row>
                </Container>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        books: state.books.books,
        carts: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBooks: getBooks
    },
        dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList)