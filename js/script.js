document.addEventListener('submit', function(e){
  e.preventDefault();

  if(document.getElementById('inputNome').value == ''){
    document.getElementById('msgNome').style.display = 'block';
  }

  if(document.getElementById('inputSobrenome').value == ''){
    document.getElementById('msgSobrenome').style.display = 'block';

    //document.createElement('button')
    //botao.innerHTML = '<type="button" class="btn-close" aria-label="Close">'

    //document.getElementById('msgSobrenome').innerHTML = '<button type="button" class="btn-close" aria-label="Close" id="fechar"></button>';
  }

  if(document.getElementById('inputTelefone').value == ''){
    document.getElementById('msgTelefone').style.display = 'block';
  }

  if(document.getElementById('inputEndereco').value == ''){
    document.getElementById('msgEndereco').style.display = 'block';
  }

  if(document.getElementById('inputComplemento').value == ''){
    document.getElementById('msgComplemento').style.display = 'block';
  }

  if(document.getElementById('inputBairro').value == ''){
    document.getElementById('msgBairro').style.display = 'block';
  }
})

/*
*TODO: fazer funcao retornar um array
*/
function percorreClasse(){
  var classe = document.getElementsByClassName('msgAlerta');
  let arr = [];
  for(var i = 0; i < classe.length; i++){
    classe[i]
    return classe[i];
    /*if(classe[i].style.display == 'block'){
      e.style.display = 'none';
      console.log(i);
    }*/
    //console.log(a);
  }

  return arr[classe];
}

/*
* TODO: deixar mais dinamico
*/
var button = document.getElementById('fecharNome');
button.addEventListener('click', function(){
  document.getElementsByClassName('msgAlerta')[0].style.display = 'none';
  /*if(document.getElementById('inputNome').value == ''){
    percorreClasse();
  }*/
})

var button2 = document.getElementById('fecharSobrenome');
button2.addEventListener('click', function(){
  document.getElementsByClassName('msgAlerta')[1].style.display = 'none';
  /*if(document.getElementById('inputSobrenome').value == ''){
    percorreClasse();
  }else{
    e.style.display == 'block';
    console.log('entrou no else')
  }*/
  
})

var button3 = document.getElementById('fecharTelefone');
button3.addEventListener('click', function(){
  document.getElementsByClassName('msgAlerta')[2].style.display = 'none';
  /*if(document.getElementById('inputTelefone').value == ''){
    percorreClasse();
  }*/
})

var button4 = document.getElementById('fecharEndereco');
button4.addEventListener('click', function(){
  document.getElementsByClassName('msgAlerta')[3].style.display = 'none';
})

var button5 = document.getElementById('fecharComplemento');
button5.addEventListener('click', function(){
  document.getElementsByClassName('msgAlerta')[4].style.display = 'none';
})

var button6 = document.getElementById('fecharBairro');
button6.addEventListener('click', function(){
  document.getElementsByClassName('msgAlerta')[5].style.display = 'none';
})