import { render, fireEvent} from '@testing-library/react'
import Movie from './index';
import {setMovie} from '../../../../../store/actions';
import { useDispatch } from 'react-redux';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(() => {}),
}));


it('film should be selected', () => {
    const mockedDispatch = jest.fn();
    useDispatch.mockReturnValue(mockedDispatch);
    const {getByTestId} = render(<Movie key={1} poster={"https://www.mirage.ru/images/film/small/p4112.jpg"} title={"test Movie"} id={1}/>);

    fireEvent.click(getByTestId('movie-button'));

    expect(mockedDispatch).toHaveBeenCalledWith(setMovie(1));
});
