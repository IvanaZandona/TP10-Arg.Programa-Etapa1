// 1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada.
// (Con lista desordenada se refiere al elemento HTML, pero deben mostrarlos
// ORDENADOS en un elemento UL en el HTML, como el ejercicio final del TP5)
const numbersRandom = [];
for (let i=1; i<=10; i++) {
    numbersRandom.push(Math.ceil(Math.random()*100));
    numbersRandom.sort((a, b) => {
        if(a == b) {
          return 0;
        }
        if(a < b) {
          return -1;
        }
        return 1;
    });
 document.getElementById("1").innerHTML=numbersRandom[0];
 document.getElementById("2").innerHTML=numbersRandom[1];
 document.getElementById("3").innerHTML=numbersRandom[2];
 document.getElementById("4").innerHTML=numbersRandom[3];
 document.getElementById("5").innerHTML=numbersRandom[4];
 document.getElementById("6").innerHTML=numbersRandom[5];
 document.getElementById("7").innerHTML=numbersRandom[6];
 document.getElementById("8").innerHTML=numbersRandom[7];
 document.getElementById("9").innerHTML=numbersRandom[8];
 document.getElementById("10").innerHTML=numbersRandom[9];
}
// 4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.
const arrayEx4 = [1, -4, 12, 0, -3, 29, -150];
const numbersPositive = arrayEx4.filter((n => n>0 ));
const sumaReducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbersPositive.reduce(sumaReducer));

// 7. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares (Recuerda que ((numero % 2) == 0) determina si un numero es
// par o no, si tiene el resultado ==0 es par, sino es impar)
const numbersEx7 = [64, 19, 678, 98, 43, 245, 78, 100, 647238, 1050];
console.log(numbersEx7);
function numbersPair() {
    const numbersPair2 = (numbersEx7.filter(n => n % 2 === 0 ));
    console.log(numbersPair2);
} numbersPair();

// 15. Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres
// botones que permitan fijar distintos hipervínculos para la propiedad href. Además
// actualizar el texto del hipervínculo
let hipervinculo = document.getElementById("enlace");
let botonUno = document.getElementById("boton1");
let botonDos = document.getElementById("boton2");
let botonTres = document.getElementById("boton3");

botonUno.addEventListener("click",(e)=>{
  e.preventDefault()
  hipervinculo.href= "https://www.lanacion.com.ar/";
  hipervinculo.textContent="La Nación";
})
botonDos.addEventListener("click",(e)=>{
  e.preventDefault()
  hipervinculo.href= "https://www.bbc.com/news";
  hipervinculo.textContent="BBC News";
})
botonTres.addEventListener("click",(e)=>{
  e.preventDefault()
  hipervinculo.href= "https://edition.cnn.com/";
  hipervinculo.textContent="CNN Internacional";
})

// 16. Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego
// cuando sean presionadas ocultarlas.
let palabraUno = document.getElementById("palabra1");
let palabraDos = document.getElementById("palabra2");
let palabraTres = document.getElementById("palabra3");
let palabraCuatro = document.getElementById("palabra4");
let palabraCinco = document.getElementById("palabra5");
let palabraSeis = document.getElementById("palabra6");
let palabraSiete = document.getElementById("palabra7");

palabraUno.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("palabra1").style.display="none";
})
palabraDos.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("palabra2").style.display="none";
})
palabraTres.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("palabra3").style.display="none";
})
palabraCuatro.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("palabra4").style.display="none";
})
palabraCinco.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("palabra5").style.display="none";
})
palabraSeis.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("palabra6").style.display="none";
})
palabraSiete.addEventListener("click", (e)=>{
  e.preventDefault();
  document.getElementById("palabra7").style.display="none";
})