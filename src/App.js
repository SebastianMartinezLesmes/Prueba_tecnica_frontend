import './App.css';

function App() {
  return (
    <>

      <section id="header">
        <img src="/img/header.png" alt="header" />
        <header>
          <img src="/img/logo.png" alt="logo" />
          <div>
            <a href="#">Inicio</a>
            <a href="#">Noticias</a>
            <a href="#">Viajes</a>
            <a href="#">Blogs</a>
            <a href="#">Contacto</a>
          </div>
        </header>
        <div>
          <h1>THE TRAVEL</h1>
          <p>EXPERIENCE</p>
          <div>
            <img src="/img/viajes_grupales.png" alt="viajes grupales" hover='viajes grupales'/>
            <img src="/img/viajes_a_la_medida.png" alt="viajes a la medida" />
            <img src="/img/destinos_para_parejas.png" alt="destinos para parejas" />
          </div>
          <div>
            <span>viajes grupales</span>
            <span>viajes a la medida</span>
            <span>viajes a la medida</span>
          </div>
        </div>
      </section>

      <section id='nosotros'> 
        <h1>nosotros</h1>
        <p>Un copy cercano como hablandole a un amigo. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
          aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
          iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu
          feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent
          luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
        </p>
        <div id='galeria'>
          <img src='/img/nosotros_1.png' alt='nosotros 1'/>
          <img src='/img/nosotros_2.png' alt='nosotros 2'/>
          <img src='/img/nosotros_3.png' alt='nosotros 3'/>
          <img src='/img/nosotros_4.png' alt='nosotros 4'/>
        </div>
      </section>

      <div id='line'></div>

      <section class="experiencias">
        <h1>Experiencias Grupales</h1>
        <div class="carousel">
          <button class="prev">&#10094;</button>
          <div class="cards">
            <div class="card">
              <img src="/img/exp_grupales_1.png" alt="Safari"></img>
              <span class="tag gold">¡Últimos cupos!</span>
              <h2>Safari (África)</h2>
              <p>5 al 15 de abril | Desde 5,500 USD</p>
              <p>Serengeti, viaje en globo, hotel todo incluido 4 estrellas. Vive la experiencia de conocer a los reyes de la sabana africana.</p>
              <button><a href='*'>Más Información</a></button>
            </div>
            <div class="card">
              <img src="/img/exp_grupales_2.png" alt="Japón"></img>
              <span class="tag red">Agotado</span>
              <h2>Japón: Tradición y Modernidad</h2>
              <p>30/04 - 11/05 | Desde 2,700 USD</p>
              <p>Tokio, Monte Fuji y Kamakura. Conoce la cultura que combina la tradición y la tecnología.</p>
              <button><a href='*'>Más Información</a></button>
            </div>
            <div class="card">
              <img src="/img/exp_grupales_3.png" alt="Egipto"></img>
              <span class="tag green">Cupos Disponibles</span>
              <h2>Egipto: Místico y Majestuoso</h2>
              <p>01 al 08 de abril | Desde 4,200 USD</p>
              <p>El Cairo, Pirámides, Valle de los Muertos y viaje por el Nilo. Descubre una de las civilizaciones más antiguas del mundo.</p>
              <button><a href='*'>Más Información</a></button>
            </div>
          </div>
          <button class="next">&#10095;</button>
        </div>
      </section>

      <section class="experiencias-personalizadas">
        <h1>EXPERIENCIAS PERSONALIZADAS</h1>
        <div class="contenedor">
          <img src="/img/exp_personalizadas.png" alt="Experiencia personalizada"/>
          <div class="info">
            <h2>¿QUÉ NOS HACE DIFERENTES?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh 
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad 
              minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut 
              aliquip ex ea commodo consequat.
            </p>
            <button>COTIZAR MI VIAJE</button>
          </div>
        </div>
      </section>

      <section class="blogs">
        <h2>BLOGS</h2>
        <div class="blogs-container">
          <div class="blog-item large">
            <img src="/img/exp_personalizadas.png" alt="Imagen Blog 1"/>
            <h3>DESTINOS PARA PAREJAS EN 2025</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...</p>
            <a href="#">LEER MÁS</a>
          </div>
          <div class="blog-item">
            <img src="/img/blogs_2.png" alt="Imagen Blog 2"/>
            <h3>VUELVE LA VISA PARA VIAJAR A LONDRES</h3>
            <a href="#">LEER MÁS</a>
          </div>
          <div class="blog-item">
            <img src="/img/blogs_3.png" alt="Imagen Blog 3"/>
            <h3>TOP 3 DESTINOS EN COLOMBIA</h3>
            <a href="#">LEER MÁS</a>
          </div>
        </div>
      </section>

      <section class="formulario">
        <h2>DISEÑA TU VIAJE</h2>
        <h3>AQUÍ COMIENZA TU EXPERIENCIA</h3>
        <p>Una vez llenado este formulario, uno de nuestros planners travelers se pondrá en contacto contigo para perfeccionar ese viaje que tanto has soñado. Estamos aquí para brindarte la mejor experiencia.</p>
    
        <form class="form-container">
          <div class='group-inputs'>
            <div class="input-group">
              <label>¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?</label>
              <select>
                <option>Selecciona un destino</option>
              </select>
            </div>

            <div class="input-group">
              <label>¿QUÉ OTRO DESTINO TIENES EN MENTE?</label>
              <select>
                <option>Selecciona un destino</option>
              </select>
            </div>
          </div>

          <div class="experiencias_2">
            <label>¿QUÉ EXPERIENCIAS QUIERES VIVIR?</label>
            <div class="experiencia-buttons">
              <button type="button">SAFARI</button>
              <button type="button">DEPORTE</button>
              <button type="button">ARTE Y CULTURA</button>
              <button type="button">DESCANSO</button>
              <button type="button">ESPIRITUAL</button>
              <button type="button">PLAYA</button>
              <button type="button">NATURALEZA</button>
            </div>
          </div>

          <div class="viaje-info">
            <label>¿SABES CUÁNDO VIAJAR?</label>
            <div class="viaje-opciones">
            <label>
              <input type="radio" name="p1" id='p1'/> SÍ
              <input type="radio" name="p1" id='p2'/> NO
            </label>
            </div>
            <label> IDA
              <input type="date" placeholder="IDA"/>
            </label>
            <label> REGRESO
              <input type="date" placeholder="REGRESO"/>
            </label>
          </div>

          <div class="pasajeros">
            <label>NIÑOS:</label>
            <select><option>0</option></select>
            <label>ADULTOS:</label>
            <select><option>1</option></select>
          </div>

          <div class="textarea-group">
            <label>TU VIAJE IDEAL...</label>
            <textarea placeholder="Describe tu viaje ideal"></textarea>
          </div>

          <button type="submit" class="btn-enviar">ENVIAR</button>
        </form>
      </section>

      <div class="alianzas-container">
        <h2>ALIANZAS ESTRATÉGICAS</h2>
        <div class="alianzas-logos">
          <img src="/img/logo7.png" alt="Avianca"/>
          <img src="/img/logo6.png" alt="Expedia"/>
          <img src="/img/logo5.png" alt="Uber"/>
          <img src="/img/logo4.png" alt="LifeMiles"/>
          <img src="/img/logo3.png" alt="Bancolombia"/>
          <img src="/img/logo1.png" alt="RIU"/>
          <img src="/img/logo2.png" alt="Royal Caribbean"/>
        </div>
        <div class="whatsapp-icon">
          <img src="/img/logo_WA.png" alt="WhatsApp"/>
        </div>
      </div>

      <section class="newsletter-container">
        <p>Suscríbete a nuestro newsletter y recibe noticias, descuentos y más</p>
        <div class="newsletter-form">
          <input type="email" placeholder="Correo electrónico" />
          <button>SUSCRIBIRME</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer_logos">
          <img src="/img/logo.png" alt="All In Travels" />
          <img src="/img/logos_redes.png" alt="Facebook" className="redes" />
        </div>

        <div>
          <ul>
            <ol>Inicio</ol>
            <ol>¿Quiénes somos?</ol>
            <ol>Viajes grupale</ol>
            <ol>Viajes a la medid</ol>
            <ol>Contáctanos</ol>
            <ol>Alianzas estratégicas</ol>
            <ol>Blogs</ol>
            <ol>Términos y condiciones</ol>
            <ol>Política de privacidad</ol>
            <ol>Registro Nacional de Turismo</ol>
          </ul>
        </div>

        <div className="datos">
          <div>
            <img src="/img/icono_mail.png" alt="Email"/>
            <span>info@allintravels.com</span>
          </div>
          <div>
            <img src="/img/icono_telefono.png" alt="Teléfono"/>
            <span>+0057 (604) 444 45 83</span>
          </div>
          <div>
            <img src="/img/icono_ubicacion.png" alt="Ubicación"/>
            <span>
              Carrera 43A # 18 Sur - 135 Of 834, Sao Paulo Plaza Medellín - Colombia.
            </span>
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;
