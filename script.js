var carta1 = {
    nome: "Bulbassauro",
    img: "https://pbs.twimg.com/media/Cq_3PGuXgAATWJW.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      poder: 6
    }
  };
  
  var carta2 = {
    nome: "Shang Chi",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1riibpetwVopqgTi03aplMffO3XJmh_sXQA&usqp=CAU",
    atributos: {
      ataque: 8,
      defesa: 9,
      poder: 10
    }
  };
  
  var carta3 = {
    nome: "Spider-man",
    img: "https://br.web.img2.acsta.net/newsv7/21/02/05/13/53/2297751.jpg",
    atributos: {
      ataque: 10,
      defesa: 7,
      poder: 0
    }
  };
  
  var carta4 = {
    nome: "Darth Vader",
    img: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/09/Darth-Vader.jpg",
    atributos: {
      ataque: 6,
      defesa: 5,
      poder: 10
    }
  };
  
  var carta5 = {
    nome: "Naruto",
    img: "https://cupulatrovao.com.br/wp-content/uploads/2020/11/naruto-bravo.jpg",
    atributos: {
      ataque: 9,
      defesa: 8, 
      poder: 7
    }
  };
  
  var  carta6 = {
    nome: "Goku",
    img: "https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/07/dragon-ball-super-1200x900-1.jpg",
    atributos: {
      ataque: 9,
      defesa: 9,
      poder: 10
    }
  };
  
  var carta7 = {
    nome: "Saitama",
    img: "https://criticalhits.com.br/wp-content/uploads/2020/09/Saitama.jpg",
    atributos: {
      ataque: 10,
      defesa: 10,
      poder: 0
  }
  }
  
  var carta8 = {
    nome: "Ichigo",
    img: "https://criticalhits.com.br/wp-content/uploads/2021/04/ichigo-hollow-01-910x546.jpg",
    atributos: {
      ataque: 7,
      defesa: 8,
      poder: 9
    }
  }
  var  carta9 = {
    nome: "Vegeta",
    img: "https://www.einerd.com.br/wp-content/uploads/2020/06/Dragon-Ball-Super-Vegeta-capa.jpg",
    atributos: {
      ataque: 10,
      defesa: 7,
      poder: 9
    }
  }
  var carta10 = {
    nome: "Hulk",
    img: "https://static.hitek.fr/img/actualite/ill_m/712233417/immortalhulkflatlinefeature.jpg",
    atributos: {
      ataque: 10,
      defesa: 10,
      poder: 10
    }
  };

  var carta11 = {
    nome: "Jiraya",
    img: "https://miro.medium.com/max/1032/1*428hHEujs3YDwGWiCxFezw.jpeg",
    atributos: {
      ataque: 9,
      defesa: 9,
      poder: 9
    }
  };
  var carta12 = {
    nome: "Batman",
    img: "https://static1.purebreak.com.br/articles/4/10/07/34/@/409905-celebre-o-batman-day-descobrindo-qual-ve-amp_article_image-2.jpg",
    atributos: {
      ataque: 10,
      defesa: 8,
      poder: 0
    }
  };
  var carta13 = {
    nome: "Tsunade",
    img: "https://sm.ign.com/ign_br/screenshot/default/tsunade-naruto_zuv3.jpg",
    atributos: {
      ataque: 10,
      defesa: 8,
      poder: 9
    }
  };
  var carta14 = {
    nome: "Superman",
    img: "https://multiversonoticias.com.br/wp-content/uploads/2021/08/jonathan-kent-superman-gay-1024x512.jpg",
    atributos: {
      ataque: 10,
      defesa: 10,
      poder: 9
    }
  };
  var carta15 = {
    nome: "Yoga de Cisne",
    img: "https://s.aficionados.com.br/imagens/hyoga.jpg",
    atributos: {
      ataque: 8,
      defesa: 7,
      poder: 8
    }
  };
  var carta16 = {
    nome: "Sasuke",
    img: "https://borutoexplorer.com.br/wp-content/uploads/2021/03/Sasuke-rinnegan-anime.jpg",
    atributos: {
      ataque: 9,
      defesa: 7,
      poder: 10
    }
  };
  
  var cartasDoJogador = [
   carta2, carta4, carta6, carta8, carta10, carta12, carta14, carta16
  ];

  var cartasDaMaquina = [
    carta1, carta3, carta5, carta7, carta9, carta11, carta13, carta15
  ]

  var fundoBranco = "https://lef.com.br/uploads/produtos/Ativo%201@4x%20(1).png";
  
  var cartaMaquina = 0;
  var cartaJogador = 0;
  var numeroCartaJogador = 0;
  var numeroCartaMaquina = 0;

  var qtdeCartasJogador = document.querySelector("#quantidade-cartas-jogador");
  qtdeCartasJogador.innerHTML = `Seu deck tem ${cartasDoJogador.length} cartas.`
  var qtdeCartasMaquina =document.querySelector("#quantidade-cartas-maquina");
  qtdeCartasMaquina.innerHTML = `O deck da máquina tem ${cartasDaMaquina.length} cartas`

  var divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.style.opacity = 0;
  
  function sortearCarta() {
    var resultado = document.querySelector("#resultado")
    resultado.innerHTML = ""
    divCartaMaquina.style.opacity = 0;

    

    numeroCartaMaquina = parseInt(Math.random() * cartasDaMaquina.length);
    cartaMaquina = cartasDaMaquina[numeroCartaMaquina];
    
    
    numeroCartaJogador = parseInt(Math.random() * cartasDoJogador.length);
    
    
    cartaJogador = cartasDoJogador[numeroCartaJogador];

    
    
    document.querySelector("#btnSortear").disabled = true;
    document.querySelector("#btnJogar").disabled = false;

    // exibirOpcoes();
    exibirCartaJogador();
    
    
    
  }

  

  function obterAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for(var i = 0; i < radioAtributos.length; i++) {
        if(radioAtributos[i].checked) {
            return radioAtributos[i].value;
        }
    }
  }

  function jogar() {
      var atributoSelecionado = obterAtributoSelecionado();
      
    
      var resultado = document.querySelector("#resultado");
      var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
      var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

      
      if(valorCartaJogador > valorCartaMaquina){
          
          resultado.innerHTML = `<p class="resultado-final">
                       Você escolheu ${atributoSelecionado} <br>
                       Seu atributo ${atributoSelecionado} é: ${valorCartaJogador} <br>
                       O atributo ${atributoSelecionado} da máquina é: ${valorCartaMaquina} <br>
                       Você venceu!!

                       A carta da máquina ${cartaMaquina.nome} agora é sua
                       </p>`

        // cartasDaMaquina.splice(cartaMaquina, 1);
        cartasDaMaquina.splice(numeroCartaMaquina, 1 );
        cartasDoJogador.push(cartaMaquina);
        
        qtdeCartasJogador.innerHTML = `Seu deck tem ${cartasDoJogador.length} cartas.`
        
        qtdeCartasMaquina.innerHTML = `O deck da máquina tem ${cartasDaMaquina.length} cartas`
        console.log(cartasDoJogador);
        console.log(cartasDaMaquina);
        
      } else  if(valorCartaJogador < valorCartaMaquina) {
        
        resultado.innerHTML = `<p class="resultado-final">
                     Você escolheu ${atributoSelecionado} <br>
                     Seu atributo ${atributoSelecionado} é: ${valorCartaJogador} <br>
                     O atributo ${atributoSelecionado} da máquina é: ${valorCartaMaquina} <br>
                    
                     Você perdeu!!

                     Sua carta ${cartaJogador.nome} agora é dá máquina.
                     </p>`

        // cartasDoJogador.splice(cartaJogador, 1);
        cartasDoJogador.splice(numeroCartaJogador, 1);
        cartasDaMaquina.push(cartaJogador);
        qtdeCartasJogador.innerHTML = `Seu deck tem ${cartasDoJogador.length} cartas.`
        
        qtdeCartasMaquina.innerHTML = `O deck da máquina tem ${cartasDaMaquina.length} cartas`
        console.log(cartasDaMaquina);
        console.log(cartasDoJogador);

        
      } else {
        
        resultado.innerHTML = `<p class="resultado-final">
                     Você escolheu ${atributoSelecionado} <br>
                     Seu atributo ${atributoSelecionado} é: ${valorCartaJogador}<br>
                     O atributo ${atributoSelecionado} da máquina é: ${valorCartaMaquina}<br>
                     
                     Deu empate!!
                     </p>`

        
      }

      document.querySelector("#btnSortear").disabled = false;
      document.querySelector("#btnJogar").disabled = true;
      exibirCartaMaquina();

    // placar(valorCartaJogador, valorCartaMaquina)
  }

  function placar(a, b) {
      var jogador = 0
      var maquina = 0
      

      if(a > b) {
          jogador++
      } else if (a < b) {
          maquina++
      }

      console.log(jogador);
      console.log(maquina);
  }

  function exibirCartaJogador() {
    var divCartaJogador = document.querySelector("#carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`;
    
    
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png"
    style=" width: inherit; height: inherit; position: absolute;">`
    var tagHTML = `<div id="opcoes" class="carta-status">`

    var opcoesTexto = "";
    for(var atributo in cartaJogador.atributos) {
      opcoesTexto += `<input type="radio" name="atributo" id="atributo" value="${atributo}">${atributo} [${cartaJogador.atributos[atributo]}] <br>`
    }
    var nome = `<p class = "carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + `</div>`
    
  }

  function exibirCartaMaquina() {
    var divCartaMaquina = document.querySelector("#carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`;
    divCartaMaquina.style.opacity = 1
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png"
    style=" width: inherit; height: inherit; position: absolute;">`
    var tagHTML = `<div id="opcoes" class="carta-status">`

    var opcoesTexto = "";
    for(var atributo in cartaMaquina.atributos) {
      opcoesTexto += `<p id="atributo" value="${atributo}">${atributo} [${cartaMaquina.atributos[atributo]}]</p> `
    }
    var nome = `<p class = "carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + `</div>`
    
  }