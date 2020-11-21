import React from 'react';
import "./ToDoList__Task.css"

const ToDoList__Task = props => {
   // const styleItem = {
   //    'width': '170px',
   //    'display': 'flex',
   //    'justifyContent': 'space-between'
   // }
   const styleLabel = {}
   if (props.complited) {
      // styleItem['background'] = 'green'
      styleLabel['textDecoration'] = 'line-through';
   }
   return (
      <div className="ToDoList__Task">
         <label style={styleLabel} onClick={props.toggleComplete}>
            <strong>{props.number}: </strong>
            <span>{props.name} </span>
            <span>{props.time}</span>
         </label>

         {/* <button onClick={props.toggleComplete}>V</button> */}
         <button className="task-button" onClick={props.deleteTask}>&#215;</button>
      </div>
   )
}

export { ToDoList__Task }
