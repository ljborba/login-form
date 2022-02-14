class Validator {
    constructor() {
        this.validations = [
            "data-min-length",
        ]
    }

    // Iniciar a validação de todos os campos
    validate(form) {

        // Pegar os inputs
        let inputs = form.getElementsByTagName("input");

        // Transformo um HTMLCollection -> Array
        let inputsArray = [...inputs];

        // Loop nos inputs e validação no que for encontrado
        inputsArray.forEach(function(input) {
            
            // Loop em todas as validações existentes
            for(let i = 0; this.validations.length > i; i++) {
                if(input.getAttribute(this.validations[i]) != null) {
                    console.log("Achou validação");
                }
            }

        }, this);
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