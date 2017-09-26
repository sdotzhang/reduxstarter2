import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li className="list-group-item"
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            )
        });
    };
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    };
}


function mapStateToProps(state) {
    // what ever is return will show up as props inside of BookList
    return {
        books: state.books
    }
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, it should be passed to all the reducers
    return bindActionCreators({ selectBook }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
