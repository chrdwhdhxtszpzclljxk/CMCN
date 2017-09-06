
var myApp = new Framework7({
    animateNavBackIcon: true
});

var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    dynamicNavbar: true,
    domCache: true
});

(function () {
    "use strict";
    $$(".a_login").on("click", login);

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        navigator.app.clearHistory();
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", eventBackButton, false);

    };

    function onPause() {
    };

    function onResume() {
    };
})();

function login() {
    //mainView.router.loadPage("index.html");
    var jurl = "http://www.gwgz.com/bbb.php";
    $$.ajax({
        url: jurl,
        contentType: "OPTIONS",
        crossDomain: true,//这个一定要设置成true，默认是false，true是跨域请求。  
        dataType: "json",
        data: {
            age: "19",
            message: "good！"
        },
        beforeSend: function (e) {
            //alert("ddddd");//发送数据过程，you can do something,比如:loading啥的  
        },
        success: function (response) {
            alert(response.age);//返回数据  
        },
        error: function (xhr,status) {

        }
    }); 

    //window.location.href = "index.html?token=lasjdfklsdjfldfjk;dfsdjkksd";

}
