//USE AXIOS GET

import {useEffect,useState} from 'react';
import axios from 'axios';
const UseFetch = (url) => {
    const [data,setData] = useState([])
    const [error,setError] = useState(null) //yg bener ini bngst
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(url)
                /*{ 
                    headers : {
                        Authorization: 
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjU0NTA5MDE1LCJleHAiOjE2NTcxMDEwMTV9.HOGhkG--nRYbPQKmOsNo75VAOKQydu1kw8o8MncdhdE'
                    }
                }) */
                const json = await res.json()

                setData(json)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }

        fetchData()
    },[url])
    return ( 
        {loading,data,error}
     );
}
 
export default UseFetch;


/* 
const res = axios.get('http://localhost:1337/api/products', {
                    headers: {
                      Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjU0NTA5MDE1LCJleHAiOjE2NTcxMDEwMTV9.HOGhkG--nRYbPQKmOsNo75VAOKQydu1kw8o8MncdhdE',
                    },
                  });*/