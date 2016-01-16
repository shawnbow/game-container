/**
 * Created by Shawn on 5/6/14.
 */

(function () {

// The app entry: just after document load finished.
    var appContainerFrame = null;
    function init() {
        appContainerFrame = document.getElementById('app_container');
        appContainerFrame.src = "http://static.egret-labs.org/h5game/jianpan/v3/6/index.html";
        appContainerFrame.focus();
    }

    window.onload  = function () {
      init();
    }
})();
