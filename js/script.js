class validator {
    constructor() {
        this.validations = [

        ]
    }
    // iniciar a validação de todos os campos
    validate(form) {
        // pegar os inputs
        let inputs = form.getElementsByTagName("input");
        console.log(inputs);
        // HTMLCollection -> Array
        let inputsArray = [...inputs];
        console.log(inputsArray);
    }
}

let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

let validator = new validator();

// evento que dispara as validações 

submit.addEventListener("click", function(e) { // enviando o form para o servidor
    e.preventDefault();
    validator.validate(form);
})