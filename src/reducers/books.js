import { FETCH_BOOKS, RECIEVE_BOOKS } from '../actions/index';
import { fetchBooksList } from '../utils/util';


const INITIAL_STATE = {
    bookList: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_BOOKS:
            let bookListResp = fetchBooksList(action.recieveBookListCallBack)
            const bookList = (bookListResp) ? [] : bookListResp;

            return Object.assign({}, state, { bookList: bookList });
        case RECIEVE_BOOKS:
            return Object.assign({}, state, { bookList: action.bookList });
        default:
            return state;
    }
}