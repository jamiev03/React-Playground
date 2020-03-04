import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
  persons: [
    { name: 'Jamie', age: 32},
    { name: 'Julia', age: 27},
    { name: 'Michelle', age: 26},
    { name: 'Heybo', age: 270}
  ],
  showPersons: false
}

nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      { name: 'Jamie', age: 32 },
      { name: event.target.value, age: 27},
      { name: 'Michelle', age: 20}
    ]
  })
}

deletePersonHandler = (personIndex) => {
  // const persons = this.state.persons.slice();
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons});
}

togglePersonHandler = () => {
  const doesShow = this.state.showPersons; //true or false statement
  this.setState({showPersons: !doesShow});//toggler. If showPersons is false it equals true, and vice versa.
}

render() {
  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  };

  let persons = null;

  if (this.state.showPersons) {//boolean statement- is either true or false
    persons = (
      <div>
        {this.state.persons.map((person, index) => {
          return <Person 
            clicky={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} />
        })}
      </div> 
    )
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working.</p>
      <button
       style={style}
       onClick={this.togglePersonHandler}>Switch Name</button>
       {persons}

        

    </div>
      );
      // Note this code below is what is actually run. Above looks like HTML but it is rendered into the code below. JSX.
      // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Does this work now??'))
  }
}

//convert this component into a functional one. In order to use React hooks 
  // const app = (props) => {
  //   const [ personsState, setPersonsState] = useState({
  //       persons: [
  //         { name: 'Jamie', age: 32},
  //         { name: 'Julia', age: 27},
  //         { name: 'Michelle', age: 26}
  //       ]
  //     });

  //     const [otherState, setOtherState] = useState(otherState: 'someValue')

  //     const switchNameHandler = () => {
  //         // console.log('Was clicked!');
  //         //DON'T DO THIS- this.state.persons[0].name = 'Jacob';
  //         setPersonsState( {
  //           persons: [
  //             { name: 'Jamillion', age: 23},
  //             { name: 'Julia', age: 27},
  //             { name: 'Michelle', age: 20}
  //           ]
  //         })
  //       };

  //   return (
  //     <div className="App">
  //       <h1>Hi, I'm a React App</h1>
  //       <p>This is really working.</p>
  //       <button onClick={switchNameHandler}>Switch Name</button>
  //       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
  //       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Racing</Person>
  //       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
  //     </div>
  //   );
    //Note this code below is what is actually run. Above looks like HTML but it is rendered into the code below. JSX.
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,'Does this work now??'))
//}

export default App;
