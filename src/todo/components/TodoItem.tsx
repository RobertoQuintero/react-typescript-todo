import { Todo } from '../interfaces/interfaces';
import { useTodos } from '../hooks/useTodos';
import React, {  useState } from 'react';

interface props {
  todo:Todo
}


export const TodoItem = ({todo}:props) => {
  const [clickCounter, setClickCounter] = useState(1)

  const {toggleTodo}= useTodos()

  const handleDoubleClick=(ev:React.MouseEvent<HTMLElement>)=>{
    setClickCounter(c=>c+ev.detail)
    setTimeout(() => {
      if(clickCounter===2)
      {
        toggleTodo(todo.id)
        setClickCounter(1)
      }else if(clickCounter===1){
        setClickCounter(1)
      }
      
    }, 250);
  }

  return (
    <li
      style={{
        cursor:'pointer',
        textDecoration: todo.completed ? 'line-through':''
      }}    
    onClick={handleDoubleClick}>{todo.desc}</li>
  )
}
