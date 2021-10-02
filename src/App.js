import React from 'react'
import {Route} from "react-router-dom"
import Contact from './components/contact'
import Home from './components/home'
import Navigation from './components/navigation'

function App() {
  return (
    <>
      <Navigation/>
      <Route path="/" exact component={Home}/>
      <Route path="/contact" exact component={Contact}/>
    </>
  );
}
export default App;
