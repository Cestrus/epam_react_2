import React from "react";
import styles from './MovieInfo.module.css';
import PropTypes from 'prop-types';
import Stars from '../../../components/Stars/Stars.js';


const MovieInfo = props => {
	return props.movie ? (
		<div className={styles['container--movieInfo']}>
			<img className={styles.movieImg}
			     alt={'poster'}
				 src={props.movie.posterUrl}
				 height={'200'}
			/>
			<p className={styles.movieTitle}>{props.movie.title}</p>
			<div className={styles.movieLikesStars}>
				<div className={styles.movieLikes}>Likes: {props.movie.likes}</div>
				<Stars stars = {props.movie.stars}
				       changeStars = {props.changeStars}
				       idMovies = {props.movie.id}
				/>
			</div>
			<p className={styles.movieDirector}>Director: {props.movie.director}</p>
			<p className={styles.movieActors}>Actors: {props.movie.actors}</p>
			<p className={styles.movieGenres}>Genres: {props.movie.genres}</p>
			<p className={styles.movieDescription}>{props.movie.description}</p>
		</div>
	)
	: <div className={styles['container--movieInfo']}/>
}

MovieInfo.propTypes = {
	movie: PropTypes.exact({
		id: PropTypes.number,
		title: PropTypes.string,
		posterUrl: PropTypes.string,
		stars: PropTypes.number,
		likes: PropTypes.number,
		genres: PropTypes.arrayOf(PropTypes.string),
		actors: PropTypes.arrayOf(PropTypes.string),
		director: PropTypes.string,
		description: PropTypes.string
	}),
	changeStars: PropTypes.func,
}

export default MovieInfo;