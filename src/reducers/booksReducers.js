
export const bookReducer = (state = { books: [
    {
        id: 1,
        title: 'this is the first book title',
        description: 'this is the first book description',
        price: 100
    }, {
        id: 2,
        title: 'this is the second book title',
        description: 'this is the second book description',
        price: 115
    }] }, action) => {
    switch (action.type) {
        case 'GET_BOOKS':
            return { books:[...state.books]};
        case 'ADD_BOOK':
            // let books = state.books.concat(action.payLoad)
            return { books: [...state.books, ...action.payLoad] };
        case 'DELETE_BOOK':
            let currentBookDelete = [...state.books]
            let indexOfDeletedBook = currentBookDelete.findIndex((book) => {
                return book.id === action.payLoad.id
            })
            return {books: [...currentBookDelete.slice(0, indexOfDeletedBook),
            ...currentBookDelete.slice(indexOfDeletedBook + 1)]};
        case 'UPDATE_BOOK':
            let currentBookToUpdate = [...state.books]
            let indexOfUpdatedBook = currentBookToUpdate.findIndex((book) => {
                return book.id === action.payLoad.id
            })
            const newBookToUpdate = currentBookToUpdate[indexOfUpdatedBook];
            newBookToUpdate.title = action.payLoad.title;
            return {
                books: [...currentBookToUpdate.slice(0, indexOfUpdatedBook), newBookToUpdate,
                        ...currentBookToUpdate.slice(indexOfUpdatedBook + 1)]
            }
    }
    return state
}
