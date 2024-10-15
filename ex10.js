//Calcular os dígitos validadores de um CPF

//Parte 1 - gerar um array os 9 primeiros números de forma aleatória

function digitosAleatorios() {
	let numerosAleatorios = [];
	for (let i = 0; i < 9; i++) {
		numerosAleatorios.push(Math.round(Math.random() * 10));
	}
	return numerosAleatorios;
}

function primeiroDigito(arr) {
	let soma = 0;

	for (i = 0; i < 9; i++) {
		soma += arr[i] * (10 - i);
	}

	const resto = soma % 11;
	const digitoVeririficador = resto > 1 ? 11 - resto : 0;
	return [...arr, digitoVeririficador];
}

function segundoDigito(arr) {
	let soma = 0;

	for (i = 1; i < 10; i++) {
		soma += arr[i] * (11 - i);
	}

	const resto = soma % 11;
	const digitoVeririficador = resto > 1 ? 11 - resto : 0;
	return [...arr, digitoVeririficador];
}

const cpfAleatorio = digitosAleatorios();
const cpfPrimeiraVerificacao = primeiroDigito(cpfAleatorio);
const cpfSegundaVerificacao = segundoDigito(cpfPrimeiraVerificacao);
console.log(cpfSegundaVerificacao);
