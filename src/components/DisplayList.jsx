import React,{useState} from 'react'

const DisplayList = ({todoData,taskCompleted,handleDelete}) => {
    const [check,setCheck] = useState(false)
    const handleCheckbox = (e,id)=>{
        console.log(e.target.checked);
        taskCompleted(id,e.target.checked);

        setCheck(!check);
    }
   
  return (
    <div>
        <h1>Things to do</h1>
        <div>
            {/* todo items */}
            {todoData.map(({isComplete,text,id})=>{
                return (
                    <div className='individual_todoItem' key={id}>
                        <input checked={check} type="checkbox" onChange={(e)=>handleCheckbox(e,id)} />
                        <p style={{color:isComplete?"blue":"gray"}}>{text} {isComplete?"complete":"not"}</p>
                        <button onClick={()=>handleDelete(id)} >delete</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default DisplayList