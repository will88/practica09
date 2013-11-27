Práctica #9
=========== 

Tic Tac Toe con Ajax
--------------------

Autor: Diego Williams Aguilar Montaño

Descripción de la práctica
--------------------------
Esta práctica sigue como continuación de la práctica "[Añadir Pruebas a Rock, Paper, Scissors](https://dl.dropboxusercontent.com/u/14539152/LPP/LPPbook/node379.html)" donde se realiza el despliegue en Heroku, para ello se ha creado una cuenta en Heroku y a continuación se ha instalado el Heroku Toolbelt. Una vez se han introducido las Heroku credenciales se ha creado el fichero Procfile para declarar explícitamente qué comando se debe ejecutar para iniciar una web dinámica, por último se ha creado la aplicación en Heroku con `heroku create` y desplegado a Heroku con `git push heroku master`.

Enlace aplicación en Heroku
---------------------------
[piedrapapelotijera.herokuapp.com](http://piedrapapelotijera.herokuapp.com/)

Instrucciones
-------------

1. Realizar un bundle install para instalar las gemas requeridas del fichero gemset proporcionado:

        $ bundle install

2. Arrancar el servidor mediante el archivo rake proporcionado:

        $ rake
3. El servidor arrancará.  
4. Ahora visitamos la página [http://localhost:9292](http://localhost:9292) en el navegador preferido para jugar en la App.  
5. Para realizar los test con pruebas unitarias ejecutar mediante el archivo rake proporcionado:

        $ rake test
6. Para realizar los test con Rspec ejecutar mediante el archivo rake proporcionado:

        $ rake spec
7. Para realizar los test con Rspec con salida formato html ejecutar mediante el archivo rake proporcionado:

        $ rake thtml



---

Universidad de La Laguna  
Escuela Técnica Superior de Ingeniería Informática  
Sistemas y Tecnologías Web 2013-14