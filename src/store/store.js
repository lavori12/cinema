import {createStore} from 'redux';
import {SET_MOVIE, SET_SESSION} from './actions';

const initialState = {
    sessions: [],
    currentMovieId: 0,
    currentSessionId: 0
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_MOVIE : {
            return {...state, currentMovieId: action.movie}
        }

        case SET_SESSION : {
            return {...state, currentSessionId: action.session}
        }

        default:
            return state;

    }

};

let store = createStore(reducer);

export default store;
