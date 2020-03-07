import React, { Component } from 'react';
import TextField from 'material-ui/TextField'; //import MUI components to be used
import SelectField from 'material-ui/SelectField';//import MUI components to be used
import MenuItem from 'material-ui/MenuItem';//import MUI components to be used
import axios from 'axios'; //When we type we want to send a request to the API we use Axios for that. Could use fetch as well.
import imageResults from '../image-results/ImageResults';

class Search extends Component {
    state = { //defining state
        searchText: '', //nothing by default
        amount: 15, //state for the 'select'
        apiUrl: 'https://pixabay.com/api',
        apiKey: '15488224-e9fc93a8e259296be52f01d1f',
        images: [] //is an empty array to begin with and once we make a request and get images to fill this array
    };

    // onTextChange = (e) => { //as a parameter it takes the event.
    //     //set the searchText in state to the value in TextField.
    //     //pass in a callback when the name changes to value-
    //     this.setState({[e.target.name]: e.target.value}, () => {
    //         //using axios to make a 'get' request
    //         axios.get(`${this.state.apiUrl}/?key=
    //         ${this.state.apiKey}&q=
    //         ${this.state.searchText}
    //         &image_type=photo&per_page
    //         ${this.state.amount}&safesearch=true`,
    //         )//axios get request gives promise and now we need to access the 'hits' array from the JSON and insert it into the 'image' array- which is empty.
    //         .then(res => this.setState({images: res.data.hits}))
    //         .catch(err => console.log(err));//.catch logs error
    //     });
    // }

    
  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val }, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${
              this.state.searchText
            }&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then(res => this.setState({ images: res.data.hits }))
          .catch(err => console.log(err));
      }
    });
  };

  onAmountChange = (e, index, value) => this.setState({ amount: value} );

    render() {
        console.log(this.state.images);
        return (
            <div>
                <TextField //Using TextField component from MUI
                name='searchText'
                value={this.state.searchText}
                onChange={this.onTextChange}//every time we type it should update the state-
                floatingLabelText='Search For Images' //From MUI
                fullWidth={true}//from MUI
                />
                <br/>
                <SelectField
                name='amount'
                floatingLabelFixed='Amount'
                value={this.state.amount}
                onChange={this.onAmountChange}
                >
                <MenuItem value={5} primaryText='5' />
                <MenuItem value={10} primaryText='10' />
                <MenuItem value={15} primaryText='15' />
                <MenuItem value={20} primaryText='20' />
                </SelectField>
                <br />
                {this.state.images.length > 0 ? (<imageResults images={this.state.images} />) : null}

            </div>
        )
    }
}

export default Search;