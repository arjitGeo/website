// @ts-check
'use strict';
import { getHtmlx } from './getHtml.js';


document.addEventListener('DOMContentLoaded', () => {
	const main = document.getElementById('main');
	
	getHtmlx('/html' + window.location.pathname, main);
	
	if(window.location.pathname === '/another') {
		const another = document.getElementById('another');
		console.log(another); // null
		console.log(main?.childNodes); // returns child nodes
	}

}, { once: true });