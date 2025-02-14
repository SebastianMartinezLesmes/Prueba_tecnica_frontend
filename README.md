# Proyecto React - Consumo de API y Formulario de Cotización de Viajes

Este proyecto es una aplicación desarrollada en React que consume diversas APIs para obtener información de empresas, banners, categorías, viajes, experiencias, blogs, etiquetas y socios estratégicos. Además, permite a los usuarios enviar cotizaciones y suscribirse a un boletín informativo.

## Características Principales

- **Consumo de API REST:** Se realizan solicitudes GET y POST a una API externa.
- **Gestión de Estados:** Se utiliza el hook `useState` para manejar la información.
- **Efectos Secundarios:** Se emplea `useEffect` para ejecutar llamadas a la API al cargar la aplicación.
- **Formulario Interactivo:** Permite a los usuarios diseñar su propio viaje con validaciones y envío de datos.
- **Carrusel de Experiencias:** Muestra viajes y experiencias en un formato visual atractivo.
- **Integración con Redes Sociales:** Se visualizan imágenes desde un feed de Instagram.

## Instalación y Ejecución

### Prerrequisitos

Asegúrate de tener instalado Git, Node.js y npm antes de ejecutar la aplicación.

### Pasos de Instalación

1. Clonar el repositorio:
   ```sh
   git clone https://github.com/SebastianMartinezLesmes/Prueba_tecnica_frontend.git
   cd repo
   ```
2. Instalar dependencias:
   ```sh
   npm install
   ```
3. Ejecutar la aplicación:
   ```sh
   npm start
   ```

La aplicación se ejecutará en `http://localhost:3000/` por defecto.

## Estructura del Código

El componente principal `App.js` se encarga de:

- Definir los estados de la aplicación.
- Realizar las llamadas a la API.
- Renderizar la información obtenida.
- Gestionar eventos de formularios.

### Hooks Principales

- **`useState`**: Manejo de estados como `companies`, `banners`, `travels`, `categories`, entre otros.
- **`useEffect`**: Llamadas a la API al montar el componente.

### Funciones de API

- **GET Requests:**
  - `getCompanies()`
  - `getBanners()`
  - `getCategories()`
  - `getTravels()`
  - `getCustomerExperiences()`
  - `getBlogs()`
  - `getTags()`
  - `getPartners()`

- **POST Requests:**
  - `postQuotations(event)`: Envía información del formulario de cotización.
  - `postNewsletter()`: Permite la suscripción a un boletín informativo.

## Uso de la Aplicación

### Secciones Destacadas

1. **Encabezado:** Muestra la imagen principal y el logo de la empresa.
2. **Nosotros:** Información sobre la empresa y galería de imágenes.
3. **Experiencias Grupales:** Listado de viajes y su información.
4. **Formulario de Cotización:** Permite a los usuarios personalizar su viaje.
5. **Blogs:** Últimas noticias y artículos.
6. **Alianzas Estratégicas:** Empresas asociadas con la plataforma.
7. **Newsletter:** Formulario de suscripción por correo electrónico.
8. **Pie de Página:** Información de contacto y enlaces.

## Tecnologías Utilizadas

- **React.js**
- **CSS** (Diseño y estilos visuales)
- **Fetch API** (Consumo de APIs REST)

## Mejoras Futuras

- Implementación de `useContext` para una mejor gestión del estado global.
- Optimización de las llamadas a la API para reducir solicitudes innecesarias.
- Integración con una base de datos para almacenamiento persistente.

## Contacto

Si tienes preguntas o deseas contribuir, puedes contactarme en [Email](20rasputin03@gmail.com).

