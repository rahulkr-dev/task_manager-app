import React,{useState} from 'react'

const todo_info = [
    {isComplete:false,text:""}
]
const AddTodo = ({addTodoFun}) => {
    const [text,setText] = useState("");

    const handleClick = ()=>{
        // alert(text);

        addTodoFun({
            isComplete:false,text,id:Date.now + Math.random()
        })
        setText("")
    }
    return (
        <div className='addTodo'>
            <h2>DONE</h2>
            <br />
            <div>
                <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder='Enter task here...' />
                <button onClick={handleClick} >Add Task</button>
            </div>
        </div>
    )
}

export default AddTodo