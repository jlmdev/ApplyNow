import React from 'react'
import './custom.scss'

export function App() {
  return (
    <>
      <div className="header-container">
        <header>
          <ul>
            <li><img src="https://img.icons8.com/metro/26/000000/menu.png"/></li>
            <li>ToDo</li>
          </ul>
        </header>
        <div className="header-spacer"></div>
      </div>
      <div className="task">
        <ul>
          <li>Description:</li>
          <li>Priority:</li>
          <li>Start Date:</li>
          <li>Due Date:</li>
          <li>Notes:</li>
        </ul>
      </div>

      <a href="https://icons8.com/icon/3095/menu">Menu icon by Icons8</a>
    </>
  )
}
