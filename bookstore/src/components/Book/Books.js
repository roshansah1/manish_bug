import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();

  const [inputVal, setInputVal] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handling search functionality
  const handleChange = (e) => {
    setInputVal(e.target.value);
  }
  // whatever we will write in input field 
  // that will match with all books names 
  // after filter, fileterBooks stored in our books array for rendering
  const handleClick = () => {
    let inputValUpperCase = inputVal.trim().toUpperCase();

    let filterBooks = books.filter((book) => {return book.name.trim().toUpperCase().startsWith(inputValUpperCase)});
    setBooks(filterBooks);
  }

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);
  return ( 
    <div>
       <div className="input_field">
          <input type="text" value={inputVal} placeholder="type book name" onChange={handleChange} />
          <button onClick={handleClick}>Search Books</button>
        </div>
      <ul>
        {books &&
          books.map((book, i) => (
            <li key={i}>
              <Book book={book} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Books;