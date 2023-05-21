import React, { useEffect, useState } from 'react'
import './Card.css'
import Skeleton ,{SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';

const Card = ({movie}) => {

const[isLoading,setIsLoading]=useState(true);

useEffect(()=>{
    setTimeout(()=>{
        setIsLoading(false)
    },800)
},[])

  return (
   <>
   {
    isLoading 
    ?
    <div className="cards">
        <SkeletonTheme color="#202020" highlightColor="#444">
<Skeleton height ={300} duration={2}/>
        </SkeletonTheme>
    </div>
    :
    <Link to={`/movie/${movie.id}`} style={{textDecoration:'none',color:'white'}}> 
   
        <div className="cards">
    <img  className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} alt="Movie-pic" />

    
        <div className="cards__overlay">
        <div className="cards__title">
        <h1>{movie ? movie.original_title:""}</h1></div>
        <div className="cards__runtime">
            <h1>{movie ? movie.release_date:""}</h1> 
            <span className='cards__rating'>
           <h2>Rating:{movie ? movie.vote_average :""}</h2>  
               
            </span>
        </div>
        <div className="cards__description">
            <p>{movie ? movie.overview.slice(0,100) :""}</p>
        </div>
       </div>
    
     
    </div>
    
    
    </Link>

   }
   </>
  )
}

export default Card
