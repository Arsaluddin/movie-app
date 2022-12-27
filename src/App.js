import React, {useState,useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';
import AddFav from './components/AddFav';

const  App = () => {

  const [movies,setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async(searchValue) => {
       const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5da43671`;

       const res = await fetch(url);
       const resjson = await res.json();

       if(resjson.Search){
        setMovies(resjson.Search);
       }
    };

    const addFavouriteMovie = (movie) => {
          const newFavouriteList = [...favourites,movie];
          setFavourites(newFavouriteList);
    }

    useEffect(() => {
      getMovieRequest(searchValue);
    
    }, [searchValue]);


  return (
    <div className="container-movie-app">
      <div className='row-head'>
        <MovieListHeading heading='Movies'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>

      <div className='row'>
           <MovieList movies={movies} favouriteComponent={AddFav}
           handleFavouritesClick = {addFavouriteMovie}
           />
      </div>

      <div className='row-head'>
          <MovieListHeading heading='Favourites'/>
      </div>
      <div className='row'>
          <MovieList movies={favourites} favouriteComponent={AddFav}/>  
      </div>
      
    </div>
  );
}

export default App;
