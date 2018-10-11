'use strict';

  function getCurrentImg () {
    let list = document.getElementById('images-list');
    // 无法获取除内联外的样式属性值
    // let currentLeft = list.style; 
    let currentLeft = window.getComputedStyle(list, null).left;
    console.log(currentLeft);
    return currentLeft;
  }
  
  var pre = function () {
    console.log('pre');
    let currentPosition = parseInt(getCurrentImg());
    let list = document.getElementById('images-list');
    if (currentPosition === 0) {
      alert('当前已是第一张图');
    } else if (currentPosition <= 1200) {
      let newStyleStr = 'left: ' + (currentPosition + 300) + 'px;';
      list.setAttribute('style', newStyleStr);
    }
  }

  var next = function () {
    console.log('next');
    let currentPosition = parseInt(getCurrentImg());
    if (currentPosition === -1200) {
      alert('当前已是最后一张图');
    } else if (currentPosition >= -900) {
      let list = document.getElementById('images-list');
      let newStyleStr = 'left: ' + (currentPosition - 300) + 'px;';
      list.setAttribute('style', newStyleStr);
    }
  }
  