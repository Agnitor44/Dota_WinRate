import React, {useEffect} from 'react'
import {heroFetch} from './functions/heroFetch'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HeroLib from './components/HeroLib'
import HeroPanel from './components/HeroPanel'

function App() {
  useEffect(() => {
  
  }, [])
  return (
    <Router>
      <Switch>
        <Route path = '/' exact component = {HeroLib}/>
        <Route path = '/hero/:code' exact component = {HeroPanel}/>
      </Switch>
    </Router>
    
  );
}

export default App;
