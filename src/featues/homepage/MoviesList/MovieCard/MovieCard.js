import React from "react";
import styles from './MovieCard.module.css';
import PropTypes from 'prop-types';
import Stars from "../../../../components/Stars/Stars.js";


const MovieCard = props =>{
	return (
		<div className={styles.movieCard}>
			<img className={styles.movieCardImg} src={props.movie.posterUrl} alt = {'poster'} height={'150'}/>
			<p className={styles.movieCardTitle}
			   onClick={() => props.chooseMovie(props.movie.id)}
			>
				{props.movie.title}
			</p>
			<Stars stars = {props.movie.stars}
			       idMovies = {props.movie.id}
			       changeStars = {props.changeStars}
			/>
			<div className={styles.movieCardLikesLine}>
				<div className={styles.like}
				     onClick={() => props.changeLikes(props.movie.id, true)}
				/>
				<div className={styles.dislike}
				     onClick={() => props.changeLikes(props.movie.id, false)}
				/>
				<p>Likes: {props.movie.likes}</p>
			</div>
		</div>
	)
}

MovieCard.propTypes = {
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
	changeLikes: PropTypes.func,
	chooseMovie: PropTypes.func,
}

export default MovieCard;