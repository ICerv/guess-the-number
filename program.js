// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return vysledek;
}

let minCislo = 1;
let maxCislo = 100;

window.addEventListener('load', function () {

	let pocitadloPokusu = 0;

	let vygenerovaneCislo = nahodneCislo(minCislo, maxCislo);
	console.log('vygenerovane cislo', vygenerovaneCislo)

	let vstupnePolicko = document.querySelector('#number-input');
	let odesilaciTlacitko = document.querySelector('#submit-button');
	let restartovaciTlacitko = this.document.querySelector('#play-again-button');
	let komunikacniOkenko = this.document.querySelector('#message');

	restartovaciTlacitko.addEventListener('click', function () {
		document.location.reload();
	})

	vstupnePolicko.focus();

	function vyhodnotHru() {
		pocitadloPokusu++;
		//console.log('vyhodnocuji hru');
		let hadaneCislo = Number(vstupnePolicko.value);
		//console.log('porovnani', typeof vygenerovaneCislo, typeof hadaneCislo)
		if (hadaneCislo === vygenerovaneCislo) {
			komunikacniOkenko.innerHTML = `Gratuluji! Myslel jsem na cislo ${hadaneCislo}. Potrebovala jsi na ${pocitadloPokusu} pokusu`;
			odesilaciTlacitko.classList.add('hiddenElement');
			restartovaciTlacitko.classList.remove('hiddenElement');
		} else if (hadaneCislo < vygenerovaneCislo) {
			komunikacniOkenko.innerHTML = `Cislo ${hadaneCislo} je nizsi, nez to na ktere myslim`
		} else if (hadaneCislo > vygenerovaneCislo) {
			komunikacniOkenko.innerHTML = `Cislo ${hadaneCislo} je vyssi, nez to na ktere myslim`
		}

		vstupnePolicko.value = '';
		vstupnePolicko.focus();


	}

	vstupnePolicko.addEventListener('keypress', function (event) {
		console.log('stisknul jsi nejakou klavesu');
		console.log(event);
		if (event.key === 'Enter') {
			//	console.log('stisknul jsi Enter');
			vyhodnotHru()
		}
	});


	odesilaciTlacitko.addEventListener("click", function () {
		vyhodnotHru()

	})
});


