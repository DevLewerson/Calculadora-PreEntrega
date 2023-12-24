const historial = [];

class Operacion {
    constructor(numero, peso, altura, edad, resultado) {
        this.numero = numero;
        this.peso = peso;
        this.altura = altura;
        this.edad = edad;
        this.resultado = resultado;
    }
}

function calculoEmagrecimientoH() {
    const peso = Number(prompt(`${nombre}, ingrese el peso: ex = 80.45`));
    const altura = Number(prompt("Ahora, Ingrese la altura en centimetros: ex = 180"));
    const edad = prompt('Ingrese su edad: ex = 40')

    const resultado = (13.75 * peso) + (5 * altura) - (6.76 * edad) + 66.5;

    const operacion = new Operacion('2', peso, altura, edad, resultado);
    historial.push(operacion);

    const nivelAtividad = Number(prompt('Elija tu nivel de atividad: \n 1 - Sedentario \n 2 - Poco Ativo \n 3 - Ativo \n 4 - Muy Ativo \n 5 - Ativo al Extremo'));

    while (nivelAtividad !== 6) {

        switch (nivelAtividad) {
            case 1:
                return alert( `Su gasto energetico es de: ${(resultado * 1.2).toFixed(0)} calorias. Para perder 0.5kg por semana tenes que consumir ${((resultado * 1.2) - 500).toFixed(0)} calorias al dia.`);
            case 2:
                return alert( `Su gasto energetico es de: ${(resultado * 1.375).toFixed(0)} calorias. Para perder 0.5kg por semana tenes que consumir ${((resultado * 1.375) - 500).toFixed(0)} calorias al dia.`);
            case 3:
                return alert( `Su gasto energetico es de: ${(resultado * 1.55).toFixed(0)} calorias. Para perder 0.5kg por semana tenes que consumir ${((resultado * 1.55) - 500).toFixed(0)} calorias al dia.`);
            case 4:
                return alert( `Su gasto energetico es de: ${(resultado * 1.725).toFixed(0)} calorias. Para perder 0.5kg por semana tenes que consumir ${((resultado * 1.725) - 500).toFixed(0)} calorias al dia.`);
            case 5:
                return alert( `Su gasto energetico es de: ${(resultado * 1.9).toFixed(0)} calorias. Para perder 0.5kg por semana tenes que consumir ${((resultado * 1.9) - 500).toFixed(0)} calorias al dia.`);
            default:
                alert('OPCION NO VALIDA!!!');
                break;
        }
    
        calculo = Number(prompt('Elija una opcion: \n 1 - Calcular IMC \n 2 - Calculo de emagrecimiento Hombre \n 3 - Calculo de Emagrecimineto Mujer \n 4 - Ver Historial \n 5 - Salir'));
    }
}

function calculoEmagrecimientoM() {
    const peso = Number(prompt(`${nombre}, ingrese el peso: ex = 80.45`));
    const altura = Number(prompt("Ahora, Ingrese la altura en centimetros: ex = 180"));
    const edad = prompt('Ingrese su edad: ex = 40')

    const resultado = (9.56 * peso) + (1.85 * altura) - (4.68 * edad) + 665;

    const operacion = new Operacion('3', peso, altura, edad, resultado);
    historial.push(operacion);

    const nivelAtividad = Number(prompt('Elija tu nivel de atividad: \n 1 - Sedentario \n 2 - Poco Ativo \n 3 - Ativo \n 4 - Muy Ativo \n 5 - Ativo al Extremo'));

    while (nivelAtividad !== 6) {

        switch (nivelAtividad) {
            case 1:
                return alert( `Su gasto energetico es de: ${(resultado * 1.2).toFixed(0)} calorias. Para perder 0.5kg por semana tenes que consumir ${((resultado * 1.2) - 500).toFixed(0)} calorias al dia.`);
            case 2:
                return alert( `Su gasto energetico es de: ${(resultado * 1.375).toFixed(0)} calorias. Para perder 0.5kg por semana tenes que consumir ${((resultado * 1.375) - 500).toFixed(0)} calorias al dia.`);
            case 3:
                return alert( `Su gasto energetico es de: ${(resultado * 1.55).toFixed(0)} calorias. Para perder 0.5kg por semana tenes que consumir ${((resultado * 1.55) - 500).toFixed(0)} calorias al dia.`);
            case 4:
                return alert( `Su gasto energetico es de: ${(resultado * 1.725).toFixed(0)} calorias. Para perder 0.5kg por semana tenes que consumir ${((resultado * 1.725) - 500).toFixed(0)} calorias al dia.`);
            case 5:
                return alert( `Su gasto energetico es de: ${(resultado * 1.9).toFixed(0)} calorias. Para perder 0.5kg por semana tenes que consumir ${((resultado * 1.9) - 500).toFixed(0)} calorias  al dia.`);
            default:
                alert('OPCION NO VALIDA!!!');
                break;
        }
    
        calculo = Number(prompt('Elija una opcion: \n 1 - Calcular IMC \n 2 - Calculo de emagrecimiento Hombre \n 3 - Calculo de Emagrecimineto Mujer \n 4 - Ver Historial \n 5 - Salir'));
    }
}

function calculoImc() {
    const peso = Number(prompt(`${nombre}, ingrese el peso: ex = 80.45`));
    const altura = Number(prompt("Ahora, Ingrese la altura: ex = 1.80"));
    const edad = prompt('Ingrese su edad: ex = 40')
    
    const resultado = peso / (altura * altura);

    const operacion = new Operacion('1', peso, altura, edad, resultado);
    historial.push(operacion);
     
    if (resultado >= 39.9) {
        let indiceImc = '(Obesidad Grado 3)';
        return alert(`El IMC es: ${resultado.toFixed(2)} ${indiceImc} con ${edad} años de edad.`);
    }else if (resultado >= 34.9) {
        let indiceImc = '(Obesidad Grado 2)';
        return alert(`El IMC es: ${resultado.toFixed(2)} ${indiceImc} con ${edad} años de edad.`);
    }else if (resultado >= 29.9) {
        let indiceImc = '(Obesidad Grado 1)';
        return alert(`El IMC es: ${resultado.toFixed(2)} ${indiceImc} con ${edad} años de edad.`);
    }else if (resultado >= 24.9) {
        let indiceImc = '(Sobrepeso)';
        return alert(`El IMC es: ${resultado.toFixed(2)} ${indiceImc} con ${edad} años de edad.`);
    }else if (resultado >= 18.5) {
        let indiceImc = '(Peso Normal)';
        return alert(`El IMC es: ${resultado.toFixed(2)} ${indiceImc} con ${edad} años de edad.`);
    }else if (resultado < 18.5) { 
        let indiceImc = '( Peso Bajo)';
        return alert(`El IMC es: ${resultado.toFixed(2)} ${indiceImc} con ${edad} años de edad.`);
        
    }   
}

function saudacion() {
    const dataAtual = new Date();
    const hora = dataAtual.getHours();

    if (hora < 12) {
        alert(`Buenos dias ${nombre}!`);
    } else if (hora < 18) {
        alert(`Buenas tardes ${nombre}!`);
    } else {
        alert(`Buenas noches ${nombre}!`);
    }
}

function verHistorial() {
    const numero = prompt('Elija una opcion:\n 1 - Calculos de IMC \n 2 - Calculos de Emagrecimiento Hombre \n 3 - Calculos de Emagrecimento Mujer');

    const filtrado = historial.filter((operacion) => {
        return operacion.numero === numero;
    })

    let mensaje = '';
    filtrado.forEach((operacion) => {
        mensaje = mensaje + operacion.numero + '=' + operacion.resultado.toFixed(0) + '\n';
    })
    alert(mensaje);

};

const nombre = prompt("Hola todo bien? Soy la calculadora Salud. Ingrese su nombre: ");
saudacion();

let calculo = Number(prompt('Elija una opcion: \n 1 - Calcular IMC \n 2 - Calculo de emagrecimiento Hombre \n 3 - Calculo de Emagrecimineto Mujer \n 4 - Ver Historial \n 5 - Salir'));

while (calculo !== 5) {

    switch (calculo) {
        case 1:
            calculoImc();
            break;
        case 2:
            calculoEmagrecimientoH();
            break;
        case 3:
            calculoEmagrecimientoM();
            break
        case 4:
            verHistorial();
            break;
        default:
            alert('OPCION NO VALIDA!!!');
            break;
    }

    calculo = Number(prompt('Elija una opcion: \n 1 - Calcular IMC \n 2 - Calculo de emagrecimiento Hombre \n 3 - Calculo de Emagrecimineto Mujer \n 4 - Ver Historial \n 5 - Salir'));
}

alert(`Muchas Gracias y hasta la proxima ${nombre}!`);