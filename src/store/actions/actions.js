import {SORT_BY_RATING, 
        SORT_BY_LIKES, 
        SEARCH_MOVIE, 
        CHANGE_STARS, 
        CHANGE_LIKES, 
        CHOOSE_MOVIE
    } from './actionTypes.js'


export function sortByRating(){
    return (dispatch, getState) => {
        const state = getState().movieReducer;
        let moviesList = state.moviesDB.slice();
        moviesList.sort((a,b) => {
            if (a.stars > b.stars) return -1;
            if (a.stars === b.stars) return 0;
            if (a.stars < b.stars) return 1;
        });

        dispatch(sortByRatingSetState(moviesList))
    }
}

export function sortByRatingSetState(moviesList){
    return{
        type: SORT_BY_RATING,
        moviesList,
    }
}

export function sortByLikes(){
    return (dispatch, getState) => {
        const state = getState().movieReducer;
        let moviesList = [...state.moviesDB];
        moviesList.sort((a,b) => {
            if (a.likes > b.likes) return -1;
            if (a.likes === b.likes) return 0;
            if (a.likes < b.likes) return 1;
        });

        dispatch(sortByLikesSetState(moviesList));
    }
}

export function sortByLikesSetState(moviesList){
    return{
        type: SORT_BY_LIKES,
        moviesList
    }
}

export function searchMovie(styleName){
    return (dispatch, getState) => {
        const state = getState().movieReducer;
        let moviesList ;
        let str = document.getElementsByClassName(styleName)[0].value;
        if(!str){
            moviesList = [...state.moviesDB];
        } else {
            moviesList = state.moviesDB.filter(movie => {
                if(movie.title.toUpperCase().indexOf(str.toUpperCase()) !== -1){
                    return movie;
                }
            });            
        }
        
        dispatch(searchMovieSetState(moviesList));
    }    
}

export function searchMovieSetState(moviesList){
    return {
        type: SEARCH_MOVIE,
        moviesList
    }
}

export function changeStars(idStar, idMovies){
    return (dispatch, getState) => {
        const state = getState().movieReducer;
        let quantityStars = parseInt(idStar);
        state.moviesList.forEach(movie => {
            if(movie.id === idMovies){
                movie.stars = quantityStars;
            }
        });
        if(state.chooseMovie && state.chooseMovie.id === idMovies){
            state.chooseMovie.stars = quantityStars;
        }

        dispatch(changeStarsSetState([...state.moviesList], state.chooseMovie));
    }    
}

export function changeStarsSetState(moviesList, chooseMovie){
    return {
        type: CHANGE_STARS,
        moviesList,
        chooseMovie
    }
}

export function changeLikes (idMovies, isLike){
    return (dispatch, getState) => {
        const state = getState().movieReducer;
        state.moviesList.forEach(movie => {
            if(movie.id === idMovies){
                if(isLike){
                    movie.likes++;
                } else {
                    movie.likes--;
                }
            }
        });
        dispatch(changeLikesSetState( [...state.moviesList]));
    }
}

export function changeLikesSetState(moviesList){
    return {
        type: CHANGE_LIKES,
        moviesList
    }
}

export function chooseMovie(idMovies){
    return (dispatch, getState) => {
        const state = getState().movieReducer;
        let chooseMovie = state.chooseMovie;
        state.moviesList.forEach(movie => {
            if(movie.id === idMovies){
                chooseMovie = movie;
            }
        });
        dispatch(chooseMovieSetState(chooseMovie));
    }
}

export function chooseMovieSetState(chooseMovie){
    return {
        type: CHOOSE_MOVIE,
        chooseMovie,
    }
}




