import {reducer} from './store';
import {setMovie, setSession} from './actions';
it('movie should be selected', () => {
    const initialState = {
        currentMovieId: 0,
        currentSessionId: 0
    };
    let newState = reducer(initialState, setMovie(2));
    expect(newState.currentMovieId).toBe(2);
});

it('session should be selected', () => {
    const initialState = {
        currentMovieId: 0,
        currentSessionId: 0
    };
    let newState = reducer(initialState, setSession(10));
    expect(newState.currentSessionId).toBe(10);
});
