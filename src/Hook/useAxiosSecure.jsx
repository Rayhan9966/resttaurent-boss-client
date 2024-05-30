import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./UseAuth";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:9000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = UseAuth();
    //req intercepptor to add authrizaiton for evry secure
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // do somthing with request
        return Promise.reject(error);
    });
    //interceptor 401 and 403 status

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        console.log('status errorr inceptor', status);
        ///for 401 403 logout the user
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);

    })

    return axiosSecure;
};

export default useAxiosSecure;