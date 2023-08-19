import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import * as service from "./service";

function Details() {

    const { id } = useParams();

    const [restaurant, setRestaurant] = useState({});
    const [displayAddress, setAddress] = useState();
    const [transaction, setTransaction] = useState();

    const fetchRestaurant = async () => {
        const restaurant = await service.getRestaurant(id);
        
        const modifiedResults = {
            ...restaurant,
            photos: restaurant.photos.map((photo) => 
                photo.replace(/o\.jpg$/, "348s.jpg")
            )
        };

        setRestaurant(modifiedResults);

        const displayAddress = restaurant.location.display_address.join(' ');
        setAddress(displayAddress);

        const transaction = restaurant.transactions.join(',');
        console.log(transaction);
        setTransaction(transaction);
      };

    useEffect(() => {
        fetchRestaurant();
        /*fetchTracks();
        fetchLikes();*/
    }, []);

    return ( 
    <div>
        <div className="table-responsive">
            <br/>
            <h5>{restaurant.name}</h5>
            <table className="table">
                <tbody>
                    <tr>
                        {restaurant.photos ? (
                            restaurant.photos.map((photo, index) => (
                                <img key={index} src={photo} width="400" />
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </tr>

                    
                        <tr>
                            <td>
                                <p style={{ display: 'inline' }}>
                                    {restaurant.categories ? (
                                        restaurant.categories.map((category, index) => (
                                            <span key={index}>
                                                {category.title}
                                                {index !== restaurant.categories.length - 1 && ', '}
                                            </span>
                                        ))
                                    ) : (
                                        <p>Loading...</p>
                                    )}
                                </p>
                            </td>
                        </tr>
                     
                        <tr><td>Phone: {restaurant.display_phone}</td></tr>
                        <tr><td>Rating: {restaurant.rating}</td></tr>
                        <tr><td>Price: {restaurant.price}</td></tr>
                        <tr><td>Address: {displayAddress}</td></tr>
                        <tr><td>Transactions: {transaction}</td></tr>
                    

                </tbody>
            </table>
        </div>

    </div>
    );
}

export default Details;