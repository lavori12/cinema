import styles from './MainScreen.module.css'
import MovieGallery from './components/MovieGallery';
import {useSelector} from 'react-redux';
import Hall from './components/Hall';
import SessionGallery from './components/SessionGallery';

const MainScreen = () => {
    const {currentMovieId, currentSessionId} = useSelector((state) => ({
        currentMovieId: state.currentMovieId,
        currentSessionId: state.currentSessionId,
    }));
    return (
        <div className={styles.mainScreen}>
            {currentMovieId > 0 ?
                currentSessionId > 0 ?
                    <Hall /> :
                    <SessionGallery /> :
                <MovieGallery />
            }
        </div>
    )

};

export default MainScreen;
