//Escreva uma função que recebe um objeto e que retorna este objeto com uma chave contendo os metadados do objeto.
//Caso o objeto passado como parâmetro seja vazio, o retorno deve ser um objeto vazio.

function metadados(objeto) {
	let metadados = {
		qtdBoolean: 0,
		qtdNumber: 0,
		qtdString: 0,
		qtdFunction: 0,
	};

	let valoresObjeto = Object.values(objeto);
	for (valor of valoresObjeto) {
		tipo = typeof valor;
		switch (tipo) {
			case "boolean":
				metadados.qtdBoolean++;
				break;
			case "number":
				metadados.qtdNumber++;
				break;
			case "string":
				metadados.qtdString++;
				break;
			case "function":
				metadados.qtdFunction++;
				break;
		}
	}
	objeto.metadados = metadados;
	return objeto;
}

const carro = {
	modelo: "Gol",
	marca: "Volkswagen",
	cor: "verde",
	ano: 2007,
	qtdePortas: 4,
	vidrosEletricos: true,
	seguro: true,
	acelerar: () => console.log("Indo mais rápido..."),
	frear: () => console.log("Parando..."),
	abrirVidros: () => console.log("Abrindo vidros..."),
};

console.log(metadados(carro));
