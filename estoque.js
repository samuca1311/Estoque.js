// PARTE 1 - Declaração e modificação básica

// Questão 1.1
let categorias = ['Eletrônicos', 'Vestuário', 'Alimentos'];
console.log("1.1:", categorias);

// Questão 1.2
let codigosProdutos = [101, 102, 103, 104];
let fornecedores = new Array('TechSupply', 'ModaExpress', 'SuperFoods');
console.log("1.2 Códigos:", codigosProdutos);
console.log("1.2 Fornecedores:", fornecedores);

// Questão 1.3
console.log("1.3 Primeira categoria:", categorias[0]);
categorias[1] = 'Calçados';
console.log("1.3 Categorias atualizadas:", categorias);

// PARTE 2 - Inserção, remoção e pesquisa

// Questão 2.1
categorias.push('Livros');
console.log("Adicionou Livros:", categorias);
categorias.pop();
console.log("Removeu o último:", categorias);
categorias.unshift('Brinquedos');
console.log("Adicionou Brinquedos:", categorias);
categorias.shift();
console.log("Removeu o primeiro:", categorias);

// Questão 2.2
console.log("2.2 Tamanho:", categorias.length);

// Questão 2.3
console.log("2.3 Índice de Calçados:", categorias.indexOf('Calçados'));
console.log("Tem Eletrônicos?", categorias.includes('Eletrônicos'));

// PARTE 3 - Laços de repetição

// Questão 3.1
console.log("3.1 For tradicional:");
for (let i = 0; i < categorias.length; i++) {
    console.log(categorias[i]);
}

// Questão 3.2
console.log("3.2 For of:");
for (let categoria of categorias) {
    console.log(categoria);
}

// PARTE 4 - Arrays de objetos

const produtos = [
    { nome: 'Teclado Mecânico', preco: 250.00, estoque: 15 },
    { nome: 'Mouse Gamer', preco: 120.00, estoque: 8 },
    { nome: 'Monitor Ultrawide', preco: 1200.00, estoque: 4 }
];

// Questão 4.1
console.log("4.1 Primeiro produto:", produtos[0].nome);

// Questão 4.2 - filter
let produtosBaratos = produtos.filter(produto => produto.preco < 300);
console.log("4.2 Produtos baratos:", produtosBaratos);

let precos = [50, 150, 200, 350, 400];
let multiplosDe100 = precos.filter(preco => preco % 100 === 0);
console.log("Múltiplos de 100:", multiplosDe100);

// Questão 4.3 - reduce
let quantidades = [2, 3, 5, 10];
let totalItens = quantidades.reduce((total, quantidade) => total + quantidade, 0);
console.log("4.3 Total de itens:", totalItens);

let valorEstoque = produtos.reduce((total, produto) => total + produto.preco * produto.estoque, 0);
console.log("Valor total do estoque:", valorEstoque);

// Questão 4.4 - map
let precosOriginais = [100, 200, 300];
let precosDesconto = precosOriginais.map(preco => preco * 0.9);
console.log("4.4 Preços com desconto:", precosDesconto);

let nomesProdutos = produtos.map(produto => produto.nome);
console.log("Nomes dos produtos:", nomesProdutos);

// Questão 4.5 - slice e sort
let produtosOrdenados = produtos.slice();
produtosOrdenados.sort((a, b) => a.preco - b.preco);
console.log("4.5 Produtos ordenados:", produtosOrdenados);

// Questão 4.6 - some e find
let estoqueCritico = produtos.some(produto => produto.estoque < 5);
console.log("4.6 Existe estoque crítico?", estoqueCritico);

let novoInventario = [
    { nome: 'Teclado', estoque: 15 },
    { nome: 'Mouse', estoque: 2 },
    { nome: 'Headset', estoque: 10 }
];

let temEstoqueCritico = novoInventario.some(produto => produto.estoque < 5);
console.log("Novo inventário tem estoque crítico?", temEstoqueCritico);

let produtoCritico = novoInventario.find(produto => produto.estoque < 5);
console.log("Primeiro produto crítico:", produtoCritico);
