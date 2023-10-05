const formulario = document.querySelector("[data-formulario]");
const camposForm = document.querySelectorAll("[required]");

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const listaRespostas = {
        "nome": event.target.elements["nome"].value,
        "email": event.target.elements["email"].value,
        "rg": event.target.elements["rg"].value,
        "cpf": event.target.elements["cpf"].value,
        "aniversario": event.target.elements["aniversario"].value
    }

    console.log(listaRespostas);
})

camposForm.forEach(campo => {
    campo.addEventListener('blur', () => validaCampo(campo));
    campo.addEventListener('invalid', event => event.preventDefault());
});

function validaCampo(campo) {
    
}