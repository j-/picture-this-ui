import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, AnyAction } from 'redux';
import rootReducer, { RootReducerState } from './store';
import { MutableState } from './store/types';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import StreamProvider from './components/Stream';
import { initialize } from './initialize';
import './update-vh';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk.withExtraArgument({}) as ThunkMiddleware<RootReducerState, AnyAction, MutableState>,
  ),
));

initialize(store);

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <StreamProvider>
        <App />
      </StreamProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
