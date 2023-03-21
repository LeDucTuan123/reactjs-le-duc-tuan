import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import './styles/globle.scss'

//câu hình redux thì import 3 thằng này >>>>>>>>>>
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './store/reducers/rootReducer'
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// const root = document.getElementById('root');
const reduxStore = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const store = createStore(
//   reducer, /* preloadedState, */
//   +  
// );

//store laf noiw luu tru
ReactDOM.render(
  <React.StrictMode>

    <Provider store={reduxStore}>
      <App />
    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
)








  // 

  ;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
