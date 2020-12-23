import styles from '../../SessionGallery/Session/Session.module.css';
import {useDispatch} from 'react-redux';
import {setSession} from '../../../../../store/actions';

const Session = (props) => {
    const dispatch = useDispatch();

    return <tr className={styles.session}>
        <td> {props.date} </td>
        <td> {props.time} </td>
        <td>
            <button  data-testid="session-button" onClick={() => dispatch(setSession(props.id))}> Выбрать</button>
        </td>
    </tr>
};

export default Session;
