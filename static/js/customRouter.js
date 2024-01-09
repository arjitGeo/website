// @ts-check
'use strict';
import { getHtmlx } from "./getHtml.js";

const main = document.getElementById('main');
const back = document.getElementById('back');
const forward = document.getElementById('forward');

window.addEventListener('popstate', () => {
	const subURL = window.location.pathname;
	getHtmlx('/html' + subURL, main);
});

const routers = document.querySelectorAll('[custom]');

for(let i = 0; i < routers.length; i++) {
	routers[i].addEventListener('click', (e) => {
		e.preventDefault();

		const subURL = routers[i].getAttribute('href') || '/';

		getHtmlx('/html' + subURL, main);

		history.pushState({}, '', subURL);
		history.replaceState({}, '', subURL);
	});
}

back?.addEventListener('click', () => {
	history.back();
});

forward?.addEventListener('click', () => {
	history.forward();
});