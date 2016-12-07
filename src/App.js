import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VisibleTodoList from './components/todo/TodoContainer'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Menu from './components/menu/Menu'
import './App.css';

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <div className="App">
      <Menu />
      <div className="appWrapper">
        <VisibleTodoList />
      </div>
    </div>
  </MuiThemeProvider>
);

export default App