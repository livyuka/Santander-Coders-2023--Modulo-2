// ### Dicionários (Objetos):

// 1- Crie um objeto que represente um estudante com propriedades como nome, idade, curso e notas. Acesse e exiba essas propriedades.

// const estudante = {
//     nome:'Ana',
//     idade: '22',
//     curso: 'Direito',
//     notas: [7,8,6]
// }
// console.log(estudante);

// 2- Crie um dicionário que mapeie nomes de países a suas respectivas capitais. Crie uma função que receba o nome de um país e retorne a capital correspondente.

// const paisCapital = {
//     'Irlanda': 'Dublin',
//     'Egito': 'Cairo',
//     'Belize': 'Belmopã',
//     'Brasil': 'Brasilia',
//     'Ruanda': 'Quigali',
//     'Maldivas': 'Male',
//     'Australia': 'Camborra'
// }
// function qualACapital(pais) {
//     for(const indice in paisCapital) {
//         if (pais.toLowerCase() === indice.toLowerCase()) {
//             console.log(`A capital de ${indice} é ${paisCapital[indice]}.`);
//             return;
//         }
//     }
// }
// qualACapital(prompt('Qual o país?'))


// 3- Crie um dicionário com nomes de frutas e seus preços. Escreva uma função que calcule o preço total de uma cesta de frutas.

// const cesta = {
//     banana: 5,
//     laranja: 4,
//     morango: 9,
//     abacaxi: 8
// }
// let valorTotal = 0
// function precoCesta() {
//     for(const indice in cesta) {
//         valorTotal += cesta[indice]
//     }
//     console.log(`O valor total da cesta de frutas é ${valorTotal}`)
// }
// precoCesta()

// 4- Crie um objeto que represente um livro com propriedades como título, autor, ano de publicação, etc. Crie uma função que imprima as informações do livro em um formato legível.

// const livro = {
//     Titulo: 'O nome do vento',
//     Autor: 'Patrick Rothfuss',
//     Publicacao: 2007,
//     Genero: 'Fantasia'
// }

// function infoLivro() {
//     for(const chave in livro) {
//         console.log(`${chave}: ${livro[chave]}`)
//     }
// }
// infoLivro()

// ### Map:

// 5- Dado um array de números, crie um novo array onde cada número seja elevado ao quadrado.

// let arr1 = [1,2,3,4,5];
// let arr2 = arr1.map((x) => Math.pow(x,2));
// console.log(arr2)

// 6- Dado um array de palavras, crie um novo array com a primeira letra de cada palavra em maiúscula.

// let arr1 = ['caneta', 'borracha','lapis','apontador'];
// let arr2 = arr1.map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1));
// console.log(arr2)

// 7- Crie um array de objetos representando produtos com propriedades como nome, preço e quantidade. Use o método map() para calcular o valor total de cada produto (preço * quantidade).

// let produtos = [
//     {'nome': 'camiseta',
//     'preco': 100,
//     'quantidade': 5
//     },
//     {'nome': 'casaco',
//     'preco': 150,
//     'quantidade': 2
//     },
//     {'nome': 'calca',
//     'preco': 200,
//     'quantidade': 3
//     }
// ]
// let valorTotalCadaProduto = produtos.map((produto) => 
//     {console.log(`O valor total de ${produto.nome} é: ${produto.preco * produto.quantidade}`)}
// );
// console.log(valorTotalCadaProduto) 

// 8- Converta um array de temperaturas em graus Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32.

// const temperaturaCelsius = [23,31,10,16];

// function converterEmFahrenheit() {
//     const temperaturaFahrenheit = temperaturaCelsius.map((x) => (x * 9/5) + 32 );
//     console.log(`Temperaturas em °C: ${temperaturaCelsius}`);
//     console.log(`Temperatura em °F: ${temperaturaFahrenheit}`);
// }
// converterEmFahrenheit();



// ### Reduce:

// 9- Dado um array de números, use o método reduce() para calcular a soma de todos os elementos.

// let arrNum = [9,8,7,6,5];
// let somaArr = arrNum.reduce((acumulador, valorInicial) => acumulador + valorInicial);
// console.log(somaArr) ;

// 10- Crie um array de strings e use o método reduce() para concatenar todas as strings em uma única string.

// let frutas = ['banana', 'morango', 'uva', 'melancia'];
// let cesta = frutas.reduce((acumulador, valorInicial) => acumulador + ', ' + valorInicial);
// console.log(`A cesta de fruta tem: ${cesta}`.);

// 11- Dado um array de objetos representando despesas com propriedades como valor e categoria, use o método reduce() para calcular o total de despesas de uma categoria específica.
// let  despesas = [
//     {produto: 'banana',
//     categoria: 'comida',
//     valor: 200
//     },
//     {produto: 'uva',
//     categoria: 'comida',
//     valor: 150
//     },
//     {produto: 'camisa',
//     categoria: 'roupa',
//     valor: 400
//     },
//     {produto: 'maracuja',
//     categoria: 'comida',
//     valor: 200
//     },
//     {produto: 'calca',
//     categoria: 'roupa',
//     valor: 200
//     },
//     {produto: 'shorts',
//     categoria: 'roupa',
//     valor: 250
//     }
// ];
// function calculaDespesa(listas,categ) {
//     let despesaTotal = listas.reduce((acumulador, produtoAtual) => {
//         if (categ.toLowerCase() === produtoAtual.categoria) {
//             acumulador += produtoAtual.valor;
//         }
//         return acumulador;
//     }, 0)
//     console.log(`A despesa total com ${categ} é ${despesaTotal}.`);
// }
// calculaDespesa(despesas,'Roupa')

// 12- Dado um array de números, use o método reduce() para encontrar o maior número no array.

// const arr = [5,8,32,5,56];
// function maiorNumero() {
//     let maiorNum = arr.reduce((acumulador, numeroAtual) => {
//         if (numeroAtual >= acumulador) {
//             acumulador = numeroAtual;
//         }
//         return acumulador;
//     })
//     console.log(maiorNum);
// }
// maiorNumero();

// ### Laços de Repetiçoes
// 13- Imprima os números de 1 a 10 utilizando um loop for.

// for(let i = 1; i < 11; i++) {
//     console.log(i)
// }

// 14- Imprima os números pares de 1 a 20 utilizando um loop for.

// for(let i = 1; i < 21; i++) {
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }

// 15- Calcule a soma dos números de 1 a 50 utilizando um loop for.
// let soma = 0;
// for(i = 1; i < 51; i++){
//     soma += i;
// }
// console.log(soma);

// 16- Imprima a tabuada do 7 utilizando um loop for.
// console.log('Tabuada do 7: ')
// for(i = 0; i < 11; i++){
//     let multiplicacao = i * 7;
//     console.log(`${i} x 7 = ${multiplicacao}`);
// }

// 17- Escreva um programa que solicite ao usuário um número e imprima a sequência de números de 1 até o número inserido, utilizando um loop for.
// let numero = parseInt(prompt('Insira um número'));
// for(i = 1; i < numero + 1; i++){
//     console.log(i)
// }

// 18- Escreva um programa que solicite ao usuário um número e verifique se ele é primo.

// function ePrimo() {
//     while(true){
//         const numero = parseInt(prompt('Insira um número'))

//         if(isNaN(numero) || numero < 2){
//             alert('Por favor, insira um número maior que 1');
//             continue;
//         }
//         let contador = 0;
//         for(i = 1; i <= numero; i++){
//             if (numero % i === 0) {
//                 contador++
//             }
//         }
//         if(contador === 2){
//             console.log(`O número ${numero} é primo!`);
//             break;
//         }else{
//             console.log(`O número ${numero} não é primo!`);
//             break;
//         }
//     }
// }
// ePrimo()


// 19- Crie um programa que gere a sequência de Fibonacci até o décimo termo. (Dica: o próximo termo é a soma dos dois termos anteriores)
// function fibonnacci(termo) {
//     let a = 1, b = 1, c = 0;
//     for(i = 0; i < termo; i++){
//         console.log(a)
//         c = a + b;
//         a = b;
//         b = c;
//     }
// }
// fibonnacci(10)

// 20- Crie um programa que solicite ao usuário um número e calcule o fatorial desse número.

// function fatorial() {
//     let fatorialNum = 1;
//     while(true){
//         const numero = parseInt(prompt('Insira um número'))
//         if(isNaN(numero) || numero < 0){
//             alert('Por favor, insira um número positivo');
//             continue;
//         }
//         if(numero < 2) {
//             console.log(`O fatorial de ${numero} é 1`);
//             break;
//         }else{
//             for(i = numero; i > 0; i--){
//                 fatorialNum *= i
//             }            
//             console.log(`O fatorial de ${numero} é ${fatorialNum}`);
//             break;
//         }
//     }
//     return fatorialNum;
// }
// fatorial()

// 21- Escreva um programa que imprima a seguinte série: 1, 3, 6, 10, 15, 21, ..., onde cada número é a soma dos números naturais consecutivos.

// function somaNaturaisConsec() {
//     let a = 0, soma = 0;
//     for(i = 1; i < 8; i++){
//         soma = a + i;
//         a = soma;
//         console.log(soma)
//     }
//     return soma
// }
// somaNaturaisConsec()

// 22- Crie um programa que encontre e imprima todos os números perfeitos de 1 a 1000. Um número perfeito é aquele cuja soma de seus divisores (excluindo ele mesmo) é igual ao próprio número.

// function numeroPerfeito(numero) {
//     let divisores = 0;
//     for (let i = 1; i < numero; i++){
//         if(numero % i === 0){
//             divisores += i;
//         }
//     }
//     return divisores === numero;
// }

// function numeroPerfeitoEntre(inicio, fim) {
//     for(let num = inicio; num <= fim; num ++){
//         if(numeroPerfeito(num)){
//             console.log(` O número ${num} é perfeito`)
//         }
//     }
// }
// const inicio = 1;
// const fim = 1000;
// numeroPerfeitoEntre(inicio, fim);

// 23- Crie um jogo em que o computador escolhe um número aleatório entre 1 e 100, e o jogador deve adivinhar qual é esse número. O jogo deve fornecer dicas informando se o número a ser adivinhado é maior ou menor do que o palpite do jogador, e o jogo deve continuar até que o jogador acerte o número.

// const numAleatorio = Math.floor(Math.random() * 10 + 1);

// while(true){
//     const numero = parseInt(prompt('Chute um número:'));

//     if(isNaN(numero)){
//         console.log('Digite um número válido!');
//         continue;
//     }

//     if(numero === numAleatorio){
//         alert(`Parabéns, você acertou! O número sorteado é ${numAleatorio}`)
//         break;
//     }else if (numero < numAleatorio){
//         alert('Digite um número maior');
//     }else{
//         alert('Digite um número menor');
//     }
// }

// 24- Crie um programa que gere a sequência de números de Fibonacci usando um loop while até que o próximo termo seja maior que 1000.

// function fibonnacci(numero) {
//     let a = 1, b = 1, c = 0;
//     while(a <= numero) {
//         console.log(a)
//         c = a + b;
//         a = b;
//         b = c;
//     }
// }
// fibonnacci(1000)

// 25- Escreva um programa que calcule a média de uma lista de números. O usuário deve fornecer quantos números deseja inserir, e em seguida, inserir os números.
// function arrNumeros() {
//     const quantosNum = parseInt(prompt('Quantos números deseja inserir?'));
//     if(isNaN(quantosNum) || quantosNum < 1) {
//         alert('Número inválido');
//         return;
//     }
//     const numeros = [];
//     for(let i = 0; i < quantosNum; i++){
//         let num = parseFloat(prompt(`Insira o número ${i + 1} de ${quantosNum}`));
//         numeros.push(num);
//     }
//     const media = mediaNum(numeros);
//     console.log(`A média dos números ${numeros} é ${media}`)
// }

// function mediaNum(listaNum){
//     const soma = listaNum.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
//     return soma / listaNum.length;
// }
// arrNumeros()

// 26- Escreva um programa que peça ao usuário para adivinhar um número secreto entre 1 e 100. O programa deve fornecer dicas como "maior" ou "menor" até que o jogador adivinhe corretamente.

// const numAleatorio = Math.floor(Math.random() * 10 + 1);

// while(true){
//     const numero = parseInt(prompt('Chute um número:'));

//     if(isNaN(numero)){
//         console.log('Digite um número válido!');
//         continue;
//     }

//     if(numero === numAleatorio){
//         alert(`Parabéns, você acertou! O número sorteado é ${numAleatorio}`)
//         break;
//     }else if (numero < numAleatorio){
//         alert('Digite um número maior');
//     }else{
//         alert('Digite um número menor');
//     }
// }

// 27- Crie um programa que gere a sequência de números primos até um número fornecido pelo usuário.

// function listaPrimos() {
//     const numMax = parseInt(prompt('Gerar números primos até que número?'))
//     if (isNaN(numMax) || numMax < 1) {
//         console.log('Insira um número válido');
//         return;
//     }
//     let arrPrimos = [];
//     console.log(`Números primos até ${numMax}: `)
//     for(let i = 2; i < numMax + 1; i++){
//         let numPrimo = ePrimo(i);
//         if(numPrimo !== undefined){
//             arrPrimos.push(numPrimo);
//         }
//     }
//     console.log(arrPrimos);
// }
// function ePrimo(numero) {
//     let contador = 0;
//     for(i = 1; i <= numero; i++){
//         if (numero % i === 0) {
//             contador++
//         }
//     }
//     if(contador === 2){
//         return numero;
//     }
// }
// listaPrimos()


// 28- Escreva um código JavaScript que utilize um laço de repetição while para imprimir os números pares de 0 a 10.

// let i = 0;
// let numMax = 10;
// while(i <= numMax) {
//     if(i % 2 === 0){
//         console.log(i);
//     }
//     i++
// }

// 29- Escreva um código JavaScript que solicite ao usuário um número e utilize um laço de repetição do-while para verificar se o número inserido é uma potência de 2.

// function ePotenciaDeDois(numero) {
//     do {
//         if(numero === 1){
//             return true;
//         }
//         if(numero % 2 !== 0){
//             return false;
//         }
//         numero /= 2;
//     } while (numero >= 1)
// }

// function potencia2(){
//     const numero = parseInt(prompt('Qual número?'))
//         if (isNaN(numero) || numero < 0) {
//             console.log('Insira um número válido positivo');
//             return;
//         }    
//     if (ePotenciaDeDois(numero)) {
//         console.log(`O número ${numero} é potência de 2`)
//         return;
//     }else {
//         console.log(`O número ${numero} não é potência de 2`)
//         return;
//     }
// }
// potencia2()

// 30- Escreva um código JavaScript que utilize um laço de repetição while para calcular a soma dos números de 1 a 100 e exiba o resultado.
// let i = 1
// let soma = 0
// while (i <= 100){
//     soma += i
//     i++
// }
// console.log(soma)


// ### Condicionais

// 31- Verificação de vogal ou consoante

// Peça ao usuário para digitar uma letra.
// Use uma estrutura condicional para verificar se a letra é uma vogal ou uma consoante.
// Exiba uma mensagem indicando se a letra é uma vogal ou consoante.

// let letra = prompt('Digite uma letra').toLowerCase();
// let vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'â', 'ê', 'ô', 'ã', 'õ'];
// if (letra.length > 1){
//     console.log('Digite somente uma letra');
// }else {
//     if (vogais.includes(letra)){
//         console.log(`A letra ${letra} é uma vogal`);
//     }else if (letra >= 'a' && letra <= 'z'){
//         console.log(`A letra ${letra} é uma consoante`);
//     }else{
//         console.log('Entrada inválida');
//     }
// } 

// 32- Calculadora simples

// Peça ao usuário para digitar dois números e uma operação matemática (+, -, *, /).
// Use uma estrutura condicional para realizar a operação selecionada nos números dados.
// Exiba o resultado da operação.

// let primeiroNum = parseFloat(prompt('Digite o primeiro número'));
// let segundoNum = parseFloat(prompt('Digite o segundo número'));
// let operacao = prompt('Digite uma operação matemática (ex: +, -, *, /)');
// let resultado = 0;

// switch(operacao){
//     case '+':
//         resultado = primeiroNum + segundoNum;
//         console.log(`A soma entre ${primeiroNum} e ${segundoNum} é ${resultado}`);
//         break;
//     case '-':
//         resultado = primeiroNum - segundoNum;
//         console.log(`A subtração entre ${primeiroNum} e ${segundoNum} é ${resultado}`);
//         break;
//     case '*':
//         resultado = primeiroNum * segundoNum;
//         console.log(`A multiplicação entre ${primeiroNum} e ${segundoNum} é ${resultado}`);
//         break;
//     case '/':
//         resultado = primeiroNum / segundoNum;
//         console.log(`A divisão entre ${primeiroNum} e ${segundoNum} é ${resultado}`);
//         break;
//     default:
//         console.log('Insira uma operação válida!')
// }

// 33- Verificação de número primo

// Peça ao usuário para digitar um número.
// Use uma estrutura condicional para verificar se o número é primo (divisível apenas por 1 e por ele mesmo).
// Exiba uma mensagem indicando se o número é primo ou não.

// let numero = prompt('Qual o número?')
// let contador = 0;
// function numeroEPrimo() {
//     for (i = 1; i <= numero; i++) {
//         if (numero % i === 0){
//             contador++;
//         }
//     }
//     if (contador === 2) {
//         console.log(`O número ${numero} é primo`)
//     }else {
//         console.log(`O número ${numero} não é primo`)
//     }
// }
// numeroEPrimo();


// 34- Conversão de temperatura

// Peça ao usuário para digitar uma temperatura em graus Celsius.
// Use uma estrutura condicional para converter a temperatura para Fahrenheit ou Kelvin, de acordo com a escolha do usuário.
// Exiba o resultado da conversão.
// let temperatura = parseFloat(prompt('Digite uma temperatura em °C'));
// let escolha = prompt('Qual conversão? DIGITE F para Fahrenheit ou K para Kelvin');

// if (escolha.toUpperCase() === 'F'){
//     temperatura = (temperatura * 9/5) + 32;
//     console.log(temperatura);
// }else if (escolha.toUpperCase() === 'K'){
//     temperatura += 273.15;
//     console.log(temperatura);
// }else {
//     console.log('Digite uma conversão válida')
// }

// 35- Dia da semana por extenso

// Peça ao usuário para digitar um número de 1 a 7 representando um dia da semana.
// Use uma estrutura condicional switch para exibir o nome completo do dia da semana correspondente ao número digitado.

// let numeroSem = parseInt(prompt('Digite um número de 1 a 7'))

// switch(numeroSem){
//     case 1:
//         console.log('Domingo');
//         break;
//     case 2:
//         console.log('Segunda-feira');
//         break;
//     case 3:
//         console.log('Terça-feira');
//         break;
//     case 4:
//         console.log('Quarta-feira');
//         break;
//     case 5:
//         console.log('Quinta-feira');
//         break;
//     case 6:
//         console.log('Sexta-feira');
//         break;
//     case 7:
//         console.log('Sábado');
//         break;
//     default:
//         console.log('Digite um número válido');
//         break;
// }

// 36- Verificação de ano bissexto

// Peça ao usuário para digitar um ano.
// Use uma estrutura condicional para verificar se o ano é bissexto (divisível por 4 e não por 100, exceto se for divisível por 400).
// Exiba uma mensagem indicando se o ano é bissexto ou não.

// function anoBissexto() {
//     let ano = prompt('Qual o ano?')
//     if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
//         console.log(`O ano ${ano} é bissexto`);
//         }
//     else {
//         console.log(`O ano ${ano} não é bissexto`);
//     }
// }
// anoBissexto();

// 37- Contador de vogais e consoantes

// Peça ao usuário para digitar uma palavra ou frase.
// Use uma estrutura condicional para contar o número de vogais e consoantes na entrada.
// Exiba os resultados separadamente.

// const entradaUsuario = prompt('Digite uma palavra ou frase');
// const arrEntrada = entradaUsuario.toLocaleLowerCase().split('');

// let vogal = 0;
// let consoante = 0;
// let vogais = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'â', 'ê', 'ô', 'ã', 'õ'];

// for (i = 0; i < arrEntrada.length; i++){
//     if (vogais.includes(arrEntrada[i]) ){
//         vogal++;    
//     }else if (arrEntrada[i] >= 'a' && arrEntrada[i] <= 'z') {
//         consoante++
//     }else{
//         continue
//     }
// }
// console.log(`'${entradaUsuario}' tem ${vogal} vogais`)
// console.log(`'${entradaUsuario}' tem ${consoante} consoantes`)

// 38- Verificação de número positivo, negativo ou zero

// Peça ao usuário para digitar um número.
// Use uma estrutura condicional para verificar se o número é positivo, negativo ou zero.
// Exiba uma mensagem indicando a natureza do número.

// const numero = parseFloat(prompt('Digite um número'));

// if (isNaN(numero)){
//     console.log('Digite um número válido')
// }else{
//     if (numero === 0){
//         console.log('O número é zero')
//     }else if (numero > 0){
//         console.log(`O número ${numero} é positivo`)
//     }else{
//         console.log(`O número ${numero} é negativo`)
//     }
// }

// 39- Sistema de bilhete de cinema

// Peça ao usuário para digitar sua idade e se tem cartão de estudante (responda com "sim" ou "não").
// Use uma estrutura condicional para determinar o preço do bilhete de cinema de acordo com as regras: menores de 18 anos pagam $5, estudantes pagam $8 e os demais pagam $10.
// Exiba o preço do bilhete.

// const idade = parseInt(prompt('Digite sua idade'));
// const estudante = prompt('Possui cartão de estudante? Responda com "sim" ou "não"');
// const mensagem = 'O preço do bilhete é '
// if (idade < 18){
//     console.log(mensagem + '$5')
// }else if(estudante === 'sim'){
//     console.log(mensagem + '$8')
// }else {
//     console.log(mensagem + '$10')
// }

// 40- Verificação de palíndromo

// Peça ao usuário para digitar uma palavra ou frase.
// Use uma estrutura condicional para verificar se a entrada é um palíndromo (lê-se igual de trás para frente e de frente para trás).
// Exiba uma mensagem indicando se a entrada é um palíndromo ou não.

// const entradaUsuario = prompt('Digite uma palavra ou frase').toLowerCase();

// function ePalindromo() {
//     let arrEntrada = entradaUsuario.split('').filter(e => e.trim() != '');
//     const revertido = [...arrEntrada].reverse();
//     arrEntrada.join('') === revertido.join('') ? console.log(`'${entradaUsuario}' é palíndromo`) : console.log(`'${entradaUsuario}' não é palíndromo`);
//     console.log(arrEntrada);
//     console.log(revertido);
// }
// ePalindromo()

// const entradaUsuario = prompt('Digite uma palavra ou frase').toLowerCase();

// function ePalindromo(texto) {
//     const semEspacos = texto.replace(/\s/g, ''); // Remover espaços
//     const reverso = semEspacos.split('').reverse().join('');
//     console.log(semEspacos)
//     console.log(reverso)

//     return semEspacos === reverso;
// }

// if (ePalindromo(entradaUsuario)) {
//     console.log(`'${entradaUsuario}' é um palíndromo`);
// } else {
//     console.log(`'${entradaUsuario}' não é um palíndromo`);
// }


