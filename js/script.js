class Validator { // Vakidator com V maiúsculo 
    constructor() {
        this.validations = [
            "data-min-length",
        ]
    }
    // iniciar a validação de todos os campos
    validate(form) {
        // pegar os inputs
        let inputs = form.getElementsByTagName("input");
        // Transformo um HTMLCollection -> Array
        let inputsArray = [...inputs];
        inputsArray.forEach(function(input){
            console.log(input);
        });
    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

// evento que dispara as validações 

submit.addEventListener("click", function(e) { // enviando o form para o servidor
    e.preventDefault();
    validator.validate(form);
})