import React from "react";
import { FaCheckCircle } from 'react-icons/fa';

const TuitItem = (
 {
   tuit = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": `Tesla CyberTruck lands on Mars and
               picks up the Curiosity rover on its 6' bed`,
     "image": "tesla.jpg"
   }
 }
) => {
 return(
  <li className="list-group-item">
   <div className="row">
     <div className="col-2">
        <img width={70} className="float-end rounded-3" src={`../../images/${tuit.image}`}/>
     </div>
     <div className="col-10">
       <div>{tuit.userName} {' '}
        <FaCheckCircle />{' '}
        {tuit.handle}{' '}. {' '}
        {tuit.time}
       </div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.title}</div>
     </div>

   </div>
  </li>
 );
};
export default TuitItem;
