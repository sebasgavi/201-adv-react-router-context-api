import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Main from '../Main/Main';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Context from '../context';

// cuando el usuario entre a la dirección / (root) queremos mostrarle el componente (o pantalla) Home
// cuando el usuario entre a la dirección /about queremos mostrarle el componente About

function App() {
  
  const [ name, setName ] = React.useState('ponemos algo');

  const context = {
    contextName: name,
    contextSetName: setName,
    contextEmail: 'hola@test.com',
  }

  return (<div className="App">
    <Router>
      <Context.Provider value={context}>

        <Header />
        
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/main/:id?" component={Main} />
        {/* pasar estado por parámetros
        <Route path="/" exact render={() => <Home name={name} setName={setName} />} />*/}
        {/* pasar estado por parámetro y usar props del render (match)
        <Route path="/main/:id?" render={(props) => <Main name={name} match={props.match} />} />*/}

        <Footer />

      </Context.Provider>
    </Router>
  </div>);
}

export default App;
