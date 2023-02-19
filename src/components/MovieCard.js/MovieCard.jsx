import React from "react";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="MovieCard">
      <h2> {movie.title} </h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <ReactStars
        count={5}
        size={24}
        color2={"#ffd700"}
        value={movie.rating}
        edit={false}
      />
      <Link to={`/movie/${movie.id}`}>
        <h6>See More</h6>
      </Link>
    </div>
  );
};

export default MovieCard;
