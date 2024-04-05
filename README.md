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
