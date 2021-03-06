import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ThemeProvider } from '@material-ui/styles';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import store from './app/store';
import { LanguageProvider } from './features/LanguageProvider/LanguageProvider';
import { theme } from './app/theme';
import { getSavedTrips } from './features/WebStorage/WebStorageAction';

store.dispatch(getSavedTrips());

ReactDOM.render(
  <React.StrictMode>
    {/*<Countries />*/}
    <Provider store={store}>
      <BrowserRouter>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <ThemeProvider theme={theme}>
            <LanguageProvider>
              <App />
            </LanguageProvider>
          </ThemeProvider>
        </MuiPickersUtilsProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
