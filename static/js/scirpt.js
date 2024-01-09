// @ts-check
'use strict';
import { getHtmlx } from './getHtml.js';

const main = document.getElementById('main');

document.addEventListener('DOMContentLoaded', () => {
	getHtmlx('/html' + window.location.pathname, main);
	
	// const another = document.getElementById('another');
	// console.log(another);

}, { once: true });