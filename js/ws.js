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

