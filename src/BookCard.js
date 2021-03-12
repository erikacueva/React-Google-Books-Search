import React from "react";
import API from '../src/utils/API'

const BookCard = (props) => {
  function handleClick() {
    API.saveBook({
      title: props.title,
      author: props.author,
      description: props.description,
    }).then(() => console.log("saved book").catch((err) => console.log(err)));
  }

  return (
    <div className="card-container">
      <img src={props.image} alt="" />
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.publishedDate}</p>
      <p>{props.link}</p>
      <p>{props.description}</p>
      <button onClick={handleClick}>Save</button>
    </div>
  );
};

export default BookCard;
