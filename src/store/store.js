import {createStore} from 'redux';
import {RESERVE_SEAT, SET_MOVIE, SET_SESSION} from './actions';

const initialState = {
    reservedSeats: [
        {sessionId: 1, row: 5, column: 10}
    ],
    selectedSeats: [],
    movies: [
        {id: 1, title: 'Назад в будущее', poster: 'https://www.mirage.ru/images/film/small/p4112.jpg'},
        {id: 2, title: 'Творцы снов', poster: 'https://www.mirage.ru/images/film/small/p4117.jpg'},
        {id: 3, title: 'Искуственный интеллект', poster: 'https://www.mirage.ru/images/film/small/p4089.jpg'},
        {id: 4, title: 'Питер Пэн и Алиса в стране чудес', poster: 'https://www.mirage.ru/images/film/small/p4092.jpg'},
        {id: 5, title: 'Пункт назначения. Аквапарк', poster: 'https://www.mirage.ru/images/film/small/p4078.jpg'},
        {id: 6, title: 'Довод', poster: 'https://www.mirage.ru/images/film/small/p3935.jpg'},
    ],
    sessions: [
        {id: 1, filmId: 1, date: '17.12.2020', time: '16:30'},
        {id: 2, filmId: 1, date: '18.12.2020', time: '12:30'},
        {id: 3, filmId: 1, date: '18.12.2020', time: '18:30'},
        {id: 4, filmId: 1, date: '19.12.2020', time: '12:30'},
        {id: 5, filmId: 1, date: '20.12.2020', time: '16:30'},
        {id: 6, filmId: 2, date: '17.12.2020', time: '10:30'},
        {id: 7, filmId: 2, date: '18.12.2020', time: '10:30'},
        {id: 8, filmId: 2, date: '18.12.2020', time: '14:30'},
        {id: 9, filmId: 2, date: '19.12.2020', time: '14:30'},
        {id: 10, filmId: 2, date: '20.12.2020', time: '10:30'},
        {id: 11, filmId: 3, date: '17.12.2020', time: '18:30'},
        {id: 12, filmId: 3, date: '18.12.2020', time: '20:30'},
        {id: 13, filmId: 3, date: '18.12.2020', time: '22:30'},
        {id: 14, filmId: 3, date: '19.12.2020', time: '22:30'},
        {id: 15, filmId: 3, date: '20.12.2020', time: '14:30'},
        {id: 16, filmId: 4, date: '17.12.2020', time: '12:30'},
        {id: 17, filmId: 4, date: '17.12.2020', time: '14:30'},
        {id: 18, filmId: 4, date: '18.12.2020', time: '16:30'},
        {id: 19, filmId: 4, date: '19.12.2020', time: '10:30'},
        {id: 20, filmId: 4, date: '20.12.2020', time: '12:30'},
        {id: 21, filmId: 5, date: '17.12.2020', time: '22:30'},
        {id: 22, filmId: 5, date: '19.12.2020', time: '20:30'},
        {id: 23, filmId: 5, date: '20.12.2020', time: '20:30'},
        {id: 24, filmId: 5, date: '20.12.2020', time: '22:30'},
        {id: 25, filmId: 6, date: '17.12.2020', time: '20:30'},
        {id: 26, filmId: 6, date: '19.12.2020', time: '16:30'},
        {id: 27, filmId: 6, date: '19.12.2020', time: '18:30'},
        {id: 28, filmId: 6, date: '20.12.2020', time: '18:30'},
    ],
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

        case RESERVE_SEAT : {
            return {...state, reservedSeats: [...state.reservedSeats, ...action.reservedSeats]}
        }

        default:
            return state;

    }

};

let store = createStore(reducer);

export default store;
