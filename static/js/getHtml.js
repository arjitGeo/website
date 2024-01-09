// @ts-check
'use strict';

/**
 * 
 * @param {string} url
 * @param {HTMLElement | null} target
 * @returns {void}
*/
const getHtmlx = (url, target) => {
  if (target === null) {
    console.error('no target found');
    return;
  }

  const xHttpReq = new XMLHttpRequest();

  xHttpReq.open('POST', url, true);

  xHttpReq.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  xHttpReq.addEventListener('readystatechange', function () {
    if (this.readyState === 4 && this.status === 200) {
      target.innerHTML = this.responseText;
    }
  });


  xHttpReq.send();
}

export { getHtmlx };