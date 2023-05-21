import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
   <>
   <div className="header">
    <div className="header-left">
      <h1 className='header-icon'>IMDB</h1>
        <Link to= '/' style={{textDecoration:'none'}}><span>Home</span></Link>
        <Link to= '/movies/popular' style={{textDecoration:'none'}}><span>Popular</span></Link>
        <Link to= '/movies/top_rated'style={{textDecoration:'none'}}><span>Top Rated</span></Link>
        <Link to= '/movies/upcoming'style={{textDecoration:'none'}}><span>Upcoming</span></Link>
        
        {/* this all are types of movies  */}
    </div>
   
   </div>


   </>
  )
}

export default Header


