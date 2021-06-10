var aplayerconf = "<!-- 我使用的APlayer本体 -->"
aplayerconf += "<div class=\"aplayer\" "
aplayerconf += "data-id=\"" + musiclist + "\" "
aplayerconf += "data-server=\"netease\" "
aplayerconf += "data-type=\"playlist\" "
aplayerconf += "data-fixed=\"true\" "
aplayerconf += "data-autoplay=\"false\" "
aplayerconf += "data-order=\"random\" "
aplayerconf += "data-volume=\"0.55\" "
aplayerconf += "data-preload=\"true\""
aplayerconf += "data-mutex=\"true\""
aplayerconf += "</div>"
aplayerconf += "<!--如果将本体放在body里面导致页面加载出现问题，请尝试放到body体后面-->"

function removelrc() {
    //检测是否存在歌词按钮
    if (!document.querySelector(".aplayer-icon-lrc"))
        return;
    else
    {
        //触发以后立刻移除监听
        document.removeEventListener("DOMNodeInserted",removelrc);
        //稍作延时保证触发函数时存在按钮
        setTimeout(function() {
            //以触发按钮的方式隐藏歌词，防止在点击显示歌词按钮时需要点击两次才能出现的问题
            document.querySelector(".aplayer-icon-lrc").click();
        }, 1);
        // console.log("success");
        return;
    }
}

document.addEventListener('DOMNodeInserted', removelrc)
