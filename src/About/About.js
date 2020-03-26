import React from 'react';
import { Link, Route } from 'react-router-dom';

// en about general mostramos un párrafo y una navegación interna
// hay 2 rutas más, teamA y teamB, cada uno con un texto diferente

const About = () => {
  return <div>
    <h1>About</h1>

    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsum harum maiores, architecto ea dolore vel eligendi unde ullam, sequi quos minus eius! Ad sapiente rem velit odio inventore quis.
    </p>

    <nav>
      <Link to="/about/teamA">View Team A</Link>
      <Link to="/about/teamB">View Team B</Link>
    </nav>

    <Route path="/about/teamA" render={() => <p>Info Team A</p>} />
    <Route path="/about/teamB" render={() => <p>Info Team B</p>} />

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, est ex maxime esse officiis cum? Esse, adipisci, accusantium animi maiores molestiae nulla quas, sequi dignissimos error quae eum ab est.
    </p>
    
  </div>
}

export default About;
