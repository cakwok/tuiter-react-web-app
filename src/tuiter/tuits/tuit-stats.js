import { FaCheckCircle, FaComment, FaRetweet, FaRegHeart, FaHeart, FaShare } from 'react-icons/fa';
import React, { useState, useDispatch } from "react";

const TuitStats = ({ tuit }) => {
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

    return (
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
    );
}


export default TuitStats;