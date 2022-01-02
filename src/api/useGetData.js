// custom Hook api
import {useState, useEffect} from 'react'
import { useOption } from '../services/OptionProvider.js';

export const useGetData = (endPoint, path) =>{

    const currentOption = useOption()

    const url = new URL(endPoint)
    if (path){
        url.pathname = path
    }

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((todos) => {
                console.log(todos);
                setData(todos);
            })
            .catch((err) => {
                console.error(err);
            });
    
    }, [currentOption])


    return data;
}

