import './scss/app.scss';
import footer_proyect from './component/footer.js'
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





function App() {
  <footer></footer>
  return (
    <div className="App">
      <header className="App-header">
        <nav>
            <input type="checkbox" id="check"/>
            <label for="check" className="checkbtn">
              <i className="fas fa-bars"></i>
            </label>
            <a href="#" className="enlace">
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
            <div class="grid-container">
              <div class="grid-item">
                <a href="https://egocitymgz.com/" target="_blank">
                  <img src={egocity} />
                  <h3>
                    Revista egoCity | Plataforma de información LGBTI+ de Colombia y Latam
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://radicaltrainer.com/" target="_blank">
                  <img src={radical} />
                  <h3>
                    Radical Trainer - Consigue tu cambio Radical
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://tupublicista.com/" target="_blank">
                  <img src={tupublicista} />
                  <h3>
                  Artículos Promocionales y Regalos Corporativos
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://rinconcanino.com/" target="_blank">
                  <img src={rincon} />
                  <h3>
                    Rincon canino
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://thewormholewonders.com/" target="_blank">
                  <img src={worm} />
                  <h3>
                      Building Worlds with Words
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://www.cccc.cl/" target="_blank">
                  <img src={cccc} />
                  <h3>
                  CÁMARA DE COMERCIO<br/>
                   CHILENO-COLOMBIANA
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://compraorgullo.com/" target="_blank">
                  <img src={compra} />
                  <h3>
                    Vamos por la reactivación económica de los sectores LGBTI+ de Medellín y Colombia.
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://www.ligasida.org.co/" target="_blank">
                  <img src={liga} />
                  <h3>
                  La Liga Colombiana de Lucha contra el Sida. Organización No Gubernamental.
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://mindolostucanes.com/" target="_blank">
                  <img src={mindo} />
                  <h3>
                      Tecnología para el futuro
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://fairplay4men.com/" target="_blank">
                  <img src={fair} />
                  <h3>
                      Play clean, play better
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://saludnaturalemit.com" target="_blank">
                  <img src={emit} />
                  <h3>
                      Tecnología para el futuro
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="http://estudioretorica.com/" target="_blank">
                  <img src={retorica} />
                  <h3>
                      Being Awesome since 2022
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://amaravidente.com/" target="_blank">
                  <img src={amara} />
                  <h3>
                  Es el momento de renovar tu energía, y dejar atrás la oscuridad que no te deja crecer.
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://transportar.co/" target="_blank">
                  <img src={transportar} />
                  <h3>
                  EXPERIENCIA QUE FACILITA LA LOGÍSTICA DE TUS MERCANCÍAS.

                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://wereadenglish.com/" target="_blank">
                  <img src={weread} />
                  <h3>
                      Welcome to We Read English
                  </h3>
                </a>
              </div>
              <div class="grid-item">
                <a href="https://eco3planet.com/" target="_blank">
                  <img src={eco} />
                  <h3>
                      Tecnología para el futuro<br/>Próximamente
                  </h3>
                </a>
              </div>
            </div>
          </div>
      </section>
      <footer_proyect>
        {footer_proyect}
      </footer_proyect>
    </div>
  );
}

export default App;
