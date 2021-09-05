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
    