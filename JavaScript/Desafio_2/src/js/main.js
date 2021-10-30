// script del desafío

function tablaCuotas() {
    var cuotaFinal;
    var cuotas = document.getElementById("cuotas").value;
    var capital = document.getElementById("capital").value;
    var total = capital * 1.05; // aplico el interes 

    cuotaFinal = total / cuotas;

    var divTabla = document.getElementById("tabla");
    divTabla.innerText = "Valor de la Cuota: $" + cuotaFinal;
}
