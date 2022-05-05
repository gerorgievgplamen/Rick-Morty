import React, { useState } from "react";

const Character = (props) => {
    const [displayToggle, setDisplayToggle]=useState(false)
    
    
       return(
    <article className="card">
       <button
         onClick={(event) => {
           event.preventDefault();
           setDisplayToggle(!displayToggle);
         }}
       >
   <img src={props.result.image} alt={`photo of ${props.result.name}`} />
       </button>
       {displayToggle &&(<>
       <p> Name : {props.result.name}</p>
       <p> ID : {props.result.id}</p>
       <p> Status : {props.result.status}</p>
       <p> Species : {props.result.species}</p>
       <p> Type : {props.result.type}</p>
       <p> Gender : {props.result.gender}</p>
       <p> Origin name : {props.result.origin.name}</p>
       <p> Location name : {props.result.location.name}</p>
    </>)}
     </article>
    )
   }
   export default Character