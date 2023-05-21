import React, { useEffect, useState } from 'react'
import './MovieList.css'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'

const MovieList = () => {
const[movieList,setMovieList]=useState([]);
const{type} =useParams()


useEffect(()=>{
    getData()
},[])

useEffect(()=>{
    getData()
},[type])

 const getData =()=>{
    fetch(` https://api.themoviedb.org/3/movie/${type ? type : 'upcoming'}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
.then(response=>response.json())
.then(Data=>setMovieList(Data.results))

 }
  return (
   <>
   <div className="movie__list">
    <h1 className='list__title'>{(type ? type : 'upcoming').toUpperCase()}</h1>
    <div className="list__cards">
        {
            movieList.map((movie,index)=>{
                return(
                    <Card movie={movie} key={index}/>
                )
            })
        }
    </div>
   </div>
   </>
  )
}

export default MovieList
