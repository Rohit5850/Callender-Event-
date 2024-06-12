import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CreateEvent from './CreateEvent';




const CalenderApp = ()=>{
 
    

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const months = ['January','February','March','April','May','June','July','August','September','october','November','December']
    const [date,changeDate] = useState(new Date());
    
  
    const day = days[(date.getDay())] ;
    const month = months[date.getMonth()] ;
    const dat = date.getDate();
    const year = date.getFullYear();

        useEffect(()=>{

            console.log("working...") 
   
            const buttonClick = document.querySelectorAll('.react-calendar__month-view__days button')
            buttonClick.forEach((e)=>{
                e.addEventListener('click',(e)=>{
                    console.log('I clicked',e.target.innerText)
                        console.log(e);
                        document.querySelector('.event_create').style.display = 'block'
                        document.querySelector('.calener_app').style.width = '42%' 
                })
            })

        },[])



 
       



    return(
        <div className='calener_app'>
            <Calendar value={date} onChange={changeDate} />
            <CreateEvent day={day} month={month} dat={dat}  year={year} />
        </div>
    )
}


export default CalenderApp;