import React, { Component } from 'react';

class Input extends Component {
    state = { //defining state
        searchText: '' //nothing by default
    }

    readText = e => {
        const val = e.target.value;
        this.setState({ [e.target.name]: val }, () => {
          if (val === '') {
            this.setState({ images: [] });
          } else {

          }
        });
      };
    
    render() {
        return (
            <div>
                <h1>Hi !!!! I am the Input :</h1>
                <input onChange={this.readText} type="text" value={this.state.searchText} placeholder="Type HERE" />
        <p></p>
                
            </div> 
        )  
    }
}

export default Input;