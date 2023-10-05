export default function eMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)) {
        return false;
    }
    return true;
}

function validaIdade(data) {
    const dataAtual = new Date();
    const idade = dataAtual.getUTCFullYear() - data.getFullYear();
    return idade >= 18;
}