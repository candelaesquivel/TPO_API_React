
# TPO_API - Food Recipes

# Tabla de Contenidos
1. [Introducción](#Introducción)
2. [Requerimientos](#Requerimientos)
3. [Instalación](#Instalación)
4. [Funcionalidades](#Funcionalidades)
5. [Documentación](#Documentación)
6. [Equipo de Trabajo](#EquipodeTrabajo)


## Introducción
Este proyecto es una página web de recetas llamada *“Food Recipes”*. En la pagina web se podrán observar distintos platos de comida y bebidas con la explicación de como cocinarlas, que ingredientes son requeridos y una calificación que es en base a la votación de los usuarios. Estando registrado se pueden subir recetas y calificar la de los demás.
Esta página web se realizó con fines educativos para la materia API .

## Requerimientos

Lenguajes y librerías utilizadas en el frontend: HTML/CSS, React, JavaScript y NodeJS.

Lenguajes y librerías utilizadas en el backend: JavaScript , NodeJS y Mongoose.

Base de datos: NO SQL (MongoDB).

Link para descargarse Node.js : https://nodejs.org/es/


## Instalación
 Instrucciones de instalación frontend
```console
$ npm install
```
```console
$ npm start
```
Si todo se ejecuto correctamente deberas ser redirigido a la pagina principal de Food Recipes

<img width="897" alt="image" src="https://user-images.githubusercontent.com/80803466/178839520-8a23f9fe-2399-4479-94bf-776abe9c8e1e.png">


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

## Funcionalidades

En la página principal se pueden ver todas las recetas de los usuarios. Si la persona desea buscar recetas especificas puede usar el buscador el cual posee los campos para completar nombre , ingredientes ( que se deben separar por comas en caso de poner más de uno ), categorías de las cuales solo puede seleccionar entre 10 y por último la dificultad que va del 1 al 5.

<img width="898" alt="image" src="https://user-images.githubusercontent.com/80803466/178844622-6b72da76-697a-455d-9911-e19cc94dbce9.png">

Dentro del header el usuario puede seleccionar:

-"Sobre nosotros " y será redirigido a una página que explicará detalles sobre Food recipes.

<img width="896" alt="image" src="https://user-images.githubusercontent.com/80803466/178845335-46958e00-8a4a-4f97-b593-8b253d70d308.png">

-"Conectarse" y será redirigido a una página para poder hacer log in.

<img width="901" alt="image" src="https://user-images.githubusercontent.com/80803466/178845551-210e8497-7515-4fed-a19a-5b67a7d9a6e4.png">

-"Registrarse" y será redirigido a una página para poder registrarse como nuevo usuario.

<img width="886" alt="image" src="https://user-images.githubusercontent.com/80803466/178845593-23c63087-8e6f-4e03-8e26-55687bb504b1.png">

Dentro de cada receta esta la opción de "leer más" , eso redirigirá a la persona a una pantalla donde podrá observar los detalles de la receta y si esta logeado podra calificarla.

![image](https://user-images.githubusercontent.com/80803466/178845940-2fda5ecf-fffb-4600-aa1d-e5ef554b50bd.png)

<img width="456" alt="image" src="https://user-images.githubusercontent.com/80803466/178846573-aa71f896-cb85-49f6-aa6f-8e6ddeed3fa0.png">

Si al intentar hacer log in no recuerda su contraseña, puede seleccionar la opción de "olvide contraseña" y será redirigido a la página de recuperar contraseña. En la misma se le pedirá su email y se buscara si es un usuario registrado para mostrarle la pregunta de seguridad que agrego cuando creo su cuenta, usted deberá contestar la respuesta y de ser correcta será redirigido a una página donde podrá recuperar su contraseña.

![image](https://user-images.githubusercontent.com/80803466/178847088-b37c07fe-7412-44a4-9ca3-ab9bb5449024.png)
<img width="420" alt="image" src="https://user-images.githubusercontent.com/80803466/178847852-b8c2d0c8-767c-49c6-8640-204ff1349060.png">

<img width="507" alt="image" src="https://user-images.githubusercontent.com/80803466/178847795-df7b2f13-4468-48e1-8d02-e017186fdcda.png">




## Documentación

Diagrama de estructura de la base de datos MongoDB

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
    -idRecipe: Number,
     -calification: Number
    }
    
 User "1" *-- "0..n" Recipe : email
 User "1" *-- "0..n" CalificationUser : email
 CalificationUser "0..n" *-- "1" Recipe : idRecipe
```
Estados de response del backend hacia el frontend

-Status 400 : Error

-Status 201: Todo se ejecuto correctamente

Codigos de error 

                                             ERROR_PASSWORD_NOT_VALID    : 1,
                                             ERROR_MAIL_NOT_ASSOCIATED   : 2,
                                             ERROR_SECURITY_ANSWER_WRONG : 3,
                                             ERROR_MAIL_IN_USE           : 4,
                                             ERROR_IN_DB_OPERATION       : 5,
                                             ERROR_RECIPE_NOT_FOUND      : 6,
                                             ERROR_RECIPE_ID_IN_USE      : 7,
                                             ERROR_DUPLICATE_CALIFY      : 8

Autenticación por token , libreria usada : JSON Web Token (JWT).  

Documentacion de las peticiones : https://documenter.getpostman.com/view/21197481/UzQuN4zt


## Equipo de Trabajo
Antonio Berti

Candela Esquivel






