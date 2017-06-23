/*

	LA FUNCIÓN BIND:

*/

class Toggable{
	constructor(el){ 
	// Constructor - Inicializa la clase, el - el elemento de html
		this.el = el
		this.el.innerHTML = 'Off'
		this.activated = false 
		this.el.addEventListener('click', this.onClick.bind(this)) // método callback
	}

	onClick(){ 
	// cambiar el estado interno de ON a OFF
	// llamar al toggleText
		this.activated = !this.activated // cambia el estado en el que estaba
		this.toggleText() // esto es lo que hace que cambie el texto
	} 

	toggleText(){ 
	// cambiar el texto
	// se cambia de ON a OFF dependiendo si está activo o no
		this.el.innerHTML = this.activated ? 'On' : 'Off'

	}
}

/* el botón que es un elemento de html se obtiene 
gracias a js, y va a adquirir las características 
que le va a brindar la clase Toggable */

const button = document.getElementById('boton') // se obtiene el botón del html

const miBoton = new Toggable(button) // características de la clase al botón