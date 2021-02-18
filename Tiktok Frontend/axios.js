import axios from "axios";
const instance = axios.create({
    baseURL: "https://tiktok-mern0-backend.herokuapp.com/" 
});

export default instance;