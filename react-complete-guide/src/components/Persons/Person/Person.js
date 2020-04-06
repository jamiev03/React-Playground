import React, { Component } from 'react';
import Auxillary from '../../../HOC/Auxillary';
import withClass from '../../../HOC/withClass';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('[Person.js], rendering...');
    return (
      //Auxillary allows for adjacent elements with a DOM element like <div> Note can also use the new version of React.Fragment which is now built in.
      <Auxillary>
      
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input 
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} 
        ref={this.inputElementRef} 
        />
      
      </Auxillary>
    );
  }

};

Person.protoType = {
  click: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired
};

export default withClass(Person, classes.Person);
