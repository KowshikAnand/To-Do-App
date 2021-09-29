import React from "react";
import List from "./components/list";

function App(){
  const [name,setName]=React.useState([])
  const [str,setStr]=React.useState('')
    function addName(){
      if(str.length>0){
        setName(
          function (arr){
            const tempArr=[...arr]
            tempArr.push(str)
            return tempArr
          }
        )
      }
      setStr('')
    }
  function deleteTaskByIndex(index){
    setName(
      function(arr){
        const tempArr=[...arr]
        tempArr.splice(index,1)
        return tempArr
      }
    )
  }
  function addStr(e){
      setStr(e.target.value) 
  }
  function deleteAll(){
    setName([])
  }
  
  return(
    <div style={{
      display:'flex', 
      flexDirection:'column', 
      justifyContent:'center', 
      alignItems:'center',
      height:'100vh',
      width:'100vw',
      backgroundColor:'lightskyblue',
      }}>
    <p><h2><div style={{fontFamily:'cursive'}}>Enter the To-Do list</div></h2></p>
    <div style={{display:'flex', flexDirection:'column',fontWeight:700, color:'maroon'}}>
    {
      name.map(function (name1,index){
        return(
          <div style={{display:'flex', flexDirection:'column',}}>
          <List name={name1} key={index} index={index} deleteTasks={deleteTaskByIndex} />
          </div>
        )
      }
      )
    }
    </div>
    
    <div style={{display:'flex', flexDirection:'row'}}>
    <button onClick={addName}>Add tasks</button>
      <input type='text' value={str} onChange={addStr} style={{marginRight:10, marginLeft:10}} />
      
      <button onClick={deleteAll}>Remove all tasks</button>
      
      </div>
    </div>
  )

}

export default App