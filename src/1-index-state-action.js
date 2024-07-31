import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from "@reduxjs/toolkit"
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: {
    state: (state = 0, action) => {
      switch (action.type) {
        case "accion":
          return action.payload
      }
      return state
    },
  },
})
//SIEMPRE PROPIEDAD DE TYPE
store.dispatch({type:"accion", payload: 2})
store.dispatch({type:"accionindefinida", payload: 15})
console.log(store.getState())
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
