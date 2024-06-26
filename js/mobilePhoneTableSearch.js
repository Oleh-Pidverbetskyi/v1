const dataMobileTable = [
  { month: "June 2024", minPrice: "$59,944.84", maxPrice: "$73,265.92", avgPrice: "$66,605.38" },
  { month: "July 2024", minPrice: "$60,244.57", maxPrice: "$73,632.25", avgPrice: "$66,938.41" },
  { month: "August 2024", minPrice: "$60,545.79", maxPrice: "$74,000.41", avgPrice: "$67,273.1" },
  { month: "September 2024", minPrice: "$60,848.52", maxPrice: "$74,370.42", avgPrice: "$67,609.47" },
  { month: "October 2024", minPrice: "$61,152.77", maxPrice: "$74,742.27", avgPrice: "$67,947.52" },
  { month: "November 2024", minPrice: "$61,458.53", maxPrice: "$75,115.99", avgPrice: "$68,287.26" },
  { month: "December 2024", minPrice: "$61,765.83", maxPrice: "$75,491.57", avgPrice: "$68,628.7" },
  { month: "January 2025", minPrice: "$62,074.66", maxPrice: "$75,869.02", avgPrice: "$66,605.38" },
  { month: "February 2025", minPrice: "$62,385.03", maxPrice: "$73,632.25", avgPrice: "$66,938.41" },
  { month: "March 2025", minPrice: "$62,696.95", maxPrice: "$74,000.41", avgPrice: "$67,273.1" },
  { month: "April 2025", minPrice: "$63,010.44", maxPrice: "$74,370.42", avgPrice: "$67,609.47" },
  { month: "May 2025", minPrice: "$63,325.49", maxPrice: "$74,742.27", avgPrice: "$67,947.52" },
];

const monthSelect = document.getElementById('monthSelect');
const minPrice = document.getElementById('minPrice');
const maxPrice = document.getElementById('maxPrice');
const avgPrice = document.getElementById('avgPrice');

dataMobileTable.forEach(item => {
  const option = document.createElement('option');
  option.value = item.month;
  option.textContent = item.month;
  monthSelect.appendChild(option);
});

monthSelect.addEventListener('change', (event) => {
  const selectedMonth = event.target.value;
  const selectedData = dataMobileTable.find(item => item.month === selectedMonth);
  
  if (selectedData) {
    minPrice.textContent = selectedData.minPrice;
    maxPrice.textContent = selectedData.maxPrice;
    avgPrice.textContent = selectedData.avgPrice;
  }
});

monthSelect.value = dataMobileTable[0].month;
monthSelect.dispatchEvent(new Event('change'));
