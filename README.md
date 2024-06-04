<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar el comando
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar el proyecto de forma local con el comando
```
yarn start:dev
```
5. Levantar la base de datos
```
docker-compose up -d
```
6. Ejecutar el seed para prellenar la base de datos con el comando
```
localhost:3000/api/v2/seed
```
7. La consulta a los endpoints solo se hace con el metodo, no se necesita modificar la URL. 

## Stack usado
* MongoDB
* Nest




NaN. Levantar el proyecto en producción con
```
yarn start:prod
```