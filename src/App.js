import React, {useState,useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBox from './components/SearchBox';
import MovieListHeading from './components/MovieListHeading';

const  App = () => {

  const [movies,setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async(searchValue) => {
       const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=5da43671`;

       const res = await fetch(url);
       const resjson = await res.json();

       if(resjson.Search){
        setMovies(resjson.Search);
       }
    };

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
           <MovieList movies={movies}/>
           
      </div>
      
    </div>
  );
}

export default App;
