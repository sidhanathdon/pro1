import React ,{useState} from 'react'

const ArrayObject = () => {
    const [cars,setCars]=useState([]);
    const [carYear,setCarYear]=useState(new Date().getFullYear());
    const [carMake,setCarMake]=useState("");
    const [carModel,setCarModel]=useState("");

    const handleAddCar=()=>{
        const newCar={year:carYear,make:carMake,model:carModel}
        setCars(c=>[...c,newCar])
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }
    const handleRemoveCar=(index)=>{
        setCars(c=>c.filter((_,i)=>i!==index))
    }
    const updateCarYear=(event)=>{
        setCarYear(event.target.value)
    }
    const updateCarMake=(event)=>{
        setCarMake(event.target.value)
    }
    const updateCarModel=(event)=>{
        setCarModel(event.target.value)
    }
  return (
    <div>
        <h2>List of Car Object</h2>
        <ul>
            {cars.map((elem,index)=><li key={index} onClick={handleRemoveCar}>
                {carYear} {carMake} {carModel}
            </li>)}
        </ul>
        <input type="number" value={carYear} onChange={updateCarYear}/>
        <br />
        <input type="text" value={carMake} onChange={updateCarMake} placeholder='Enter Car Make'/>
        <br />
        <input type="text" value={carModel} onChange={updateCarModel} placeholder='Enter Car Model'/>
        <br />
        <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default ArrayObject