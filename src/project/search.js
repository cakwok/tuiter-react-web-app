
import { useEffect, useState } from "react";
import * as service from "./service.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function Search() {

    const { searchTerm } = useParams();

    const navigate = useNavigate();

    const [results, setResults] = useState({});
    const [query, setQuery] = useState("milpitas");

    const apiUrl = 'http://localhost:4000/proxy/yelp';

    const search = async (searchTerm) => {

       const qwe = searchTerm || query;
       const response = await service.fullSearch(qwe);
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
        if (searchTerm) {
            setQuery(searchTerm);
            search(searchTerm);
        } else {
            search(query);
        }
    }, [searchTerm]);

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
                        navigate(`/project/search/${query}`);
                        //search();
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
                    {results.businesses ? (
                        results.businesses.map((business) => (                           
                                    <td>
                                        <Link to={`/project/details/${business.id}`}>
                                            <div key={business.id}>
                                                {business.name},
                                                <img src={business.image_url} width="300" />     
                                            </div>
                                        </Link>
                                    </td>
                            ))
                    ) : (
                        <p>Loading...</p>
                    )}
                    </tr>
                </tbody>
            </table>
          </div>

          
        </div>
    );
}
export default Search;