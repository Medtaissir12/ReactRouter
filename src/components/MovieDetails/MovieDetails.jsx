import React from 'react'
import { useParams } from 'react-router-dom'
import {useState , useEffect} from "react"


const MovieDetails = ({movies}) => {

let {id} = useParams()
const [chosen,setChosen]=useState({})

useEffect(() => {
    setChosen(movies.filter((movie) => movie.id === id)[0])
}
,[movies])

console.log(chosen)

  return (
    <div>
      <h1>{chosen.title}</h1>
      <iframe
        width="900"
        height="506"
        src={chosen.trailer}
        title={chosen.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3>{chosen.description}</h3>
    </div>
  );
}

export default MovieDetails