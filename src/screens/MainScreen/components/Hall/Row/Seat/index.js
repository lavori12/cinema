import styles from './Seat.module.css'
import EventSeatRoundedIcon from '@material-ui/icons/EventSeatRounded';
import {useSelector} from 'react-redux';

const Seat = (props) => {

    const {currentReservedSeats} = useSelector((state) => ({
        currentSessionId: state.currentSessionId,
        currentReservedSeats: state.reservedSeats.filter(seat => seat.sessionId === state.currentSessionId)
    }));

    const isReserved = (rowNumber, columnNumber) => {
        return currentReservedSeats.filter(seat => seat.row === rowNumber && seat.column === columnNumber).length > 0
    };

    const checkColor = (rowNumber, columnNumber) => {
        return isReserved(rowNumber, columnNumber) ? 'secondary' : props.isSelected(rowNumber, columnNumber) ? 'primary' : ''
    };

    const selectSeat = (rowNumber, columnNumber) => {
        if (!isReserved(rowNumber, columnNumber)) {
            props.toggleSeatSelection(rowNumber, columnNumber)
        }
    };

    return <div className={styles.seat}>
        <EventSeatRoundedIcon fontSize={'large'} color={checkColor(props.rowNumber, props.columnNumber)}
                              onClick={() => selectSeat(props.rowNumber, props.columnNumber)} />
        {props.columnNumber}
    </div>
};

export default Seat;
