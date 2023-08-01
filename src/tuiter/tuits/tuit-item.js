import React, { useState} from "react";
import { FaCheckCircle, FaComment, FaRetweet, FaRegHeart, FaHeart, FaShare } from 'react-icons/fa';
import {useDispatch} from "react-redux";
import { deleteTuit } from "./tuits-reducer"; 
import { FaTimes } from 'react-icons/fa';
import TuitStats from "./tuit-stats"

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
}

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
          <FaTimes className="me-3 float-end" onClick={() => deleteTuitHandler(tuit._id)}/> 

       </div>
       <div className="fw-bolder">{tuit.topic}</div>
       <div>{tuit.tuit}</div>
     </div>
   </div>
  
    <TuitStats key={tuit._id}
        tuit={tuit}/>
  </li>
 );
};
export default TuitItem;
