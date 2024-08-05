import jwt from 'jsonwebtoken';

const secret = 'Geração Tech'; //Palavra secreta

function gerarJWT() {
    const usuario = { id: 1, username: 'Pedro' };
    const options = { expiresIn: '1h' }

    //Gera um token
    return jwt.sign(usuario, secret, options);
}

function verificarToken(token) {
    jwt.verify(token, secret, (erro, decoded) => {
        if(erro) {
            console.error('Token inválido: ', erro);
        } else {
            console.log('Token decoficado: ', decoded);
        }
    });
}

//Chamada das functions
const token = gerarJWT();
console.log('Token: ', token);

verificarToken(token);