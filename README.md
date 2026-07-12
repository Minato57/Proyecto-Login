# Proyecto Login

Este es un proyecto de una interfaz de inicio de sesión (Login) construida con HTML, CSS y JavaScript. Maneja múltiples flujos de usuario simulados, como el inicio de sesión, creación de cuenta y recuperación de contraseña, todo dentro de la misma vista de manera fluida.

## Características Principales

- **Diseño Responsivo:** Se adapta a diferentes tamaños de pantalla (móvil, tablet y escritorio).
- **Interfaz de Usuario Atractiva:** Utiliza un fondo de pantalla (background image) y un efecto de desenfoque (`backdrop-filter`) para el contenedor del formulario.
- **Transiciones y Animaciones:** Campos de texto con etiquetas flotantes animadas al hacer foco.
- **Múltiples Flujos de Usuario:**
  - Iniciar Sesión.
  - Crear Nueva Cuenta.
  - Recuperar Contraseña (simulación de envío de correo y verificación de código).
- **Funcionalidad "Acuérdate de mí":** Guarda **únicamente** el correo electrónico en el almacenamiento local del navegador (`localStorage`) para futuras visitas. Por seguridad, no almacena contraseñas.
- **Mostrar/Ocultar Contraseña:** Permite visualizar la contraseña escrita a través de un ícono manejado de manera accesible para todos los usuarios.
- **Validación Básica:** Comprueba el formato de correo electrónico mediante expresiones regulares antes de avanzar entre los flujos.

## Tecnologías y Estructura

El proyecto está diseñado siguiendo las mejores prácticas de separación de código (Separation of Concerns):

- **`index.html`:** Contiene toda la estructura semántica y de accesibilidad de la página.
- **`styles.css`:** Contiene los estilos, Flexbox para el posicionamiento, media queries para el diseño responsivo y transiciones.
- **`script.js`:** Maneja la lógica interna de la vista para mostrar y ocultar secciones, validación de inputs y manejo seguro del `localStorage`.

## Cómo Ejecutarlo

Al ser un proyecto estático (Vanilla), no requiere un servidor o entorno de desarrollo especial.

1. Descarga o clona este repositorio/proyecto.
2. Abre el archivo `index.html` en tu navegador web de preferencia (Chrome, Firefox, Edge, Safari, etc.).

## Historial de Mejoras

- Se extrajo el código CSS y JavaScript a archivos separados (`styles.css` y `script.js`) para una mejor escalabilidad y mantenimiento.
- Se mejoró la seguridad del formulario eliminando el guardado de contraseñas en texto plano.
- Se implementaron mejoras de accesibilidad (a11y) en el botón de visibilidad de contraseña.
- Corrección en la alineación del icono de contraseña en los formularios secundarios.
- Corrección de errores ortográficos en la vista principal.
