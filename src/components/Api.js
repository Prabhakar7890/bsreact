import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Api= ()=>{

    async function LoadData(){
        let response=await axios.get("http://localhost:4000/books")
        console.log(response.data)
        divdata=response.data.map(book=> (
            <div key={book.id}>
                <img src={book.image}/>
                 <h5>{book.name}</h5>
                 <p>{book.author} <br></br>
                 {book.price}</p>                 
             </div>
        ))
        setDivdata(divdata)
     }


     useEffect(LoadData,[])

    let [divdata,setDivdata]=useState("")
    let [Id,setId] =useState()
    let [image,setImage] =useState()
    let [name,setName] =useState()
    let [author,setAuthor]=useState()
    let [price,setPrice]=useState()


    return(
        <div>
            {divdata}
        </div>
   
       
    )
}

export default Api