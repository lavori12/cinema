import styles from './Row.module.css'
import {COLUMN_NUMBER} from '../../../../../store/constants';
import Seat from './Seat';

const Row = (props) => {

    let columns = [];
    for (let i = 0; i < COLUMN_NUMBER; i++) {
        columns.push(<Seat rowNumber={props.rowNumber} columnNumber={i + 1}
                           toggleSeatSelection={props.toggleSeatSelection} isSelected={props.isSelected} />)
    }

    return <div className={styles.rowStyle}>
        {columns}
    </div>
};

export default Row;
