import axios from 'axios';

const BASE_URL = "https://cat-fact.herokuapp.com";

async function basicFetch(endpoint) {
    const URL = BASE_URL + endpoint;
    let data  = null;
    
    try {
        const response = await axios.get(URL);
        data = response.data;
    } catch (error) {
        data = error.response.data;
    }
    return data;
}

const api = {
    getRandomFacts: async () => {
        
        const res = await basicFetch(`/facts/random`);
        return res;
    },
    
}

export default api;