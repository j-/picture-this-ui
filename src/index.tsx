import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer, { RootReducerState } from './store';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import { queryPermission } from './store/action-query-permission';
import { changePermission } from './store/actions';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(
    thunk as ThunkMiddleware<RootReducerState>,
  ),
));

(async () => {
  const status = await store.dispatch(queryPermission());
  status.addEventListener('change', () => {
    store.dispatch(changePermission(status.state));
  });
})();

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
