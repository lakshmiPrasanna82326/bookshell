import React, {useState} from 'react';

const  Test1 = ({onstateChange}) =>{
   const [childState, setchildState] = useState('');

  const handleChange = (e) =>{
    const value = e.target.value;
    setchildState(value);
    onstateChange(value);
}
return (
    <>
    <input type="text"  className="bg-red-600 text-white" placeholder="Type here"  onChange={handleChange}/>
    <p>{childState}</p>
    </>
)

}


export default Test1;