import {useEffect,useState} from 'react';
import UseFetch from './useAsyncStuff';
const Testing = () => {
    console.log("getting into")
    const data = UseFetch('http://localhost:1337/api/products/')
    console.log(Array.isArray(data['data']))
    const test = Object.keys(data)
    console.log("testing result " + test)
    return ( 

        <div>
            <p>done</p>
            <p>{JSON.stringify(data)}</p>
        </div>
        
        
        
     );
}
 
export default Testing;