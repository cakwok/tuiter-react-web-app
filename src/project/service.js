import axios from "axios";

const apiUrl = 'http://localhost:4000/proxy/yelp';

/*
const params = {
    location: {'bay area'},
    sort_by: 'best_match',
  };
  */

export const fullSearch = async (query) => {

    console.log("query", query);
    const params = {
        location: query,
        sort_by: 'best_match',
      };

    const response = await axios.get(apiUrl, { params });
    return response.data;
}

