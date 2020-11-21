import React from 'react'
import './ToDoList.css';
import { Route } from 'react-router-dom'
import { Navigation } from '../Navigation/Navigation.jsx'
import { ToDoList__Task } from './__Task/ToDoList__Task.jsx'

class ToDoList extends React.Component {
   state = {
      tasks: [
         { name: 'Проснуться', time: '9:00', complited: false },
         { name: 'Поесть', time: '10:00', complited: false },
         { name: 'Умыться', time: '10:30', complited: false },
         { name: 'Убраться', time: '18:00', complited: false },
         { name: 'Спать', time: '22:00', complited: false }
      ],
      title: 'Список дел',
      showList: true
   }

   inputName = React.createRef();
   inputTime = React.createRef();

   toggleShowList = () => {
      this.setState((prevState) => {
         return {
            showList: !prevState.showList
         }
      })
   }

   toggleComplete = (index) => {
      const tasks = this.state.tasks;
      tasks[index].complited = !this.state.tasks[index].complited;
      this.setState((prevState) => {
         return {
            tasks: prevState.tasks
         }
      })
   }

   addTask = () => {
      const name = this.inputName.current.value;
      const time = this.inputTime.current.value;
      const obj = { 'name': name, 'time': time, 'completed': false };
      const tasks = this.state.tasks;
      const newTasks = tasks.push(obj);
      this.setState({ newTasks })
   }

   deleteTask = (index) => {
      const tasks = this.state.tasks;
      tasks.splice(index, 1);
      this.setState({ tasks })
   }

   render() {
      let tasks = null;

      if (this.state.showList) {
         tasks = this.state.tasks.map((task, index) => (// eslint-disable-next-line
            <ToDoList__Task
               key={index}
               number={index + 1}
               name={task.name}
               time={task.time}
               complited={task.complited}
               deleteTask={this.deleteTask.bind(this, index)}
               toggleComplete={this.toggleComplete.bind(this, index)}
            />
         ))
      }
      return (
         <div className="container">
            <h1>{this.state.title}</h1>
            <div className="addNewTask">
               <input type="text" className="ToDoList__input" placeholder='Название' ref={this.inputName} />
               <input type="text" className="ToDoList__input" placeholder='Время' ref={this.inputTime} />
               <button className="ToDoList__button" onClick={this.addTask}>Добавить</button>
            </div>

            <button className="ToDoList__button" onClick={this.toggleShowList}>Показать/скрыть</button>
            {tasks}
         </div>
      )
   }
}

export { ToDoList }