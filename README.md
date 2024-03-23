+ Explique los arreglos en JavaScript\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En JavaScript un arreglo puede ser declarado listando múltiples valores separados por comas dentro de llaves (ejemplo: {1,2,3,5}). Esta declaración se puede utilizar para asignarse a una variable, mandarla como argumento o ser iterada.
+ Explique el almacenamiento del navegador (sessionStorage y localStorage) indique ventajas y desventajas, capacidad de almacenamiento y como accederlo utilizando java script (como almacenar, recuperar y eliminar datos)\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El almacenamiento del navegador permite guardar en la computadora datos temporales o permanentes para ser utilizados en nuestra página. Esto se trabaja bajo tuplas donde cada dato tiene una llave o identificador y un valor. En estos podemos almacenar datos que nos ayudan
  con el funcionamiento de la página.\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SessionStorage indica que los datos existiran únicamente durante la sesión de la página y al recargar o salir de la página estos datos dejaran de existir y existen únicamente para la ventana o pestaña en uso. Por otra parte, localStorage nos permite tener datos persistentes que en el caso de Windows se almacenaran en la carpeta correspondiente del navegador en *AppData* y permitira accesarlos sin importar si se sale o refresca la página hasta ser borrados.\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hacer uso de este almacenamiento puede evitar la necesidad de almacenar datos en un servidor si no son datos cruciales o si la página es local. Tambien esto permite cargar datos desde la misma computadora y no cargarlos desde el servidor cada vez, esto reduce la carga al servidor y agiliza la carga de la página.\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por otra parte esto puede causar que la información que se cargue en la página no siempre sea la más actual. Además esto puede representar un riesgo de seguridad ya que estos datos pueden ser decriptados o duplicados.\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para recuperar información de alguno de ellos es necesario acceder con *localStorage.getItem("envios")* siendo *envios* el nombre de la llave a la que queremos acceder.\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Para guardar información de alguno de ellos es necesario acceder con *localStorage.setItem("envios", "valor")* siendo *envios* el nombre de la llave que queremos almacenar y *valor* el valor que queremos asignarle.\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Y para eliminar se puede utilizar *localStorage.clear();* para eliminar todas las llaves o $localStorage.removeItem("envio")$ para una llave en específico.
+ ¿Qué es JSON?\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Es un estandar de texto con el que se pueden representar a traves de texto información y se utiliza comunmente para configuración de servicios o mandar objetos o listas a traves de servicios Web como APIs.
  
+ ¿Qué hacen las funciones JSON.parse() y JSON.stringify()?\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*JSON.parse()* se utiliza para convertir una cadena de caracteres en formato JSON a un objeto. Mientras que *JSON.stringify()* se utiliza para convertir un objeto que existe dentro de nuestro código JavaScript a una cadena de caracteres en formato JSON. Combinando ambas podemos guardar en formato de texto nuestros objetos para despues ser leídos y convertirlos en objetos y así almacenar información que puede ser facilmente leída cuando sea necesario.

+ ¿Cómo funciona window.location.href ?\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hace que el buscador navegue a la página HTML dada como atributo a la función.
  
+ Explique el funcionamiento de scriptResultados.js\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contiene un método que se ejecuta al momento de cargar la página. En este método se carga la etiqueta de la tabla de resultados llamada *tablaResultados* y se carga del localStorage el elemento *envios*. En el elemento *envios* es donde previamente en la forma se almacenaron los datos capturados.\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Una vez que tiene cargado el arreglo con los datos capturados se hace una iteracion for each y se le asigna el nombre *envio* a cada uno de los objetos temporales para poder hacer uso de cada uno de los atributos del objeto fácilmente.\
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dentro del for each se agrega una fila de tabla y se crean cada una de las columnas asignandole los valores de cada atributo del objeto *envio*. Una vez creadas estas celdas de tabla se añaden al objeto de tabla antes creado llamado *tablaResultados*.
