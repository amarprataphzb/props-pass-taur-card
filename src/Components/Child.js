import React, { useState } from 'react'

function Child(props) {
  const[name,setName]=useState()
  
  function handleSubmit(e){
    e.preventDefault();
    props.getdata(name)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
      <button>submit</button>
      </form>
    </div>
  )
}

export default Child