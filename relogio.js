const horas = document.querySelector("#horas");
const minutos = document.querySelector("#minutos");
const segundos = document.querySelector("#segundos");

setInterval(relogio, 1000);

function relogio() {

    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    let segundo = data.getSeconds();

    horas.innerHTML = formato(hora);
    minutos.innerHTML = formato(minuto);
    segundos.innerHTML = formato(segundo);
}

function formato(horario) {
    return horario < 10 ? "0" + horario : horario;
}