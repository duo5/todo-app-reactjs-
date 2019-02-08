import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
render(){
    const {item,func} = this.props;
    let className = "";
    if(this.props.item.isDone){
        className += "TodoItem-complete";
    }
    return (
        
        <div className={className} onClick={func} >
            <p>{item.title}</p>
        </div>
    );
}
}

export default TodoItem;