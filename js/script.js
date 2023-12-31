import eUmCpf from './validaCpf.js';
import eMaiorDeIdade from './validaIdade.js';

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

    localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
    window.location.href = "./index.html";
})

camposForm.forEach(campo => {
    campo.addEventListener('blur', () => validaCampo(campo));
    campo.addEventListener('invalid', event => event.preventDefault());
});

const tiposDeErro = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort",
    "customError"
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function validaCampo(campo) {
    let mensagem = "";
    
    if(campo.name === 'cpf') {
        if(!eUmCpf(campo)) {
            campo.setCustomValidity('Cpf inválido');
        } else {
            campo.setCustomValidity('');
        }
    }

    if(campo.name == 'aniversario') {
        if(!eMaiorDeIdade(campo)) {
            campo.setCustomValidity('Usuário menor de idade');
        } else {
            campo.setCustomValidity('');
        }
    }

    tiposDeErro.forEach(erro => {
        if(campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
        }
    });

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const inputValidation = campo.checkValidity();

    if(!inputValidation) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}   