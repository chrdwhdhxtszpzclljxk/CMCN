// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要在 cordova-simulate 或 Android 设备/仿真器上在页面加载时调试代码: 启动应用，设置断点，
// 然后在 JavaScript 控制台中运行 "window.location.reload()"。

// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon: true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});

(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // 处理 Cordova 暂停并恢复事件
        navigator.app.clearHistory();
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        document.addEventListener("backbutton", eventBackButton, false);
        

        // Option 1. Using one 'pageInit' event handler for all pages (recommended way):
        $$(document).on('pageInit', function (e) {
            // Get page data from event data
            var page = e.detail.page;

            if (page.name === 'login') {
                // Following code will be executed for page with data-page attribute equal to "about"
                myApp.alert('Here comes About page');
            }
        });

        $$('.login-screen').on('open', function () {
            
        });
        
        // TODO: Cordova 已加载。在此处执行任何需要 Cordova 的初始化。
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');



        var now = new Date().getTime(),
            _5_sec_from_now = new Date(now + 5 * 1000);
        
        cordova.plugins.notification.local.schedule({
            text: "Delayed Notification",
            at: _5_sec_from_now
        });
        
    };

    function onPause() {
        // TODO: 此应用程序已挂起。在此处保存应用程序状态。
    };

    function onResume() {
        // TODO: 此应用程序已重新激活。在此处还原应用程序状态。
    };
} )();