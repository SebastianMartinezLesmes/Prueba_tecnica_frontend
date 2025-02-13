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

      <hr></hr>

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

      <div> Expreriencias Personalizadas
        <img alt="img"></img>
        <span>
          titulo
          texto
          <button>cotizar mi viaje</button>
        </span>
      </div>

      <div> Blogs
        <div> 1
          <img alt='img'></img>
          titulo
          texto
          <a href=''>leer mas</a>
        </div>
        <div> 2
          <img alt='img'></img>
          titulo
          <a href=''>leer mas</a>
        </div>
        <div> 3
          <img alt='img'></img>
          titulo
          <a href=''>leer mas</a>
        </div>
      </div>

      <section class="p-10 bg-gray-100">
        <h2 class="text-3xl font-bold text-center text-yellow-600">DISEÑA TU VIAJE</h2>
        <p class="text-center font-semibold mt-2">AQUÍ COMIENZA TU EXPERIENCIA</p>
        <p class="text-center text-gray-600 mb-6">
          Una vez llenado este formulario, uno de nuestros planners travelers se pondrá en contacto contigo para perfeccionar ese viaje que tanto has soñado.
        </p>
        
        <form class="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto">
          <div class="grid grid-cols-2 gap-4">
            <select class="w-full p-2 border rounded-md">
              <option>¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?</option>
            </select>
            <input type="text" placeholder="¿QUÉ OTRO DESTINO TIENES EN MENTE?" class="w-full p-2 border rounded-md" />
          </div>

          <p class="mt-4 font-semibold">¿QUÉ EXPERIENCIAS QUIERES VIVIR?</p>
          <div class="grid grid-cols-3 gap-2 mt-2">
            <button type="button" class="border rounded-md py-2">SAFARI</button>
            <button type="button" class="border rounded-md py-2">DEPORTE</button>
            <button type="button" class="border rounded-md py-2">ARTE Y CULTURA</button>
            <button type="button" class="border rounded-md py-2">DESCANSO</button>
            <button type="button" class="border rounded-md py-2">ESPIRITUAL</button>
            <button type="button" class="border rounded-md py-2">PLAYA</button>
            <button type="button" class="border rounded-md py-2 col-span-3">NATURALEZA</button>
          </div>

          <p class="mt-4 font-semibold">¿SABES CUÁNDO VIAJAR?</p>
          <div class="flex items-center mt-2 space-x-4">
            <label><input type="radio" name="fecha" class="mr-1"></input> Sí</label>
            <label><input type="radio" name="fecha" class="mr-1"></input> No</label>
            <input type="date" class="p-2 border rounded-md" />
            <input type="date" class="p-2 border rounded-md" />
          </div>

          <div class="grid grid-cols-2 gap-4 mt-4">
            <select class="w-full p-2 border rounded-md">
              <option>NIÑOS</option>
            </select>
            <select class="w-full p-2 border rounded-md">
              <option>ADULTOS</option>
            </select>
          </div>

          <textarea placeholder="TU VIAJE IDEAL..." class="w-full p-2 border rounded-md mt-4"></textarea>

          <button class="w-full bg-yellow-600 text-white px-4 py-2 rounded-lg mt-4">ENVIAR</button>
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
