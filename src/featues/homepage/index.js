import React, { Component } from "react";
import styles from './index.module.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Filter from "./Filter/Filter.js";
import MoviesList from "./MoviesList/MoviesList.js";
import MovieInfo from "./MovieInfo/MovieInfo.js";

import {sortByRating, sortByLikes, searchMovie, changeStars, changeLikes, chooseMovie} from '../../store/actions/actions.js'


class Homepage extends Component{
	render() {
		return(
		<div className = {styles.container}>
			<h2 className = {styles.title}>Movies</h2>
			<Filter sortByRating = {this.props.onSortByRating}
			        sortByLikes = {this.props.onSortByLikes}
			        searchMovie = {this.props.onSearchMovie}
			/>
			<MoviesList moviesList = {this.props.moviesList}
			            changeStars = {this.props.onChangeStars}
			            changeLikes = {this.props.onChangeLikes}
			            chooseMovie = {this.props.onChooseMovie}
			/>
			<MovieInfo movie = {this.props.chooseMovie}
			           changeStars = {this.props.onChangeStars}
			/>
		</div>
		);
	}
}

function mapStateToProps(state){
	return{
		moviesDB: state.movieReducer.moviesDB,
		chooseMovie: state.movieReducer.chooseMovie,
		moviesList: state.movieReducer.moviesList,
	}
}

function mapDispatchToProps(dispatch){
	return {
		onSortByRating: () => dispatch(sortByRating()),
		onSortByLikes: () => dispatch(sortByLikes()),
		onSearchMovie: (styleName) => dispatch(searchMovie(styleName)),
		onChangeStars: (idStar, idMovies) => dispatch(changeStars(idStar, idMovies)),
		onChangeLikes: (idMovies, isLike) => dispatch(changeLikes(idMovies, isLike)),
		onChooseMovie: (idMovies) => dispatch(chooseMovie(idMovies))
	}
}

Homepage.propTypes = {
	onSortByRating: PropTypes.func, 
	onSortByLikes: PropTypes.func, 
	onSearchMovie: PropTypes.func, 
	onChangeStars: PropTypes.func, 
	onChangeLikes: PropTypes.func, 
	onChooseMovie: PropTypes.func, 
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);