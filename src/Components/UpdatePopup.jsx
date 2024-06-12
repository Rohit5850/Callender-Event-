import React, { useState } from "react";

const UpdatePopup = ({val,setEventMess})=>{
   
    const [updtMesss,setUpMess] = useState(val);

    function clikckbtn(){
        setEventMess(updtMesss);

        console.log(updtMesss);
       console.log("button cool .......")
    }
  

    console.log("New Update :- ", updtMesss);
   
   
    return(

        <div className="update_popup">
            <input type="text" value={updtMesss} onChange={(e)=> setUpMess(e.target.value)}  />
            <button onClick={()=>clikckbtn()} >Update Message</button>
        </div>
    )
}

export default UpdatePopup;