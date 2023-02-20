var btc = document.getElementById("btc-price");
var eth = document.getElementById("eth-price");
var bnb = document.getElementById("bnb-price");
var polygon = document.getElementById("polygon-price");
var ada = document.getElementById("ada-price");
var btcVariation = document.getElementById("btc-price-variation");
var ethVariation = document.getElementById("eth-price-variation");
var bnbVariation = document.getElementById("bnb-price-variation");
var polygonVariation = document.getElementById("polygon-price-variation");
var adaVariation = document.getElementById("ada-price-variation");

const API_URL =
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ccardano%2Coec-binance-coin%2Cmatic-network&vs_currencies=usd&include_24hr_change=true&precision=2"

fetch(API_URL)
	.then((response) => response.json())
	.then((response) => {
		btc.innerHTML = '$'+response.bitcoin.usd;
		eth.innerHTML = '$'+response.ethereum.usd;
		bnb.innerHTML = '$'+response['oec-binance-coin'].usd;
		polygon.innerHTML = '$'+response['matic-network'].usd;
		ada.innerHTML = '$'+response.cardano.usd;

		/* Price Variation to String and Slice */
		const btcVariationString = JSON.stringify(response.bitcoin.usd_24h_change);
		const ethVariationString = JSON.stringify(response.ethereum.usd_24h_change);
		const bnbVariationString = JSON.stringify(response['oec-binance-coin'].usd_24h_change);
		const polygonVariationString = JSON.stringify(response['matic-network'].usd_24h_change);
		const adaVariationString = JSON.stringify(response.ethereum.usd_24h_change);
		btcVariation.innerHTML = btcVariationString.charAt(0) === '-' ? btcVariationString.slice(0,5)+' %' : btcVariationString.slice(0,4)+' %';
		ethVariation.innerHTML = ethVariationString.charAt(0) === '-' ? ethVariationString.slice(0,5)+' %' : ethVariationString.slice(0,4)+' %';
		bnbVariation.innerHTML = bnbVariationString.charAt(0) === '-' ? bnbVariationString.slice(0,5)+' %' : bnbVariationString.slice(0,4)+' %';
		polygonVariation.innerHTML = polygonVariationString.charAt(0) === '-' ? polygonVariationString.slice(0,5)+' %' : polygonVariationString.slice(0,4)+' %';
		adaVariation.innerHTML = adaVariationString.charAt(0) === '-' ? adaVariationString.slice(0,5)+' %' : adaVariationString.slice(0,4)+' %';

		/* Change color of price variation */
		btcVariationString > 0 ? btcVariation.classList.add('green') : btcVariation.classList.add('red');
		ethVariationString > 0 ? ethVariation.classList.add('green') : ethVariation.classList.add('red');
		bnbVariationString > 0 ? bnbVariation.classList.add('green') : bnbVariation.classList.add('red');
		polygonVariationString > 0 ? polygonVariation.classList.add('green') : polygonVariation.classList.add('red');
		adaVariationString > 0 ? adaVariation.classList.add('green') : adaVariation.classList.add('red');
	})