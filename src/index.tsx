import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initStore } from "./custom-store/useStore";
// Item Store
import itemActions from './custom-store/itemActions';
import { itemInitialState } from "./custom-store/itemActions";
// Counter Store
import counterActions from "./custom-store/counterActions";
import {counterInitialState } from "./custom-store/counterActions";

initStore(itemActions, itemInitialState);
initStore(counterActions, counterInitialState);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
