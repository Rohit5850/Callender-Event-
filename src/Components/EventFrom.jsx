import React, { useState } from "react";
import UpdatePopup from "./UpdatePopup";


const EventForm = ({eventMess , day , month , date , year, setEventMess , onDelet})=>{

  const [showUpdate,setShowUpdate] = useState(false);

  const updateEvent = ()=>{
    console.log("Hello ......")

    // setEventMess(eventMess);

    setShowUpdate(true)
  
  }

  const handelDelete = () =>{
    onDelet()
  }

  // const updaData = ()=>{

  //   console.log('Upadtemessage ......')

    
  //   eventMess = "Joool;;;;....."

  //   setShowUpdate(false);
  // }

    return(
        <div className="creat_event">
           <h3>My Created Event </h3>
           <p>{day} {month} {date} {year}</p>
           <div className="eventDate_button">
           <button className="evnt_updatbtn" onClick={()=>updateEvent()}>Update Event</button>
           <button className="evnt_deletebtn" onClick={()=>handelDelete()}>Delete Event</button>
           </div>
           <h2 className="eventMess" id="evtMess">{eventMess}</h2>


           { !showUpdate ? '' :  <UpdatePopup val={eventMess}  setEventMess={setEventMess}/>}
          
           
        </div>
    )
}


export default EventForm;