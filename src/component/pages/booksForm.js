import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { connect } from 'react-redux'
import { findDOMNode } from 'react-dom'
import { addBook } from '../../actions/booksAction'

class BooksForm extends React.Component {
    handleSubmit() {
        const book = [{
            id: findDOMNode(this.refs.id).value,
            title: findDOMNode(this.refs.title).value,
            description: findDOMNode(this.refs.description).value,
            price: findDOMNode(this.refs.price).value,
        }]
        this.props.addBook(book)
        findDOMNode(this.refs.id).value = ''
        findDOMNode(this.refs.title).value = ''
        findDOMNode(this.refs.description).value = ''
        findDOMNode(this.refs.price).value = ''
    }
    render() {
        return (
            <Form style={{ backgroundColor: '#F2F4F4', borderRadius: 5, border: '1px solid gray', marginLeft: 10, padding: 15, marginBottom: 15 }}>
                <Form.Group controlId="formBasicId">
                    <Form.Label>ID</Form.Label>
                    <Form.Control ref='id' type="texts" placeholder="Enter ID" />
                </Form.Group>
                <Form.Group controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref='title' type="texts" placeholder="Enter Title" />
                </Form.Group>
                <Form.Group controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control ref='description' type="text" placeholder="Enter Description" />
                </Form.Group>
                <Form.Group controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control ref='price' type="text" placeholder="Enter Price" />
                </Form.Group>
                <Button onClick={this.handleSubmit.bind(this)} variant="primary">
                    Save Book
                </Button>
            </Form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addBook: (book) => dispatch(addBook(book)),
        dispatch
    }
}

export default connect(null, mapDispatchToProps)(BooksForm)