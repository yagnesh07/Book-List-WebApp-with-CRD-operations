import React from 'react'
import BookForm from './Component/BookForm';
import BookList from './Component/BookList';
import Navbar from './Component/Navbar'
import BookContextProvider from './Context/BookContext';


function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
