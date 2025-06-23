const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector(".corrency-select-converted")


function convertValues() {
    const inputCorrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-origin")
    const currencyValueToConverted = document.querySelector(".currency-value-destination")


    console.log(currencySelect.value)


    const dolarToday = 5.6
    const euroToday = 6.2
    const bitcoinToday = 103268.20
    const SaudiToday = 1.47
    const SuiceToday = 6.74
    const PesoToday = 0.0047
    const ChinaToday = 0.77
    const JapaoToday = 0.038
    const ParaguayToday = 0.00069
    const RussiaToday = 0.070


    const convertedValue = inputCorrencyValue / dolarToday

    if (currencySelect.value == "dolar") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputCorrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCorrencyValue / euroToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "XBT"
        }).format(inputCorrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "saudi") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("ar-qa", {
            style: "currency",
            currency: "SAR"
        }).format(inputCorrencyValue / SaudiToday)
    }

    if (currencySelect.value == "suice") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("sv-SE", {
            style: "currency",
            currency: "CHF"
        }).format(inputCorrencyValue / SuiceToday)
    }

    if (currencySelect.value == "peso") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCorrencyValue / PesoToday)
    }

    if (currencySelect.value == "yuan") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("zh-hk", {
            style: "currency",
            currency: "CNY"
        }).format(inputCorrencyValue / ChinaToday)
    }

    if (currencySelect.value == "yen") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("ja-jp", {
            style: "currency",
            currency: "JPY"
        }).format(inputCorrencyValue / JapaoToday)
    }

    if (currencySelect.value == "guarani") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("es-py", {
            style: "currency",
            currency: "PYG"
        }).format(inputCorrencyValue / ParaguayToday)
    }

    if (currencySelect.value == "ruble") {
        currencyValueToConverted.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(inputCorrencyValue / RussiaToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCorrencyValue)

}


function changeCurrency() {
    const currencyNane = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

  if (currencySelect.value == "dolar") {
        currencyNane.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/round flag/americana.png"
    }

    if (currencySelect.value == "euro") {
        currencyNane.innerHTML = "Euro"
        currencyImage.src = "./assets/round flag/euro.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyNane.innerHTML = "BitCoin"
        currencyImage.src = "./assets/round flag/bitcoin.png"
    }

    if (currencySelect.value == "saudi") {
        currencyNane.innerHTML = "Arabia Saudita"
     currencyImage.src = "./assets/round flag/arabia.jpeg"
    }

    if (currencySelect.value == "suice") {
        currencyNane.innerHTML = "Suiça"
        currencyImage.src = "./assets/round flag/suica.jpeg"
    }

    if (currencySelect.value == "peso") {
        currencyNane.innerHTML = "Argentina"
        currencyImage.src = "./assets/round flag/argentina.png"
    }

    if (currencySelect.value == "real") {
        currencyNane.innerHTML = "Real"
        currencyImage.src = "./assets/round flag/brasil.jpeg"
    }

    if (currencySelect.value == "yuan") {
        currencyNane.innerHTML = "China"
        currencyImage.src = "./assets/round flag/china.png"
    }

    if (currencySelect.value == "yen") {
        currencyNane.innerHTML = "Japão"
        currencyImage.src = "./assets/round flag/japao.png"
    }
      if (currencySelect.value == "guarani") {
        currencyNane.innerHTML = "Paraguay"
        currencyImage.src = "./assets/round flag/paraguay.png"
    }


    if (currencySelect.value == "ruble") {
        currencyNane.innerHTML = "Russia"
        currencyImage.src = "./assets/round flag/russia.png"
    }

}


currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)



