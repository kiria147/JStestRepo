function laikmatis() {

const vienetai = new Date(); 
  let valandos = vienetai.getHours();  
  let minutes = vienetai.getMinutes();  
  let sekundes = vienetai.getSeconds(); 
    const laikas = (valandos + '.' + minutes + '.' + sekundes + "\n");
document.write(laikas);
}

setInterval(laikmatis, 1000);