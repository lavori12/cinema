import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';
import MainScreen from './screens/MainScreen';

const App = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <MainScreen />
            </Provider>
        </div>
    );
};

export default App;
