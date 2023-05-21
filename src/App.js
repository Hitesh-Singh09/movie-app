import React from 'react'
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import MovieList from './components/movieLIst/MovieList';
import MovieDetail from './pages/moviesDetail/MovieDetail';
 
 const App = () => {
   return (
    <>
    <Router>
      <Header/>
       <Routes>
         <Route index element={<Home/>}></Route>
         <Route path='movie/:id' element={<MovieDetail/>}></Route>
         <Route path='movies/:type' element={<MovieList/>}></Route>
         <Route path='/*' element={<h1>Error Page</h1>}></Route>
       </Routes>
    </Router>
    
    </>
   )
 }
 
 export default App
 