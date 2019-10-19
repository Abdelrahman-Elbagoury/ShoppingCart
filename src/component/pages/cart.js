import React from 'react'
import { Container, Col, Button, Row, ButtonGroup } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeCart, updateCart } from '../../actions/cartActions'

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.deleteHandler = this.deleteHandler.bind(this)
        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
    }
    deleteHandler(id) {
        this.props.removeCart(id)
    }
    onIncrement(id) {
        this.props.updateCart(id, 1)
    }
    onDecrement(id, quantity) {
        if (quantity > 1) {
            this.props.updateCart(id, -1)
        } else {
            this.props.removeCart(id)
        }
    }
    render() {
        let totalPrice = 0;
        for (let item of this.props.carts) {
            totalPrice += item.price * item.quantity
        }
        if (this.props.carts.length > 0) {
            const cartItamList = this.props.carts.map((book) => {
                return (
                    <Container>
                        <Row>
                            <Col sm={4} style={{ backgroundColor: '#4A235A', color: 'white', borderRadius: 5, border: '1px solid gray', marginLeft: 10, padding: 15, marginBottom: 15 }}>
                                <h6 key={Math.random()}>{book.title}</h6>

                            </Col>
                            <Col style={{ marginTop: '2%', marginLeft: 40 }}>
                                <h6>USD = {book.price * book.quantity}</h6>
                            </Col>
                            <Col style={{ marginTop: '2%' }}>
                                <h6>Qty. = {book.quantity}</h6>
                            </Col>

                            <Col sm={3}>
                                <ButtonGroup style={{
                                    height: '50%',
                                    marginTop: '7%'
                                }} aria-label="Basic example">
                                    <Button onClick={this.onDecrement.bind(this, book.id, book.quantity)} variant="primary">-</Button>
                                    <Button onClick={this.onIncrement.bind(this, book.id)} variant="primary">+</Button>
                                    <Button onClick={() => { this.deleteHandler(book.id) }} variant="danger">Delete</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Container>
                )
            })
            return (
                <Container>
                    {cartItamList}
                    <Col style={{ backgroundColor: '#4A235A', color: 'white', borderRadius: 5, border: '1px solid gray', marginLeft: 10, padding: 15, marginBottom: 15, margin:'auto', textAlign:'center', fontWeight:500, fontSize:25}} md={5}>
                        Total Price = {totalPrice}
                    </Col>
                </Container>
            )

        } else {
            return <div></div>
        }
    }
}

function mapStateToProps(state) {
    return {
        carts: state.cart.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        removeCart: removeCart,
        updateCart: updateCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)