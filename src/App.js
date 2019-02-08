import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem';



class App extends Component {
  constructor(){
    super();
    this.state={todoItem : [
      {title:"play game",isDone:false},
      {title:"sing a song",isDone:false},
      {title:"play football",isDone:false}
    
    ]};
  }

  handleClick(item){
    return (event) => {
      const isDone  = item.isDone;
      const {todoItem} = this.state;
      const index =   todoItem.indexOf(item);
      this.setState({
        todoItem:[
          ...todoItem.slice(0,index),
          {
            ...item,
            isDone:!isDone
          },
          ...todoItem.slice(index+1)
        ]
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.todoItem.length>0 && this.state.todoItem.map((item,index) => <TodoItem key={index} item={item} func={this.handleClick(item)} />)}
          {this.state.todoItem.length===0 && 'Nothing'}
        </header>
      </div>
    );
  }
}

export default App;
