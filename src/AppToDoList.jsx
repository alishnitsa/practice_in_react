import React from 'react'
import { Route } from 'react-router-dom'
import { Navigation } from './Navigation/Navigation.jsx'
import { ToDoList } from './ToDoList/TodoList.jsx'
import { Comp1 } from './Comps/Comp1.jsx'
import { Comp2 } from './Comps/Comp2.jsx'
import { Comp3 } from './Comps/Comp3.jsx'

const AppToDoList = () => {
   return (
      <>
         <Navigation />
         <hr />
         <Route path='/' exact component={ToDoList} />
         <Route path='/comp1' exact component={Comp1} />
         <Route path='/comp2' exact component={Comp2} />
         <Route path='/comp3' exact component={Comp3} />

      </>
   )
}

export { AppToDoList }