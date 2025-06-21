const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
const inputCorrencyValue = document.querySelector("input-currency")
const currencyValueToConvert = document.querySelector(".curreuncy-value-origin")
const currencyValueToConverted = document.querySelector(".curreuncy-value-destination")

console.log(correncySelect.value)

const DolarToday = 5.52
const EuroToday = 6.37
const BitconToday = 103268.20
const SaudiToday = 1.47
const SuiceToday = 6.74
const PesoToday = 0.0047
const BrazilToday = 1.00
const ChinaToday = 0.77
const JapaoToday = 0.038
const ParaguayToday = 0.00069
const RussiaToday = 0.070

if (currencySelect.value == "dolar"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("en-us",{
   style: "currency",
    currency: "USD"
}).format(inputCorrencyValue / DolarToday)
}

if (currencySelect.value == "euro"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("de-DE",{
   style: "currency",
    currency: "EUR"
}).format(inputCorrencyValue / EuroToday)
}

if (currencySelect.value == "bit"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("en-us",{
   style: "currency",
    currency: "USD"
}).format(inputCorrencyValue / BitconToday)
}

if (currencySelect.value == "saudi"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("ar-qa",{
   style: "currency",
    currency: "SAR"
}).format(inputCorrencyValue / SaudiToday)

}

if (currencySelect.value == "suice"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("sv-SE",{
   style: "currency",
    currency: "CHF"
}).format(inputCorrencyValue / SuiceToday)
}

if (currencySelect.value == "peso"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("es-AR",{
   style: "currency",
    currency: "ARS"
}).format(inputCorrencyValue / PesoToday)
}

if (currencySelect.value == "real"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("pt-BR",{
   style: "currency",
    currency: "BRL"
}).format(inputCorrencyValue / BrazilToday)
}

if (currencySelect.value == "yuan"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("zh-hk",{
   style: "currency",
    currency: "CNY"
}).format(inputCorrencyValue / ChinaToday)
}

if (currencySelect.value == "yen"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("ja-jp",{
   style: "currency",
    currency: "JPY"
}).format(inputCorrencyValue / JapaoToday)
}

if (currencySelect.value == "guarani"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("es-py",{
   style: "currency",
    currency: "PYG"
}).format(inputCorrencyValue / ParaguayToday)
}

if (currencySelect.value == "ruble"){
currencyValueToConverted.innerHTML - new Intl.NumberFormat("ru-RU",{
   style: "currency",
    currency: "RUB"
}).format(inputCorrencyValue / RussiaToday)
}

if (currencySelect.value == "dolar"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("en-us",{
   style: "currency",
    currency: "USD"
}).format(inputCorrencyValue / DolarToday)
}

if (currencySelect.value == "euro"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("de-DE",{
   style: "currency",
    currency: "EUR"
}).format(inputCorrencyValue / EuroToday)
}

if (currencySelect.value == "bit"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("en-us",{
   style: "currency",
    currency: "USD"
}).format(inputCorrencyValue / BitconToday)
}

if (currencySelect.value == "saudi"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("ar-qa",{
   style: "currency",
    currency: "SAR"
}).format(inputCorrencyValue / SaudiToday)

}

if (currencySelect.value == "suice"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("sv-SE",{
   style: "currency",
    currency: "CHF"
}).format(inputCorrencyValue / SuiceToday)
}

if (currencySelect.value == "peso"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("es-AR",{
   style: "currency",
    currency: "ARS"
}).format(inputCorrencyValue / PesoToday)
}

if (currencySelect.value == "real"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("pt-BR",{
   style: "currency",
    currency: "BRL"
}).format(inputCorrencyValue / BrazilToday)
}

if (currencySelect.value == "yuan"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("zh-hk",{
   style: "currency",
    currency: "CNY"
}).format(inputCorrencyValue / ChinaToday)
}

if (currencySelect.value == "yen"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("ja-jp",{
   style: "currency",
    currency: "JPY"
}).format(inputCorrencyValue / JapaoToday)
}

if (currencySelect.value == "guarani"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("es-py",{
   style: "currency",
    currency: "PYG"
}).format(inputCorrencyValue / ParaguayToday)
}

if (currencySelect.value == "ruble"){
currencyValueToConvert.innerHTML - new Intl.NumberFormat("ru-RU",{
   style: "currency",
    currency: "RUB"
}).format(inputCorrencyValue / RussiaToday)
}

function changeCurrency(){
const currencyNane = document.getElementById(".correnty-name")
const currencyimage = document.querySelector(".correnty-img")


if(currencySelect.value == "dolar") {
currencyNane.innerHTML = "Dólar Americano"
currencyimage.src = "./assets/round flag/americana.png"
}

if(currencySelect.value == "euro") {
currencyNane.innerHTML = "Euro"
currencyimage.src = "./assets/round flag/euro.png"
}

if(currencySelect.value == "bit") {
currencyNane.innerHTML = "BitCoin"
currencyimage.src = "./assets/round flag/bitcoin.png"
}

if(currencySelect.value == "saudi") {
currencyNane.innerHTML = "Arabia Saudita"
currencyimage.src = "./assets/round flag/arabia.jpeg"
}

if(currencySelect.value == "suice") {
currencyNane.innerHTML = "Suiça"
currencyimage.src = "./assets/round flag/suica.jpeg"
}

if(currencySelect.value == "peso") {
currencyNane.innerHTML = "Argentina"
currencyimage.src = "./assets/round flag/argentina.png"
}

if(currencySelect.value == "real") {
currencyNane.innerHTML = "Real"
currencyimage.src = "./assets/round flag/brasil.jpeg"
}

if(currencySelect.value == "yuan") {
currencyNane.innerHTML = "China"
currencyimage.src = "./assets/round flag/china.png"
}

if(currencySelect.value == "yen") {
currencyNane.innerHTML = "Japão"
currencyimage.src = "./assets/round flag/japao.png"
}

if(currencySelect.value == "ruble") {
currencyNane.innerHTML = "Russia"
currencyimage.src = "./assets/round flag/russia.png"
}

convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)