import axios from "axios";

const djangoRequest = axios.create({
    baseURL: "http://localhost:8000"
});

export default djangoRequest;