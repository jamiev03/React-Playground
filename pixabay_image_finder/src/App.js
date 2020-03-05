import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';//we have to import the theme provider and wrap our app in it in order to use the theme components.
import './App.css';
import NavBar from './components/navbar/NavBar';
import Search from './components/search/Search';

class App extends Component {
  render() {
    return (
      //Wrapper from Material Ui
      <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
