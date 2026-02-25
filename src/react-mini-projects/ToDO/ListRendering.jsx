import { useState } from "react";

function ListRendering(){

    const [input, setInput] = useState("");
    const [todos, setTodos] =useState([])

    function handleAdd(){
        if(input.trim()==="")return;
        setTodos((prev)=>[...prev,input])
        setInput("")
    }

    function handleDelete(index){
        setTodos(prev=>prev.filter((_,i)=>i !==index))
    }






    return(
        <>
        <h2>Mini ToDO App</h2>
        <input type="text" value={input} placeholder="enter todo"
            onChange={e=>setInput(e.target.value)}
        />
        &nbsp;&nbsp;
        <button onClick={handleAdd}>Add</button>&nbsp;&nbsp;

        {
            todos.length===0?(
                <p>No todos yet</p>
            ) : (
                <ul>
                    {todos.map((todo,index)=>(
                        <li key={index}>{todo}
                        <button onClick={e=>handleDelete(index)}>Delete</button>
                        </li>
                        
                    ))}
                    
                </ul>
            )
        }
        
      </>
    )

}

export default ListRendering;