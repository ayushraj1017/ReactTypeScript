import {ITodos} from '../App'

interface Props{
    todo:ITodos
    deleteItem(id:number):void
    

}

const TodoList = ({todo,deleteItem}:Props) => {
    return (
        
        
                
        <div className="list">
            
            <li className="items">{todo.todo}</li>
            
            <small className="items">{todo.deadline}</small>
            <button onClick={()=>deleteItem(todo.id)}
              className="items btn">x</button> 
        </div>

    
    )
}

export default TodoList
