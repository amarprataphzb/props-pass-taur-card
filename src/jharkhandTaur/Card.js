import React, { useState } from "react";

function Card({ id, name, info, img, price,removeCard }) {
                       
    const [readmore, setReadmore] = useState(false);
    
    const description = readmore? info:`${info.substring(0, 200)}`;
    function readMoreHandler() {
        setReadmore(!readmore);
    }

    return (
        
        <div className="card "  style={{width:"18rem" ,display:"inline-flex" ,marginLeft:'50px', marginRight:"30px"}}>
            <div>
                <img src={img} class="card-img-top" ></img>
            </div>
            <div className="card-body">
                <div className="card-title">
                    <h2>Rs : {price}</h2>
                    <p style={{ fontWeight: "bold" }}>{name.toUpperCase()}</p>
                </div>
                <p>
                    {description}...
                    <span onClick={readMoreHandler} className="btn btn-info sm" >
                        {readmore ? "Show less" : "Read more"}
                    </span>
                </p>
            </div>
            <button
                className="p-2 btn btn-danger "
                onClick={()=>removeCard(id)}
            >
                Not Interested
            </button>
        </div>
    );
}

export default Card;
