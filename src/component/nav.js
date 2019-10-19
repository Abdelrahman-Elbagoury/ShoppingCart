import React from 'react'
import '../styles/styles.scss';
import { Link } from 'react-router-dom'
import { Navbar, Badge } from 'react-bootstrap'
import { FaShoppingCart, FaRProject } from 'react-icons/fa';
import {connect} from 'react-redux';


class Nav extends React.Component {
    render() {

        let totalQty = 0;

        for (let item of this.props.cart) {
            totalQty += item.quantity
        }

        return (
                <Navbar style={{marginBottom:30}} bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                    <FaRProject /> {' React project'}
                    </Navbar.Brand>
                    <div style={{ marginLeft: '60%', width: '20%' }}>
                        <Link style={{color:'white'}} to="/">Home</Link>
                        <Link style={{ marginLeft: 80, color:'white' }} to="/cart"><FaShoppingCart style={{marginRight:10, fontSize:20}} /> <Badge style={{left: -20,top: -10, position: 'relative'}} variant="danger">{totalQty}</Badge></Link>
                    </div>
                </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Nav);