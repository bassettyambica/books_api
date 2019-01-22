import { connect } from 'react-redux';
import BookList from '../components/BookList';
import { bindActionCreators } from 'redux';
import { fetchBookList, recieveBookList } from '../actions';

const mapStateToProps = state => ({
    bookList: state.books.bookList
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            fetchBookList,
            recieveBookList
        },
        dispatch
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BookList);