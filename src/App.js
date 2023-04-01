import React, {useState,useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';
import AddFav from './components/AddFav';
import RemFav from './components/RemFav';

const  App = () => {

  const [movies,setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('');
  const [favourites, setFavourites] = useState([]);

    const getMovieRequest = async(searchValue) => {
       const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=5da43671`;

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

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
          (favourite) => favourite.imdbID !== movie.imdbID
        );

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
				<MovieList
					movies={favourites}
					handleFavouritesClick={removeFavouriteMovie}
					favouriteComponent={RemFav}
				/>
			</div>
      
    </div>
  );
}

export default App;
