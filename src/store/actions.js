export const SET_MOVIE = 'SET_MOVIE';
export const SET_SESSION = 'SET_SESSION';
export const RESERVE_SEAT = 'RESERVE_SEAT';

export const setMovie = movie => ({type: SET_MOVIE, movie});
export const setSession = session => ({type: SET_SESSION, session});
export const reserveSeat = (sessionId, seats) => {
    let reservedSeats = seats.map(
        seat =>
            ({row: seat.row, column: seat.column, sessionId: sessionId}));
    return {type: RESERVE_SEAT, reservedSeats}
};

