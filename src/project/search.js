import axios from "axios";
import { useEffect, useState } from "react";

function Search() {

    const [results, setResults] = useState({});
    const [restaurants, setRestaurants] = useState({});

    const apiUrl = 'http://localhost:4000/proxy/yelp';

    const search = async () => {

        const params = {
            location: 'bay area',
            sort_by: 'best_match',
          };

       const response = await axios.get(apiUrl, { params });
       
       const results  = response.data;
        
       const modifiedResults = {
            ...response.data,
            businesses: results.businesses.map((business) => ({
                ...business,
                image_url: business.image_url.replace(/o\.jpg$/, "348s.jpg")
            }))
        };

        setResults(modifiedResults);

    };

    useEffect(() => {
        search();
    }, []);

    return (
        <div>
          <h2>Search</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>

          <h2>Restaurants</h2>
          <div className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                    {results.businesses.map((business) => (
                            
                            <td>
                                <div key={business.id}>
                                    {business.name}
                                    <img src={business.image_url} width="300" /> 
                                    
                                </div>
                            </td>
                    ))}
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
    );
}
export default Search;