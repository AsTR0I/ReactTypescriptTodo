import {TodoItem} from '../components/TodoItem'
import {ITodo} from '../types/data'

interface ITodoListProps{
    items:ITodo[];
    removeTodo:(id:number) => void;
    toggleTodo: (id:number) => void;
}

const TodoList:React.FC<ITodoListProps> = (props) => {
    const {items,toggleTodo,removeTodo} = props;
    return <div>
        {
            items.map(item => <TodoItem key={item.id} toggleTodo={toggleTodo} removeTodo={removeTodo} {...item}/>)
        }
    </div>
}

export {TodoList}