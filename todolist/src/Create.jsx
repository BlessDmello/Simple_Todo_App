import React, { useState } from 'react'
import axios from 'axios'


function Create() {
    const [task, setTask] = useState()
    const addTodo = () => {
        axios.post('http://localhost:3000/add',{task: task})
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='create_form'>
        <input type="text"  placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}/>
        <button type='button' onClick={addTodo}>Todo</button>
    </div>
  )
}

export default Create 