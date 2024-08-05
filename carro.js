//Criação de Classe
// class Carro {
//     //Construtor da classe
//     constructor(_marca, _modelo) {
//         this.modelo = _modelo; //não obrigatorio mas colocamos o _ para separar o objeto da variavel.
//         this.marca = _marca;
//     }

//     //Método Público
//     dirigir() {
//         console.log(`Faça um Test Drive no novo ${this.marca} ${this.modelo}.`)
//     }
// }

// //Cria o objeto da classe carro
// const carro = new Carro('Honda', 'Civic');
// carro.dirigir();

//Encapsulamento
// class Carro {
//     #cor;

//     constructor(_marca) {
//         this.marca = _marca;
//     }

//     //Método Público
//     dirigir() {
//         console.log(` O Carro da marca ${this.marca} e cor ${this.#cor}.`);
//     }

//     //Getter e setter para propriedade privada
//     get cor() {
//         return this.#cor;
//     }

//     set cor(novaCor) {
//         this.#cor = novaCor;
//     }
// }

// const meuCarro = new Carro("Honda")
// meuCarro.cor = 'azul';
// meuCarro.dirigir();


//Herança
class Veiculo {
    constructor(_marca, _modelo) {
        this.marca = _marca;
        this.modelo = _modelo;
    }

    mostrarVeiculo(_tipo) {
        console.log(`Tipo de veículo: ${_tipo}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca, modelo);
    }

    //Método Público
    dirigir() {
        console.log(`Faça um Test Drive no novo ${this.marca} ${this.modelo}.`);
    }
}

const carro = new Carro("Honda", "Civic");
carro.mostrarVeiculo("Carro"); //Usa a classe mãe (Veículo)
carro.dirigir(); // Usa a classe filha (Carro)