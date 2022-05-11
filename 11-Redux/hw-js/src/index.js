const { createStore } = require('redux'); // importa el store

const contador = require('./reducer');//importa el reducer
const { incremento, decremento, impar, asincrono, } = require('./actions'); // importa las actions

// En esta linea creamos nuestro store. Pasandole como parametro nuestro Reducer
var store = createStore(contador);

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById('valor') 
// aca  document.getelelemnt by id coge un. Queda, valor = <span> 0</span>

// Esta funcion nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.
function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  var cont = store.getState().contador
  // Seteamos el numero obtenido como texto dentro del elemento con id 'valor':
  valor.innerText = cont;
  // esto seria <span> 5 </span>
}

// Ejecutamos la funcion 'renderContador':
renderContador();


// Nos subscribimos al store pasandole la misma funcion. Asi cada vez que llegue una accion, ejecutamos la funcion:

store.subscribe(() => renderContador()) // se ejecuta subscribe cada vez que emitimos una accion

// Por ultimo, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la accion correspondiente:

var btnIncremento = document.getElementById('incremento')
btnIncremento.onclick = function() {
  return store.dispatch(incremento());

}

var btnDecremento = document.getElementById('decremento')
btnDecremento.onclick = function() {
  return store.dispatch(decremento());


}
//impar
var btnImpar = document.getElementById('incrementoImpar');
btnImpar.onclick = function() {
  return store.dispatch(impar());
}

//asincronica

var btnAsync = document.getElementById('incrementoAsync');
btnAsync.onclick = () => setTimeout(store.dispatch(asincrono()), 2000)