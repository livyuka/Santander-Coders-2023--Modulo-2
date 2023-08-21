1-Crie uma função que calcule a soma de dois números.
function soma(a,b){
    return a + b;
}
console.log(soma(2,5))

2-Escreva uma função que calcule o produto de três números.
function produtoTresNumeros(a,b,c){
    return a * b * c;
}
console.log(produtoTresNumeros(3,14,56));

3-Crie uma função que verifique se um número é par ou ímpar.
function parOuImpar(num){
    return num % 2 === 0 ? `O número ${num} é par` : `O número ${num} é ímpar`;
}
console.log(parOuImpar(30))

4-Escreva uma função que inverta uma string (por exemplo, "hello" se torna "olleh").
function inverterString(string){
    return string.split("").reverse().join("")
}
console.log(inverterString("ola, tudo bem"))

5-Crie uma função que retorne o maior valor de um array de números.
function maiorValor(arr){
    let maiorNumero = 0;
    for(let i = 0; i < arr.length; i++) {
        if (maiorNumero < arr[i]){
            maiorNumero = arr[i];
        }
    }
    return maiorNumero;
}
console.log(maiorValor([1,8,3,4,5]))

6-Escreva uma função que calcule a média de um array de números.
function somaArray(arr){
    let soma = 0;
    for(i = 0; i < arr.length; i++){
        soma += arr[i];
    }
    return soma;
}
console.log(somaArray([1,1,1,7]))


7-Crie uma função que verifique se uma palavra é um palíndromo (lê-se igual de trás para frente).
function verificarPalindromo(palavra){
    const inverso = palavra.split("").reverse().join("");
    return palavra === inverso ? `A palavra ${palavra} é um palíndromo` : `A palavra ${palavra} não é um palíndromo`
}
console.log(verificarPalindromo("anana"))

8-Escreva uma função que conte quantas vezes uma determinada letra aparece em uma string.

function quantasVezesLetraAparece(string,letra){
    let contador = 0;
    for(let i = 0; i < string.length; i++){
        if (string[i].toLowerCase() === letra.toLowerCase()){
            contador++
        } 
    }
    const mensagem = `A letra ${letra} aparece ${contador} vezes em ${string}`;
    return mensagem;
}
console.log(quantasVezesLetraAparece('abacaxi','a'))

9-Crie uma função que calcule o fatorial de um número.
function calcularFatorial(numero) {
    let fatorial = 1
    if(isNaN(numero) || numero < 0){
        return "Insira um número positivo"
    }else if(numero === 0 || numero === 1){
        return `O fatorial de ${numero} é ${fatorial}`
    }else{
        for(let i = numero; i > 0; i--){
            fatorial *= i;
        }
        return `O fatorial de ${numero} é ${fatorial}`
    }
}
console.log(calcularFatorial(4))

10-Escreva uma função que converta graus Celsius para Fahrenheit.
function celsiusParaFahrenheit(temperatura){
    return temperatura * 9 / 5 + 32;
}
console.log(celsiusParaFahrenheit(20))

11-Crie uma função que encontre o valor mínimo e máximo em um array de números.
function minEMax(arr){
    let numMinimo = arr[0];
    let numMaximo = arr[0];
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < numMinimo){
            numMinimo = arr[i];
        }
        if (arr[i] > numMaximo){
            numMaximo = arr[i];
        }
    }
    const resultado = `O valor mínimo é ${numMinimo} e o valor máximo é ${numMaximo}`
    return resultado;
}
console.log(minEMax([10,2,3,4,54]))

12-Escreva uma função que calcule a sequência de Fibonacci até um determinado número de termos.
function sequenciaFibonacci(termo){
    let a = 1, b = 1, soma = 0;
    for(let i = 0; i <= termo; i++){
        console.log(a);
        c = a + b;
        a = b;
        b = c;
    }
}
sequenciaFibonacci(15)

13-Crie uma função que verifique se um número é primo.
function ePrimo() {
    while(true){
        const numero = parseInt(prompt('Insira um número'))

        if(isNaN(numero) || numero < 2){
            alert('Por favor, insira um número maior que 1');
            continue;
        }
        let contador = 0;
        for(i = 1; i <= numero; i++){
            if (numero % i === 0) {
                contador++
            }
        }
        if(contador === 2){
            console.log(`O número ${numero} é primo!`);
            break;
        }else{
            console.log(`O número ${numero} não é primo!`);
            break;
        }
    }
}
ePrimo()

14-Escreva uma função que remova os elementos duplicados de um array.

function removerDuplicados(arr){
    const arrSemDuplicados = [];
    for(i = 0; i < arr.length; i++){
        if(!arrSemDuplicados.includes(arr[i])){
            arrSemDuplicados.push(arr[i]);
        }
    }
    return arrSemDuplicados
}
console.log(removerDuplicados([2,3,1,1,2,2,3,3,3]))

15-Crie uma função que ordene um array de números em ordem crescente.

function ordenarArray(arr){
    const ordenado = [...arr].sort((a,b) => a - b);
    return ordenado;
}
console.log(ordenarArray([3,4,2,5,1]))

16-Escreva uma função que retorne o número de dias entre duas datas.

function diasEntreDatas(a, b) {
    const milissegParaDias = 24 * 60 * 60 * 1000;
    const data1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const data2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.abs(Math.round((data2 - data1) / milissegParaDias));
}

const a = new Date("2023-12-12"); // Formato ISO 8601 (Ano-Mês-Dia)
const b = new Date("2023-12-10");
const diferencaDias = diasEntreDatas(a, b);
console.log(`A diferença entre as datas é de ${diferencaDias} dias`);

17-Crie uma função que calcule o raio de um círculo com base em sua área.

function raioCirculo(area){
    return Math.sqrt(area/Math.PI)
}
console.log(raioCirculo(30).toFixed(1))

18-Escreva uma função que encontre o segundo maior valor em um array de números.

function segundoMaiorValor(arr){
    const ordenado = [...arr].sort((a,b) => a - b);
    return ordenado[arr.length-2];
}
console.log(segundoMaiorValor([3,4,2,5,1]))

19-Crie uma função que converta um valor em dólares para outra moeda com base em uma taxa de câmbio.
function converterDolar(valorDolarParaConverter,moedaFinal,taxaCambio){
    const conversao = valorDolarParaConverter * taxaCambio;
    const mensagem = `${valorDolarParaConverter} dólares vale ${conversao} em ${moedaFinal}`
    return mensagem;
}
console.log(converterDolar(32,"Euro", 0.92))

20-Escreva uma função que verifique se duas strings são anagramas (contêm as mesmas letras, mas em ordens diferentes).

function saoAnagramas(string1,string2){
    if(string1.length !== string2.length){
        return false;
    }
    const ordenar1 = string1.split("").sort().join("");
    const ordenar2 = string2.split("").sort().join("");

    return ordenar1 === ordenar2;
}
const string1 = "ananba";
const string2 = "banana";

if (saoAnagramas(string1,string2)){
    console.log(`${string1} e ${string2} são anagramas`)
}else{
    console.log(`${string1} e ${string2} não são anagramas`)
}


