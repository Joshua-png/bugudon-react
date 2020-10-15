import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';
import './style.css';
import NavBar from './components/Header/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Company from './components/Portfolio/Company';
import Privacy from './components/Privacy/Privacy';
import InvestorSection from './components/Home/InvestorSection';

function App() {
  return (
   <React.Fragment> 
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/investorsection" component={InvestorSection} />
        <Route path="/projects" component={Projects} />
        <Route path="/company" component={Company} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
      </Switch>
      <Footer />
   </React.Fragment> 
  );
}

export default App;