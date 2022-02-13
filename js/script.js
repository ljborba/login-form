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
        
            // Loop em todas as validações existentes
        
            for(let i = 0 ; this.validations.lenght > i; i++) {
        
                if(input.getAttribute(this.validations[i]) != null) {
        
                    // Limpando a string para se tornar um método
        
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
    
        let errorMessage = "O campo precisa ter pelo menos ${minValue} caracteres";
    
        if(inputLength < minValue) {
    
            console.log(errorMessage);
    
        }
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