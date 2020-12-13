import styles from '../SessionGallery/SessionGallery.module.css';
import {useDispatch, useSelector} from 'react-redux';
import Session from './Session';
import {setMovie} from '../../../../store/actions';

const SessionGallery = () => {

    const {currentMovieId, sessions, selectedMovie} = useSelector((state) => ({
        currentMovieId: state.currentMovieId,
        sessions: state.sessions,
        selectedMovie: state.movies.filter(movie => movie.id === state.currentMovieId)[0]
    }));

    const dispatch = useDispatch();

    const currentMovieSessions = sessions.filter(session => session.filmId === currentMovieId);

    return (
        <div className={styles.sessionGalleryPage}>
            <div className={styles.selectedMovie}>
                <span> {selectedMovie.title} </span>
                <img alt="" src={selectedMovie.poster} />
            </div>
            <div className={styles.sessionGallery}>
                <table>
                    <tr className={styles.sessionGalleryHeader}>
                        <td>Дата</td>
                        <td>Время</td>
                    </tr>
                    {currentMovieSessions.map(session => <Session key={session.id} date={session.date}
                                                                  time={session.time}
                                                                  id={session.id} />)}
                </table>
            </div>
            <button onClick={() => dispatch(setMovie(0))}>Назад к выбору фильма</button>
        </div>
    )
};

export default SessionGallery;
