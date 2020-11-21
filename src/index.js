import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './clearing.css'

// import App from './App';
// import { List } from './List.jsx'
// import { ToDoList } from './ToDoList/TodoList.jsx'
import { AppToDoList } from './AppToDoList.jsx'


const application = (
   <BrowserRouter>
      <AppToDoList />
   </BrowserRouter>
)

ReactDOM.render(application, document.getElementById('root'));
