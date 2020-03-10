import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    getStyle = () => {
        if(this.props.todo.completed) {
            return {
                textDecoration: 'line-through',
                fontWeight: '900'
                
            }
        } else {
            return {
                textDecoration: 'none'
            }
        }
    }
  render() {
      return (
        //   Can style using an inline style like so
          <div style={{ backgroundColor: '#eee'}}> 
              <h2 style={itemStyle} >{ this.props.todo.title }</h2>
              <h3 style={this.getStyle()}>Hi there! Just testing styles</h3>
          </div>
      )
  }
}

// Can style using a variable as well
const itemStyle = {
    color: 'orange'
}


// PropType
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}



export default TodoItem;