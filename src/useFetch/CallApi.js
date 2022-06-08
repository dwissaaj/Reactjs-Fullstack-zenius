import React from 'react'
import {useEffect,useState} from 'react'
import UseFetch from './useFetch'
export default function CallApi() {

    const {loading,data,error} = UseFetch('http://localhost:1337/api/products')
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    console.log(data)
  return (
    <div>
      
      
        {
          data.data.map((product) => (
                <div style={{border:1, width:200,backgroundColor:'red',height:200,margin:10}} keys={product.id}>
                  <p>{product.attributes.title}</p>
                  <p>{product.attributes.price}</p>
                  <p>{product.attributes.city}</p>
                </div>
          ))
        }

    </div>
  )
}
