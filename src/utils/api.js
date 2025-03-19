import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
// const TMBD_TOKEN = import.meta.env.VITE_TMDB_TOKEN;
const TMBD_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NWZhMmE2OGYxODdmMDY2MzQ5NGE2NGI1MTUxNDliZiIsIm5iZiI6MTcyMzUzNTU4OS45ODcsInN1YiI6IjY2YmIxMGU1NjJiZjY1MmNjZWE5MzU3MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jXjmCBLTxcgx4JgrnX7vrqhry8826p5NQhokyBKBj88";
const headers = {
    Authorization : `Bearer ${TMBD_TOKEN}`
}

export const fetchDataFromAPI = async (url, params) => {
    try{
        const {data} = await axios.get(`${BASE_URL}${url}`, {
            headers,
            params
        });
        return data;
    }catch(err){
        console.error(err);
        return err;
    } 
}