export const SET_MOVIE = 'SET_MOVIE';
export const SET_SESSION = 'SET_SESSION';

export const setMovie = movie => ({type: SET_MOVIE, movie});
export const setSession = session => ({type: SET_SESSION, session});
