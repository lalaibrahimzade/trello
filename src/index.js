import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './assets/styles/index.css';
import './assets/styles/Typography.css';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
    <Provider store={store}>
     <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
  
);


