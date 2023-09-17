// Funcion para realizar calculos electricos ley de ohm
const calcParametro = (valor1, valor2, calculo) => {
    switch (calculo) {
        case '1':
            return valor1 * valor2 ; //Calculo de Voltaje V=I*R
        case '2':
            return valor1 / valor2 ;//Calculo de Resistencia R=V/I
        case '3':
            return valor1 / valor2 ;//Calculo de Amperaje I=V/R
        default:
            return alert("Calculo no válido") //Opcion no valida
    }
};

// Función menu
const menu = () => {
    console.log("Calculos electricos Ley de Ohm");
    console.log("Elija parametro a calcular: 1 (Voltaje) 2 (Resistencia) 3 (Corriente) 4 (Salir):");
    alert("Calculadora Ley de Ohm")
  
    //Ciclo eleccion de parametro 
    while (true) {
        const opcion = prompt("Elija parametro a calcular: 1 (Voltaje) 2 (Resistencia) 3 (Corriente) 4 (Salir):");

        if (opcion === '1') { //Opcion Voltaje
            
            const valor1 = parseFloat(prompt("Ingrese valor de corriente:"));
            const valor2 = parseFloat(prompt("Ingrese valor de resistencia:"));            
            if (isNaN(Number(valor1)) || isNaN(Number(valor2))) {//valor es un numero
                alert("Al menos uno de los valores es incorrecto");
                
             } else{      
            
            const resultado = calcParametro(valor1, valor2 , opcion);
            console.log("El resultado es: resultado" + resultado)
            alert("El voltaje calculado es  " +  resultado + "(V)")
             }
        }
        else if( opcion === '2' ) {//opcion Resistencia
            const valor1 = parseFloat(prompt("Ingrese valor de volaje:"))
            const valor2 = parseFloat(prompt("Ingrese valor de corriente:"))
            if (isNaN(Number(valor1)) || isNaN(Number(valor2))) {//valor es un numero 
                alert("Al menos uno de los valores es incorrecto");
                
             }  else {
                const resultado = calcParametro(valor1, valor2 , opcion)
                console.log("El resultado es: " + resultado)
                alert("La resistencia calculada es  " + resultado + "(Ω)")}    

            
        }
        else if (opcion === '3') {//opcion  corriente
            
            const valor1 = parseFloat(prompt("Ingrese valor de voltaje:"))
            const valor2 = parseFloat(prompt("Ingrese valor de resistencia:"))
            if (isNaN(Number(valor1)) || isNaN(Number(valor2))) {//valor es un numero
                alert("Al menos uno de los valores es incorrecto");
                
             }   else {   
            const resultado = calcParametro(valor1, valor2 , opcion)
            console.log("El resultado es: resultado" + resultado)
            alert("La corriente calculada es  " + resultado + "(A)")}

        } else if (opcion === '4') {//salida bucle
            console.log("Saliendo del programa. ¡Hasta luego!")
            break;
        } else {//volver a preguntar
            console.log("Opción no válida. Por favor, elija 1, 2, 3 o 4.")
            alert("Opcion no valida, elija 1, 2, 3 o 4.")
        }
    }
};

// Llamar a la función del menú
menu();