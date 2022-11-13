import React from 'react';
import classes from "./App.module.css";
import './App.module.css';

const defaultToDoList = [
  { id: 1, name: 'task 1', description: 'description 1', checked: false },
  { id: 2, name: 'task 2', description: 'description 2', checked: false },
  {
    id: 3,
    name: 'task 3',
    description:
        'so long task description 3 so long task description so long task description so long task description so long task description',
    checked: true
  }
];

function App() {
  return (
      <div className={classes.app_container}>
        <div className={classes.container}></div>
      </div>



  )}

export default App;
