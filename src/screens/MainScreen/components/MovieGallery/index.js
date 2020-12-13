import {useSelector} from 'react-redux';
import Movie from './Movie';
import styles from './MovieGallery.module.css'

const MovieGallery = () => {
    const movies = useSelector(state => state.movies);

    return (
        <div className={styles.movieGallery}>
            {movies?.map(movie => <Movie key={movie.id} poster={movie.poster} title={movie.title} id={movie.id} />)}
        </div>
    )
};

export default MovieGallery;
