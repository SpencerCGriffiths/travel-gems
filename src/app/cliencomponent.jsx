"use client"

import { useEffect, useState } from "react"



export default function ClientComponent(props){
const [location,setLocation]= useState(null)

useEffect(()=>{
    setLocation(props.location)


},[])


return <>

<h1>Home Page!</h1>
      {location ? location.map((doc) => {
        return <p key={doc._id}>{doc.place_name}</p>
      }) : <p>not loaded</p>}

</>

}