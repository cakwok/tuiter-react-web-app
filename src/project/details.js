import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as service from "./service";

function Details() {

    const { id } = useParams();

    const [restaurant, setRestaurant] = useState({});

    const fetchRestaurant = async () => {
        const restaurant = await service.getRestaurant(id);
        
        const modifiedResults = {
            ...restaurant,
            photos: restaurant.photos.map((photo) => 
                photo.replace(/o\.jpg$/, "348s.jpg")
            )
        };

        setRestaurant(modifiedResults);
      };

    useEffect(() => {
        fetchRestaurant();
        /*fetchTracks();
        fetchLikes();*/
    }, []);

    return ( 
    <div>
        <div className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                        {restaurant.photos.map((photo, index) => (
                            <img key={index} src={photo} width="400" />
                        ))}
                    </tr>
                    <tr>Phone: {restaurant.display_phone}</tr>
                    <tr>Rating: {restaurant.rating}</tr>
                    <tr>Price: {restaurant.price}</tr>

                </tbody>
            </table>
        </div>

    </div>
    );
}

export default Details;