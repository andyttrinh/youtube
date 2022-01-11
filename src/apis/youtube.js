import axios from 'axios';
const KEY = 'AIzaSyA6tdZTe3UT9W5h1UmrIScTbMP401TB63I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});