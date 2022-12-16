import React from "react";
import './MovieList.css'


const MovieList = (props) => {

    return (
        <>
            {props.movies.map((movie,index) => (
                <div className="image-container">
                     <img src={movie.Poster} alt='movie' height={400}></img>
                     <div className="overlay">
                         Add to Favourites
                     </div>
                </div>
            ))}
        </>
    );

}

export default MovieList;