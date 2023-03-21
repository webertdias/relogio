const horas = document.getElementById("#horas");
const minutos = document.getElementById("#minutos");
const segundos= document.getElementById("segundos");


function relogio(){
     let data = new Date();
     let hora = data.getHours;
     let minuto = data.getMinutes;
     let segundo = data.getSeconds;

    horas.innerHTML = hora;
    minutos.innerHTML = minuto;
    segundos.innerHTML = segundo;

}