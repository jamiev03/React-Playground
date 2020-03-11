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
      const { id, title } = this.props.todo; //Destructuring allows to pull data from this.props.todo
      return (
        //   Can style using an inline style like so
          <div style={this.getStyle()}> 
            <p>
                {/* We need to know which todo is checked off so we add bind to the 'id' since we have access to that prop thanks to the destructuring up top*/}
               <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '} 
               { title }
               {/* Have to use bind again because it needs to know the id */}
               <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>X</button>
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

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '4px',
    cursor: 'pointer',
    float: 'right'
}



export default TodoItem;