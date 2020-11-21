import React from 'react'

const Navigation = () => {
   return (
      <nav className='Navigation'>
         <ul>
            <li><a href="/">Список дел</a></li>
            <li><a href="/comp1">Компонент 1</a></li>
            <li><a href="/comp2">Компонент 2</a></li>
            <li><a href="/comp3">Компонент 3</a></li>
         </ul>
      </nav>
   )
}

export { Navigation }