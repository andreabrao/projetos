/*

Dia 3: Fluxo de decisão
Criar destinos possíveis de um jogo, em que o usuário consiga escolher se deseja seguir área de Front-End ou Back-End;

Caso esteja na área de Front-End, você quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java;

O usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack;

Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer.

*/

console.log("Escolha entre frontend, ou backend!")
var frontend = "0"
var backend = "1"
//frontend
var react = "0"
var vue = "0"
//backend
var javascript = "1"
var chagtag= "0"
//Tecnologias que vai aprender Front-end
var htmlcssejavascript = "0"
//Tecnologias que vai aprender Back-End
var javascriptSQLgit = "1"

if(frontend > 0) {
 console.log("Você escolheu o caminho Front-end, Mais uma coisa você quer aprender React ou quer aprender Vue?")
}else {
  if(backend > 0) {
 console.log("Você escolheu o caminho Back-End, Mais uma coisa você que aprender C# ou quer aprender Javascript?") 
  }
}

//Front-End
if(react > 0) {
  console.log("Você vai seguir se especializando na área de Front-end junto com react")
}else {
  if(vue > 0) {
    console.log("Você vai seguir se especializando na área de Front-end junto com vue")
  }
}

//Back-End
//Front-End
if(javascript > 0) {
  console.log("Você vai seguir se especializando na área de Back-End junto com javascript")
}else {
  if(chagtag > 0) {
    console.log("Você vai seguir se especializando na área de back-end junto com C#")
  }
}

//Tecnologias que vai aprender Front-End
if(htmlcssejavascript > 0) {
  console.log("Que bom você vai aprender HTML, CSS e Javascript sendo Front-end!")
}else {
  if(javascriptSQLgit > 0) {
    console.log("Que bom você vai aprender Javascript, SQL e GIT sendo Back-end!")
  }
}
