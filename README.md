##### septiembre 2022
# TP2 - React App (Skill Factory by AVALITH.)

> El objetivo principal de este Challenge consistió en pasar una pagina clásica de HTML, CSS y JavaScript a un proyecto de React. La idea general es crear múltiples componentes, con distintos grados de dificultad, he ir renderizando cada uno con la implementación de nuevas dependencias. Con lo cual, podrán encontrar dentro del package.json librerías como:
- React - Hook - Form
- Axios
- React - Router - Dom
- Typewriter-effect
- Moment


## Primeros pasos con Create React App

Es importante destacar que este proyecto se inició con [Create React App](https://github.com/facebook/create-react-app).

## Preparación del entorno

Descargue el proyecto desde mi repositorio de  [Github](https://github.com/SebaDAlessandro/tp1-skillfactory-react).

- 1: Sobre la lista de archivos, haga clic en **Código**.

![foto: lista de archivos](https://docs.github.com/assets/cb-20363/images/help/repository/code-button.png)

- 2: Método HTTPS: Dentro de las opciones seleccione el **Icono de Copiar Enlace**.

![foto: icono de enlace](https://docs.github.com/assets/cb-33207/images/help/repository/https-url-clone-cli.png)

*Para otras opciones de clonación diríjase al siguiente enlace [cloando repositorios](https://docs.github.com/es/repositories/creating-and-managing-repositories/cloning-a-repository)*.

- 3: Utilizando la terminal, ejecute los siguientes comandos:

```sh
cd [carperta-destino]
$ git clone [URL copiada]
```

## Instalación de dependencias

Este proyecto requiere [mpm.js](https://www.npmjs.com/) para funcionar.

Instale las dependencias y ejecute el servidor.

```sh
cd [carperta-clonada]
$ npm i
$ npm start
```

**_IMPORTANTE:_** *el programa se ejecutará en el navegador que tenga por defecto e intentará utilizar como base el puerto 3000.*

## Objetivos del proyecto

- **Desarrollar un sitio que contenga las siguientes características**
    - Pagina principal (home) que contenga 3 enlaces:
    - 1er enlace: un "Formulario de Contacto".
    - 2do enlace: generar un cuadro con información de clientes el cual se obtiene tras realizar una petición a la API **[{JSON} Placeholder](https://jsonplaceholder.typicode.com/users)**
    - 3er enlace: generar un dashboard con los personajes de Rick & Morty los cuales se obtienen de realizar un llamado a la API **[https://rickandmortyapi.com/](https://rickandmortyapi.com/api/character)**
    - Sobre este último se debe poder acceder al detalle de cada personaje haciendo click en cada tarjeta.
- **Se debe mantener un maquetado correcto en todo momento**
- **Estilos de CSS libres**
- **Debe poder renderizarse en otros dispositivos**

## Particularidad

Es importante destacar que parte del trabajo se realizó en equipo pero nuestra metodología se basó en generar espacios de consultas sobre funcionalidades unicamente. Después cada uno le brindó a su proyecto el maquetado y el estilo que consideró adecuado.

#### Los cracks con lo que forme equipo:
- **[Javier Huebra](https://www.linkedin.com/in/javieremanuelhuebra/)**
- **[Matias Spirilis](https://www.linkedin.com/in/matias-spirilis/)**
- **[Rolando Duarte](https://www.linkedin.com/in/rolando-ramon-duarte-93116b17a/)**
- **[Sebastián D'Alessandro](https://www.linkedin.com/in/sebadalessandro/)**

## Agradecimientos

En general: a todo el equipo de **AVALITH** por impulsar el programa **Skill Factoy de React** 100% remoto y gratuito que nos permite seguir creciendo bit a bit en este hermoso mundo IT.
En particular al grupo de genios con lo que me tocó hacer este proyecto y por último, pero no menos importante, a nuestro sensei **Fabián Tureo** quien muestra un entusiasmo superlativo y se brinda en cada encuentro de la mejor manera.

**VAMOS POR MAS!!!**
