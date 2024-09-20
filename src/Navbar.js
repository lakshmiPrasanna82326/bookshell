import React, { useState } from 'react';
import Home from './Home'
import books from './images/books.jpg'





const loginOpen = () =>{
  var user1 = window.localStorage.getItem("userLoggedin");
  if(!user1){
  var a = document.getElementById("login");
  a.classList.remove("hidden");
  }
  
}
const loginClose = () =>{
  
  var a = document.getElementById("login");
  a.classList.add("hidden");
  
} 



  


const Navbar = () => {

  const[username, setUsername] = useState('');
  const[password, setPassword] =useState('');

 

  const submit=() =>{
    var loginUser = username;
    var loginPassword = password;
   
    
    window.localStorage.setItem("loginUser", username);
    window.localStorage.setItem("loginPassword", password);

   
  var a = document.getElementById("login");
    a.classList.add("hidden");
  
    if( loginUser== "username" && loginPassword == "123456"){
      alert("Login Sucessfull");
      window.localStorage.setItem("userLoggedin", "true");
    
     window.location.reload();
     }
    else{
    alert("Username or Password is wrong")
    }

  }

   var user = window.localStorage.getItem("userLoggedin"); 
   
   const logout = () =>{
     window.localStorage.removeItem("userLoggedin");
    
     window.location.reload();
}


const test = (e) =>{
   
}

  return (
    <>
   

<div  id="login" className='h-[350px] w-[550px] bg-blue-200 rounded-2xl absolute mt-[250px] ml-[400px] flex flex-col hidden '>
  <h1 className='font-semibold text-2xl ml-[230px] mt-[20px]'>Login</h1>
  <input onChange={e => setUsername(e.target.value)} id="userName"  className="m-[10px] mt-[50px] ml-[70px] w-[400px] h-[40px] rounded-[7px]" type="text" placeholder="username"/>
  <input onChange={e => setPassword(e.target.value)} id="password" className="m-[10px] ml-[70px]  w-[400px]  h-[40px] rounded-[7px]" type="password" placeholder='Password'/>                
 <div className='flex ml-[160px] mt-[30px]'>
  <button  onClick={submit} className='m-[5px]  hover:text-green-600'>Submit</button>
  <button  onClick={loginClose} className='ml-[70px] hover:text-red-600'>Close</button>
 </div>
  </div>




    <div className='flex' >
      <ul className=" flex h-[60px] space-x-10 p-6 ">
         <li className='font-semibold text-xl text-blue-600 mr-0 flex'><img  className="h-[35px] ml-0" src={books} alt="books" /><p className='mr-10'>BookShell</p></li>
        <li className=''><div  className='w-[1000px] h-[37px] border border-blue-600 rounded-xl bg-blue-100'>
          <ul className='flex space-x-10 ml-[300px] text-blue-600 mt-2'>
            <li className=' hover:text-black '>Home</li>
            <li className=' hover:text-black '><a href="#footer">About us</a></li>
            <li className=' hover:text-black '><a href="#footer">Contact Us</a></li>
          </ul>
        </div>
        <div id="dropdownContent" className =" text-center hidden flex flex-col  ">
          <button className='border  rounded-xl border-blue-600'  onClick={test}  >Academic Books</button>
          <button  className='border  rounded-xl border-blue-600'>Self help books</button>
        </div>
        </li>
        </ul>
        <ul className='flex  mt-5 w-3/4 pl-[120px] '>
        
    <li id="loginId" className='mt-2  mr-[20px] h-[35px] text-white bg-blue-500  text-lg text-blue-600 border border-blue-600 rounded-lg p-1 text-center'><button onClick={loginOpen}>{user? "U" : "Login"}</button></li>
       
       <li id="logoutId" className="text-blue-600   rounded-lg p-1 h-8 mt-3 " ><button onClick={logout}>{user? "logout": ""}</button></li>
       

       
      </ul>
      </div>

      
    
   <Home/>   
    </>
  )
}

export default Navbar
