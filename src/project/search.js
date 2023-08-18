import axios from "axios";
import { useEffect, useState } from "react";

function Search() {

    console.log("process.env.REACT_APP_YELP_API_KEY", process.env.REACT_APP_YELP_API_KEY);
    
    const [results, setResults] = useState({});
    const url = `https://api.yelp.com/v3/businesses/search?location=milpitas&sort_by=best_match&limit=20`;
    const hkurl = 'https://geodata.gov.hk/gs/api/v1.0.0/locationSearch?q=cultural%20centre';
    const webex_url = 'https://webexapis.com/v1/rooms';
    const apiUrl = 'http://localhost:4000/proxy/yelp';


    const search = async () => {
        
        /*const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
                accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            params: {
            location: 'milpitas',
            sort_by: 'best_match',
            limit: 20,
            },
        });
        */

        const params = {
            /*path: '/search', // The Yelp API endpoint*/
            location: 'milpitas',
            sort_by: 'best_match',
            limit: 20,
          };
          

        console.log("apiUrl", apiUrl);
        console.log("params", params);

        axios.get(apiUrl, { params })
        .then(response => {
            console.log("response.data", response.data);
            const results = response.data;
            setResults(results);
        })
        .catch(error => {
            console.error(error);
        });
    };

    useEffect(() => {
        search();
    }, []);

    return (
        <div>
          <h2>Search</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
    );
    }
export default Search;