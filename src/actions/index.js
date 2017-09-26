export function selectBook(book) {
    // selectBook is an actionCreator. It needs to return an action, an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book,
    }
}
