import React, { Component } from 'react';
import render from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Body from './Body';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Divider from 'material-ui/Divider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { cyan500 } from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';
import Payments from './components/payments';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500
  },
  appBar: {
    height: 20
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body />
        <Payments />
      </div>
    );
  }
}

export default App;
