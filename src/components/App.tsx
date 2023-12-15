import React, {useState,useEffect,useRef} from 'react';

import {ITodo} from '../types/data'

import { TodoList } from './TodoList';

const App:React.FC = () => {
  const [value,setValue] = useState('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(()=>{
    if (inputRef.current){
      inputRef.current.focus();
    }
  },[])

  const inputRef = useRef<HTMLInputElement>(null)

  const addTodo = () => {
    if (value){
    setTodos([...todos,{
      id: Date.now(),
      title:value,
      status:false
    }])
    setValue('')
  }
  }

  const removeTodo = (id:number):void => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const toggleTodo = (id:number):void => {
    setTodos(todos.map(item => {
      if(item.id !== id){
        return item;
      } else {
        return {
          ...item,status:!item.status
        }
      }
    }))}

  const HandleChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value)
  }

  const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) =>{
    if (e.key === 'Enter'){
      addTodo()
    }
  }

  return <div className='container mx-auto'>
      <div className='flex justify-center items-center h-[80px] space-x-3'>
        <input className='border border-blue-500 px-4 py-2' value={value} onKeyDown={handleKeyDown} onChange={event =>HandleChange(event)} ref={inputRef}/>
        <button className='border border-blue-500 px-4 py-2 hover:bg-blue-400' onClick={()=>addTodo()}>add</button>
      </div>
      <div className='flex justify-center'>
        <TodoList items={todos} removeTodo={removeTodo} toggleTodo ={toggleTodo}/>
      </div>
      
  </div>
}
export {App}