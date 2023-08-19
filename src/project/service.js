import axios from "axios";

const apiUrl = 'http://localhost:4000/proxy/yelp';

/*
const params = {
    location: {'bay area'},
    sort_by: 'best_match',
  };
  */

export const fullSearch = async (query) => {

    const params = {
        location: query,
        sort_by: 'best_match',
      };

    const response = await axios.get(apiUrl, { params });
    return response.data;
}

export const getRestaurant = async (id) => {

    const response = await axios.get(
      `${apiUrl}/${id}`
    );
    console.log("getRestaurant", response);

    const restaurants = response.data;
    console.log("restaurants", restaurants);

    return restaurants;
  };
