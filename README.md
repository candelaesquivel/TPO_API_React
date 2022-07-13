
# TPO_API - Food Web page
# Tabla de Contenidos
1. [Introducción](#Introducción)
2. [Requerimientos](#Requerimientos)
3. [Instalación](#Instalación)
4. [Documentación](#Documentación)
5. [Equipo de Trabajo](#EquipodeTrabajo)
6. [Conclusión](#Conclusión)

## Introducción
Este proyecto es una página web de recetas llamada *“Food Recipes”*. En la pagina web se podrán observar distintos platos de comida y bebidas con la explicación de como cocinarlas, que ingredientes son requeridos y una calificación que es en base a la votación de los usuarios. Estando registrado se pueden subir recetas y calificar la de los demás.
Esta página web se realizó con fines educativos para la materia API .

## Requerimientos

Lenguajes y librerías utilizadas en el frontend: HTML/CSS, React, JavaScript y NodeJS.

Lenguajes y librerías utilizadas en el backend: JavaScript , NodeJS y Mongoose.

Base de datos: NO SQL (MongoDB).

Sistema Operativo :  Microsoft Windows (si se usa Mac OS o Linux los comandos seran diferentes)

## Instalación
 Instrucciones de instalación frontend
```console
$ npm install
```
```console
$ npm start
```
Si todo se ejecuto correctamente deberas ser redirigido a la pagina principal de Food Web Page 
img

Instrucciones de instalación backend
```console
$ npm install -g nodemon
```
```console
$ nodemon app.js
```
Si todo se conecto exitosamente aparecera esto en la terminal 

<img width="752" alt="image" src="https://user-images.githubusercontent.com/80803466/178825049-e2f3a632-ee49-4965-94a3-3a53142bc98e.png">

Archivo env.

<img width="215" alt="image" src="https://user-images.githubusercontent.com/80803466/178826725-6aaf2f85-7dc9-4a85-a32e-2c2994a52bee.png">

## Documentación
Diagrama de relaciones de la base de datos 
```mermaid
graph TD;
client-->user_profile;
client-->user_recipes;
client-->user_califycation;
```
Diagrama de clases
```mermaid
classDiagram
 class User {
    -name: String,
    -lastName:String,
    -email: String,
    -password: String,
    -phone:String,
    -securityQ:String,
    -answer: String
  }
  class Recipe {
  idRecipe: Number,
    -name: String,
    -ingredients: Array,
    -categories: Array,
    -difficulty: Number,
    -process : String,
    -averageMark: Number,
    -countMark: Number,
    -photo: String,
    -publicationStatus : Boolean,
    -userEmail: String 
    }
    class CalificationUser {
    -email: String,
    -calification: Number,
    -idRecipe: Number
    }
    
 User "1" --> "*" Recipe
 User "1" --> "*" CalificationUser
 CalificationUser "1" --> "1" Recipe
```


## Equipo de Trabajo
Antonio Berti

Candela Esquivel

## Conclusión




