
//USING JS FETCH FUNCTION

import {useEffect,useState} from 'react'


const FetchTest = () => {
    const [detail,setDetail] = useState([])
    const valueofdetail = Object.keys(detail) //CHECK KEYS IN DETAIL STATE  
    const detailedata = detail.data //USING KEY FOR ACCESS THE ARRAY OF DETAIL
    console.log(valueofdetail) //LOG THE KEYS
    console.log("detailedata is an array " + Array.isArray(detailedata)) // CHECK IF THE CONST ARRAY OR NOT
    console.log(detailedata) // SHOW THE ARRAY
    console.log(detailedata[0].attributes.title) //ACCESS THE ATTRIBUTES INSIDE API BUT HARD CODED
useEffect(() => {
        fetch('http://localhost:1337/api/products',{
            headers: {
                Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjU0NTA5MDE1LCJleHAiOjE2NTcxMDEwMTV9.HOGhkG--nRYbPQKmOsNo75VAOKQydu1kw8o8MncdhdE',
              },
        })
          .then((response) => response.json())
          .then((data) => setDetail(data))
          .then(console.log("Data success"))
          .catch((err) => { 
              console.log(err)
              
  
          })
          
      },[])
      
      return ( 
          <div>
              
              <br></br>
              <p>{Object.keys(detail)}</p>
              <br></br>
              <p>{JSON.stringify(detailedata)}</p>
              <br></br>
              <p>{JSON.stringify(detail)}</p>
          </div>
       );
  }
   
export default FetchTest;
  
/**
  // detail.map((item) => {return <li>{item}</li>})

 */