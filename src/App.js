import { useEffect, useState } from "react";
import './App.css';

function App() {
  
  const url_base = "https://api.test.interactiva.net.co";
  // Espacio para almacenar datos de la API
  const [companies, setCompanies] = useState([]);
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [travels, setTravels] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [partners, setPartners] = useState([]);
  
  // Espacio para almacenar datos de los formularios
  const [travel, setTravel] = useState("");
  const [taggs, setTaggs] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [numberChildren, setNumberChildren] = useState(0);
  const [numberAdults, setNumberAdults] = useState(1);
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getCompanies();
    getBanners();
    getCategories();
    getTravels();
    getCustomerExperiences();
    getBlogs();
    getTags();
    getPartners();

    // mostrarAPIS(); muestra los datos de las apis
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

  // consumo API's GET
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
      // console.log(blogs)
    } catch (error) {
      console.error("Error al obtener las compañías:", error);
    }
  };
  async function getTags(){
    try {
      const response = await fetch(url_base+"/api/get-tags/");
      const data = await response.json();
      setTags(data);
      // console.log(tags)
    } catch (error) {
      console.error("Error al obtener las compañías:", error);
    }
  };
  async function getPartners(){
    try {
      const response = await fetch(url_base+"/api/get-partners/");
      const data = await response.json();
      setPartners(data);
      // console.log(partners)
    } catch (error) {
      console.error("Error al obtener las compañías:", error);
    }
  };

  // uso de API POST
  async function postQuotations(event) {
    event.preventDefault();
    if (!travel || taggs.length === 0 || !dateStart || !dateEnd || !description) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }
    const requestData = {
      travel: parseInt(travel), 
      tags: parseInt(taggs), 
      date_start: dateStart,
      date_end: dateEnd,
      number_children: parseInt(numberChildren),
      number_adults: parseInt(numberAdults),
      description,
    }; 
    // alert("Datos enviados:\n" + JSON.stringify(requestData, null, 2)); Mostrar datos en un alert antes de enviar
    try {
      const response = await fetch(url_base + "/api/set-quotations/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });
      const responseData = await response.json(); 
      alert(`Estado: ${response.status}\n${responseData.message || "Solicitud completada."}`);
      if (response.ok) {
        setTravel("");
        setTaggs("");  
        setDateStart("");
        setDateEnd("");
        setNumberChildren(0);
        setNumberAdults(1);
        setDescription("");
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Ocurrió un error inesperado, intenta nuevamente.");
    }
  };
  async function postNewsletter() {
    if (!email) {
      alert("Por favor, ingresa un correo válido.");
      return;
    }
    try {
      const response = await fetch(url_base+"/api/set-newsletter/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        alert("¡Suscripción exitosa! ✅");
        setEmail(""); 
      } else {
        alert("Error en la suscripción ❌, código: " + response.status);
      }
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert("Ocurrió un error, intenta nuevamente.");
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
        <p>Una vez llenado este formulario, uno de nuestros planners travelers se pondrá en contacto contigo.</p>

        <form className="form-container" onSubmit={postQuotations}>
          <div className='group-inputs'>
            <div className="input-group">
              <label>¿CUÁL ES EL DESTINO QUE QUIERES VISITAR?</label>
              <select value={travel} onChange={(e) => setTravel(e.target.value)}>
                <option value="">Selecciona un destino</option>
                {travels.map((travel) => (
                  <option key={travel.id} value={travel.id}>
                    {travel.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label>¿QUÉ OTRO DESTINO TIENES EN MENTE?</label>
              <select value={taggs} onChange={(e) => setTaggs(e.target.value)}>
                <option value="">Selecciona un destino</option>
                {tags.map((tag) => (
                  <option key={tag.id} value={tag.id}>
                    {tag.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="experiencias_2">
            <label>¿QUÉ EXPERIENCIAS QUIERES VIVIR?</label>
            <div className="experiencia-buttons">
              {tags.map((tag) => (
                <button key={tag.id} type="button" onClick={() => setTags([...tags, tag])}>
                  {tag.name}
                </button>
              ))}
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
              <input type="date" value={dateStart} onChange={(e) => setDateStart(e.target.value)} />
            </label>
            <label> REGRESO
              <input type="date" value={dateEnd} onChange={(e) => setDateEnd(e.target.value)} />
            </label>
          </div>

          <div className="pasajeros">
            <label>NIÑOS:</label>
            <select value={numberChildren} onChange={(e) => setNumberChildren(e.target.value)}>
              {[...Array(10).keys()].map(num => <option key={num} value={num}>{num}</option>)}
            </select>
            <label>ADULTOS:</label>
            <select value={numberAdults} onChange={(e) => setNumberAdults(e.target.value)}>
              {[...Array(10).keys()].map(num => <option key={num} value={num + 1}>{num + 1}</option>)}
            </select>
          </div>

          <div className="textarea-group">
            <label>TU VIAJE IDEAL...</label>
            <textarea placeholder="Describe tu viaje ideal" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          <button type="submit" className="btn-enviar">ENVIAR</button>
        </form>
      </section>

      <div className="alianzas-container">
        <h2>ALIANZAS ESTRATÉGICAS</h2>
        <div className="alianzas-logos">
          {partners.map((partner) => (
            <img key={partner.id} src={partner.logo} alt={`Partner ${partner.name}`}/>
          ))}
        </div>
        <div className="whatsapp-icon">
          <img src="/media/logo_WA.png" alt="WhatsApp"/>
        </div>
      </div>

      <section className="newsletter-container">
        <p>Suscríbete a nuestro newsletter y recibe noticias, descuentos y más</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <button onClick={postNewsletter}>SUSCRIBIRME</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer_logos">
          {companies.map((companie, index) => (
            <img src={companie.logo} alt="logo" />
          ))}
          <img src="/media/logos_redes.png" alt="Facebook" className="redes" />
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
            <img src="/media/icono_mail.png" alt="Email"/>
            <span>info@allintravels.com</span>
          </div>
          <div>
            <img src="/media/icono_telefono.png" alt="Teléfono"/>
            <span>+0057 (604) 444 45 83</span>
          </div>
          <div>
            <img src="/media/icono_ubicacion.png" alt="Ubicación"/>
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
