# Proyecto Login

Este es un proyecto de una interfaz de inicio de sesión (Login) construida con HTML, CSS y JavaScript. Consiste en una única página que maneja múltiples flujos de usuario simulados, como el inicio de sesión, creación de cuenta y recuperación de contraseña.

## Características

- **Diseño Responsivo:** Se adapta a diferentes tamaños de pantalla (móvil, tablet y escritorio).
- **Interfaz de Usuario Atractiva:** Utiliza un fondo de pantalla (background image) y un efecto de desenfoque (`backdrop-filter`) para el contenedor del formulario.
- **Transiciones y Animaciones:** Campos de texto con etiquetas flotantes animadas al hacer foco.
- **Múltiples Flujos de Usuario:**
  - Iniciar Sesión.
  - Crear Nueva Cuenta.
  - Recuperar Contraseña (simulación de envío de correo y verificación de código).
- **Funcionalidad "Acuérdate de mí":** Guarda el correo electrónico en el almacenamiento local del navegador (`localStorage`) para futuras visitas.
- **Mostrar/Ocultar Contraseña:** Permite visualizar la contraseña escrita a través de un ícono de ojo.
- **Validación Básica:** Comprueba el formato de correo electrónico mediante expresiones regulares antes de avanzar entre los flujos.

## Tecnologías Utilizadas

- **HTML5:** Estructura semántica de la página.
- **CSS3:** Estilos aplicados de manera interna, utilizando Flexbox para el posicionamiento, media queries para el diseño responsivo y pseudo-elementos.
- **JavaScript (Vanilla):** Lógica interna de la vista para mostrar y ocultar secciones, validación de inputs y manejo del `localStorage`.

## Cómo Ejecutarlo

Al ser un proyecto estático, no requiere un servidor o entorno de desarrollo especial.

1. Descarga o clona este repositorio/proyecto.
2. Abre el archivo `index.html` en tu navegador web de preferencia (Chrome, Firefox, Edge, etc.).

## Notas de Desarrollo

Actualmente, el proyecto concentra el HTML, CSS y JS en un solo archivo. Esto es ideal para una prueba rápida, pero en un entorno de producción o de crecimiento, se recomienda separar estos lenguajes en archivos distintos para un mejor mantenimiento.
