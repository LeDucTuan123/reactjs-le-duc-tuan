import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import Nav from './Nav/Nav';
import Home from './example/home';
import ListUser from './User/ListUser';
import DetailUser from './User/DetailUser';

//thư viện toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Mycomponent from './example/Mycomponent';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

//route web

/*
  
*/


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Home />
        <ListTodo /> */}
          {/* <Mycomponent /> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <Mycomponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>


        </header>




        {/* thư viện toastify */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />

      </div>
    </BrowserRouter >
  )
}
// toast.success('Chúc bạn 1 ngày tốt lành')
export default App;
