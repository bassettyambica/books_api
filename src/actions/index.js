export const FETCH_BOOKS = 'FETCH_BOOKS';
export const RECIEVE_BOOKS = 'RECIEVE_BOOKS';

export const fetchBookList = (recieveBookListCallBack) => {
    return {
        type : FETCH_BOOKS,
        recieveBookListCallBack
    };
}

export const recieveBookList = (bookList) => {
    return {
        type : RECIEVE_BOOKS,
        bookList
    };
}

