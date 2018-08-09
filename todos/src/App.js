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

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      todos: todoList,
    }
  }
  render(){
    return  (
    <section className='main'>
      <ul className='todo-list'>
      {this.state.todos.map( todo => <ToDoItem completed={todo.completed} item={todo.title} /> )}
      </ul>
    </section>
    )
  }
}



class App extends Component {
  render() {
    return (
      <section className='todoapp'>
      <header className='header'>
        <h1>todos</h1>
        <input className='new-todo' placeholder='What needs to be done?' autoFocus/>
      </header>
      <ToDoList>
      </ToDoList>
      <footer className='footer'>
        <span className='todo-count'><strong>0</strong> item(s) left</span>
        <button className='clear-completed'>Clear completed</button>
      </footer>
    </section>
    );
  }
}

export default App;