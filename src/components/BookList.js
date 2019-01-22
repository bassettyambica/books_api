import React, { Component } from "react";
import BookDetails from './BookDetails';

class BookList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModel: false,
      bookContent: {}
    }
  }

  componentDidMount = () => {
    this.props.fetchBookList(this.props.recieveBookList);
  };

  handleBookSelection = (book) => {
    this.setState({ showModel: !this.state.showModel, bookContent: book });
  }

  closeModel = () => {
    this.setState({ showModel: !this.state.showModel });
  }

  renderBooks = booklist => {
    return (
      <article className='articleContent'>
        <h1 className='article-title'>{booklist.display_name}</h1>
        {booklist.books.map((book, index) => {
          return (
            <div className='panel-body' key={index} >
              <div className='panel' onClick={() => this.handleBookSelection(book)}>
                <img src={book.book_image} alt="bookimage" className="img-responsive" />
                <br></br>
                <span className='panel-span'>{book.description}</span>
                <span className='panel-span'>{book.author}</span>
                <h1>{book.title}</h1>
              </div>
            </div>
          )
        })}
      </article>
    );
  };

  render() {
    const bookList = this.props.bookList;
    if (!bookList) {
      return <div>Loading...</div>;
    }
    const showModalInfo = this.state.showModel ? `mainOpacity` : ``;
    return (
      <div className={`${showModalInfo} mainContainer`}>
        <h2 className='siteHeading'>Online Book Store</h2>
        {bookList.length > 0 &&
          bookList.map(booklist => {
            return <ul key={booklist.list_id}>{this.renderBooks(booklist)}</ul>;
          })}
        {this.state.showModel ? <BookDetails className={showModalInfo} showModel={this.state.showModel} closeModel={this.closeModel} bookInfo={this.state.bookContent} /> : null}
      </div>
    );
  }
}

export default BookList;
