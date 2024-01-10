// @ts-check
'use strict';
import { getStuff } from "./getHtml.js";

const main = document.getElementById('main');
const back = document.getElementById('back');
const forward = document.getElementById('forward');

window.addEventListener('popstate', () => {
	getStuff(window.location.pathname);
});

const routers = document.querySelectorAll('[custom]');

for(let i = 0; i < routers.length; i++) {
	routers[i].addEventListener('click', (e) => {
		e.preventDefault();

		const subURL = routers[i].getAttribute('href') || '/';
		
		getStuff(subURL);

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