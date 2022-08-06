import React,{useState} from "react";
import { useAddUserMutation } from "../../services/userApi";
import "./Register.css"
function Register() {
  const [addUser ] = useAddUserMutation();
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const handleAddUser = async (e) => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
await addUser(user);

  }
  return (
  <div className="register">
  <form onSubmit={handleAddUser}>
    <input type="text" onChange={(e)=> setName(e.target.value)}/>
    <input type="email" onChange={(e)=> setEmail(e.target.value)}/>
    <input type="password"onChange={(e)=> setPassword(e.target.value)} />
    <button>ADD</button>

    
  </form>
  </div>
  )
}


export default Register;
