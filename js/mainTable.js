const dataMainTable = [
  {
    month: "June 2024",
    minPrice: "$59,944.84",
    maxPrice: "$73,265.92",
    avgPrice: "$66,605.38",
  },
  {
    month: "July 2024",
    minPrice: "$60,244.57",
    maxPrice: "$73,632.25",
    avgPrice: "$66,938.41",
  },
  {
    month: "August 2024",
    minPrice: "$60,545.79",
    maxPrice: "$74,000.41",
    avgPrice: "$67,273.1",
  },
  {
    month: "September 2024",
    minPrice: "$60,848.52",
    maxPrice: "$74,370.42",
    avgPrice: "$67,609.47",
  },
  {
    month: "October 2024",
    minPrice: "$61,152.77",
    maxPrice: "$74,742.27",
    avgPrice: "$67,947.52",
  },
  {
    month: "November 2024",
    minPrice: "$61,458.53",
    maxPrice: "$75,115.99",
    avgPrice: "$68,287.26",
  },
  {
    month: "December 2024",
    minPrice: "$61,765.83",
    maxPrice: "$75,491.57",
    avgPrice: "$68,628.7",
  },
  {
    month: "January 2025",
    minPrice: "$62,074.66",
    maxPrice: "$75,869.02",
    avgPrice: "$66,605.38",
  },
  {
    month: "February 2025",
    minPrice: "$62,385.03",
    maxPrice: "$73,632.25",
    avgPrice: "$66,938.41",
  },
  {
    month: "March 2025",
    minPrice: "$62,696.95",
    maxPrice: "$74,000.41",
    avgPrice: "$67,273.1",
  },
  {
    month: "April 2025",
    minPrice: "$63,010.44",
    maxPrice: "$74,370.42",
    avgPrice: "$67,609.47",
  },
  {
    month: "May 2025",
    minPrice: "$63,325.49",
    maxPrice: "$74,742.27",
    avgPrice: "$67,947.52",
  },
];
const tableWrap = document.getElementById("prediction__table-wrap");
const table = document.createElement("table");
table.classList.add("price-table");
const thead = document.createElement("thead");
const headerRow = document.createElement("tr");
const headers = ["Month", "Minimum Price", "Maximum Price", "Average Price"];

headers.forEach((headerText) => {
  const th = document.createElement("th");
  th.textContent = headerText;
  headerRow.appendChild(th);
});

thead.appendChild(headerRow);
table.appendChild(thead);
const tbody = document.createElement("tbody");

dataMainTable.forEach((item) => {
  const row = document.createElement("tr");
  const keys = Object.keys(item);

  keys.forEach((key) => {
    const cell = document.createElement("td");
    cell.textContent = item[key];
    row.appendChild(cell);
  });

  tbody.appendChild(row);
});
table.appendChild(tbody);
tableWrap.appendChild(table);
