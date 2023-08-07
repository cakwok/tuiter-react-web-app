import {FaThumbsDown, FaCheckCircle, FaComment, FaRetweet, FaRegHeart, FaHeart, FaShare } from 'react-icons/fa';
import React, { useState } from "react";
import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";



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

    const dispatch = useDispatch();

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
                <FaHeart style={{ color: 'red', cursor: 'pointer'}} 
                                  onClick={() =>
                                    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
                                  }
                />
            </span>  {tuit.likes}
          </div>
          <div className="col-2">
              <span>
                <FaThumbsDown style={{cursor: 'pointer'}} 
                            onClick={() =>
                              dispatch(updateTuitThunk({ ...tuit, dislikes: !tuit.dislikes ? 1 : tuit.dislikes + 1  }))
                            }
                />
                              </span>  {tuit.dislikes} 
          </div>
          <div className="col-2">
              <span><FaShare />  </span> 
          </div>
        </div>
    );
}


export default TuitStats;