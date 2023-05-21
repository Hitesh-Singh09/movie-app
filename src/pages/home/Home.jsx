import React, { useEffect, useState } from 'react'
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../../components/movieLIst/MovieList';


const Home = () => {
    const[popularMovies,setPopularMovies] =useState([])

useEffect(()=>{
 fetch(' https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
.then(response=>response.json())
.then(Data=>setPopularMovies(Data.results))


},[])

  return(
   <>
  <div className="poster">
    <Carousel
    showThumbs={false}
    autoPlay={true}
    transitionTime={3}
    infiniteLoop={true}
    showStatus={true}
    >
{popularMovies.map((movie)=>{
    return(
        <Link to={`/movie/${movie.id}`} key={movie.id} style={{textDecoration:'none',color:'white'}}>
       <div className="posterImage" >
        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="Movie-pic" />
       </div>

       <div className="posterImage__overlay">
        <div className="PosterImage__title">
        <h1>{movie ? movie.original_title:""}</h1></div>
        <div className="posterImage__runtime">
            <h1>{movie ? movie.release_date:""}</h1>
            <span className='posterImage__rating'>
            <h2>Rating:{movie ? movie.vote_average :""}</h2>  
               
            </span>
        </div>
        <div className="posterImage__description">
            <p>{movie ? movie.overview :""}</p>
        </div>
       </div>
    </Link>
    )
})
}
    </Carousel>
    <MovieList/>


  </div>

   </>
  )
}

export default Home
