function convert() {
    var amount = parseFloat(document.getElementById("amount").value);
    var currency = document.getElementById("currency").value;
  
    var rates = {
      USD: 0.0121,
      EUR: 0.0113,
      GBP: 0.0097,
      JPY: 1.69,
      RUB: 1.0,
      CAD: 0.0163,
      AUD: 0.018,
      CNY: 0.0865,
    };
  
    var convertedAmount = amount * rates[currency];
    var resultBox = document.getElementById("result");
    resultBox.innerHTML = convertedAmount.toFixed(2) + " " + currency;
  }
  