// import "babel-polyfill";
import "babel-polyfill";
import 'airbnb-browser-shims';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import React from 'react';
import FootballPlayerPage from './components/FootballPlayers/FootballPlayerPage';
import {Provider} from 'react-redux';
import {loadFootballPlayers} from './actions/playersActions';
import configureStore from './store/configureStore';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';


//Init the sotre with all the players
const store = configureStore();
store.dispatch(loadFootballPlayers());

ReactDOM.render(
    <Provider store={store}>
         <FootballPlayerPage />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
