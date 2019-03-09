Buscaminas con Jquery
----

Para jugar [Buscaminas con jQuery](https://javigon258.github.io/Tema%206/jQueryV2Buscaminas/)

**********

1. Seleccionar el nivel

## Tienes la opcion de elegir la dificultad del Buscaminas

**********

2. A la hora de jugar, hay tres opciones diferentes:


## Con el boton izquierdo
[Como se hace el picar](https://github.com/javigon258/javigon258.github.io/blob/master/Tema%206/jQueryV2Buscaminas/js/jQueryTablero.js#L57).  Picas, y te desvalan las casillas.


## Con el boton derecho 

[Como marcar banderas](https://github.com/javigon258/javigon258.github.io/blob/master/Tema%206/jQueryV2Buscaminas/js/jQueryTablero.js#L84). Marcas con banderas las posibles minas.


## Y con los dos botones a la vez

[Como despejar](https://github.com/javigon258/javigon258.github.io/blob/master/Tema%206/jQueryV2Buscaminas/js/jQueryTablero.js#L101).
Consigues despejar casillas mas rapido, si no hubiese minas alrededor, y hubiese minas cercanas aparecerian y desaparecerian donde pueden estar la minas.
**********

3. Y pierdes si pulsas alguna casilla que tenga una mina o ganas si consigues despejar todo el tablero.
----
4. Efectos:
### A la hora de despejar hago uso de efectos jquery, fadein y fade out para marcar las posibles minas.
[Efecto mina cercana](https://github.com/javigon258/javigon258.github.io/blob/master/Tema%206/jQueryV2Buscaminas/js/jQueryTablero.js#L108)

### Y cuando pierde o gana muestra un cartel que de arriba a abajo
[Cartel de derrota](https://github.com/javigon258/javigon258.github.io/blob/master/Tema%206/jQueryV2Buscaminas/js/jQueryTablero.js#L67)
#### <img src="image/perder.jpg">

[Cartel de victoria](.com/javigon258/javigon258.github.io/blob/master/Tema%206/jQueryV2Buscaminas/js/jQueryTablero.js#L118)
#### <img src="image/ganar.jpg">
