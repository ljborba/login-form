let form = document.getElementById("register-form");
let submit = document.getElementById("btn-submit");

// evento que dispara as validações 

submit.addEventListener("click", function(e) { // enviando o form para o servidor
    e.preventDefault();
    console.log("Funcionou!");
})