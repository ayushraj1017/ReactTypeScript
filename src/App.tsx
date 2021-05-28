import { FC, useState, ChangeEvent } from "react";
import TodoList from "./components/TodoList";

export interface ITodos {
  id:number
  todo: string,
  deadline: number
}

const App: FC = () => {



  const [todo, setTodo] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todos, setTodos] = useState<ITodos[]>([])


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;


    if (name === "todo") {
      setTodo(value)
    }
    if (name === "deadline") {
      if(Number(value)<0){
        setDeadline(Number(0))

      }
      else{
        setDeadline(Number(value))
      }
      
      
    }


  }

  const handleClick = (): void => {
    setTodos([...todos, {

      todo,
      deadline,
      id:Math.floor(Math.random()*10000)

    }])
    setTodo("")
    setDeadline(0)
  }

  const deleteItem=(id:number):void=>{
    const newItems=todos.filter((item:ITodos)=>item.id!==id)
    setTodos(newItems)

  }

  return (
    <div className="App">
      <div className="input">
        <input type="text" value={todo} placeholder="enter Todo" name="todo" onChange={handleChange} />
        <input type="number" value={deadline} placeholder="enter deadline" name="deadline" onChange={handleChange} />
        <button onClick={handleClick}>Add task</button>


      </div>
      <h1>List</h1>
      {todos.map((todo:ITodos)=>{
        
      return <TodoList key={todo.id} todo={todo} deleteItem={deleteItem}/>
          
        
         
      })}

    </div>
  );
}

export default App;
