import axios from "axios";

// Fazendo uma requisição GET
axios.get('https:jsonplaceholder.typicode.com/posts1') //GET - Dados que eu vou pegar desse link
.then((response) => {
    console.log(response);
    console.log(response.data);
})
.catch((erro) => {
    console.error("Erro ao fazer a requisição get", erro)
}); //pegar - Get - ler dados, post - cadastrar , put - atualizar, delete - apagar