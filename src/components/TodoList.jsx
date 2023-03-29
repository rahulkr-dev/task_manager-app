import React,{useState} from 'react'
import "../styles/todoList.css"
import AddTodo from './AddTodo'
import DisplayList from './DisplayList'
const TodoList = () => {
    const [todoData,setTodoData] = useState([]);

    const addTodoFun = (obj)=>{
        setTodoData([...todoData,obj])
    };

    const handleDelete = (id)=>{
        let filterList = todoData.filter(obj=>obj.id!=id);
        setTodoData(filterList)
    };

    const taskCompleted = (id,value)=>{
        console.log(id,value)
        let updatedList = todoData.map(obj=>{
            if(obj.id==id){
                console.log(id,"inside task")
                return {...obj,isComplete:value}
            }else return obj;
        });
        setTodoData(updatedList)
    }
  return (
    <div>
        {/* display */}
        <DisplayList todoData={todoData} handleDelete={handleDelete} taskCompleted={taskCompleted} />
        {/* input */}
        <AddTodo addTodoFun={addTodoFun} />
    </div>
  )
}

export default TodoList