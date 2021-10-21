import React from 'react';
import './App.css';
import GlobalStyle from './components/UI/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Axios from 'axios';

//Pages
import Accueil from './pages/Accueil/Accueil';
import Catalogue from './pages/Catalogue/Catalogue';
import Contact from './pages/Contact/Contact';
import Info from './pages/Info/Info';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Index from './pages/Book/Index';
import TestBook from './pages/Test-Book/Test-Book';

function App() {
  return (
    <div>
      <GlobalStyle/>
      <Router>
        <Header/>
        <main>
          <Switch>
              <Route path="/" exact>
                <Accueil/>
              </Route>
              <Route path="/catalogue" exact>
                <Catalogue/>
              </Route>
              <Route path="/info" exact>
                <Info/>
              </Route>
              <Route path="/contact" exact>
                <Contact/>
              </Route>
              <Route path="/signin" exact>
                <SignIn/>
              </Route>
              <Route path="/signup" exact>
                <SignUp/>
              </Route>
              <Route path="/book" exact>
                <Index/>
              </Route>
              <Route path="/test" exact>
                <TestBook/>
              </Route>
              <Redirect to="/"/>
          </Switch>
        </main>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
