var botonExtraer = document.getElementById("extraer");

botonExtraer.onclick = clickExtraer;

function clickExtraer(){
    let nombres = document.getElementById("name").value;
    let fechaNac = new Date(document.getElementById("date").value);
    let paterno = document.getElementById("aPaterno");
    let materno = document.getElementById("aMaterno");
    let nombre = document.getElementById("aNombre");
    let longApell = document.getElementById("cantid");
    let edad = document.getElementById("edad");
    let mes = document.getElementById("mes");

    const arreglo = nombres.split(" ");
    paterno.value=arreglo[0];
    materno.value=arreglo[1];
    nombre.value="";
    if (arreglo.length>=3) {
        for (let i = 2; i < arreglo.length; i++){
            const element = arreglo[i];
            nombre.value += element+" ";
        }
    }

    let apellidos = paterno.value+materno.value;
    longApell.value = apellidos.length;
    
    const arregloMeses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"]
    mes.value = arregloMeses[fechaNac.getMonth()];

    let fechaActual = new Date();
    if (fechaActual.getMonth()>fechaNac.getMonth() || fechaActual.getDate()>fechaNac.getDate()) {
        edad.value = fechaActual.getFullYear()-fechaNac.getFullYear();   
    }else{
        edad.value = (fechaActual.getFullYear()-fechaNac.getFullYear())-1;
    }
}

//Boton Colorear
var botonColorear = document.getElementById("colorear"); 

botonColorear.onclick = cambiarColor;
let s=1;
function cambiarColor(){
    let azul = document.getElementsByClassName("blue");
    let rojo = document.getElementsByClassName("red");
    let colorear = document.getElementById("colorear");
    
    if (s){
        for (let i = 0; i < azul.length; i++){
            azul[i].style.backgroundColor="#B74919";
            azul[i].style.border="2px solid #993B12";
        }    
    
        for (let i = 0; i < rojo.length; i++){
            rojo[i].style.backgroundColor="#1D6FA9";
            rojo[i].style.border="2px solid #135380";
        } 
        colorear.style.backgroundColor="#1D6FA9"
        colorear.style.border="2px solid #135380"
        s=0;
    } else{
        for (let i = 0; i < azul.length; i++){
            azul[i].style.backgroundColor="#1D6FA9";
            azul[i].style.border="2px solid #135380";
        }    
    
        for (let i = 0; i < rojo.length; i++){
            rojo[i].style.backgroundColor="#B74919";
            rojo[i].style.border="2px solid #993B12";
        } 
        colorear.style.backgroundColor="#B74919"
        colorear.style.border="2px solid #993B12"
        s=1;
    }
}

