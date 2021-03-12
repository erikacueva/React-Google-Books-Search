import React, { Component } from "react";
import SearchArea from "./SearchArea";
import request from 'superagent';
import BookListCard from "./BookListCard";
// import BookCard from './BookCard'

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: ""
    }
  }

  searchBookMethod = (e) => {
      e.preventDefault(); 
    request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({q: this.state.searchField})
    .then((data) => { 
        // a spread operator grabs all the items and spreads them into the new array
        this.setState({books: [...data.body.items]})
        console.log(data); 
    })
  }

//   method to handle the search. Pass the method into the searchArea component
  handleSearch = (e) => {
      console.log(e.target.value); 
      this.setState({searchField: e.target.value})
  }

  render() {
    return (
      <div>
        <SearchArea searchBookMethod={this.searchBookMethod} handleSearch={this.handleSearch}/>
        <BookListCard books={this.state.books} />
      </div>
    );
  }
}

export default Books;
