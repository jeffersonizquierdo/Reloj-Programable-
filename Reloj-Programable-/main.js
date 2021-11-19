// reloj digital

setInterval(() => {

        // creamos la variables principales de la feha en general

    let fecha_completa = document.getElementById("fecha_completa");
    let hora_estado = document.getElementById("hora_estado");
    let hora_tiempo = document.getElementById("hora_tiempo");

    // obtecion del dia en el que estamos  NOTA. se muestra el la posicion del dia es decir 
    // los dias de la semana en javascript empizan desde y desde domingo lo que quiere decir que el domingo esta en la 
    // poscicion 0, lunes en la posicion 1, martes en la posicion 2 y asi sucesivamente.

    let fecha = new Date();

    // creacion de array con los dias de laseman para imprimir el dia en el que estamos

    let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]

    // dia del mes, le agregamos un 0 a la izquierda en caso de que el numero del dia sea menor a 0 (solo por estetica)

    let dia_nuevo;
    if (fecha.getDate() < 10){

        dia_nuevo = `0${fecha.getDate()}`
    }else{
        dia_nuevo = `${fecha.getDate()}`
    }

    // al igual que los dias ocurre lo mismo con los meses 

    let mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",  "Septiembre", "Octubre", "Noviembre ", "Diciembre"]
    // estado de la hora
    let estado;
    if (fecha.getHours() >= 12){
        estado = "PM"
    }else{
        estado = "AM"
    }


    // mostramos el dia en la posicion donde se encuentra

    fecha_completa.textContent= `${ semana[fecha.getDay()] + " " + dia_nuevo + " de " + mes[fecha.getMonth()] + " de " + fecha.getFullYear()} `

    hora_estado.textContent = `${estado}`
    hora_tiempo.textContent = `${fecha.toLocaleTimeString()}`

},1000)