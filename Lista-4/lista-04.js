## Callback
Exercício 1: Callback Básico
Crie uma função chamada executarCallback que recebe uma função de callback como argumento e a executa.

function executarCallback(callback) {
    const msg = "Mensagem de callback";
    callback(msg)
}

function exibirMsg(texto){
    console.log(texto)
}
executarCallback(exibirMsg);

Exercício 2: Manipulação de Array
Crie uma função chamada dobrarNumeros que recebe um array de números e uma função de callback. A função dobrarNumeros deve aplicar a função de callback a cada elemento do array e retornar um novo array com os elementos dobrados.

function dobrarNumeros(arr, callback){
    const arrDobrados = arr.map((x) => x * 2)
    callback(arrDobrados)
}

function exibirArrDobrado(arr){
    console.log(arr)
}
dobrarNumeros([1,2,3],exibirArrDobrado)


Exercício 3: Filtragem com Callback
Crie uma função chamada filtrarPalavras que recebe um array de palavras e uma função de callback. A função filtrarPalavras deve retornar um novo array contendo apenas as palavras que atendem ao critério da função de callback.

function filtrarPalavras(arr,callback){
    const filtro = arr.filter((palavra) => palavra.length > 4);
    callback(filtro);
}

function arrFiltrado(arr){
    console.log(arr);
}
filtrarPalavras(['uva', 'maçã', 'kiwi', 'caqui', 'abacaxi'],arrFiltrado)

Exercício 4: Ordenação com Callback
Crie uma função chamada ordenarNumeros que recebe um array de números e uma função de callback para determinar a ordem de ordenação. A função ordenarNumeros deve retornar um novo array com os números ordenados de acordo com o critério da função de callback.
function ordenarNumeros (arr, callback){
    const arrOrdenado = arr.sort((a,b) => a - b);
    callback(arrOrdenado);
}
function exibirArrOrdenado(arr){
    console.log(arr);
}
ordenarNumeros([5,4,3,2,1],exibirArrOrdenado);

Exercício 5: Timer com Callback
Crie uma função chamada executarAposTempo que recebe uma função de callback e um tempo em milissegundos. A função executarAposTempo deve agendar a execução da função de callback após o tempo especificado.

function executarAposTempo(callback, tempo){
    setTimeout(() => {
        console.log('Executou depois do timeout');
        callback()
    }, tempo);
}

function validacaoTimeout(){
    console.log('O timeout funcionou');
}
executarAposTempo(validacaoTimeout,3000);


## Promise
Exercício 1: Criando uma Promise Simples
Crie uma Promise simples que retorna uma mensagem de sucesso após 2 segundos. Use a função setTimeout para simular um atraso.

function executarComDelay(){
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Sucesso!')
            resolve()
        }, 2000);
    });
}
executarComDelay()

Exercício 2: Tratamento de Erro em Promise
Crie uma Promise que simula uma operação que pode falhar. Se a operação for bem-sucedida, resolva a Promise com uma mensagem de sucesso. Caso contrário, rejeite-a com uma mensagem de erro. (Lembre-se de usar o reject)

function falhaPromise(){
    return new Promise((resolve,reject) => {
        const numero = 'um';
        if (isNaN(numero)) {
            reject(console.log('Não é um número'));
        }else {
            resolve(console.log('Sucesso'));
        }
    })
}
falhaPromise()

Exercício 4: Encadeamento de Promises
Crie um encadeamento de Promises que realiza uma sequência de operações assíncronas. Por exemplo, faça uma requisição a uma API, processe os dados e, em seguida, realize outra operação.

function requisicaoAPI(){
    return new Promise((resolve) => {
        setTimeout(() => {
            const dadosAPI = {dados: 'Dados da API'}
            resolve(dadosAPI.dados);
        }, 2000);
    })
}

function processaDados(dados){
    return new Promise((resolve) => {
        setTimeout(() => {
           const dadosProcessados = `${dados} processados`
           resolve(dadosProcessados); 
        }, 3000);
    })
}
requisicaoAPI()
    .then(resposta => {
        console.log('Dados requisitados: ' + resposta)
        return processaDados(resposta);
    })
    .then(dadosProcessados => {
        console.log('Dados processados: ' + dadosProcessados);
    })
    .catch(error => {
        console.error('Erro: ' + error)
    })

Exercício 1: Promessa com Atraso Aleatório
Crie uma função que retorna uma Promise que será resolvida após um tempo aleatório entre 1 e 5 segundos. Use a função setTimeout e Math.random() para criar esse atraso variável.

function promiseComDelay(){
    return new Promise((resolve) => {
        const tempo = Math.floor((Math.random() * 5) + 1)
        setTimeout(() => {
            console.log(`A promise foi resolvida em ${tempo} segundos`)
            resolve()
        }, tempo * 1000);
    })
}
promiseComDelay()

Exercício 2: Rejeição de Promessa
Crie uma função que retorna uma Promise que será rejeitada após um tempo aleatório entre 1 e 3 segundos.

function rejeitaPromise(){
    return new Promise((resolve,reject) => {
        const tempo = Math.floor((Math.random() * 3) + 1) * 1000;
        if (tempo < 0){
            resolve();
        }else {
            setTimeout(() => {
                console.log(`Promise foi rejeitada em ${tempo/1000} segundos`);
                reject(new Error('Promise rejeitada'));
            }, tempo);
        }
    })
}
rejeitaPromise()
.catch(error => console.log(error.message))

## async e await 
Exercício 1: Função Assíncrona Simples
Crie uma função assíncrona que retorna uma mensagem após um atraso de 2 segundos.
async function asyncAwaitFunction() {
    console.log("antes de chamar a função atraso")
    await atrasoFunction(2000);
    console.log(`Função assíncrona executada com sucesso`);
}

function atrasoFunction(tempo){
    return new Promise((resolve) => {
        console.log("antes do timeout")
        setTimeout(() => {
            const mensagem = "Dentro da função atraso";
            resolve(console.log(mensagem));
        }, tempo);
    })
}
asyncAwaitFunction()


Exercício 2: Tratamento de Erros com async/await
Crie uma função assíncrona que simula uma operação que pode falhar. Use try e catch para lidar com erros.

async function operacaoQuePodeFalhar(){
    const numero = Math.random();
    if (numero > 0.5) {
        throw new Error("Ops, algo deu errado na operação!");
    }
    return "Deu certo!"
}
async function executaOperacao() {
    try{
        const resultado = await operacaoQuePodeFalhar()
        console.log("Resultado da operação: " +  resultado)
    }catch (erro) {
        console.error(erro.message)
    }
}
executaOperacao()

Exercício 3: Encadeamento com async/await
Crie uma série de funções assíncronas que dependem dos resultados anteriores.

async function primeiraOperacao(numero){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(isNaN(numero)){
                reject(new Error("Digite um número válido"));
            }
            resolve(numero)
        }, 2000);
    })
}

async function segundaOperacao(numero){
    return new Promise((resolve) => {
        setTimeout(() => {
            const valor = numero * 10
            resolve(valor);
        }, 3000);
    })
}

async function terceiraOperacao(numero){
    return new Promise((resolve) => {
        setTimeout(() => {
            const valorFinal = numero + 2;
            resolve(valorFinal);
        }, 1000);
    })
}

async function executarOperacoes(numero){
    try{
        const resultadoPrimeiraOp = await primeiraOperacao(numero);
        const resultadoSegundaOp = await segundaOperacao(resultadoPrimeiraOp);
        const resultadoTerceiraOp = await terceiraOperacao(resultadoSegundaOp);
        console.log("Resultado das Operações: " +  resultadoTerceiraOp);
    }catch(error){
        console.error(error.message)
    }
}
executarOperacoes(32)

