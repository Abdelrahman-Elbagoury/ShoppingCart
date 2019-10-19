import { combineReducers } from 'redux'
import { bookReducer } from './booksReducers';
import { cartReducer } from './cartReducers';


export default combineReducers({
    books: bookReducer,
    cart: cartReducer
})