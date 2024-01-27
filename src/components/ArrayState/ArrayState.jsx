import React ,{useState} from 'react'

const ArrayState = () => {
    const [food,setFood]=useState(["Apple","Bananas","Mango"]);
   
    const addFood=()=>{
        const newFood=document.getElementById("foodInput").value
        console.log(newFood)
        document.getElementById("foodInput").value=""
        setFood(f=>[...f,newFood])
    }
    const removeFood=(index)=>{
        setFood(food.filter((_,i)=>i!==index))
    }
  return (
    <div>
        <h2>Lists of Food</h2>
        <ul>
            {food.map((food,index)=><li key={index} onClick={()=>removeFood(index)}>{food}</li>)}
        </ul>
        <input type="text" id='foodInput' placeholder='Enter food Name'/>
        <button onClick={addFood}>Add Food</button>

    </div>
  )
}

export default ArrayState