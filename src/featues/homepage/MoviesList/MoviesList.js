import React from "react";
import styles from './MoviesList.module.css';
import PropTypes from 'prop-types';
import MovieCard from "./MovieCard/MovieCard.js";


const MoviesList = props =>{
	return (
		<div className = {styles['container--moviesList']}>
			{props.moviesList.map(movie => {
				return(
					<MovieCard key = {movie.id}
							   movie = {movie}
					           changeStars = {props.changeStars}
					           changeLikes = {props.changeLikes}
					           chooseMovie = {props.chooseMovie}
					/>
				);
			})}
		</div>
	);
}

MoviesList.propTypes = {
	movieList: PropTypes.arrayOf(PropTypes.object),
	changeStars: PropTypes.func,
	changeLikes: PropTypes.func,
	chooseMovie: PropTypes.func,
}

export default MoviesList;