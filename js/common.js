/**
 * Created by Yeves on 2017/6/1.
 */
/**
 * Created by Yeves on 2017/6/1.
 */
window.onload=function() {
    var aDiv = document.getElementsByClassName('contentNav');
    var oUl=document.getElementsByTagName("ul")[0];
    var aLi = oUl.getElementsByTagName('li');
    var oBg = aLi[aLi.length - 1];
    var minzIndex = 2;

    //布局转换

    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].style.left = aDiv[i].offsetLeft + 'px';
        aDiv[i].style.top = aDiv[i].offsetTop + 'px';

    }
    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].style.position = 'absolute';
        aDiv[i].style.margin = '0';
    }
    //从中间放大
    for (var i = 0; i < aDiv.length; i++) {
        aDiv[i].onmouseover = function () {
            this.style.zIndex = minzIndex++;
            startMove(this, {width: 170, height: 70, marginLeft: -10, marginTop: -10});

        };
        aDiv[i].onmouseout = function () {

            startMove(this, {width: 150, height: 50, marginLeft: 0, marginTop: 0, color: "#51C332"});

        };
    }

    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function () {
            flexMoveNav(oBg, this.offsetLeft);
        };
    }


}//就绪函数
var iSpeed=0;
var timer=null;
var left=0;
function flexMoveNav(obj,iTarget){
    clearInterval(obj.timer);
    obj.timer=setInterval(function() {
        iSpeed += (iTarget - obj.offsetLeft) / 5;
        iSpeed *= 0.7;

        left += iSpeed;
        if (Math.abs(left-iTarget)<1 && Math.abs(iSpeed)<1 ){
            clearInterval(obj.timer);
            obj.style.left=iTarget+'px';
        }

        else {

            obj.style.left = left + 'px';

        }
    },30)
}

