let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(let i = 0; i < pacientes.length; i++){
    console.log(pacientes[i]);

    var tdPeso = pacientes[i].querySelector(".info-peso");
    var peso = tdPeso.textContent

    var tdAltura = pacientes[i].querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = pacientes[i].querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso Invalido!");
        pesoValido = false;
        tdImc.textContent = "Peso invalido!"
        pacientes[i].classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura Invalida!")
        alturaValida = false;
        tdImc.textContent = "Altura invalida!"
        pacientes[i].classList.add("paciente-invalido");
    }

    if(pesoValido == true && alturaValida == true){
        var imc = peso / (altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
