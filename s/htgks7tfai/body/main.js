// @ts-check
'use strict';

const main = () => {
	const div = document.getElementsByTagName('div')[1]
	div.innerHTML = `<h2>${div.innerHTML}</h2>`
}

export { main };