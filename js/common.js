//设置1rem为100px
initpage(); //根据设备变更字体大小
window.onresize = function() {
    initpage();
}

function initpage() {
    var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
    var _html = document.getElementsByTagName('html')[0];
    _html.style.fontSize = (view_width / 375) * 100 + 'px';
}
//显示年月
let month = new Date().getMonth();
let date = new Date().getDate();
let hours = new Date().getHours();
var nowTime = new Date().getFullYear() + "-" + ((month + 1) > 9 ? (month + 1) : '0' + (month + 1)) + "-" + (date > 9 ? date : '0' + date) +
    " " + (hours > 9 ? hours : '0' + hours) + "时";