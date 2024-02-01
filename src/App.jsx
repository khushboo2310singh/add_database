
import React,{useReducer} from 'react'
const initialState={
  name:"",
  age:"",
  users:[],
}
const reducer=(state,action)=>{
  switch(action.type)
  {
    case "name":return{...state,name:action.payload};
    case "age":return{...state,age:action.payload};
    case "add": const records=[...state.users];
                records.push(action.payload);
                return {...state,users:records}
    default:
      return state;            
  }
}

const App = () => {
  const[state,dispatch]=useReducer(reducer,initialState);
  const handlechange=(e)=>{
    dispatch({type:e.target.name, payload:e.target.value})
  }
  const handleAdd=()=>{
    dispatch({type:"add", payload:state})
  }
  return (
    <>
    <input type="text" value={state.name} name='name' placeholder='Name' onChange={handlechange}/>
    <input type="text" value={state.age} name='age' placeholder='Age' onChange={handlechange}/>
    <input type="button" value="Add to database" onClick={handleAdd}/>
    {state.users.map((user,i)=>(
      <div key={i}>
        Name---{user.name}
        Age---{user.age}
      </div>
    ))}
    </>
  )
}

export default App