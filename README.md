<h1>JavaScript - Curso em Vídeo</h1>

<h2>Aulas 01 a 04</h2>

Cliente x Servidor

JS é uma tecnologia “client side”

HTML (Hypertext Markup Language) e CSS(Cascading Style Sheets) não são linguagens de programação, o correto é “desenvolver em…”

<h3>JS vs. ECMAScript:</h3>
ECMA - "padronização ISO da Europa", versão padronizada do JS
1.0 - ES5 - ES 20… (por ano)

Java ≠ JavaScript (herdou o nome, mas não são do mesmo criador)

Jscript (micrsoft) ≠ JS (netscape-mozilla) 

Nodejs == máquina que roda JS fora do navegador/no lado do servidor

Tecnologias - nodejs, angular (google), react (meta)/reactnative (mobile), jquery (mozilla), vue, electron (github-interfaces gráficas-vscode…), ionic (sdk-mobile), cordova, phaser (gaming), pixijs, impact etc → conjunto de bibliotecas e frameworks

<h2>Aula 05</h2>

var -> variável (guarda dados)

null -> nulo

= -> atribuição

string -> cadeia de caracteres dentro de "" '' ``

identificador -> nome de cada variável / REGRAS: podem começar com letra, $, _ / não podem começar com números, mas podem ser utilizados / aceita acentos e símbolos / não podem conter espaços / não podem ser palavras reservadas (ex.: function, alert, var...) / case sensitive / utilizar nomes coerentes (ex.: nome, salario, idade...)

não é necessário colocar ; no final de cada linha de código

digitar "node" no terminal do vscode para iniciar o nodejs

ctrl + L limpa o terminal

Tipos primitivos (data types): number (infinity/NaN not a number), string, boolean (true/false), null, undefined, object (Array), function

typeof <i>variável, número, [ ], { }, function( ){ }...</i> - para saber o tipo de dado

<h2>Aula 06</h2>

Principais: number e string

+adição -> concatenação

string + string = concatenação -> Só junta os números, não soma. Precisa fazer a conversão de tipos. 

number + number = soma

Conversão de tipos:
Number.parseInt(n) -> parse é "converter" / Int -> inteiro

Number.parseFloat(n) -> Float -> ponto flutuante / real

Simplificada: Number(n) -> as anteriores "forçam" a conversão

String(n) / n.toString()

CTRL + Shift + ' -> abre novo terminal

Formatando strings: template string -> `crase ${ } crase`  " -> ${ } == placeholder

s.length -> atributo -> conta quantos caracteres a string tem (<i>s</i> é a variável)

s.toUpperCase() -> MAIÚSCULAS

s.toLowerCase() -> minúsculas

ln -> line / quebra de linha ex.: document.writeln

"menor br/ maior" break row (html)

Formatando números: n1.toFixed(2) fixo com 2 casas -> método interno

n1.toFixed(2).replace('.', ',') troca ponto por vírgula

n1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) -> string localizada / { } objeto -> ex.: 'R$ 1.545,50'

<h2>Aula 07</h2>
Operadores: aritméticos, atribuição, relacionais, lógicos, ternário...

ex.: typeof n

Aritméticos -> cálculos -> +, -, *, /, % resto da divisão inteira, ** potência -> binários

Precedência de operadores -> ex.: em 5 + 3 / 2, a divisão será feita antes da soma, o resultado será 6.5. (5 + 3) / 2 é 4

Ordem de precedência: ( ) -> ** -> * / % (a prioridade é do que vier primeiro) -> + -

A linguagem só dá erro quando for erro sintático (sintax error)

Atribuição -> simples: = (recebe valores)

<strong>n</strong> = <strong>n</strong> + 4 -> <strong>n</strong> += 4 (autorreferência) -> simplificador

-=, *=, /=...

Incremento -> ++, -- (+=, -=) -> simplificador

Pré-incremento -> ++n (soma antes, o padrão é depois)

<h2>Aula 08</h2>
 Relacionais -> >, <, >=, <=, ==, != -> o resultado será sempre verdadeiro ou falso (booleano) -> não tem uma ordem, é o que vier primeiro

 5 == 5 -> true e 5 == '5' -> true

 Identidade (igualdade restrita): === (mesmo valor e mesmo tipo), !==...

 5 === '5' -> false
 
 Lógicos -> ! negação (operador unário -> um operando -> true / false), && conjunção E (operador binário -> 2 valores lógicos), | | disjunção OU (operador binário -> 2 valores lógicos)

 Ordem de execução dos oper. lógicos: NÃO -> E -> OU

 true && true -> true

 true && false -> false

 false && false -> false

 false && true -> false

 false && false -> false



 true | | true -> true

 true | | false -> true

 false | | true -> true

 false | | false -> false

 a > b && b % 2 == 0
 -> false  AND true == false

 Ordem de precedência: Aritméticos -> Relacionais -> Lógicos

 Ternários -> ? e : dentro de uma mesma expressão. é sempre o último na ordem.

 3 blocos/operandos -> teste ? true : false
 
 teste ? true (o que vai acontecer se o teste lógico for verdadeiro) : false (o que vai acontecer se o teste lógico for falso)


ex.: média >= 7.0 ? 'Aprovado' : 'Reprovado'

Atalhos: setas cima/baixo navegam/repetem as linhas de comando 

ex.: var idade = 19

var r = idade >= 18 ? 'MAIOR' : 'MENOR' -> true ('MAIOR')

<h2>Aula 09</h2>

DOM - Documento Object Model -> vertente web do js, ferramenta dentro do navegador, conjunto de objetos do js no tratamento de componentes visuais.
Conjunto de objetos dentro do navegador que dá acesso aos componentes internos do website (não funciona dentro do NodeJS).

Árvore DOM - estrutura 

raiz: window (objeto onde fica tudo dentro do js)

-> location: url, qual a pág. atual/anterior...

-> document (parent): documento atual -> html (child) (parent) --> head (child) ---> meta e title --> body (child) ---> h1, p, p (----> strong), div

-> history: guarda de onde veio e aonde vai...

são ELEMENTOS (parent/child)

Métodos de acesso: 1. por Marca (Tag) document.getElementsByTagName( ) - para muitos objetos; 2. por ID document.getElementById( ) - para um objeto; 3. por Nome document.getElementsByName( ) - para muitos objetos; 4. por Classe document.getElementsByClassName( ); 5. por Seletor (CSS) querySelector( ) querySelectorAll( ) - plural.

<h2>Aula 10</h2>

Eventos DOM: tudo o que pode acontecer com o elemento; mais comuns -> eventos de mouse ex.: mouseenter, mousemove, mousedown, mouseup, click, mouseout...

javascript dom events list https://yari-demos.prod.mdn.mozit.cloud/pt-BR/docs/Web/Events

touch events -> touchscreen

"disparar"

Funções: conjunto de linhas/códigos que vão ser executadas só quando o evento ocorres. 

linhas ->  bloco
function ação(parâmetros){ 
    bloco
}

"function" nomeia

Eventos podem ser configurados diretamente no HTML ou no script.

Listeners -> também dispara eventos -> usado para simplificar -> ligação entre HTML e JS. Ex.: area.addEventListener('click', clicar)

Detecção de erros: botão direito -> Inspecionar (devtools) ->  x (em vermelho) erro

<h2>Aula 11</h2>

Condições

Bifurcações

Desvio condicional

if -> losango

Tipos de condição:
if (condição) {
    true
} -> condição simples

if (condição) {
    true -> bloco
} else {
    false
}  -> condição composta

Extensão NODE EXEC (foguete verde/miramac) -> atalho f8 para executar node js no vscode

Indentação (recuo/4 espaços ou tab) -> organização do código

<h2>Aula 12</h2>

Condições Aninhadas: if..elseif..else (uma condição dentro da outra)

Ex.: if (cond1) {
    bloco1
} else {
    if (cond2) { // níveis
        bloco2
    } else {
        bloco3
    }
}

Node Exec -> selecionar uma parte do código e apertar f8 executa só o trecho selecionado

horário -> var agora = new Date()
var hora = agora.getHours()

Condição Múltipla: serve para valores fixos, aceita valores além de 'sim' e 'não'. A expressão testa vários valores e depois retorna ao fluxo do programa.

switch (expressão) { // bloco relacionado
    case valor1:
    //comandos
    break
    case valor2:
    //comandos
    break
    case valor3:
    //comandos
    break
    default: // padrão, como se fosse o 'else'
    //comandos
    break
}

dentro de cada bloco, temos que colocar o comando 'break' -> OBRIGATÓRIO

para não executar todos os comandos até achar um 'break'; quando estiver satisfeito, ele já irá parar

<h2>Aula 12 ex</h2>

Atalho para criar CSS dentro do HTML com VS:
<  link rel="stylesheet" href="estilo.css"  >
clicar em "estilo.css" segurando o ctrl -> Create File

File -> Save All (ctrl + K S)

Extensão para ver no navegador -> Live Server
Ritwick Dey

barra do lado esquerdo da cor rgba -> transparência

script:src -> em arquivos separados (externo)
clicar em "script.js" segurando o ctrl -> Create File

msg.innerHTML - > substitui texto

PS -> Save for Web -> PNG-24

F2 no vscode -> 'Rename'

Em input:radio, "name" tem que ser igual nas opções; porém, não podem ser selecionados por id ou selector no script.

<h2>Aula 13</h2>

Estruturas de controle: sequências, condições (losango -> if/else if/ else), repetições(laços -> faz um loop ao invês de ir ao final enquanto WHILE a condição for verdadeira, só finaliza quando for falsa) do..while

while (condicao) {
    bloco
} -> WHILE: estrutura de repetição com teste lógico no início

function comerPizza() {
        comerFatia()
        comerFatia()
        comerFatia()
        comerFatia()
        comerFatia()
        comerFatia()
        comerFatia()
        comerFatia()
} //sem while

function comerPizza() {
    while (temFatia()) {
        comerFatia()
    }
}

Pode fazer o teste e depois executar o bloco, ou pode executar o bloco e só depois fazer o teste.

do {
    bloco
    while(condicao)
} -> DO..WHILE: estrutura de repetição com teste lógico no final

<h2>Aula 14</h2>

Estrutura de repetição com variável de controle FOR -> exágono irregular (inicialização e teste lógico, depois executa o bloco, faz o loop e teste lógico de novo, volta e incrementa para fazer o teste lógico novamente, falso encerra)

for (inicio; teste; incr) {
    bloco
}

WHILE
var c = 1 
while (c <= 10) {
    bloco
    c++
}

FOR
for (var c=1;c<=10;c++) {
    bloco
}

MODO DE DEPURAÇÃO 

Run -> Start Debugging

bolinha vermelha nas linhas, lado esquerdo -> break point

WATCH -> monitorar uma expressão

Emoji: U+1F970 -> `/u{1F970}` em js

"Em HTML, document.body.appendChild(msg) é uma instrução em JavaScript que adiciona um elemento msg como filho do elemento <body> do documento atual. Isso significa que o elemento msg será inserido no final do conteúdo da página, logo antes do fechamento da tag </body>."

log.appendChild(pre), isso se refere a um método de adicionar um elemento pre como filho de um elemento log em JavaScript.

+= -> Para números: Se ambos os operandos forem números, o += é usado para adicionar o valor do operando à direita ao valor do operando à esquerda e atribuir o resultado à variável à esquerda. 
Para strings: Se pelo menos um dos operandos for uma string, o += é usado para concatenar a string à direita à string à esquerda. 

<h2>Aula 15</h2>

Variáveis Simples -> Armazenam um valor por vez

Variáveis Compostas (Vetor/Array) -> Armazenam vários valores em uma mesma estrutura

Cada um recebe índice/chave -> posição dentro do vetor

Ex.: vaga a *array/vetor* = ["carro1", "carro2", "carro3 *conteúdo/valor*" *elementos*]

carro1 -> [0] *índice/chave*
carro2 -> [1]
carro3 -> [2]

Cada elemento é composto por seu valor e uma chave de identificação

Ex. 2: let num = [ , , ]

num 

[0] 5

[1] 8
 
[2] 4

-> vetor de 3 elementos (0, 1 e 2), quem tem os valores 5, 8 e 4

Para acrescentar a vaga 3/mais um espaço/valores ao array, basta adicionar:

num[3] = 6

Comando "push" não especifica a posição:

num.push(7)

Comando "length" é utilizado para saber o comprimento:

num.length -> sem parênteses no JS -> é um atributo -> resposta == 5 elementos

Método interno "sort" coloca os elementos em ordem crescente:

num.sort()

Estrutura de repetição "for" tem 3 elementos -> inicialização, teste lógico e incremento

Código tradicional do percurso em vetores (percurso para exibição no vetor):
for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}

JS, a partir das versões mais recentes do ECMAScript, simplificou:
for(  in  ) {

}
*É otimizado para variáveis compostas e objetos*

for(let post in num) { //para cada posição em/dentro de num, mostre num[pos]
    console.log(num[pos])
}

Todo array em JS é um object

Buscar valores dentro de um vetor:
num.indexOf(7) -> procura onde está o valor 7
num.indexOf(3) -> retorna -1 porque não há valor 3 no array
retorna a chave/index 3 para num 4, 5, 6, 7, 8