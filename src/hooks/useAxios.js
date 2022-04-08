import { useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8080/api";

export const useAxios = () => {
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const fetchData = async (method, url, captcha, body) => {
        axios.defaults.headers["captcha-response"] = captcha;
        axios.defaults.headers["Content-Type"] = "multipart/form-data"

        const formData = new FormData();
        Object.keys(body).map((key) => {
            formData.append(key, body[key])
        })

        try {
            const res = await axios[method](url, formData);
            setResponse(res);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }   

    return { fetchData, response, error, loading }
}