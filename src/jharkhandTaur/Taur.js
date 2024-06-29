import React from 'react'
import Card from './Card'
function Taur({taurs,removeCard}) {

  return (
    <div>
        <div>
        <h2 style={{ margin:"auto",padding:'20px',border:'5px dashed red' ,width:'300px',marginBottom:"30px",margintop:'20px'}}>PLAN TO TAUR</h2>
        </div>
        <div>
            {
                taurs.map((taur)=>{
                    return <Card {...taur} removeCard={removeCard}/>
                })
            }
        </div>
        
    </div>
  )
}

export default Taur