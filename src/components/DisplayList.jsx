import React from 'react'

const DisplayList = ({todoData,taskCompleted,handleDelete}) => {

   
  return (
    <div>
        <h1>Things to do</h1>
        <div>
            {/* todo items */}
            {todoData.map(({isComplete,text,id})=>{
                return (
                    <div className='individual_todoItem' key={id}>
                        <input type="checkbox" onChange={handleCheckbox} />
                        <p style={{color:isComplete?"blue":"gray"}}>{text}</p>
                        <button onClick={()=>handleDelete(id)} >delete</button>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default DisplayList