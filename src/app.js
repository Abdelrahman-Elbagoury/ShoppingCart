import ReactDOM from 'react-dom'
import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import './styles/styles.scss'
import combine from './reducers/index'
import { Provider } from 'react-redux'
import BookList from './component/pages/bookList'
import Cart from './component/pages/cart'
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Container, Navbar, Row, Col, Badge } from 'react-bootstrap'
import Nav from './component/nav'

const middleware = applyMiddleware(logger)
const store = createStore(combine, middleware)

const CartPage = () => (
    <Container style={{ backgroundColor: '#F2F4F4', marginTop: 20, borderRadius: 5, border: '1px solid gray', padding: 10, marginBottom: 15, margin:'auto'}}>
        <Row>
            <Col>
                <h1 style={{ backgroundColor: '#4A235A', color: 'white', padding: 20, width: 200, margin: 'auto', textAlign: 'center', borderRadius: 5, marginBottom: 15 }}>Cart</h1>
                <Provider store={store}>
                    <Cart />
                </Provider>
            </Col>
        </Row>

    </Container>
)

const BookListPage = () => (
    <Provider store={store}>
        <BookList />
    </Provider>
)

const NavBar = () => (
    <Provider store={store}>
        <Nav />
    </Provider>
)

const routes = (
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route path='/' component={BookListPage} exact={true} />
                <Route path='/cart' component={CartPage} />
            </Switch>
        </div>
    </Router>
)

let app = document.getElementById('app')
ReactDOM.render(routes, app)