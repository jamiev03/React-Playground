import React, { Component } from 'react';
import TextField from 'material-ui/TextField'; //import MUI components to be used
import SelectField from 'material-ui/SelectField';//import MUI components to be used

class Search extends Component {
    state = { //defining state
        searchText: '', //nothing by default
        amount: 15, //state for the 'select'
        apiUrl: 'https://pixabay.com/api',
        apiKey: '15488224-e9fc93a8e259296be52f01d1f',
        images: [] //is an empty array to begin with and once we make a request and get images to fill this array
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}