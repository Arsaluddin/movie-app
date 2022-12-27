import React from "react";
import './MovieList.css'


const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;

    console.log(props);

    return (
        <>
            {props.movies.map((movie,index) => (
                <div className="image-container">
                     <img src={movie.Poster} alt='movie' height={400}></img>
                     <div 
                      
                     onClick={() => props.handleFavouritesClick(movie)}
                     className="overlay">
                         <FavouriteComponent/>
                     </div>
                </div>
            ))}
        </>
    );

}

export default MovieList;