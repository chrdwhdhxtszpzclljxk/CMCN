//返回键点击响应
function eventBackButton() {
    //使用toast插件显示 提示信息
    window.plugins.toast.showLongBottom('再按一次退出!');
    //window.plugins.toast.showLongBottom('Hello there!', function (a) { console.log('toast success: ' + a) }, function (b) { alert('toast error: ' + b) });
    document.removeEventListener("backbutton", eventBackButton, false);//注销返回键
    //3秒后重新注册
    var intervalID = window.setInterval(
        function () {
            window.clearInterval(intervalID);
            document.addEventListener("backbutton", eventBackButton, false);//返回键
        },
        3000
    );
}