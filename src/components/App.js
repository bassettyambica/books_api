import React, { Component } from "react";
import '../css/App.css';

import BookList from '../containers/BookList';


class App extends Component {
  render() {
    return (
      <div className='container'>
        <BookList />
      </div>
    );
  }
}

export default App;