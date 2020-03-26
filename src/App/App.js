import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Main from '../Main/Main';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// cuando el usuario entre a la dirección / (root) queremos mostrarle el componente (o pantalla) Home
// cuando el usuario entre a la dirección /about queremos mostrarle el componente About

function App() {
  return (<div className="App">
    <Router>

      <Header />

      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/main" component={Main} />

      <Footer />

    </Router>
  </div>);
}

export default App;
