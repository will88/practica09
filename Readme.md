Práctica #9
=========== 

Tic Tac Toe usando Ajax
-----------------------

Autor: Diego Williams Aguilar Montaño

Descripción de la práctica
--------------------------
Esta práctica sigue como continuación de la práctica "[TicTacToe usando DataMapper](http://nereida.deioc.ull.es/~lpp/perlexamples/node443)" en la que la página no se recarga cada vez que el jugador hace click en una de las casillas. El código Javascript se encargará de que el navegador envíe la jugada elegida por el usuario "b2". Si la jugada es correcta (la casilla b2 no está ocupada) el servidor retornará al navegador la información necesaria para que pueda proceder a mostrar los movimientos elegidos por el jugador y el computador. En caso contrario el servidor envía un código de jugada ilegal. El código javascript es el que modifica la clase de la casilla a cross o circle de manera adecuada.

Enlace aplicación en Heroku
---------------------------
[piedrapapelotijera.herokuapp.com](http://piedrapapelotijera.herokuapp.com/)

Instrucciones
-------------

1. Realizar un bundle install para instalar las gemas requeridas:

        $ bundle install

2. Arrancar el servidor mediante el archivo rake proporcionado:

        $ rake
3. El servidor arrancará.  
4. Ahora visitamos la página [http://localhost:4567](http://localhost:4567) en el navegador preferido para jugar en la App.  




---

Universidad de La Laguna  
Escuela Técnica Superior de Ingeniería Informática  
Sistemas y Tecnologías Web 2013-14