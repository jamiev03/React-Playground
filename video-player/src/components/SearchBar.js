import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';
import style from '../modules/SearchBar.module.css';

class SearchBar extends Component {
    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        //this. Is referring to the class component because in an arrow function method there is no 'this'
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);

        event.preventDefault();

    }

    render() {
        return (
            <Paper className={style.paper} elevation={3}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth color="primary" label='Search...' onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;