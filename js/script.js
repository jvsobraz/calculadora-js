
// //Diferença entre getElementById e querySelector
// //getElementById retorna um elemento do DOM
// //querySelector retorna um elemento do DOM que corresponde ao seletor CSS

// //Recuperando elementos do DOM com getelementById
// //const elementoForm = document.getElementById('frmCalc');
// //elementoForm.method = 'POST';

// //Recuperando elementos do DOM com querySelector
// //const elementoForm = document.querySelector('#frmCalc');
// //console.log(elementoForm.method);
// //Recuperando elementos do DOM com querySelector
// //const elementoResultado = document.querySelector('#frmCalc input');
// //console.log(elementoResultado.value);
 
// //Botão1 adiciona um valor ao input
// const btn1 = document.querySelector('#numero1Id');


// //Atrelar ao evento click o método que será executado
// btn1.addEventListener('click', function(event){
//     //Recuperando o valor do input
//     const elementoResultado = document.querySelector('#frmCalc input');
//     //Adicionando o valor do botão ao input
//     elementoResultado.value = '1';
// });

// //Botão2 adiciona um valor ao input
// const btn2 = document.querySelector('#numero2Id');

// btn2.addEventListener('click', function(event){
//     //Recuperando o valor do input
//     const elementoResultado = document.querySelector('#frmCalc input');
    
//     const operacao = document.querySelector('#operacoesId');
//     if(operacao.value == 'soma'){
//         elementoResultado.value = '2 + ' + elementoResultado.value
//     }else if(operacao.value == 'subtracao'){
//         elementoResultado.value =  '2 - ' + elementoResultado.value
//     }else if(operacao.value == 'multiplicacao'){
//         elementoResultado.value =  '2 x ' + elementoResultado.value
//     }else if(operacao.value == 'divisao'){
//         elementoResultado.value = '2 / ' + elementoResultado.value
//     }
    
// });   

//REcuperar elementos do DOM com querySelector
//const elementoForm = document.querySelector('#frmCalc');
// document.querySelector('#numero1Id').addEventListener('click', function(){
//     minhaFuncao("EventListener")
// })

//Function em javascript é uma função que pode ser chamada de várias formas
//Functions são escritas entre parênteses e são globais ou locais, o mais comum é global.
// function minhaFuncao(){
//     console.log('Executando minha função');
// }

//Passando parâmetros para a função
// function minhaFuncao(origem){
//     console.log('Executando minha função : ' +  origem);
// }

document.querySelector('#numero1Id').addEventListener('click', () =>{
    //Recuperar o valor do input button1 e colocar no visor
    // const visor = document.querySelector('#visorId');
    // if(visor.value == '0'){
    //     visor.value = '1';
    // }else{
    //     visor.value += this.value
    // }

    //Recuperar o valor do input button1 e colocar no visor
    colocarNoVisor(this.value);

})

document.querySelector('#numero2Id').addEventListener('click', function(){
    //Recuperar o valor do input button2 e colocar no visor
    // const visor = document.querySelector('#visorId');
    // if(visor.value == '0'){
    //     visor.value = '2';
    // }
    // else{
    //     visor.value += this.value
    // }

    //Chamando a função para colocar o valor no visor
    colocarNoVisor(this.value);

})

document.querySelector('#btnSomaId').addEventListener('click', () =>{
    //colocarOperador(this.value);
    document.querySelector('#numero1Id').value += 1
})

//Criar uma função para colocar o valor no visor
function colocarNoVisor(valor){
    //Vamos passar o value dos inputs button1 e button2 para o visor
    const visor = document.querySelector('#visorId');
    if(visor.value == '0'){
        visor.value = valor;
    }
    else{
        visor.value += valor
    }
}

function colocarOperador(valor){
    const visor = document.querySelector('#visorId');
    if(valor != visor.value.charAt(visor.value.length - 1)){
        visor.value += valor;
    }
}

// let nome = "Alexandre Carlos de Jesus"
// console.log(nome)

// //Imprimindo posições de uma string
// console.log(nome.charAt(1))

// //Retornando o tamanho de uma String
// console.log(nome.length)

// //Pegando a última posição da String
// console.log(nome.charAt(nome.length - 1))

// //Split - Divide uma String em um Array
// //Split utiliza um token para separar a String
// let nomes = nome.split("a")

// //Imprimindo o Array
// console.log(nomes)