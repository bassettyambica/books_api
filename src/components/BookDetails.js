import React, { Component } from 'react';

class BookDetails extends Component {

    handleProjectInfo = () => {
        this.props.closeModel();
    }
    
    render () {
        const book = this.props.bookInfo;

        return (
            <div className='openModal'>
                <div className='modalContent'>
                    <img src={book.book_image} alt="bookimage" className="img-responsive modelImage" />
                    <h2>Title : {book.title}</h2>
                    <h2>Author : {book.author}</h2>
                    <div>
                        <span className='productInfo'>Amazon Link: {book.amazon_product_url}</span>
                        <span className='productInfo'>Description: {book.description}</span>
                    </div>
                    <button onClick={this.handleProjectInfo}>close</button>
                </div>
            </div>
        );
    }
}

export default BookDetails;