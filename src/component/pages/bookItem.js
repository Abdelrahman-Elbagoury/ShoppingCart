import React, { Component } from 'react'
import { Col, Button, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToCart, updateCart } from '../../actions/cartActions'

class BookItem extends Component {
    addHandler() {
        const book = {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            price: this.props.price,
            quantity: 1
        }
        if (this.props.cart.length > 0) {
            let id = this.props.id
            let cartIndex = this.props.cart.findIndex((cart) => {
                return cart.id === id
            })
            if (cartIndex === -1) {
                this.props.addToCart(book)
            } else {
                this.props.updateCart(id, 1)
            }
        } else {
            this.props.addToCart(book)
        }

    }
    render() {
        return (
            <Row>
                <Col>
                    <div key={this.props.id} style={{ backgroundColor: '#F2F4F4', borderRadius: 5, textAlign: 'center', border: '1px solid gray', marginLeft: 10, padding: 15, marginBottom: 15 }}>
                        <h1 style={{ fontSize: '15px' }}>{this.props.title}</h1>
                        <h1 style={{ fontSize: '15px' }}>{this.props.description}</h1>
                        <h1 style={{ fontSize: '15px' }}>{this.props.price}</h1>
                        <Button onClick={this.addHandler.bind(this)} style={{ textAlign: 'center' }} variant="primary">Buy now</Button>
                    </div>
                </Col>
            </Row>
        )

    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToCart: addToCart,
        updateCart: updateCart,
    },
        dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)