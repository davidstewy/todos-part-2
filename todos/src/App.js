import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import todoList from './todos.json';

const ToDoItem = props => (
  
  <li className={props.completed}>
     <div className='view'>
        <input className='toggle' type='checkbox' />
        <label>{props.item}</label>
        <button className='destroy'></button>
     </div>
  </li>
);

const ToDoList = props => (
  <section className='main'>
    <ul className='todo-list'>
    {props.children}
    <ToDoItem completed="completed" item="Taste Javascript" />
    <ToDoItem item="Buy a unicorn" />
    </ul>
  </section>
);


class App extends Component {
  render() {
    return (
      <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <input className='new-todo' placeholder='What needs to be done?' autoFocus/>
      </header>
      <ToDoList>
        {/* <ToDoItem completed="completed" item="Taste Javascript" />
        <ToDoItem item="Buy a unicorn" /> */}
      </ToDoList>
      {/* <section className='main'>
        <ul className='todo-list'>
          <li className='completed'>
            <div className='view'>
              <input className='toggle' type='checkbox' />
              <label>Taste JavaScript</label>
              <button className='destroy'></button>
            </div>
          </li>
          <li>
            <div className='view'>
              <input className='toggle' type='checkbox'/>
              <label>Buy a unicorn</label>
              <button className='destroy'></button>
            </div>
          </li>
        </ul>
      </section> */}
      <footer className='footer'>
        <span className='todo-count'><strong>0</strong> item(s) left</span>
        <button className='clear-completed'>Clear completed</button>
      </footer>
    </section>
    );
  }
}

export default App;