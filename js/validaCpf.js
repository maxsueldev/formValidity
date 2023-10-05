export default function eUmCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if(validaNumerosRepetidos(cpf)) {
        return false;
    }
    return true;
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        "11111111111",
        "22222222222",
        "33333333333",
        "44444444444",
        "55555555555",
        "66666666666",
        "77777777777",
        "88888888888",
        "99999999999"
    ];

    return numerosRepetidos.includes(cpf);
}