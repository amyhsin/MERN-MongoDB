import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Bar from './component/Bar.js';
import Nav from './component/Nav.js';
import Title from './component/Title.js';
import Form from './component/Form.js';
import Home from './component/Home.js';
import Footer from './component/Footer.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Bar/>
        <Nav/>
        <Title/>

        <Switch>
          <Route exact path = "/" component = {Home} />
          <Route exact path = "/contact" component ={Form} />
        </Switch>

        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;
