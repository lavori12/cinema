import {SET_MOVIE, SET_SESSION, setMovie, setSession} from './actions';


it('should create an action to set movie id', () => {
    const movie = 1;
    const expectedAction = {
        type: SET_MOVIE,
        movie
    };
    expect(setMovie(1)).toEqual(expectedAction)
});

it('should create an action to set session id', () => {
    const session = 10;
    const expectedAction = {
        type: SET_SESSION,
        session
    };
    expect(setSession(10)).toEqual(expectedAction)
});
