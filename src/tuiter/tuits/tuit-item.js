import React, { useState} from "react";
import { FaCheckCircle, FaComment, FaRetweet, FaRegHeart, FaHeart, FaShare } from 'react-icons/fa';
import {useDispatch} from "react-redux";
import { deleteTuit } from "./tuits-reducer"; 
import { FaTimes } from 'react-icons/fa';

const TuitItem = ({ tuit }) => {
  const [liked, setLiked] = useState(tuit.liked);
  const [likes, setLikes] = useState(tuit.likes);

  const handleLikeClick = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

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
   
   <div className="row" style={{ marginTop: '20px' }}>
     <div className="col-2"></div>
     <div className="col-2">
        <span><FaComment />  </span>{tuit.replies} 
     </div>
     <div className="col-2">
        <span><FaRetweet />  </span>{tuit.retuits} 
     </div>
     <div className="col-2">
        <span>
          {liked ? (<FaHeart style={{ color: 'red', cursor: 'pointer'}} 
                              onClick={handleLikeClick} />) : (
                    <FaRegHeart style={{ color: 'red', cursor: 'pointer'}} 
                                onClick={handleLikeClick} />)}  </span>{likes} 
     </div>
     <div className="col-2">
        <span><FaShare />  </span> 
     </div>
   </div>
  </li>
 );
};
export default TuitItem;
