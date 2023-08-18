
const apiUrl = 'http://localhost:4000/proxy/yelp';

export const fullSearch = async (query) => {
    const response = await axios.get(apiUrl, { params });
    return response.data;
}

