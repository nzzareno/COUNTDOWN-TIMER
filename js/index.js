const days = document.getElementById('dias');
const hs = document.getElementById('horas');
const mins = document.getElementById('minutos');
const segs = document.getElementById('segundos');



const aniosNuevos = "16 Dec 2022";

function contador(){
  const aniosNuevosDate = new Date(aniosNuevos);
  
  const fechaActual = new Date();

  const segundosTotales = (aniosNuevosDate - fechaActual) / 1000;

  const dias = Math.floor(segundosTotales / 3600 / 24);

  const horas = Math.floor(segundosTotales / 3600) % 24;

  const minutos = Math.floor(segundosTotales / 60) % 60;

  const segundos = Math.floor(segundosTotales) % 60;
  
  days.innerHTML = dias;
  hs.innerHTML =  tiempoFormato(horas);
  mins.innerHTML = tiempoFormato(minutos);
  segs.innerHTML = tiempoFormato(segundos);
  

}

function tiempoFormato (tiempo) {
  return tiempo < 10 ? (`0${tiempo}`) : tiempo;
}


contador();

setInterval(contador, 1000);

