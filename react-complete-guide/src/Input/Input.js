import React, { Component } from 'react';
import Validation from './Validation';

class Input extends Component {
    state = { //defining state
        searchText: '' //nothing by default
    }

    readText = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val });
      };
    
    render() {
        return (
            <div>
                <h1>Hi !!!! I am the Input :</h1>
                <input name="searchText" onChange={this.readText} type="text" value={this.state.searchText} placeholder="Type HERE" />
        
        <Validation text={this.state.searchText.length}/>
                
            </div> 
        )  
    }
}

export default Input;