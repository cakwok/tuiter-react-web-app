
import { useEffect, useState } from "react";
import * as service from "./service.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function Search() {

    const navigate = useNavigate();

    const [results, setResults] = useState({});
    const [query, setQuery] = useState("milpitas");

    const apiUrl = 'http://localhost:4000/proxy/yelp';

    const search = async () => {

       const response = await service.fullSearch(query);
       console.log("response", response);
       
       const results  = response;
        
       
       const modifiedResults = {
            ...response,
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

          <div style={{ display: 'flex' }}> 
            <input
                    className="form-control w-75"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-primary float-end"
                    onClick={() => {
                        //navigate(`/project/search/${query}`);
                        search();
                    }}
                    
            >Search
            </button>
          </div>

          <br /> 
          <h2>Restaurants</h2>          
          
          <div className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                    {results.businesses.map((business) => (                           
                                <td>
                                    <Link to={`/project/details/${business.id}`}>
                                        <div key={business.id}>
                                            {business.name},
                                            <img src={business.image_url} width="300" />     
                                        </div>
                                    </Link>
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