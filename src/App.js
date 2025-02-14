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
    getCompanies();
    getBanners();
    getCategories();
    getTravels();
    getCustomerExperiences();
    getBlogs();

    mostrarAPIS();
  }, [companies]);  

  useEffect(() => {
    if (companies.length > 0) {
      mostrarAPIS();
    }
  }, [companies]);

  // mostar datos
  async function mostrarAPIS(){
    console.log('Companies: \n'+companies);
    console.log('Banners: \n'+banners);
    console.log('Categories: \n'+categories);
    console.log('Travels: \n'+travels);
    console.log('Experiences: \n'+experiences);
    console.log('Blogs: \n'+blogs);
    console.log('Tags: \n'+tags);
    console.log('Partners: \n'+partners);
  }

  // consumo api's
  async function getCompanies(){
    try {
      const response = await fetch(url_base+"/api/get-companies/");
      const data = await response.json();
      setCompanies(data);
      // console.log(companies)
    } catch (error) {
      console.error("Error al obtener las compañías:", error);
    }
  };
  async function getBanners(){
    try {
      const response = await fetch(url_base+"/api/get-banners/");
      const data = await response.json();
      setBanners(data);
      // console.log(banners)
    } catch (error) {
      console.error("Error al obtener las compañías:", error);
    }
  };
  async function getCategories(){
    try {
      const response = await fetch(url_base+"/api/get-categories/");
      const data = await response.json();
      setCategories(data);
      // console.log(categories)
    } catch (error) {
      console.error("Error al obtener las compañías:", error);
    }
  };
  async function getTravels(){
    try {
      const response = await fetch(url_base+"/api/get-travels/");
      const data = await response.json();
      setTravels(data);
      // console.log(travels)
    } catch (error) {
      console.error("Error al obtener las compañías:", error);
    }
  };
  async function getCustomerExperiences(){
    try {
      const response = await fetch(url_base+"/api/get-customer_experiences/");
      const data = await response.json();
      setExperiences(data);
      // console.log(experiences)
    } catch (error) {
      console.error("Error al obtener las compañías:", error);
    }
  };
  async function getBlogs(){
    try {
      const response = await fetch(url_base+"/api/get-blogs/");
      const data = await response.json();
      setBlogs(data);
      console.log(blogs)
    } catch (error) {
      console.error("Error al obtener las compañías:", error);
    }
  };

  return (
    <>
      <section id="header">
        {banners.length > 0 && (
          <>
            <img src={banners[0].image} alt="header" />
            <header>
            {companies.map((companie, index) => (
              <img src={companie.logo} alt="logo" />
            ))}
              <div>
                <a href="#">Inicio</a>
                <a href="#">Noticias</a>
                <a href="#">Viajes</a>
                <a href="#">Blogs</a>
                <a href="#">Contacto</a>
              </div>
            </header>
            <div>
              <h1>{banners[0].title}</h1>
              <p>EXPERIENCE</p>
              <div>
                {categories.map((category, index) => (
                  <img key={index} src={category.image_banner} alt={category.name} />
                ))}
              </div>
              <div>
                {categories.map((category, index) => (
                  <span key={index}>{category.name}</span>
                ))}
              </div>
            </div>
          </>
        )}
      </section>

      <section id='nosotros'> 
        {companies.length > 0 && (
          <section id="nosotros">
            <h1>Nosotros</h1>
            <p>{companies[0].description}</p>

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
            {travels.map((travel, index) => (
              <div key={index} className="card">
                <img src={travel.image_cover} alt={travel.title} />
                <span className="tag" style={{ backgroundColor: travel.status.color }}>
                  {travel.status.title}
                </span>
                <h2>{travel.title}</h2>
                <p>
                  {new Date(travel.date_start).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "long",
                  })}{" "}
                  -{" "}
                  {new Date(travel.date_end).toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "long",
                  })}{" "}
                  | Desde {travel.cost.toLocaleString("en-US")} USD
                </p>
                <p>{travel.description}</p>
                <button>
                  <a href={travel.url_front}>Más Información</a>
                </button>
              </div>
            ))}
          </div>
          <button className="next">&#10095;</button>
        </div>
      </section>

      <section className="experiencias-personalizadas">
        {experiences.length > 0 && (
          <>
            <h1>{experiences[0].title}</h1>
            <div className="contenedor">
              <img src={experiences[0].image} alt="Experiencia personalizada" />
              <div className="info">
                <h2>{experiences[0].description}</h2>
                <p>{experiences[0].diference_description}</p>
                <button>COTIZAR MI VIAJE</button>
              </div>
            </div>
          </>
        )}
      </section>

      <section className="blogs">
        <h2>BLOGS</h2>
        <div className="blogs-container">
          {blogs.length > 0 && (
            <>
              <div className="blog-item large">
                <img src={blogs[0].image_cover} alt="Imagen Blog 1" />
                <h3>{blogs[0].title}</h3>
                <p>{blogs[0].description.substring(0, 120)}...</p>
                <a href={blogs[0].url_front}>LEER MÁS</a>
              </div>
              {blogs.slice(1, 3).map((blog, index) => (
                <div key={index} className="blog-item">
                  <img src={blog.image_content} alt={`Imagen Blog ${index + 2}`} />
                  <h3>{blog.title}</h3>
                  <a href={blog.url_front}>LEER MÁS</a>
                </div>
              ))}
            </>
          )}
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
          {companies.map((companie, index) => (
            <img src={companie.logo} alt="logo" />
          ))}
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
