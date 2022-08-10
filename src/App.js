import './scss/app.scss';
import footer_proyect from './component/footer';
// import cajas from './component/cajas';
import Empresas from "./component/empresas-json";
// import Projectos from "./component/projectos";
import React from 'react';
import egocity from './asstes/egocity.png';
import radical from './asstes/radical.png';
import eco from './asstes/eco.png';
import rincon from './asstes/rincon-canino.png';
import worm from './asstes/thewormholewonders.png';
import emit from './asstes/Emit.png';
import compra from './asstes/compraorgullo.png'
import liga from './asstes/ligasida.png'
import mindo from './asstes/mindo-tucanes.png'
import fair from './asstes/Fair-play.png'
import retorica from './asstes/Retorica.png'
import amara from './asstes/amara.png'
import tupublicista from './asstes/tupublicista.png'
import weread from './asstes/wereadenglish.png'
import cccc from './asstes/cccc.png'
import transportar from './asstes/transportar.png'

// console.log(Empresas)
// console.log(typeof Projectos)
// let aaaaaa;
// Projectos.then (getValue => {
//   console.log(getValue);
//   aaaaaa = getValue
// })
// console.log(aaaaaa);
// console.log(Projectos)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
            <input type="checkbox" id="check"/>
            <label htmlFor="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>
            <a href="https://chrjmz.netlify.app/" className="enlace">
              <h1>CHRJMZ</h1>
            </a>
            <ul>
              <li><a href="https://www.linkedin.com/in/christian-jospeh/">Linkedin</a></li>
            </ul>
        </nav>
      </header>
      <section id="titulo">
        <div className="container">
          <h2>Hello, my name is Christian Medina</h2>
          <p>
            I am a Software Engineer based in Medellín, Colombia. <br/>
            Currently I'm working at Front-End Developer helping folks level up with JavaScript and Wordpress.
          </p>
        </div>
      </section>
      <section id="cajas">
        <div className="container">
          <div className="grid-container">
          {Empresas.map((data, key) => {
            const divStyle = {
              color: 'blue',
              backgroundImage: 'url(' + data.image + ')',
            };

            console.log(divStyle)
            return (
              <div className="grid-item">
                <a href={data.url} className="card" key={key} style={divStyle}>
                  <div className="card__content">
                  <h2 className="card__title">{data.project}</h2>
                  <p className="card__description">{data.texto}</p>
                  </div>
                </a>
              </div>
            );
          })}
          </div>
        </div>
      </section>
      <footer>
        {footer_proyect()}
      </footer>
    </div>
  );
}

export default App;