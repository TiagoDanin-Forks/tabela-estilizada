const data = [
  { produto: 'Notebook', quantidade: 2, preco: 3000 },
  { produto: 'Mouse', quantidade: 5, preco: 50 },
  { produto: 'Teclado', quantidade: 3, preco: 150 }
];

const tbody = document.getElementById('tableBody');
const totalQty = document.getElementById('totalQty');
const totalPrice = document.getElementById('totalPrice');

let qtdTotal = 0;
let precoTotal = 0;

data.forEach(item => {
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${item.produto}</td>
    <td>${item.quantidade}</td>
    <td>R$ ${item.preco.toFixed(2)}</td>
  `;
  tbody.appendChild(tr);

  qtdTotal += item.quantidade;
  precoTotal += item.preco * item.quantidade;
});

totalQty.textContent = qtdTotal;
totalPrice.textContent = `R$ ${precoTotal.toFixed(2)}`;
