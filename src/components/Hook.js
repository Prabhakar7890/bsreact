import React,{useEffect,useState} from 'react';

const Hook=()=>{
    useEffect(
        ()=>{console.log(name+ " is printed")},[]
 
     )
 
     useEffect(
         ()=>console.log("Updated " ,name)
     )
 
     let [name,setName]= useState("India")
  
     return(
         <h1>
             State:: {name}
             <button onClick={()=>name==="India"?setName("china"):setName("India")}>Change</button>
         </h1>
     )
 }
 
 export default Hook