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

          <div class="experiencias">
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

      <div> Alianzas estrategicas
        Lista de imagenes de Alianzas
      </div>

      <section class="bg-gray-900 text-white p-6 text-center">
        <p class="mb-4">Suscríbete a nuestro newsletter y recibe noticias, descuentos y más</p>
        <div class="flex justify-center">
          <input type="email" placeholder="Correo electrónico" class="p-2 rounded-l-md border border-gray-300 text-black w-80" />
          <button class="bg-yellow-600 text-white px-4 py-2 rounded-r-md font-semibold">SUSCRIBIRME</button>
        </div>
      </section>

      <footer className="bg-white text-gray-800 p-6 flex justify-between items-center border-t">
        <div>
          <img src="/logo.svg" alt="Logo" className="h-12" />
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 text-xl">🔵</a>
            <a href="#" className="text-gray-600 text-xl">⚫</a>
            <a href="#" className="text-gray-600 text-xl">🔴</a>
            <a href="#" className="text-gray-600 text-xl">⚪</a>
          </div>
        </div>
        <div className="text-sm">
          <ul>
            <li><a href="#" className="hover:text-blue-500">Inicio</a></li>
            <li><a href="#" className="hover:text-blue-500">¿Quiénes somos?</a></li>
            <li><a href="#" className="hover:text-blue-500">Viajes grupales</a></li>
            <li><a href="#" className="hover:text-blue-500">Viajes a la medida</a></li>
            <li><a href="#" className="hover:text-blue-500">Contacto</a></li>
            <li><a href="#" className="hover:text-blue-500">Términos y condiciones</a></li>
            <li><a href="#" className="hover:text-blue-500">Política de privacidad</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <p>✉ info@alntravels.com</p>
          <p>📞 +57 (604) 444 44 88</p>
          <p>📍 Carrera 43A # 18 Sur - 135 Of 854, Medellín - Colombia</p>
        </div>
      </footer>
    </>
  );
}

export default App;
