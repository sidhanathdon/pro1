import React,{useState} from 'react'

const Mycomp = () => {
    const [name,setName]=useState("");
    const [Quantity,setQuantity]=useState(0);
    const handleChangeName=(event)=>{
        setName(event.target.value);
    }
    const handleChangeQuantity=(event)=>{
        setQuantity(event.target.value);
    }
  return (
    
    <div>
        <input type="text" value={name} onChange={handleChangeName}/>
        <input type="number" value={Quantity} onChange={handleChangeQuantity}/>
        <p>Quantity:{Quantity}</p>
        <p>Name:{name}</p>
    </div>
  )
}

export default Mycomp