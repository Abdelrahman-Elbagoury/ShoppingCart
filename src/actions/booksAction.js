
const getBooks = () => {
    return {
        type:'GET_BOOKS'
    }
}

const addBook = (book) => {
    return {
        type: 'ADD_BOOK', payLoad: book }
}

const removeBook = (id) => {
    return {
        type: 'DELETE_BOOK',
        payLoad: id
    }
}

const updateBook = (book) => {
    return {
        type: 'UPDATE_BOOK',
        payLoad: book
    }
}

export { addBook, getBooks, removeBook, updateBook }