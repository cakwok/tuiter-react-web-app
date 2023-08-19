import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as service from "./service";

function Details() {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState({});
    const fetchRestaurant = async () => {
        const restaurant = await service.getRestaurant(id);
        console.log("details.js", restaurant);
        setRestaurant(restaurant);
      };

      useEffect(() => {
        fetchRestaurant();
        /*fetchTracks();
        fetchLikes();*/
      }, []);

    return ( 
    <div>
        Details {id}
        <p>{restaurant.name}</p>
    </div>
    );
}

export default Details;