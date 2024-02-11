import axios from 'axios'

const baseURL = 'http://192.168.22.24:8000/api/v1/' //LOCAL

//const baseURL = 'http://fastapi:8000/api/v1/' //Docker 

const axiosInstance = axios.create({
    baseURL
})

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance