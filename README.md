
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
Diagrama de relaciones
```mermaid
flowchart LR
   User == email ==> Recipe
   User == email ==> CalifycationUser
   Recipe == idRecipe ==> CalifycationUser
   
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
    -idRecipe: Number,
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
    
 User "1" --> "0..n" Recipe
 User "1" --> "0..n" CalificationUser
 CalificationUser "1" --> "1" Recipe
```
Estados de response del backend hacia el frontend

-Status 400 : Error
-Status 201: Todo se ejecuto correctamente

Codigos de error 

<img width="208" alt="image" src="https://user-images.githubusercontent.com/80803466/178833275-b1031232-6a59-4ca9-9896-483fc33e9597.png">

Autenticación por token

Libreria usada : JSON Web Token (JWT)       

Se pedira en las siguientes peticiones :

-Actualizar información del usuario
-Actualizar información de la receta
-Obtener recetas del usuario
-Eliminar una receta
-Crear una receta
-Calificar una receta

Endpoints
<img width="210" alt="image" src="https://user-images.githubusercontent.com/80803466/178838163-7be452b0-5be5-4df5-906d-7b43261d8844.png">



## Equipo de Trabajo
Antonio Berti

Candela Esquivel

## Conclusión




