# Sneakers Ecommerce

Bienvenido/a a mi proyecto de ecommerce de zapatillas deportivas construido utilizando React para Coderhouse.

## Introducción

Este ecommerce de zapatillas está diseñado para que los usuarios puedan:

- Navegar por diferentes categorías de zapatillas (Men, Women, Kids y Sales).
- Visualizar los detalles de cada producto.
- Realizar compras de manera sencilla, ingresando sus datos y recibiendo un ID de pedido como confirmación.

## Enfoque y Decisiones de Diseño

### Interfaz de Usuario

La interfaz presenta un modo oscuro con colores llamativos que reflejan la identidad de la marca, haciendo que la página sea visualmente atractiva para los usuarios. Además, la UI está diseñada para ser intuitiva, utilizando componentes de React para construir un sistema modular. Cada componente, desde las tarjetas de productos hasta el carrito de compras, está diseñado para ser reutilizable y fácil de entender.

### Estado Global

React Context se ha usado principalmente para gestionar eficazmente el estado y el contenido del carrito de compras y otros datos compartidos. Esta decisión permite que la información se comparta de manera eficiente entre los diferentes componentes de la aplicación sin tener que pasar props manualmente.

### Enrutamiento

Se ha implementado `react-router-dom` para manejar las rutas de la aplicación. Esto permite una navegación fluida entre las diferentes páginas, como la página de inicio y sus categorías, el carrito o la página de detalles del producto.

## Dependencias

Además de las dependencias estándar de React, se han incluido algunas dependencias adicionales para mejorar la funcionalidad y la experiencia del usuario:

- `clsx`: Utilizado para condicionalmente combinar clases de estilo.
- `firebase`: Utilizado para el almacenamiento de productos y la gestión de órdenes generadas por los usuarios durante las compras.
- `react-router-dom`: Utilizado para manejar el enrutamiento de la aplicación.
- `react-toastify`: Utilizado para mostrar notificaciones al usuario, como confirmaciones de acciones exitosas o eliminación de productos.
- `react-loading`: Utilizado para mostrar indicadores de carga, mejorando la experiencia del usuario durante los tiempos de espera.

### Resumen de Decisiones

1. **`clsx`**: Elegí `clsx` por su simplicidad y eficiencia en la gestión de clases condicionales en los componentes. Esto facilita la asignación dinámica de clases CSS basadas en el estado de los componentes.

2. **`firebase`**: Firebase se seleccionó para manejar el catálogo de productos y la gestión de órdenes de compra. Esto incluye detalles como los productos seleccionados, precios totales, información de los compradores y fechas de transacciones.

3. **`react-toastify`**: Las notificaciones son una parte esencial de la experiencia del usuario en una aplicación de ecommerce. `react-toastify` se eligió por su fácil integración y su capacidad para mostrar notificaciones estilizadas y configurables.

4. **`tailwindcss`**: Tailwind CSS se utilizó para estilizar la aplicación debido a su enfoque basado en utilidades, que permite una personalización rápida y fácil de la UI sin escribir CSS adicional ni clases. Esto hace que el desarrollo sea más rápido y el código más mantenible y entendible.

5. **`react-loading`**: Se utiliza para mostrar indicadores de carga mientras se espera que se completen ciertas acciones, proporcionando así una mejor retroalimentación al usuario. En este caso fue usado para enseñar un loading al usuario durante el tiempo de carga de los productos.

## Instalación

Sigue estos pasos para configurar el proyecto localmente.

1. Clona el repositorio:

    ```bash
    git clone https://github.com/AnaSuarezAlonso/ProyectoFinalReact-SuarezAlonso.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd ProyectoFinalReact-SuarezAlonso
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

## Uso

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

