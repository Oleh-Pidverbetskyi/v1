const quotesListButtons = document.querySelector(".quotes__list");
const pairCatalog = document.querySelector(".pair__catalog");
const menuListButtons = document.querySelector(".menu__list");



//active menu
menuListButtons.addEventListener("click", (e) => {
  const target = e.target.closest(".menu__btn");
  if (target && !target.classList.contains("menu__btn-active")) {
    const id = target.getAttribute("data-tab");
    menuListButtons
      .querySelector(".menu__btn.menu__btn-active")
      .classList.remove("menu__btn-active");
    target.classList.add("menu__btn-active");
  }
});

//active menu quotes
quotesListButtons.addEventListener("click", (e) => {
  const target = e.target.closest(".quotes__btn");
  if (target && !target.classList.contains("active-btn")) {
    const id = target.getAttribute("data-tab");
    quotesListButtons
      .querySelector(".quotes__btn.active-btn")
      .classList.remove("active-btn");
    target.classList.add("active-btn");

    pairCatalog.forEach((list) => {
      if (list.classList.contains(id)) {
        list.style.display = "flex";
        list.classList.add("show-pair-list");
      } else {
        list.style.display = "none";
      }
    });
  }
});


function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  return rect.top >= 0 && rect.bottom <= windowHeight;
}

function handleAnimations() {
  const changeWeeks = document.querySelectorAll(".info__change-week");
  const changeMonth = document.querySelectorAll(".info__change-month");

  changeWeeks.forEach((week) => {
    if (isElementInViewport(week)) {
      week.classList.add("animated");
      week.querySelector(".info__change-line-green").classList.add("animated");
    }
  });

  changeMonth.forEach((month) => {
    if (isElementInViewport(month)) {
      month.classList.add("animated");
      month.querySelector(".info__change-line-red").classList.add("animated");
    }
  });
}
document.addEventListener("DOMContentLoaded", handleAnimations);


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



function breadCrumbSlider() {
  const splide = new Splide("#breadcrumb-slider", {
    pagination: false,
    type: "slide",
    drag: "free",
    rewind: true,
    rewindByDrag: true,
    arrows: false,
    start  : 4,
    autoWidth: true,
  }).mount();
}
breadCrumbSlider();


const menu = document.querySelector(".burger__btn, burger__btn--off");
const mobileNavigation = document.querySelector(".navigation-mobile");
const checkbox = document.querySelector(".burger--checkbox");
const links = document.querySelectorAll(".navigation__link");
const main = document.querySelector(".main");

menu.addEventListener("click", () => {
  mobileNavigation.classList.toggle("navigation-mobile--active");
});

main.addEventListener("click", () => {
  if (mobileNavigation.classList.contains("navigation-mobile--active")) {
    mobileNavigation.classList.toggle("navigation-mobile--active");
    checkbox.checked = false;
  }
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    mobileNavigation.classList.remove("navigation-mobile--active");
    checkbox.checked = false;
  }
});

links.forEach((item) =>
  item.addEventListener("click", () => {
    if (mobileNavigation.classList.contains("navigation-mobile--active")) {
      mobileNavigation.classList.toggle("navigation-mobile--active");
      checkbox.checked = false;
    }
  })
);

const inputElement = document.querySelector('input[list="languages"]');
if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
  inputElement.removeAttribute("list");
}


const ctx = document.getElementById('myChart').getContext('2d');

const data = {
    labels: ['12/23', '01/24', '02/24', '03/24', '04/24', '05/24', '06/24', '07/24', '08/24', '09/24', '10/24', '11/24', '12/24'],
    datasets: [
        {
            label: 'HISTORICAL',
            data: [20000, 25000, 22000, 23000, 35000, 37000, 48000, null, null, null, null, null, null],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
            borderWidth: 2
        },
        {
            label: 'FORECASTED',
            data: [null, null, null, null, null, null, 48000, 51000, 53000, 52000, 51000, 55000, 58000],
            borderColor: 'rgba(153, 102, 255, 1)',
            borderDash: [5, 5],
            fill: false,
            borderWidth: 2
        }
    ]
};

const options = {
    responsive: true,
    scales: {
        x: {
            type: 'category',
            title: {
                display: true,
                text: 'Date'
            }
        },
        y: {
            title: {
                display: true,
                text: 'Value'
            }
        }
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            align: 'end',
            labels: {
                usePointStyle: false, 
                boxWidth: 20, 
                padding: 20, 
                generateLabels: (chart) => {
                    const { data } = chart;
                    if (data.datasets.length) {
                        return data.datasets.map((dataset, i) => {
                            const meta = chart.getDatasetMeta(i);
                            const style = meta.controller.getStyle(i);
                            return {
                                text: dataset.label,
                                fillStyle: style.borderColor,
                                strokeStyle: style.borderColor,
                                lineWidth: style.borderWidth,
                                hidden: !chart.isDatasetVisible(i),
                                index: i,
                                pointStyle: 'rect'
                            };
                        });
                    }
                    return [];
                }
            }
        },
        tooltip: {
            mode: 'index',
            intersect: false,
        },
        annotation: {
            annotations: {
                line1: {
                    type: 'line',
                    xMin: '06/24',
                    xMax: '06/24',
                    borderColor: 'rgba(0,0,0,0.5)',
                    borderWidth: 2,
                    borderDash: [6, 6],
                    draggable: true
                }
            }
        }
    },
    interaction: {
        mode: 'index',
        intersect: false,
    }
};

const myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});


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


function menuSlider() {
  const splide = new Splide("#menu-slider", {
    pagination: false,
    type: "slide",
    drag: "free",
    rewind: true,
    rewindByDrag: true,
    arrows: false,
    start  : 3,
    autoWidth: true,
  }).mount();
}
menuSlider();



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



function pairCatalogSlider() {
  const splide = new Splide("#pair__catalog-slider", {
    pagination: false,
    type: "slide",
    drag: "free",
    rewind: true,
    rewindByDrag: true,
    arrows: false,
    autoWidth: true,

    autoScroll: {
      speed: 1,
      pauseOnHover: true,
      autoStart: false,
    },
  });

  let isAutoScrolling = false;

  function updateAutoScroll() {
    if (window.innerWidth > 768 && !isAutoScrolling) {
      splide.Components.AutoScroll.pause();
      isAutoScrolling = true;
    } else if (window.innerWidth < 768 && isAutoScrolling) {
      splide.Components.AutoScroll.play();
      isAutoScrolling = false;
    }
  }
  window.addEventListener("resize", updateAutoScroll);
  splide.mount(window.splide.Extensions);

  updateAutoScroll();
}

pairCatalogSlider();



const realTime = document.querySelector(".info__current-time");

function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const currentTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  realTime.textContent = currentTime;
}

setInterval(updateTime, 1000);
updateTime();


const pairLtcUsd = document.querySelector(".first-pair");
const pairBtcUsd = document.querySelector(".second-pair");
const pairUsdtUsd = document.querySelector(".third-pair");
const pairEthUsd = document.querySelector(".fourth-pair");
const pairBnbUsd = document.querySelector(".fifth-pair");
const maiPair = document.querySelector(".main-pair");

const wsBinanceUrl = "wss://stream.binance.com:9443/ws/!miniTicker@arr";
const exchangeRates = {};
const ws = new WebSocket(wsBinanceUrl);

ws.onopen = function () {
  console.log("Connected to WebSocket Binance");
};

ws.onerror = function (error) {
  console.error("Error WebSocket:", error);
};

ws.onmessage = function (event) {
  const message = JSON.parse(event.data);

  if (Array.isArray(message)) {
    message.forEach((item) => {
      const symbol = item.s.toLowerCase();
      const closePrice = parseFloat(item.c);
      exchangeRates[symbol] = closePrice;
      if (symbol === "eurusdt") {
        maiPair.textContent = `${closePrice}`;
      }
      if (symbol === "ltcusdt") {
        pairLtcUsd.textContent = `${closePrice}`;
      }
      if (symbol === "btcusdt") {
        pairBtcUsd.textContent = `${closePrice.toFixed(2)}`;
      }
      if (symbol === "usdcusdt") {
        pairUsdtUsd.textContent = `${closePrice.toFixed(2)}`;
      }
      if (symbol === "ethusdt") {
        pairEthUsd.textContent = `${closePrice.toFixed(2)}`;
      }
      if (symbol === "bnbusdt") {
        pairBnbUsd.textContent = `${closePrice.toFixed(2)}`;
      }
    });
    console.log("Updated exchange rates:", exchangeRates);
  }
};

function convert(direction) {
  const amountInput = document.getElementById("amount");
  const fromCurrencyInput = document.getElementById("fromCurrency");
  const convertedAmountInput = document.getElementById("convertedAmount");
  const toCurrencyInput = document.getElementById("toCurrency");

  const amount = parseFloat(amountInput.value);
  const fromCurrency = fromCurrencyInput.value.trim().toUpperCase();
  const toCurrency = toCurrencyInput.value.trim().toUpperCase();
  const convertedAmount = parseFloat(convertedAmountInput.value);

  if (direction === "fromTo") {
    if (!amount || isNaN(amount)) {
      document.getElementById("result").textContent =
        "Please enter a valid amount";
      return;
    }

    if (!fromCurrency || !toCurrency) {
      document.getElementById("result").textContent =
        "Please enter valid currency codes";
      return;
    }

    try {
      if (
        exchangeRates[fromCurrency.toLowerCase() + toCurrency.toLowerCase()]
      ) {
        const result =
          amount *
          exchangeRates[fromCurrency.toLowerCase() + toCurrency.toLowerCase()];
        convertedAmountInput.value = result.toFixed(2);
        document.getElementById(
          "result"
        ).textContent = `${amount} ${fromCurrency} equals ${result.toFixed(
          2
        )} ${toCurrency}`;
      } else if (
        exchangeRates[toCurrency.toLowerCase() + fromCurrency.toLowerCase()]
      ) {
        const result =
          amount /
          exchangeRates[toCurrency.toLowerCase() + fromCurrency.toLowerCase()];
        convertedAmountInput.value = result.toFixed(2);
        document.getElementById(
          "result"
        ).textContent = `${amount} ${fromCurrency} equals ${result.toFixed(
          2
        )} ${toCurrency}`;
      } else {
        throw new Error(
          `Exchange rate not found for ${fromCurrency} to ${toCurrency}`
        );
      }
    } catch (error) {
      console.error("Error:", error.message);
      document.getElementById("result").textContent =
        "Conversion error. Please try again later.";
    }
  } else if (direction === "toFrom") {
    if (!convertedAmount || isNaN(convertedAmount)) {
      document.getElementById("result").textContent =
        "Please enter a valid amount";
      return;
    }

    if (!fromCurrency || !toCurrency) {
      document.getElementById("result").textContent =
        "Please enter valid coin name";
      return;
    }

    try {
      if (
        exchangeRates[toCurrency.toLowerCase() + fromCurrency.toLowerCase()]
      ) {
        const result =
          convertedAmount *
          exchangeRates[toCurrency.toLowerCase() + fromCurrency.toLowerCase()];
        amountInput.value = result.toFixed(2);
        document.getElementById(
          "result"
        ).textContent = `${convertedAmount} ${toCurrency} equals ${result.toFixed(
          2
        )} ${fromCurrency}`;
      } else if (
        exchangeRates[fromCurrency.toLowerCase() + toCurrency.toLowerCase()]
      ) {
        const result =
          convertedAmount /
          exchangeRates[fromCurrency.toLowerCase() + toCurrency.toLowerCase()];
        amountInput.value = result.toFixed(2);
        document.getElementById(
          "result"
        ).textContent = `${convertedAmount} ${toCurrency} equals ${result.toFixed(
          2
        )} ${fromCurrency}`;
      } else {
        throw new Error(
          `Exchange rate not found for ${toCurrency} to ${fromCurrency}`
        );
      }
    } catch (error) {
      console.error("Error", error.message);
      document.getElementById("result").textContent =
        "Conversion error. Please try again later.";
    }
  }
}

document
  .getElementById("amount")
  .addEventListener("input", () => convert("fromTo"));
document
  .getElementById("fromCurrency")
  .addEventListener("input", () => convert("fromTo"));
document
  .getElementById("toCurrency")
  .addEventListener("input", () => convert("fromTo"));
document
  .getElementById("convertedAmount")
  .addEventListener("input", () => convert("toFrom"));
document
  .querySelector(".converter__btn")
  .addEventListener("click", () => convert("fromTo"));

