import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';



class App extends Component {
  constructor(){
    super();
    this.todoItem = [
      {title:"play game",isDone:true},
      {title:"sing a song",isDone:true},
      {title:"play football",isDone:true}
    ];
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.todoItem.length>0 && this.todoItem.map((item,index) => <TodoItem key={index} item={item} />)};
          {this.todoItem.length===0 && 'Nothing'};
        </header>
      </div>
    );
  }
}

export default App;
