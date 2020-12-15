import styles from '../SessionGallery/SessionGallery.module.css';
import {useDispatch, useSelector} from 'react-redux';
import Session from './Session';
import {setMovie} from '../../../../store/actions';
import {useEffect, useState} from 'react';
import {moviesDB, sessionsDB} from '../../../../services/firebase';

const SessionGallery = () => {

    const {currentMovieId} = useSelector((state) => ({
        currentMovieId: state.currentMovieId
    }));

    const dispatch = useDispatch();

    const [sessions, setSessions] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState([]);

    useEffect(() => {
        sessionsDB.orderByChild("filmId").equalTo(currentMovieId).on('value', (snapshot) => {
            let filteredSessions = [];
            snapshot.forEach((childSnapshot) => {
                filteredSessions.push(childSnapshot.val());
            });
            setSessions(filteredSessions);
        });

        moviesDB.orderByChild("id").equalTo(currentMovieId).on('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                setSelectedMovie(childSnapshot.val());
            });

        });
    }, [currentMovieId]);

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
                    {sessions.map(session => <Session key={session.id} date={session.date}
                                                                  time={session.time}
                                                                  id={session.id} />)}
                </table>
            </div>
            <button onClick={() => dispatch(setMovie(0))}>Назад к выбору фильма</button>
        </div>
    )
};

export default SessionGallery;
