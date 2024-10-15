/*Crie uma função que recebe um objeto que representa uma forma geométrica. O objeto vai ter o tipo da forma e você deve calcular a area da forma de acordo com o seu tipo. Os tipos disponíveis são: círculo, triângulo e retângulo.
Nesta função também é necessário verificar se todos os parêmtros necessários existem e caso um deles não exista retornar 0.*/

const circuloExemplo = { tipo: "circulo", raio: 4.5 };
const trianguloExemplo = { tipo: "triangulo", base: 4.5, altura: 7.8 };
const retanguloExemplo = { tipo: "retangulo", base: 8.2, altura: 8 };

function calculaArea(forma) {
	let area = 0;
	switch (forma.tipo) {
		case "circulo":
			if (forma.raio) {
				area = Math.PI * Math.pow(forma.raio, 2);
			} else {
				area = 0;
			}
			break;

		case "triangulo":
			if (forma.base && forma.altura) {
				area = (forma.base * forma.altura) / 2;
			} else {
				area = 0;
			}
			break;

		case "retangulo":
			if (forma.base && forma.altura) {
				area = forma.base * forma.altura;
			} else {
				area = 0;
			}
			break;
	}
	return area;
}

console.log(calculaArea(circuloExemplo));
console.log(calculaArea(trianguloExemplo));
console.log(calculaArea(retanguloExemplo));
