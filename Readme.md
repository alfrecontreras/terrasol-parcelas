# Terrasol Parcelas

Landing page para Terrasol Parcelas, una empresa que ofrece la venta de parcelas de 5000 metros cuadrados en la zona centro sur de Chile. Esta landing page proporciona información sobre las parcelas disponibles, testimonios de clientes, y un formulario de contacto.

## Estructura del Proyecto


/project-root
|-- /dist
|   |-- index.html
|
|-- /src
|   |-- /components
|   |   |-- ServiceCard.js
|   |   |-- TestimonialCarousel.js
|   |   |-- ContactForm.js
|   |-- /scripts
|   |   |-- main.js
|   |   |-- service.js
|   |   |-- carousel.js
|   |   |-- form.js
|   |-- /styles
|   |   |-- main.css
|   |-- /endpoints
|   |   |-- InfoContactoEndpoint.php
|   |   |-- HistoriaEndpoint.php
|   |   |-- PreguntaFrecuenteEndpoint.php
|   |   |-- ParcelaEndpoint.php
|   |-- App.js
|   |-- index.js
|   |-- swagger.php
|
|-- swagger.json
|-- package.json
|-- webpack.config.js
|-- README.md


## Instalación

1. Clonar el repositorio:
    ```sh
    git clone https://github.com/tu-usuario/terrasol-parcelas.git
    ```

2. Navegar al directorio del proyecto:
    ```sh
    cd terrasol-parcelas
    ```

3. Instalar las dependencias:
    ```sh
    npm install
    ```

## Desarrollo

Para iniciar el servidor de desarrollo:
```sh
npm start

npm run build


### Swagger Integration

### Setting up Swagger UI

1. **Install dependencies:**

   ```bash
   composer require zircote/swagger-php

php swagger.php > swagger.json


### Verifica la Integración

Después de subir los cambios, asegúrate de que los archivos necesarios para Swagger están en el repositorio y que puedes acceder a la documentación de tu API desde `swagger-ui/index.html`.

Si sigues estos pasos, deberías poder actualizar tu proyecto en GitHub con la integración de Swagger y los cambios en la estructura del proyecto.