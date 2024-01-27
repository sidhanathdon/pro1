import React ,{useState,useEffect} from 'react'

const Mycom1 = () => {
    // const[count,setCount]=useState(0);
    // const[color,setColor]=useState("green");
    const [width,setWidth]=useState(window.innerWidth)
    const [height,setHeight]=useState(window.innerHeight)

    // useEffect(()=>{
    //     document.title=`count:${count} ${color}`
    // },[count,color])
    // function addCount(){
    //     setCount(c=>c+1)
    // }

    // function subtractCount(){
    //     setCount(c=>c-1)
    // }

    // function changeColor(){
    //     setColor(c=>c==="green"? "red": "green")
    // }

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    useEffect(()=>{
        window.addEventListener("resize",handleResize)
        console.log("add");

        return()=>{
            window.removeEventListener("resize",handleResize)
            console.log("remove");
        }
    },[])
  return (
    <div>
        {/* <p style={{color:color}}>Count:{count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <br />
        <button onClick={changeColor}>Chnge Color</button> */}
        <p>Window Width:{width}px</p>
        <p>Window Height:{height}px</p>
    </div>
  )
}

export default Mycom1