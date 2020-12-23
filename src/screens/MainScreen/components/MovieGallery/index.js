//import {useSelector} from 'react-redux';
import Movie from './Movie';
import styles from './MovieGallery.module.css'
import {useEffect, useState} from 'react';
import {moviesDB} from '../../../../services/firebase';


const MovieGallery = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        moviesDB.on('value', (snapshot) => {
            let allMovies = [];
            snapshot.forEach((childSnapshot) => {
                allMovies.push(childSnapshot.val());
            });
            setMovies(allMovies);
        });
    }, []);

    return (
        <div className={styles.movieGallery} data-testid="gallery">
            {movies?.map(movie => <Movie key={movie.id} poster={movie.poster} title={movie.title} id={movie.id} />)}
        </div>
    )
};

export default MovieGallery;
