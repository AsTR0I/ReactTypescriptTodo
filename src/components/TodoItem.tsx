import {ITodo} from '../types/data'

interface ITodoItem extends ITodo{
    removeTodo:(id:number) => void;
    toggleTodo:(id:number) => void;
}

const TodoItem:React.FC<ITodoItem> = (props) => {
    const {id,title,status,removeTodo,toggleTodo} = props
    
    return <div className='items-center w-full space-x-4 text-xl border px-6 py-2'>
        <div></div>
        <input type="checkbox" checked={status} onChange={()=>toggleTodo(id)}/>
        <span className={status ? 'line-through' : ''}>{title}</span>
        <button className='text-red-600 pl-2' onClick={()=>removeTodo(id)}><span className='text-2xl text-center justify-center'>x</span></button>
    </div>
}

export {TodoItem}