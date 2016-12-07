import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import VisibleTodoList from './components/todo/TodoContainer'
import AppBar from 'material-ui/AppBar'
import Menu from './components/menu/Menu'
import './App.css';


const App = () => (
  <MuiThemeProvider>
    <div className="App">
      <Menu />
      <div className="appWrapper">
        <AppBar title="React to-do list"
                iconStyleLeft={{display:'none'}}/>
        <VisibleTodoList />
      </div>
    </div>
  </MuiThemeProvider>
);

export default App