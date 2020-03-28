import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core';
import style from '../modules/SearchBar.module.css';

class SearchBar extends Component {
    render() {
        return (
            <Paper className={style.paper} elevation={3}>
                <form>
                    <TextField fullWidth label='Search...'></TextField>
                </form>
            </Paper>
        )
    }
}

export default SearchBar;