import styles from './Hall.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {reserveSeat, setSession} from '../../../../store/actions';
import {ROW_NUMBER} from '../../../../store/constants';
import Row from './Row';
import {useState} from 'react';

const Hall = () => {
        const dispatch = useDispatch();

        const currentSessionId = useSelector(state => state.currentSessionId);

        const [selectedSeats, setSelectedSeats] = useState([]);

        const isSelected = (row, column) => {
            if (selectedSeats && selectedSeats?.length > 0) {
                return selectedSeats?.filter(seat => seat.row === row && seat.column === column).length > 0;
            }
            return false;
        };

        const reserveSelectedSeats = () => {
            dispatch(reserveSeat(currentSessionId, selectedSeats));
            setSelectedSeats([]);
        };

        const toggleSeatSelection = (row, column) => {
            isSelected(row, column) ?
                setSelectedSeats(selectedSeats.filter(seat => seat.row !== row || seat.column !== column))
                : setSelectedSeats([...selectedSeats, {
                    row: row,
                    column: column
                }]);
        };

        let rows = [];
        for (let i = 0; i < ROW_NUMBER; i++) {
            rows.push(
                <div className={styles.row}>
                    <span> Ряд {ROW_NUMBER - i} </span>
                    <Row rowNumber={i + 1} toggleSeatSelection={toggleSeatSelection} isSelected={isSelected} />
                </div>
            )
        }

        const checkWord = () => {
            switch (selectedSeats?.length) {
                case 1:
                    return 'место';
                case 2:
                case 3:
                case 4:
                    return 'места';
                default:
                    return 'мест';
            }
        };

        return <div className={styles.hall}>
            <div className={styles.hallScheme}>{rows}</div>
            <div className={styles.screen}>ЭКРАН</div>
            <div className={styles.buttons}>
                <button onClick={() => dispatch(setSession(0))}> Назад к выбору сеанса</button>
                <button onClick={() => reserveSelectedSeats()}> Забронировать {selectedSeats?.length} {checkWord()}</button>
            </div>

        </div>
    }
;

export default Hall;
