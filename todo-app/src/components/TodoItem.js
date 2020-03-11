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
          <div style={{ backgroundColor: '#eee'}}> 
            <p>
                {/* We need to know which todo is checked off so we add bind to the 'id' since we have access to that prop */}
               <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '} 
               { title }
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