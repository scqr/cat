function autoMove() {
  iTimer = setInterval(function () {
    rightMove();
  }, 3000);
}

function rightMove() {
  var oImgList  = document.getElementById('img-list');
  oImgList.innerHTML += oImgList.firstElementChild.outerHTML;
  var iLen  = oImgList.children.length;
  const PER_WIDTH =  document.documentElement.clientWidth || document.body.clientWidth;
  oImgList.style.width = iLen * PER_WIDTH;
  iIndex++;
  if(iIndex >= iLen) {
    oImgList.style.left = 0;
    iIndex = 1;
  }
  bufferMove(oImgList, {left: -iIndex * PER_WIDTH});
}

function btn() {
  var oLeftBtn = document.getElementById('left-btn');
  var oRightBtn = document.getElementById('right-btn');
  var iIndex = 0;
  oLeftBtn.addEventListener('click', function () {
    iIndex--;
    if(iIndex < 0) {
      oImgList.style.left = - (iLen - 1) * PER_WIDTH + 'px';
      iIndex = iLen - 2;
    }
    bufferMove(oImgList, {left: -iIndex * PER_WIDTH});
  });

  oRightBtn.addEventListener('click', function () {
    rightMove();
  });
}

function enter() {
  var oDirectionBtn = document.getElementById('direction-btn');
  var iTimer = null;
  clearInterval(iTimer);
  oDirectionBtn.style.display = 'block';
}

function leave() {
  oDirectionBtn.style.display = 'none';
  autoMove();
}

export{autoMove,rightMove,btn,enter,leave};
