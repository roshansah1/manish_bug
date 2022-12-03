import { Button } from "@mui/material";
import { Outlet, Link } from "react-router-dom";
import "./Book.css"
import axios from "axios";
const Book = (props) => {
  const { _id, name, author, description, price, image } = props.book;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Link to="/buy">Buy</Link>
    </div>
  );
};

export default Book;
