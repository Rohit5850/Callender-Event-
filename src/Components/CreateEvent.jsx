import React, { useState } from "react"
import EventForm from "./EventFrom";


const CreateEvent = (props) =>{

    const [eventMess,setEventMess] = useState('');
    const [eventCreat,setEventCreat] = useState([]);



   const eventCreate = ()=>{
    console.log('Working ....')
    setEventCreat([...eventCreat,<EventForm key={eventCreat.length} setEventMess={setEventMess} eventMess={eventMess} day={props.day} month={props.month} date={props.dat} year={props.year} onDelet={deletEvent}/> ])
    setEventMess('')

   }


   const deletEvent = (index) =>{
    console.log("index 454545454545 : ", index )
    setEventCreat(eventCreat.filter((_, i) => i !== index ))
   }

    return(
<div className='event_create'>
<div className="top_event_create">
<h2>Create Event</h2>
<p>Selected Date : {`${props.day}  ${props.month}  ${props.dat} ${props.year}`} </p>

<div className='event_btn_div'>
    <input placeholder='Event Name' value={eventMess}  onChange={(e)=> setEventMess(e.target.value)} />
    <button onClick={()=> eventCreate()} >Click Here to Add Event</button>
    {/* onClick={()=> eventCreate()} */}
</div>
</div>

<div className="event_list">

{
    eventCreat.map((eventCret,index) => 
    <div className='event_list_created' key={index}>
        {eventCret}
    </div>
    )
}
</div>



     {/* <EventForm  eventMess={eventMess} />    */}
    
     


</div>
    )
}


export default CreateEvent













