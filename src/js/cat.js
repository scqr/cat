window.onload = function () {
    var oBox = document.getElementById('box');
    var oDirectionBtn = document.getElementById('direction-btn');
    var oLeftBtn = document.getElementById('left-btn');
    var oRightBtn = document.getElementById('right-btn');
    var oImgList  = document.getElementById('img-list');

    // 复制第一个LI，添加到UL的后面
    oImgList.innerHTML += oImgList.firstElementChild.outerHTML;

    var iLen  = oImgList.children.length;

    // 计算UL的宽度
    const PER_WIDTH = document.documentElement.clientWidth || document.body.clientWidth;
    oImgList.style.width = iLen * PER_WIDTH+1;
    console.log("PER_WIDTH"+PER_WIDTH);

    // 默认显示第0张
    var iIndex = 0;
    var iTimer = null;

    oBox.addEventListener('mouseenter', function () {
        clearInterval(iTimer);
        oDirectionBtn.style.display = 'block';
    });

    oBox.addEventListener('mouseleave', function () {
        oDirectionBtn.style.display = 'none';
        autoMove();
    });

    oLeftBtn.addEventListener('click', function () {
        iIndex--;
        if(iIndex < 0) {
            oImgList.style.left = - (iLen - 1) * PER_WIDTH;
            iIndex = iLen - 2;
        }
        bufferMove(oImgList, {left: -iIndex * PER_WIDTH});
    });

    oRightBtn.addEventListener('click', function () {
        rightMove();
    });

    // 自动运行
    autoMove();
    function autoMove() {
        iTimer = setInterval(function () {
            rightMove();
        }, 3000);
    }

    // 往右运动
    function rightMove() {
        iIndex++;
        if(iIndex >= iLen) {
            oImgList.style.left = 0;
            iIndex = 1;
        }
        console.log("马上到"+iIndex);
        console.log("iLen"+iLen);
        bufferMove(oImgList, {left: - iIndex * PER_WIDTH});
    }
};