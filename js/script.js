class Validator {
    constructor() {
        this.validations = [
            "data-required",
            "data-min-length",
            "data-max-length",
            "data-email-validate",
        ]
    }

    // Iniciar a validação de todos os campos
    validate(form) {

        // Resgata todas as validações
        let currentValidations = document.querySelectorAll("form .error-validation");

        if (currentValidations.length > 0) {
            this.cleanValidations(currentValidations);
        }

        // Pegar os inputs
        let inputs = form.getElementsByTagName("input");

        // Transformo um HTMLCollection -> Array
        let inputsArray = [...inputs];

        // Loop nos inputs e validação no que for encontrado
        inputsArray.forEach(function(input) {
            
            // Loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++) {

                // Verifica se a validação atual existe no input
                if(input.getAttribute(this.validations[i]) != null) { 

                    // data-min-length -> minlength ou seja limpando a string para virar um método
                    let method = this.validations[i].replace("data-", "").replace("-", "");

                    // Valor do input
                    let value = input.getAttribute(this.validations[i]);

                    // Invocar o método
                    this[method](input, value);
                }
            }

        }, this);
    }
    
    // Verifica se um input tem um número mínimo de caracteres
    minlength(input, minValue) {

        let inputLength = input.value.length;

            let errorMessage = `O campo precisam ter pelo menos ${minValue} caracteres`;

        if (inputLength < minValue) {

            this.printMessage(input, errorMessage);
        }
    }

    // Verifica se um input passou do limite de caracteres
    maxlength(input, maxValue) {
    
        let inputLength = input.value.length;

            let errorMessage = `O campo precisam ter no máximo ${maxValue} caracteres`;

        if (inputLength > maxValue) {

            this,this.printMessage(input, errorMessage);
        }
    }

    // Método para validar emails
    emailvalidate(input) {

        // email@email.com.br
        let re = /\S+@\S+\.S+/;

        let email = input.value;

        let errorMessage = `Insira um e-mail no padrão email@gmail.com`;
    } 

    // Método para imprimir mensagens de erro na tela
    printMessage(input, msg) {

        // Verificar a quantidade de erros
        let errorsQtd = input.parentNode.querySelector(".error-validation");

        if (errorsQtd === null) {

            let template = document.querySelector(".error-validation").cloneNode(true);

            template.textContent = msg;

            let inputParent = input.parentNode;

            template.classList.remove("template");

            inputParent.appendChild(template);
        }
    }

    // Limpa as validações da tela
    cleanValidations(validations) {
        validations.forEach(el => el.remove());
    }

    // Verifica se o input é requerido
    required(input) {

        let inputValue = input.value;

        if (inputValue === "") {

            let errorMessage = `Este campo é obrigatório`;

            this.printMessage(input, errorMessage);
        }
    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// Evento que dispara as validações
submit.addEventListener("click", function(e) {
    e.preventDefault();
        validator.validate(form);
});
