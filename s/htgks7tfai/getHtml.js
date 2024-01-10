// @ts-check
'use strict';

/** 
 * @param {string} htmlPath
 * @param {string | null} jsPath
 * @param {HTMLElement | null} target
 * @returns {void}
*/
const getHtmlx = (htmlPath, jsPath, target) => {
  if (target === null) {
    console.error('no target found');
    return;
  }
  
  const xHttpReq = new XMLHttpRequest();
  
  xHttpReq.open('POST', htmlPath, true);
  
  xHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  
  xHttpReq.onreadystatechange = async function () {
    if (this.readyState === 4 && this.status === 200) {
      target.innerHTML = this.responseText;
      if(jsPath !== null) {
        const { main } = await import(jsPath).catch(err => console.error(err, jsPath));
        main();
      }
    }
  };
  
  xHttpReq.send();
}

const main = document.getElementById('main');

/**
 * @param {string} url
 * @returns {void}
*/
const getStuff = (url) => {
  if(url === '/') {
    getHtmlx('/dzxzeq' + url, '/staitic/htgks7tfai/body/main.js', main);
  } else {
    getHtmlx('/dzxzeq' + url, '/staitic/htgks7tfai/body' + url + '.js', main);
  }
}

export { getHtmlx, getStuff };