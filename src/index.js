import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// const name = "Galih";
// function great(name) {
//     return "Hai, " + name
// }
// const elemen = <h2>{great(name)} </h2>;
// ReactDOM.render(elemen, document.getElementById('master'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();