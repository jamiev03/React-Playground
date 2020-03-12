import React, { Component } from 'react';

class AddTodo extends Component {
    render() {
        return (
            <form>
                <input style={{ display: 'flex' }}
                  type="text"
                  name="title"
                  style={{flex: '10', padding: '5px'}}
                  placeholder="Add Todo .."
                />
                <input
                  type="sybmit"
                  value="Submit"
                  className="btn"
                  style={{flex: '1'}}
                />
            </form>
        )
    }
}


export default AddTodo