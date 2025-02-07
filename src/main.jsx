import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store'; // Importerar Redux store
import { Provider } from 'react-redux'; // Tillhandahåller Redux store till hela appen
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> {/* Huvudkomponenten för applikationen */}
    </Provider>
  </React.StrictMode>
);
