// @ts-check
'use strict';
import { getStuff } from './getHtml.js';


document.addEventListener('DOMContentLoaded', () => {	
	getStuff(window.location.pathname);
	
}, { once: true });