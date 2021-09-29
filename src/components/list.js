import React from 'react';

export default function List(props){
    const {name,index,deleteTasks}=props
    function onDelete(){
        deleteTasks(index)
    }
    return(
        <div style={{display:'flex', alignItems:'center'}}>

            <p>{`${index + 1} . ${name}`}</p>
            <button onClick={onDelete}>-</button>
        </div>
        
    )
}