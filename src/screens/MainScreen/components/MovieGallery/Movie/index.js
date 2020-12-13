import styles from './Movie.module.css'
import {useDispatch} from 'react-redux';
import {setMovie} from '../../../../../store/actions';

const Movie = (props) => {
    const dispatch = useDispatch();

    return (
        <div className={styles.movie}>
            <img alt="" src={props.poster} />
            {props.title}
            <button onClick={() => dispatch(setMovie(props.id))}> Выбрать</button>
        </div>
    )

};

export default Movie;
