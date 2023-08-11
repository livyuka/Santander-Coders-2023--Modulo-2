// Operadores:

// 1- Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.

// let largura = parseFloat(prompt('Forneça a largura: '));
// let comprimento = parseFloat(prompt('Forneça o comprimento: '));

// let area = largura * comprimento;

// console.log(`A área do retângulo é ${area}!`);

// 2- Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).

// let numero = parseInt(prompt('Qual o número? '));

// if (numero % 2 === 0){
//     console.log("O número é par!")
// }else {
//     console.log("O número é ímpar!")
// }

// 3- Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".

// function contemPalavra() {
//     let str = prompt('Qual a mensagem?');
//     if (str.toLowerCase().includes('javascript')) {
//         console.log('A string contém a palavra JavaScript')
//     } else {
//         console.log('A string não contém a palavra JavaScript')
//     }
// }
// contemPalavra();

// 4- Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.

// let msg1 = 'caneta';
// let msg2 = 'Caneta';

// function compararString(str1, str2) {
//     if (str1.toLowerCase() === str2.toLowerCase()) {
//         console.log(`As strings ${str1} e ${str2} são iguais`)
//     } else {
//         console.log(`As strings ${str1} e ${str2} são diferentes`)
//     }
// }
// compararString(msg1,msg2)


// 5- Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// function concatenarArr() {
//     let arr3 = arr1.concat(arr2);
//     console.log(arr3);
// }
// concatenarArr();

// Funções Nativas:

// 6- Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.

// let arr = [1,2,3,4,5];
// function mediaValores(valor){
//     let soma = valor.reduce((acumulador, valorAtual) => acumulador + valorAtual);
//     let media = soma/valor.length;
//     console.log(media);
// }
// mediaValores(arr)

// 7- Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".

// function dataHoraAtual() {
//     let data = new Date().toLocaleString();
//     console.log(data);
// }
// dataHoraAtual();

// 8- Implemente um programa que encontre o maior valor em um array usando a função Math.max().

// let arr = [1,2,3,432];
// function maiorValor(lista) {
//     let maiorNumero = Math.max(...lista);
//     console.log(maiorNumero);
// }
// maiorValor(arr);

// 9- Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.

// function numeroAleatorio(min, max) {
//     console.log(Math.floor(Math.random() * (max-min) + min));
// }
// numeroAleatorio(1,89);

// 10- Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.

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

// Coerção e Tipos de Dados:

// 11- Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.

// let str = '5';
// let num = 2;
// let multiplicacao = str * num;
// console.log(multiplicacao); // 10
//Ocorre a coerção implícita, com a conversão da string a número e executa a operação normalmente. Caso a string não fosse um caractere numérico, a multiplicação resultaria em NaN, já que a string não poderia ser convertida a número.

// 12- Converta a string "123" em um número inteiro e armazene-o em uma variável.

// let str = '123';
// let numero = parseInt(str);

// 13- Escreva um programa que adicione um número e uma string. 

// let numero = 123;
// let str = '456';
// let adicao = numero + str;
// console.log(adicao);

// 14- Explique o resultado e discuta a coerção que ocorre.

//Este é outro exemplo de coerção implícita, como há uma string na operação, o número é convertido a string através do operador + e temos a concatenação dos dois.

// 15- Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.

// let nulo = null;
// let indefinido = undefined;
// let igualEmValor = null == undefined ? 'São iguais em valor' : 'Não são iguais em valor';
// let igualEmValorETipo = null === undefined ? 'São iguais em valor e tipo' : 'Não são iguais em valor e tipo';

// console.log(igualEmValor);
// console.log(igualEmValorETipo);

// 16- Crie um programa que determine se uma variável é do tipo função usando o operador typeof.

// let expressao = 2345;

// function tipoFuncao(palavra) {
//     let EFuncao = typeof(palavra) === "function" ? "Variável é do tipo função." : `Variável não é do tipo função, é do tipo ${typeof(palavra)}.`;
//     console.log(EFuncao);
// }
// tipoFuncao(expressao)

// Operadores Matemáticos e Lógicos:

// 18- Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.

// let resultado = (10 + 5) * 3 / 20;
// console.log(resultado)


// 19- Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.

// function positivoImpar (numero) {
//     if (numero > 0 && numero % 2 !== 0) {
//         console.log('O número é positivo e ímpar ao mesmo tempo')
//     }else {
//         console.log('O número não é positivo e ímpar ao mesmo tempo')
//     }
// }
// positivoImpar(5);

// 20- Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.

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

// 21- Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).

// function podeEntrar(idade, listaBan){
//     let permissao = (idade >= 18 && !listaBan) ? 'Você tem permissão para entrar no clube' : 'Você não tem permissão para entrar';
//     console.log(permissao)
// }
// podeEntrar(18,false)

// 22- Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.

// const usuario = 'pasteldequeijo';
// const senha = 'pastel123';
// function login(){
//     let campoLogin = prompt('Usuário:');
//     let campoSenha = prompt('Senha:');
//     let verificacao = (campoLogin === usuario && campoSenha === senha) ? 'Login efetuado!' : 'Usuário ou senha incorretos.';
//     alert(verificacao);
// }
// login();
