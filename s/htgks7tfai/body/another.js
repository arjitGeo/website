// @ts-check
'use strict';

const main = () => {
	const another = document.getElementById('another');
	if(another !== null) {
		another.innerHTML = `<h1>${another.textContent}</h1>`
	}
}

export { main };