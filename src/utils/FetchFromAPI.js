import axios from "axios";

const options = {
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
        maxResults: '50'
    },
    headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};