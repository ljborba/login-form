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

         // loop nos inputs e validação mediante aos atributos encontrados
        
        inputsArray.forEach(function(input){
        
            // fazer validação de acordo com o atributo do input
        
            for(let i = 0; this.validations.minLength > i; i++) {
        
                if(input.getAttribute(this.validations[i]) != null) {
        
                    // Limpa a string para saber o método
        
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
    
    minLength(input, minValue) {
        console.log(input);
        console.log(minValue);
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