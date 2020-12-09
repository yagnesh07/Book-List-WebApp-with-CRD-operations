import React, { createContext, useEffect, useReducer } from 'react';
import { BookReducer } from '../Reducer/BookReducer';

export const BookContext = createContext();

function BookContextProvider(props) {

    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    })

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    
    // now its moved in reducer
    // const addBooks = (title, author) => {
    //     setbooks([...books, {title, author, id: uuidv1()}])
    // }
    
    // const removeBooks = (id) => {
    //     setbooks(books.filter(book => book.id !== id))
    // }

    return (
        <BookContext.Provider value = {{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;
