//<--gera comentários de linha no JS que é ignorado pela engine 

console.log('Hello world');
console.log('linha 1');
//console.log ('linha 2');
console.log('linha 3');
console.log('linha 4');
console.log('linha 5');
// será ignorado


/* 
blocos  de  comentário



*/
let nome = 'Johnson'; //string


console.log(nome, 'nasceu em 1984');
console.log('Em 2000', nome, 'conheceu Maria');
console.log(nome, 'Casou-se com Maria em 2012 ');
console.log('Maria tece 1 filho com', nome, 'em 2015.');
console.log('O filho de', nome, 'se chama Eduardo');


/* não podemos criar constantes com palavras reservadas
 constantes precisam ter nomes significativos, ou seja, correlata com o que está executando
 não podemos começar o nome de uma constantes com o número
 nome das constantes não podem ter espaços e nem -
 ultilizamos camelCase como padrão para comunicação
 Exemplo nomeCompletoDoCliente = "Matheus Afonso";
 não podemos modificar o valor
 Case-sensitive, ou seja, mauisculas e minusculas fazem diferença
 constantes devem ser declaradas na hora da criação da mesma */

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTripilcado = resultado * 3;
resultadoTripilcado = resultadoTripilcado + 5

console.log(typeof primeiroNumero);
console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTripilcado);

/*
Matheus Afonso tem 20 anos, pesa 90 kg
tem 1.9 de altura e seu IMC é 171
Matheus nasceu em 2001*/

const nome = 'Matheus Afonso';
const idade = 20;
const peso = 90;
const altura = 1.90;
let indiceMassaCorporal = 24.930747922437675;
let anoNascimento = 2001;


imc = peso / (altura * altura);

console.log(indiceMassaCorporal);

anoNascimento = 2021 - idade;

console.log(anoNascimento);

console.log(`${nome}, tem ${idade} anos de idade, pesa ${peso} kg tem ${altura} de altura e seu Indice de Massa Corporal é de: ${indiceMassaCorporal} Matheus nasceu em ${anoNascimento}.`);


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//opereadores básicos + - * /

// não podemos criar variaveis com palavras reservadas
// variaveis precisam ter nomes significativos, ou seja, correlata com o que está executando
// não podemos começar o nome de uma variavel com o número
// nome das variaveis não podem ter espaços e nem -
//ultilizamos camelCase como padrão para comunicação
//Exemplo nomeCompletoDoCliente = "Matheus Afonso";
// Case-sensitive, ou seja, mauisculas e minusculas fazem diferença



var nome = 'Matheus Afonso';
var nome = 'afonso';
console.log(nome);


/* let não deixa redeclarar a variavel*/



const nome = 'Matheus Afonso';
const nome1 = "Matheus Afonso";
const nome2 = `Matheus Afonso`;

//number
const num = 10;
const num1 = 10.52;

//undefined = não aponta para nada na memória 

let nomeEstudante;

//null = não aponta para nada na memória 
let corDeFundo = null;


// duas opções true ou false, boolean = valor lógico 
const situacaoDoAluno = nome
const aprovado = true

//saber o tipo da linha

console.log(typeof nome);

/* Aritiméticos
+ - SOMA
- - SUBTRAÇÃO
/ - DIVISÃO
** (Potência)
% RESTO DA DIVISÃO
*/

const num1 = 5;
const num2 = 10;

console.log(num1 + num2);

let contador = 1;
contador++; //2
contador++; //3

//////////////////////////////////////////////////////////////////////////////

console.log(contador);

let contadorTeste = 2;          //Não é uma boa prática fazer dessa forma

console.log(++contadorTeste);

/* Incremento ++
   Decremento --
*/

const passo = 50
let contadorPula = 2;

contadorPula += passo;


contadorPula += 2;
contadorPula += 2;
contadorPula += 2;

console.log(contadorPula);

// NaN = Not a Number

const num3 = 10;
const num4 = parseInt('35'); // converte apenas para numeros inteiros

console.log(num3 + num4);

const num5 = 10;
const num6 = parseFloat('35.5'); // converte tanto inteiros quanto flutuantes

console.log(num5 + num6);

const num7 = 10;
const num8 = Number('35.3'); //    converte tanto inteiros quanto flutuantes

console.log(num7 + num8);


//////////////////////////////////////////////////////////////////////////////////////////////////////////



//PADRAÕ JS PARA CONTAS IEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1 

/*num1 = ((num1 * 100) + (num2 * 100)) / 100;
num1 = ((num1 * 100) + (num2 * 100)) / 100; // mais complexo que as funções
num1 = ((num1 * 100) + (num2 * 100)) / 100;*/

num1 = parseFloat(num1.toFixed(2));
num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));

//console.log(num1.toString() + num2); //concatenação
//num1 = num1.toString();
//console.log(num1.toString(2))
//console.log(typeof num1);
//console.log(num2.toFixed(2));
//console.log(Number.isInteger(num1)); //true ou false se for numero inteiro ou não
//let temp = num1 *'5';
//console.log(Number.isNaN(temp)); //sempre que for NaN vai me retornar true   //NÃO FAZER CONTA COM STRINGS

////////////////////////////////////////////////////////////////////////////////////////////

let num1 = 9;
console.log(num1 ** (1/2)); // raiz quadrada

//console.log(100 / 0); //não causa erro como em outras linguagens, e tem valor verdadeiro (true)


//let num2 = Math.floor (num1); //arredonda para baixo
//let num2 = Math.ceil (num1); //arredonda para cima
//let num2 = Math.round(num1); // arrendonda para o mais próximo 
//console.log(Math.max(1,2,3,4,5,-10,-50)); //maior numero
//console.log(Math.min(1,2,3,4,5,-10,-50)); // menor numero da sequencia
const aleatorio =  Math.round(Math.random() * (10 - 5) + 5); // entre 10 e 5
console.log(aleatorio);

console.log(Math.PI);
console.log(Math.pow(2, 10));

console.log(2 ** 10); // boa pratica 

//////////////////////////////////////////////////////////////////////////////////////////////

//array como uma lista de coisas
//O ideal é apenas um tipo de informação por array                                     0     1      2
//Arrays diferentemente de stings são indexados por elemento EXEMPLO: const alunos = ['Luiz, Maria, João'];



const nome = 'Matheus Afonso'
const alunos = ['Luiz', 'Maria', 'João'];

console.log(typeof alunos); // array é um objeto 
console.log(alunos instanceof Array); //bolean 

//Isso pode

    const array = [1, 2, 3, 4, 5];
    array.pop();
    array[0] = 1024;
    console.log(array); // [ 1024, 2, 3, 4 ]
     

//Isso NÃO pode

    const array = [1, 2, 3, 4, 5];
    array = 'Legal'; // Assignment to constant variable.



/*
alunos.push('Luiza');
alunos.push('Matheus'); //melhor forma de adicionar elementos numa Array

console.log(alunos.slice(0, 3));*/

//delete alunos[1];
//console.log(alunos[50]);

/*const removido = alunos.pop(); //remove o ultimo elemento da array//.shift() remove o primeiro elemento
console.log(alunos);
console.log(removido);*/




//alunos.unshift('Luiza'); //adiciona ao inicio
//alunos.unshift('fabio'); //fabio sera mostrado primeiro no indice 0



//alunos.push('Igor'); //colocar no final


//alunos[alunos.length] = 'Fabiana'
//alunos[alunos.length] = 'Fabiana' //colocar no final




//alunos[0] = 'Matheus'; //posso alterar elementos nas arrays desta forma   //Altera elementos
//alunos[3] = 'Jessica'; //adicionar elementos desta forma




//console.log(alunos[0]);

///////////////////////////////////////////////////////////////////////////////////////////

// funções executam ações 
                    //Arron function (sem ultilizar a palavra function) simplificação

const raiz = (n) => n ** 0.5; 

console.log(raiz(9));

                                                    //não é bom criar uma função que faz varias coisas


/*const raiz = function(n) {
    return n ** 0.5;                //função que mostra raiz quadrada, (function sozinha não precisa marcar com ;) 

};

console.log(raiz(9));*/

///////////////////////////////////////////////////////////////////////////

const pessoa1 = {
    nome: 'Matheus',
    sobrenome: 'Afonso',
    idade: 20,

    fala() {
        console.log(`${this.nome} está falando oi, minha idade atual é ${this.idade} `);
    },

    incrementaIdade(){
        ++this.idade;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();










                        //parametros
/*function criaPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
                            //argumentos = valor passado para o parametro
const pessoa1 = criaPessoa('Matheus', 'Afonso', 20);
const pessoa2 = criaPessoa('Fabiana', 'Celentano', 22);
const pessoa3 = criaPessoa('Gabriel', 'Marins', 24);
const pessoa4 = criaPessoa('Igor', 'Silva', 19);
const pessoa5 = criaPessoa('Rafael', 'Santos', 16); 

console.log(pessoa1.nome);
console.log(pessoa2.nome, pessoa2.idade);*/

//////////////////////////////////////////////////////////////////////////////////////

// Primitivos - string, number, boolean, 
//undefined, null (bigint, symbol) - imutaveis, são copiados

// dados por referencia são mutaveis - Array, object, function - Passsados por referencia, aponta aos mesmos valores

let a = [1, 2, 3];
let b = [...a]; // copia o valor de uma Array
let c = b;

b.push(4);

console.log(a,b);

/////////////////////////////////////////////////////////////////////////////////////////////////

// operadores de comparação
/*
> maior que
>= maior que ou igual bolean
< menor que
<= menor que ou igual
== igualdade (valor) não se usa
=== igualdade estrita (valor e tipo)
!= diferente não usa
!== diferente estrito (valor e tipo)
 */
const num1 = 10;
const num2 = 10;
const comp = num1 === num2;
console.log(comp);


/*
Operadores lógicos
&& -> AND -> E -> para retornar true todos os valores da expressão precisão ser verdadeiros Ex: console.log(true && true && true && false);
|| -> OR -> OU -> se qualquer expressão for verdadeiro, retorna verdadeiro Ex: const expressaoOr = true || false;
! -> NOT -> NÃO ->  valor = true, negando ações. console.log(!!false); inverte duas vezes
*/
 // 
/*const usuario = 'Matheus'; //form da pagina EXEMPLO base de dados
const senha = '123456';

const vaiLogar = usuario === 'Matheus' && senha === '123456';

console.log(vaiLogar);*/

///////////////////////////////////////////////////////////////////////////////////////////////////

/* 
&& retorna falso se falso na expressão, se não encontra nada falso retorna a ultima. console.log('Matheus' && 0 && 'Maria'); 
|| retorna verdadeiro se verdadeiro na expressão
FALSY 
false -> 0, stings vazias, null, undefined NaN
*/

const corUsuario = null; // se o usuario selecionar vermelho, apareceria vermelho
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

const a = 0;
const b = null;
const c = 'false'; //string valor verdadeiro
const d = false;
const e = NaN;

console.log(a || b || c || e);

////////////////////////////////////////////////////////////////////////////////////////////


//if = Se (numero >=0 && numero <=5) isso ocorrer, faça isso {código}
//else = se não, então faça isso {código}

/*const numero = 10;

if (numero >=0 && numero <=5) {
    console.log('O número está entre 0 e 5');
} else {
    console.log('O numero não está entre 0 e 5');
}*/

const numero = 10;

if (numero >=0 && numero <=5) {
    console.log('O número está entre 0 e 5');
} else if (numero >= 6 && numero <=8) {
    console.log('O numero está emtre 9 e 11');
} else if(numero >= 9 && numero <=11) {                                // vai entregar os valores verdadeiros e só executa até a 1° verdadeira econtrada
    console.log('O numero está entre 9 e 11');
} else {
    console.log('o numero está entre 0 e 11');
}







