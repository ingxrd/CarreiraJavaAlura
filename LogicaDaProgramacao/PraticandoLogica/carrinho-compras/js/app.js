//  Extração das informaçoes da HTML

// produto (está no fomrulário)
// quantidade
// lista-produtos
// valor-total

let totalGeral = 0;


function adicionar() {

  // //  Extração das informaçoes da HTML

  let produto = document.getElementById('produto').value;
  let nomeProduto = produto.split('-')[0];
  let valorUnitario = parseFloat(produto.split('R$')[1]);
  let quantidade = document.getElementById('quantidade');
  // calculo da quantidade total do produto
  let precoTotalProduto = quantidade.value * valorUnitario; // funcionando 100%

  // Agora vou adicionar o meu produto na lista
  let carrinho = document.getElementById('lista-produtos');
  carrinho.innerHTML += `
  <section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${precoTotalProduto}</span>
  </section>`;

  // calculo do carrinho total
  totalGeral = totalGeral + precoTotalProduto;
  let valorTotal = document.getElementById('valor-total');
  valorTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0;







  // for produto in listaProdutos 

  // A função adicionar deve somar o produto ao VALOR-TOTAL. 
  // 1. Seleciono o produto. 
  // 2. Adiciono o produto a lista de Produtos Comprados.
  // 3. Somo o total da minha lista de produtos comprados: 
  // A soma total: quantidade * valor do produto unitário
  // 

}



// Limpo meu carrinho
function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$0';
}