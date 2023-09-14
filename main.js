// Funcion para realizar calculos electricos ley de ohm
const calcParametro = (valor1, valor2, calculo) => {
    switch (calculo) {
        case '1':
            return valor1 * valor2 ; //Calculo de voltaje V=I*R
        case '2':
            return valor1 / valor2 ;//Calculo de resistencia R=V/I
        case '3':
            return valor1 / valor2 ;//Calculo de amperaje I=V/R
        default:
            return alert("Calculo no válido") //Opcio no valida
    }
};

// Función menu
const menu = () => {
    console.log("Calculadora Ley de Ohm");
    console.log("Elija parametro a calcular: 1 (Voltaje) 2 (Resistencia) 3 (Corriente) 4 (Salir):");
    alert("Calculadora Ley de Ohm")
  
    //Ciclo eleccion de parametro 
    while (true) {
        const opcion = prompt("Elija parametro a calcular: 1 (Voltaje) 2 (Resistencia) 3 (Corriente) 4 (Salir):");

        if (opcion === '1') { //opcion Voltaje
            const valor1 = parseFloat(prompt("Ingrese valor de corriente:"));
            const valor2 = parseFloat(prompt("Ingrese valor de resistencia:"));
            
            const resultado = calcParametro(valor1, valor2 , opcion);
            console.log("El resultado es: resultado" + resultado)
            alert("El voltaje calculado es  " +  resultado + "V")
        }
        else if( opcion === '2' ) {//opcion Voltaje
            const valor1 = parseFloat(prompt("Ingrese valor de volaje:"))
            const valor2 = parseFloat(prompt("Ingrese valor de corriente:"))

            const resultado = calcParametro(valor1, valor2 , opcion)
            console.log("El resultado es: " + resultado)
            alert("La resistencia calculada es  " + resultado + "Ohm")
        }
        else if (opcion === '3') {//opcion Voltaje
            
            const valor1 = parseFloat(prompt("Ingrese valor de voltaje:"))
            const valor2 = parseFloat(prompt("Ingrese valor de resistencia:"))

            const resultado = calcParametro(valor1, valor2 , opcion)
            console.log("El resultado es: resultado" + resultado)
            alert("La corriente calculada es  " + resultado + "A")

        } else if (opcion === '4') {
            console.log("Saliendo del programa. ¡Hasta luego!")
            break;
        } else {
            console.log("Opción no válida. Por favor, elija 1, 2, 3 o 4.")
            alert("Opcion no valida")
        }
    }
};

// Llamar a la función del menú
menu();