import {moviesDB} from "../../utils/moviesDB.js";
import {SORT_BY_RATING, 
		SORT_BY_LIKES, 
		SEARCH_MOVIE, 
		CHANGE_STARS, 
		CHANGE_LIKES, 
		CHOOSE_MOVIE
	} from '../actions/actionTypes.js';

const initialState = {
	moviesDB,
	chooseMovie: null,
	moviesList: [...moviesDB],
}
export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case SORT_BY_RATING:
			return {
				...state,
				moviesList: action.moviesList,
			}
		case SORT_BY_LIKES:
			return {
				...state,
				moviesList: action.moviesList,
			}
		case SEARCH_MOVIE:
			return {
				...state,
				moviesList: action.moviesList,
			}
		case CHANGE_STARS:
			return {
				...state,
				moviesList: action.moviesList,
                chooseMovie: action.chooseMovie,
			}
		case CHANGE_LIKES:
			return {
				...state,
				moviesList: action.moviesList,
			}
		case CHOOSE_MOVIE:
			return {
				...state,
				chooseMovie: action.chooseMovie
			}
		default:
			return state;
	}
}
