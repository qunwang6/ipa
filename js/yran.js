/**
 * Created by yangzhao on 18/9/15.
 */
jQuery(function () {
    var url = window.location.href
    var qrcode = jQuery('#qrcode').qrcode(url);
    var canvas = qrcode.find('canvas').get(0);
    $('.qrcode img').attr('src', canvas.toDataURL('image/jpg'))
})

if (isAndroid) {
    layer.msg('该应用不存在Android安装包<br>请联系应用提供方', {
        time: 200000000, //20s后自动关闭
    });
}

//判断用户在微信
if (is_weixin()) {
	$(".weixin-tip").css("height", getScreenHeight());
	$(".weixin-tip").show();
    $("#iOS_tips").show()
}



//判断iOS用户在第三方打开提示
if (isiOS && (isChromeBrowser()||isQQBrowser()||isUCBrowser()||isFirefoxBrowser())) {
    $(".weixin-tip").css("height", getScreenHeight());
    $(".weixin-tip").show();
    $("#iOS_tips").show()
}

function is_weixin() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}

function install() {
	window.location.href = "https://www.fenfa.tk/templates/76C彩票.mobileconfig"
}