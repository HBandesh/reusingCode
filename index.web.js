import React from 'react';
import ReactDOM from 'react-dom';
import App from './web/App.jsx';
import { Provider } from "react-redux";
import { initializeStore } from "./initializeStore";

const store = initializeStore();

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
