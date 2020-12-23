import { render, fireEvent} from '@testing-library/react'
import Session from './index';
import { useDispatch } from 'react-redux';
import {setSession} from '../../../../../store/actions';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(() => {}),
}));


it('film should be selected', () => {
    const mockedDispatch = jest.fn();
    useDispatch.mockReturnValue(mockedDispatch);
    const {getByTestId} = render(<Session key={15} date={"23.11.2020"} time={"15:15"} id={15}/>);

    fireEvent.click(getByTestId('session-button'));

    expect(mockedDispatch).toHaveBeenCalledWith(setSession(15));
});
