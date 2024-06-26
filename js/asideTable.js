const dataAsideTable = [
  { pair: "BTC/USD", price: "0.6087", signal: "Strong Buy" },
  { pair: "BTC/USD", price: "0.6087", signal: "Sell" },
  { pair: "BTC/USD", price: "0.6087", signal: "Sell" },
  { pair: "BTC/USD", price: "0.6087", signal: "Strong Buy" },
  { pair: "BTC/USD", price: "0.6087", signal: "Strong Buy" },
  { pair: "BTC/USD", price: "0.6087", signal: "Strong Buy" },
  { pair: "BTC/USD", price: "0.6087", signal: "Strong Buy" },
  { pair: "BTC/USD", price: "0.6087", signal: "Sell" },
  { pair: "BTC/USD", price: "0.6087", signal: "Sell" },
  { pair: "BTC/USD", price: "0.6087", signal: "Strong Buy" },
];

const tableBody = document.getElementById("table-body");

dataAsideTable.forEach((item) => {
  const row = document.createElement("tr");

  const pairCell = document.createElement("td");
  pairCell.textContent = item.pair;
  pairCell.className = "aside-table__pair";
  row.appendChild(pairCell);

  const priceCell = document.createElement("td");
  priceCell.textContent = item.price;
  priceCell.className = "aside-table__price";
  row.appendChild(priceCell);

  const signalCell = document.createElement("td");
  signalCell.textContent = item.signal;
  signalCell.className = item.signal.replace(" ", "-").toLowerCase();
  row.appendChild(signalCell);

  tableBody.appendChild(row);
});