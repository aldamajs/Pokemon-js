//-----------PRACTICA JOSFREN 22/09/2014
//OBJETOS POR REFERENCIA

var boton, textoEntrada, textoE, valor, datos, imagen;
valor = ['PIKACHU', 'SQUALITLE', 'CHARMANDER'];

function Pokemon (n, t, v, a, grito) 
{
	this.nombre = n;
	this.tipo = t;
	this.vida = v;
	this.ataque = a;
	this.grito = grito;
	this.gritar = function(){
		alert("el grito del poke es: " + this.grito);
	}

}

//var pikachu = new Pokemon("Pikachu", "Electrico", 100, 50);
//var scuaro = new Pokemon("Squalitle", "Agua", 60, 60);
//var charmander = new Pokemon("Charmander", "Fuego", 80, 48);


function Inicio ()
{
	//nombrePoke.innerText = pikachu.nombre;
	boton = document.getElementById('mostrarPoke');
	boton.addEventListener('click', FuncionBoton);
}

function FuncionBoton () 
{
	textoEntrada = document.getElementById('enviaPoke');
	textoEntrada = textoEntrada.value;
	textoEntrada = textoEntrada.toUpperCase();

	alert("textoEntrada: " + textoEntrada);
		
		if (textoEntrada == valor[0]) {
			
			datos = new Pokemon("Pikachu", "Electrico", 100, 50, "Pika !!!");
			imagen = "pikachu.png"

		} else if (textoEntrada == valor[1]) {
			
			datos = new Pokemon("Squalitle", "Agua", 60, 60, "Squero !!!");
			imagen = "squirtle.png";

		} else if (textoEntrada == valor[2]) {
			
			datos = new Pokemon("Charmander", "Fuego", 80, 48, "Charrrr !!!");
			imagen = "charmander.png";

		}else{

			alert("debe introducir un pokemon");

		}

	nombrePoke.innerText = datos.nombre;
	datosPoke.innerHTML = "<br> Tipo: " + datos.tipo + "<br> Vida: " + datos.vida + "<br> Ataque: " + datos.ataque;
	imagePoke.innerHTML = "<img src='" + imagen + "' width='20%' heigth='20%'>";
	datos.gritar();


}





