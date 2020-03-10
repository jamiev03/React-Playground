import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    // styling using a function like so
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px dotted #ccc',
            textDecoration: this.props.todo.completed ?
            'line-through' : 'none'
        }
    }

  render() {
      return (
        //   Can style using an inline style like so
          <div style={{ backgroundColor: '#eee'}}> 
            <p>
               <input type="checkbox" onChange={this.props.markComplete} /> {' '} 
               { this.props.todo.title }
            </p>
              {/* <h2 style={itemStyle} ></h2> */}
          </div>
      )
  }
}

// Can style using a variable as well
// const itemStyle = {
//     color: 'orange'
// }


// PropType
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}



export default TodoItem;