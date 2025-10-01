const data = [
  { produto: 'Notebook Pro X', quantidade: 2, preco: 3000.00 },
  { produto: 'Mouse Óptico', quantidade: 5, preco: 50.00 },
  { produto: 'Teclado Mecânico', quantidade: 3, preco: 150.00 },
  { produto: 'Monitor Ultrawide', quantidade: 1, preco: 1800.00 },
  { produto: 'Webcam HD', quantidade: 8, preco: 120.00 },
  { produto: 'Headset Gamer', quantidade: 4, preco: 250.00 },
  { produto: 'SSD 1TB', quantidade: 6, preco: 400.00 },
  { produto: 'Cabo HDMI', quantidade: 12, preco: 30.00 },
  { produto: 'Roteador Wi-Fi', quantidade: 2, preco: 350.00 },
  { produto: 'Placa de Vídeo RTX', quantidade: 1, preco: 5500.00 },
  // Linhas adicionais (10 a 30)
  { produto: 'Pendrive 64GB', quantidade: 10, preco: 45.00 },
  { produto: 'Software Antivírus', quantidade: 5, preco: 199.00 },
  { produto: 'Bateria Externa', quantidade: 7, preco: 90.00 },
  { produto: 'Hub USB', quantidade: 9, preco: 60.00 },
  { produto: 'Impressora Laser', quantidade: 3, preco: 800.00 },
  { produto: 'Papel A4 (Caixa)', quantidade: 20, preco: 25.00 },
  { produto: 'Mochila Notebook', quantidade: 4, preco: 180.00 },
  { produto: 'Licença Office', quantidade: 5, preco: 550.00 },
  { produto: 'Caixa de Som BT', quantidade: 6, preco: 110.00 },
  { produto: 'Mousepad Grande', quantidade: 15, preco: 20.00 },
  // Linhas adicionais (20 a 30)
  { produto: 'Filtro de Linha', quantidade: 10, preco: 55.00 },
  { produto: 'Adaptador USB-C', quantidade: 14, preco: 40.00 },
  { produto: 'Kit Limpeza', quantidade: 8, preco: 35.00 },
  { produto: 'Monitor Simples', quantidade: 3, preco: 950.00 },
  { produto: 'Microfone Condensador', quantidade: 2, preco: 450.00 },
  { produto: 'Teclado Simples', quantidade: 11, preco: 75.00 },
  { produto: 'HD Externo 2TB', quantidade: 3, preco: 600.00 },
  { produto: 'Suporte Monitor', quantidade: 5, preco: 130.00 },
  { produto: 'Óculos VR', quantidade: 1, preco: 1500.00 },
  { produto: 'Caneta Stylus', quantidade: 9, preco: 85.00 }
];

const ROWS_PER_PAGE = 10;
let currentPage = 1;
const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);

const tbody = document.getElementById('tableBody');
const totalQty = document.getElementById('totalQty');
const totalPrice = document.getElementById('totalPrice');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageInfo = document.getElementById('pageInfo');


function renderTable(page) {
  const startIndex = (page - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;
  const paginatedData = data.slice(startIndex, endIndex);

  tbody.innerHTML = '';

  paginatedData.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
            <td>${item.produto}</td>
            <td>${item.quantidade}</td>
            <td>R$ ${item.preco.toFixed(2)}</td>
        `;
    tbody.appendChild(tr);
  });

  updatePaginationControls();
}

function calculateTotals() {
  let qtdTotal = 0;
  let precoTotal = 0;

  data.forEach(item => {
    qtdTotal += item.quantidade;
    precoTotal += item.preco * item.quantidade;
  });
  totalQty.textContent = qtdTotal;
  totalPrice.textContent = `R$ ${precoTotal.toFixed(2)}`;
}

function updatePaginationControls() {
  pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function changePage(direction) {
  if (direction === 'next' && currentPage < totalPages) {
    currentPage++;
  } else if (direction === 'prev' && currentPage > 1) {
    currentPage--;
  }
  renderTable(currentPage);
}

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

prevBtn.addEventListener('click', () => changePage('prev'));
nextBtn.addEventListener('click', () => changePage('next'));

calculateTotals();
renderTable(currentPage);
