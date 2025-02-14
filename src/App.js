import { useEffect, useState } from "react";
import './App.css';

function App() {
  
  const url_base = "https://api.test.interactiva.net.co";
  // Estados para almacenar datos de la API
  const [companies, setCompanies] = useState([]);
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [travels, setTravels] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchCompanies();
    mostrarAPIS();
  }, [companies]);  

  useEffect(() => {
    if (companies.length > 0) {
      mostrarAPIS();
    }
  }, [companies]);

  async function mostrarAPIS(){
    console.log('Companies: \n'+companies[0]);
  }

  async function fetchCompanies(){
    try {
      const response = await fetch(url_base+"/api/get-companies/");
      const data = await response.json();
      setCompanies(data);
      console.log(companies)
    } catch (error) {
      console.error("Error al obtener las compañías:", error);
    }
  };

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
        {companies.length > 0 && (
          <section id="nosotros">
            <h1>Nosotros</h1>
            <p>{companies[0].description}</p> {/* ✅ Descripción dinámica */}

            <div id="galeria">
              {companies[0].feed_instagram.map((item) => (
                <img key={item.id} src={item.image} alt={`nosotros ${item.id}`} />
              ))}
            </div>
          </section>
        )});
      </section>

      <div id='line'></div>

      <section className="experiencias">
        <h1>Experiencias Grupales</h1>
        <div className="carousel">
          <button className="prev">&#10094;</button>
          <div className="cards">
            <div className="card">
              <img src="/img/exp_grupales_1.png" alt="Safari"></img>
              <span className="tag gold">¡Últimos cupos!</span>
              <h2>Safari (África)</h2>
              <p>5 al 15 de abril | Desde 5,500 USD</p>
              <p>Serengeti, viaje en globo, hotel todo incluido 4 estrellas. Vive la experiencia de conocer a los reyes de la sabana africana.</p>
              <button><a href='*'>Más Información</a></button>
            </div>
            <div className="card">
              <img src="/img/exp_grupales_2.png" alt="Japón"></img>
              <span className="tag red">Agotado</span>
              <h2>Japón: Tradición y Modernidad</h2>
              <p>30/04 - 11/05 | Desde 2,700 USD</p>
              <p>Tokio, Monte Fuji y Kamakura. Conoce la cultura que combina la tradición y la tecnología.</p>
              <button><a href='*'>Más Información</a></button>
            </div>
            <div className="card">
              <img src="/img/exp_grupales_3.png" alt="Egipto"></img>
              <span className="tag green">Cupos Disponibles</span>
              <h2>Egipto: Místico y Majestuoso</h2>
              <p>01 al 08 de abril | Desde 4,200 USD</p>
              <p>El Cairo, Pirámides, Valle de los Muertos y viaje por el Nilo. Descubre una de las civilizaciones más antiguas del mundo.</p>
              <button><a href='*'>Más Información</a></button>
            </div>
          </div>
          <button className="next">&#10095;</button>
        </div>
      </section>

      <section className="experiencias-personalizadas">
        <h1>EXPERIENCIAS PERSONALIZADAS</h1>
        <div className="contenedor">
          <img src="/img/exp_personalizadas.png" alt="Experiencia personalizada"/>
          <div className="info">
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

      <section className="blogs">
        <h2>BLOGS</h2>
        <div className="blogs-container">
          <div className="blog-item large">
            <img src="/img/exp_personalizadas.png" alt="Imagen Blog 1"/>
            <h3>DESTINOS PARA PAREJAS EN 2025</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam...</p>
            <a href="#">LEER MÁS</a>
          </div>
          <div className="blog-item">
            <img src="/img/blogs_2.png" alt="Imagen Blog 2"/>
            <h3>VUELVE LA VISA PARA VIAJAR A LONDRES</h3>
            <a href="#">LEER MÁS</a>
          </div>
          <div className="blog-item">
            <img src="/img/blogs_3.png" alt="Imagen Blog 3"/>
            <h3>TOP 3 DESTINOS EN COLOMBIA</h3>
            <a href="#">LEER MÁS</a>
          </div>
        </div>
      </section>

      <section className="formulario">
        <h2>DISEÑA TU VIAJE</h2>
        <h3>AQUÍ COMIENZA TU EXPERIENCIA</h3>
        <p>Una vez llenado este formulario, uno de nuestros planners travelers se pondrá en contacto contigo para perfeccionar ese viaje que tanto has soñado. Estamos aquí para brindarte la mejor experiencia.</p>
    
        <form className="form-container">
          <div className='group-inputs'>
            <div className="input-group">
              <label>¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?</label>
              <select>
                <option>Selecciona un destino</option>
              </select>
            </div>

            <div className="input-group">
              <label>¿QUÉ OTRO DESTINO TIENES EN MENTE?</label>
              <select>
                <option>Selecciona un destino</option>
              </select>
            </div>
          </div>

          <div className="experiencias_2">
            <label>¿QUÉ EXPERIENCIAS QUIERES VIVIR?</label>
            <div className="experiencia-buttons">
              <button type="button">SAFARI</button>
              <button type="button">DEPORTE</button>
              <button type="button">ARTE Y CULTURA</button>
              <button type="button">DESCANSO</button>
              <button type="button">ESPIRITUAL</button>
              <button type="button">PLAYA</button>
              <button type="button">NATURALEZA</button>
            </div>
          </div>

          <div className="viaje-info">
            <label>¿SABES CUÁNDO VIAJAR?</label>
            <div className="viaje-opciones">
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

          <div className="pasajeros">
            <label>NIÑOS:</label>
            <select><option>0</option></select>
            <label>ADULTOS:</label>
            <select><option>1</option></select>
          </div>

          <div className="textarea-group">
            <label>TU VIAJE IDEAL...</label>
            <textarea placeholder="Describe tu viaje ideal"></textarea>
          </div>

          <button type="submit" className="btn-enviar">ENVIAR</button>
        </form>
      </section>

      <div className="alianzas-container">
        <h2>ALIANZAS ESTRATÉGICAS</h2>
        <div className="alianzas-logos">
          <img src="/img/logo7.png" alt="Avianca"/>
          <img src="/img/logo6.png" alt="Expedia"/>
          <img src="/img/logo5.png" alt="Uber"/>
          <img src="/img/logo4.png" alt="LifeMiles"/>
          <img src="/img/logo3.png" alt="Bancolombia"/>
          <img src="/img/logo1.png" alt="RIU"/>
          <img src="/img/logo2.png" alt="Royal Caribbean"/>
        </div>
        <div className="whatsapp-icon">
          <img src="/img/logo_WA.png" alt="WhatsApp"/>
        </div>
      </div>

      <section className="newsletter-container">
        <p>Suscríbete a nuestro newsletter y recibe noticias, descuentos y más</p>
        <div className="newsletter-form">
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
