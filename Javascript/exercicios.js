// node 16.19.0

var clientes = [
  {
    "id": 1,
    "nome": "Luis Santos Silveira",
    "idade": 18
  },
  {
    "id": 2,
    "nome": "Ricardo Lopes Alves",
    "idade": 30
  },
  {
    "id": 3,
    "nome": "Gustavo Silva Junior",
    "idade": 26
  }
];

var numero = "5(1)9-876-543-21";

/* 
  1) Percorra o objeto clientes e mostre o nome da cada cliente da seguinte maneira:
  “ultimoSobrenome, primeiroNome”;
*/
for (const cliente of clientes) {
  const [firstName = "", secondName = "", lastName = ""] = cliente.nome.split(" ");

  console.log(`${lastName}, ${firstName}`);
}

/* 
  2) Formate a variável “numero” para o seguinte formato: “(XX)_X_XXXX-XXXX”;
*/

numero = String(numero).replace(/\D/g, '').replace(/(\d{2})(\d)(\d{4})(\d{4})/g, '($1)_$2_$3-$4')
console.log(numero);

async function a() {
  b();
  await c();
  await d();
  alertUser("a")
}
a();

function b() {
  return;
  alertUser('b');
}

function c() {
  return new Promise((resolve) => {
    resolve();
    alertUser('c');
  });
}

function d() {
  return new Promise((resolve) => {
    alertUser('d');
  });
}

function alertUser(message) {
  console.log('A função é: ' + message);
}

/* 
  Bônus:
    3) Qual a ordem dos prints no console?
    
      Resposta:
        a ordem de prints é respectivamente:

        A função é: c
        A função é: d

    4) Existe algum erro nesse código? Se sim, comente sobre?
      
      Resposta:
        Analisando o trecho de código é possivel verificar dois erros que impossibilitam receber o resultado esperado, são eles:
        
        o primeiro erro, ocorre na execução da função 'b' na qual a declaração return, responsavel por finalizar a execução de uma função (MDN WEB DOCS, 2023),
        está sendo utilizada antes da chamada da função 'alertUser('b')' fazendo com que o print de responsabilidade da mesma não ocorra.
        A solução para tal problema seria mover a chamada de 'alertUser('b')' da função 'b' para antes do return.
        
        o segundo erro, ocorre na execução da função 'd' que nos retorna uma promise, porém, não executa a função resolve,
        ao não executarmos a função resolve ou a função reject de uma promise, a mesma ficará pendente eternamente (MDN WEB DOCS, 2023),
        isso implica que no trecho de codigo em questão a função assincrona 'a' aguardará eternamente pela resolução da função 'd', 
        fazendo com que a proxima linha que executa a função 'alertUser("a")' jamais seja executada.
        A solução para tal problema seria executar a função 'resolve' da promise retornada pela função 'd'.
        

        referências:
          - MDN WEB DOCS. Return. 2023. Disponível em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return#description. Acesso em: 31 out. 2023.
          - MDN WEB DOCS. Promise() constructor. 2023. Disponível em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise#description. Acesso em: 31 out. 2023.
        
*/