import React ,{useState,useEffect} from 'react'
import "./DigitalClock.css"
const DigitalClock = () => {
    const [time,setTime]=useState(new Date());

    useEffect(()=>{
        const intervalId=setInterval(() => {
            setTime(new Date())
        }, 1000);
        return()=>{
            clearInterval(intervalId)
        }
    },[])

    function formatTime(){
        let hrs=time.getHours();
        let mins=time.getMinutes();
        let secs=time.getSeconds();
        const meridian=hrs>=12?"pm":"am"

        hrs=hrs%12 || 12;

        return `${padZero(hrs)}:${padZero(mins)}:${padZero(secs)} ${meridian}`

    }

    function padZero(number){
        return (number<10 ?"0":" ")+number
    }
  return (
    <div className='clock-container'>
        <div className='clock'>
            <p>{formatTime()}</p>
        </div>
    </div>
  )
}

export default DigitalClock