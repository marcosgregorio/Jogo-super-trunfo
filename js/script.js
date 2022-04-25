var carta1 = {
    nome: "Vergil",
    imagem:"https://sm.ign.com/ign_br/preview/d/devil-may-/devil-may-cry-5-special-edition-vergil-hands-on-preview_5wgw.jpg",
    atributo: {
    ataque: 8,
    defesa: 7,
    magia: 5
    }
};
var carta2 = {
    nome: "Darth Vader",
    imagem:"https://sm.ign.com/t/ign_br/news/o/obi-wan-ke/obi-wan-kenobi-first-look-at-darth-vader-revealed_hsrc.1200.jpg",
    atributo: {
    ataque: 6,
    defesa: 5,
    magia: 8
    }
};
var carta3 = {
    nome: "Doom Slayer",
    imagem:"https://www.gamereactor.pt/media/29/_3112903b.jpg",
    atributo:{
    ataque: 9,
    defesa: 6,
    magia: 1
    }
};
var carta4 = {
    nome: "MC Poze",
    imagem:"https://mundorubronegro.com/wp-content/uploads/2021/03/mc-poze-flamengo-funk.jpeg",
    atributo:{
    ataque: 10,
    defesa: 10,
    magia: 0
    }
};
var carta5 = {
    nome: "Capitão price",
    imagem:"http://static.marriedgames.com.br/925259f5-modern-warfare-price-770x433-1.jpg",
    atributo:{
    ataque: 7,
    defesa: 10,
    magia: 2
    }
};

var carta6 = {
    nome: "Vegeta",
    imagem:"https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/01/cropped-Vegeta-in-Dragon-Ball-Super.jpg",
    atributo:{
    ataque: 7,
    defesa: 6,
    magia: 7
    }
};

var carta7 = {
    nome: "Sorvete, galera.",
    imagem:"https://i.ytimg.com/vi/Dr2VX6tirZg/hqdefault.jpg",
    atributo:{
    ataque: 9,
    defesa: 2,
    magia: 6
    }
};

var cartas = [carta1, carta2, carta3,carta4,carta5,carta6,carta7];
var cartaJogador;
var cartaBot;

function sortearCarta(){

    var numeroCartaBot = parseInt(Math.random() * 7);
    cartaBot = cartas [numeroCartaBot];
   
    
    var numeroCartaJogador = parseInt(Math.random() * 7);
    cartaJogador = cartas [numeroCartaJogador];
    
    while(cartaJogador == cartaBot){
    var numeroCartaJogador = parseInt(Math.random() * 7);
    cartaJogador = cartas [numeroCartaJogador];
    }
    console.log(cartaJogador);
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
   
  exibirCartaJogador();
}

function exibirCartaJogador(){
  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage =`url(${cartaJogador.imagem})`
  var moldura = ' <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoesTexto = "";

  for (var atributo in cartaJogador.atributo){
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo +"'>" + atributo + ":"  + cartaJogador.atributo[atributo] + "<br>"
    }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome}<p>`;
  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function obtemAtributo (){
    
    var radioAtributos = document.getElementsByName("atributo");
    for(let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            console.log(radioAtributos[i].value)
            return radioAtributos[i].value
        }else if (radioAtributos[i].checked == null) {
            console.log(radioAtributos[i].value)
            return null
        }
    }
    }

function jogar(){
    var atributoSelec = obtemAtributo();
    if(atributoSelec != null){
        var elementoResultado = document.getElementById("resultado");
        var valorCartaJogador = cartaJogador.atributo[atributoSelec];
        var valorCartaBot = cartaBot.atributo[atributoSelec];
        
        if (valorCartaJogador > valorCartaBot) {
            resultadoFinal = "<p class='resultado-final'>Vencedor!</p>";
        } else if ( valorCartaJogador < valorCartaBot){
            resultadoFinal = "<p class='resultado-final'>Derrota</p>";
        }else{
            resultadoFinal = "<p class='resultado-final'>Empate</p>";
        }
        elementoResultado.innerHTML = resultadoFinal;
        console.log(cartaBot)
    }
    else{
        var elementoErro = document.getElementById("error");
        elementoErro.innerHTML = "Selecione uma das caixas!";
        elementoErro.style.color = "red";
    }
    document.getElementById("btnJogar").disabled=true;
  exibirCartaMaquina();
  obtemAtributo();
}

function exibirCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage =`url(${cartaBot.imagem})`
    var moldura = ' <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
    var opcoesTexto = "";
  
    for (var atributo in cartaBot.atributo){
        opcoesTexto += "<p name='atributo' value='" + atributo +"'>" + atributo + ":"  + cartaBot.atributo[atributo] + "</p>"
      }
    var nome = `<p class="carta-subtitle">${cartaBot.nome}<p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}