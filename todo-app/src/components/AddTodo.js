import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }
    
    onSubmit = (e) => {
        // to prevent submit default behavior aka submit to actual file
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' }) //onsubmit field is cleared
    }

    //We get the value of what we type in the input field by the (e) parameter and then we can access that through e.target.value, if you have multiple fields you can make the connection by setting a name prop that equals the same name as the state key element. AKA name='title' and title in the state. It is written like so.
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                  type="text"
                  name="title"
                  style={{flex: '10', padding: '5px'}}
                  placeholder="Add Todo .."
                  //As we type into the input it will fire an onChange event and we need to handle/update state or get an error.
                  value={this.state.title}
                  onChange={this.onChange}
                />
                <input
                  type="submit"
                  value="Submit"
                  className="btn"
                  style={{flex: '1'}}
                />
            </form>
        )
    }
}


export default AddTodo