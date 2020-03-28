import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';
import style from '../modules/SearchBar.module.css';

class SearchBar extends Component {
    state = {
        searchTerm: '',
    }

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    handleSubmit = () => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
    }

    render() {
        return (
            <Paper className={style.paper} elevation={3}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label='Search...' onChange={this.handleChange} />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;