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
  
  const [ name, setName ] = React.useState('ponemos algo');

  return (<div className="App">
    <Router>

      <Header />

      <Route path="/" exact render={() => <Home name={name} setName={setName} />} />
      <Route path="/about" component={About} />
      <Route path="/main/:id?" render={(props) => <Main name={name} match={props.match} />} />

      <Footer />

    </Router>
  </div>);
}

export default App;
