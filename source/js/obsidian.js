var Home = location.href,
    Pages = 4,
    xhr,
    xhrUrl = '';

var Obsidian = {
    L: function(url, f, err) {
        if (url == xhrUrl) {
            return false;
        }
        xhrUrl = url;
        if (xhr) {
            xhr.abort();
        }
        xhr = $.ajax({
            type: 'GET',
            url: url,
            timeout: 10000,
            success: function(data) {
                f(data);
                xhrUrl = '';
            },
            error: function(a, b, c) {
                if (b == 'abort') {
                    err && err()
                } else {
                    window.location.href = url;
                }
                xhrUrl = '';
            }
        });
    },
    P: function() {
        return !!('ontouchstart' in window);
    },
    PS: function() {
        if (!(window.history && history.pushState)){
            return;
        }
        history.replaceState({u: Home, t: document.title}, document.title, Home);
        window.addEventListener('popstate', function(e) {
            var state = e.state;
            if (!state) return;
            document.title = state.t;

            if (state.u == Home) {
                $('#preview').css('position', 'fixed');
                setTimeout(function() {
                    $('#preview').removeClass('show');
                    $('#container').show();
                    window.scrollTo(0, parseInt($('#container').data('scroll')));
                    setTimeout(function() {
                        $('#preview').html('');
                        $(window).trigger('resize');
                    }, 300);
                }, 0);
            } else {
                Obsidian.loading();
                Obsidian.L(state.u, function(data) {
                    document.title = state.t;
                    $('#preview').html($(data).filter('#single'));
                    Obsidian.preview();
                    setTimeout(function() { Obsidian.player(); }, 0);
                });
            }
        });
    },
    HS: function(tag, flag) {
        var id = tag.data('id') || 0,
            url = tag.attr('href'),
            title = tag.attr('title') + " - " + $("#config-title").text();

        if (!$('#preview').length || !(window.history && history.pushState)) location.href = url;
        Obsidian.loading();
        var state = {d: id, t: title, u: url};
        Obsidian.L(url, function(data) {
            if (!$(data).filter('#single').length) {
                location.href = url;
                return
            }
            switch (flag) {
                case 'push':
                    history.pushState(state, title, url)
                    $('#preview').html($(data).filter('#single'));
                    Obsidian.preview();
                    break;
                case 'replace':
                    history.replaceState(state, title, url)
                    $('#preview').html($(data).filter('#single'));
                    Obsidian.preview();
                    break;
            }
            document.title = title;
            $('#preview').html($(data).filter('#single'))
            switch (flag) {
                case 'push':
                    Obsidian.preview()
                    Obsidian.initArticleJs();
                    break;
                case 'replace':
                    window.scrollTo(0, 0)
                    Obsidian.loaded()
                    Obsidian.initArticleJs();
                    break;
            }
            setTimeout(function() {
                Obsidian.player();
                $('#top').show();
                comment = $("#gitalk-container");
                if (comment.data('ae') == true){
                    comment.click();
                }
            }, 0)
        })
    },
    preview: function() {
        // preview toggle
        $("#preview").one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', function() {
            var previewVisible = $('#preview').hasClass('show');
            if (!!previewVisible) {
                $('#container').hide();
            }else{
                $('#container').show();
            }
            Obsidian.loaded();
        });
        setTimeout(function() {
            $('#preview').addClass('show');
            $('#container').data('scroll', window.scrollY);
            setTimeout(function() {
                $('#preview').css({
                    'position': 'static',
                    'overflow-y': 'auto'
                });
            }, 500);
            Obsidian.initArticleJs();
        }, 0);
    },
    player: function() {
        var p = $('#audio');
        if (!p.length) {
            $('.icon-play').css({
                'color': '#dedede',
                'cursor': 'not-allowed'
            })
            return
        }
        var sourceSrc= $("#audio source").eq(0).attr('src')
        if (sourceSrc == '' && p[0].src == ''){
            audiolist = $('#audio-list li');
            mp3 = audiolist.eq([Math.floor(Math.random() * audiolist.size())])
            p[0].src = mp3.data('url')
        }

        if (p.eq(0).data("autoplay") == true) {
            p[0].play();
        }

        p.on({
            'timeupdate': function() {
                var progress = p[0].currentTime / p[0].duration * 100;
                $('.bar').css('width', progress + '%');
                if (progress / 5 <= 1) {
                    p[0].volume = progress / 5;
                }else {
                    p[0].volume = 1;
                }
            },
            'ended': function() {
                $('.icon-pause').removeClass('icon-pause').addClass('icon-play')
            },
            'playing': function() {
                $('.icon-play').removeClass('icon-play').addClass('icon-pause')
            }
        })
    },
    loading: function() {
        var w = window.innerWidth;
        var css = '<style class="loaderstyle" id="loaderstyle'+ w +'">'+
            '@-moz-keyframes loader'+ w +'{100%{background-position:'+ w +'px 0}}'+
            '@-webkit-keyframes loader'+ w +'{100%{background-position:'+ w +'px 0}}'+
            '.loader'+ w +'{-webkit-animation:loader'+ w +' 3s linear infinite;-moz-animation:loader'+ w +' 3s linear infinite;}'+
            '</style>';
        $('.loaderstyle').remove()
        $('head').append(css)
        $('#loader').removeClass().addClass('loader'+ w).show()
    },
    loaded: function() {
        $('#loader').removeClass().hide()
    },
    F: function(id, w, h) {
        var _height = $(id).parent().height(),
            _width = $(id).parent().width(),
            ratio = h / w;
        if (_height / _width > ratio) {
            id.style.height = _height +'px';
            id.style.width = _height / ratio +'px';
        } else {
            id.style.width = _width +'px';
            id.style.height = _width * ratio +'px';
        }
        id.style.left = (_width - parseInt(id.style.width)) / 2 +'px';
        id.style.top = (_height - parseInt(id.style.height)) / 2 +'px';
    },
    initArticleJs: function () {
        // initialise hightlight.js
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
        Obsidian.setCodeRowWithLang();
    },
    setCodeRowWithLang: function() {
        // Get the programming type of the current code block
        let code = $("code");
        if (code && code.length) {
            code.each(function () {
                var item = $(this);
                var lang = "";
                if (item[0].className.indexOf(' ') > -1) {
                    lang = item[0].className.split(' ')[0];
                } else {
                    lang = item[0].className;
                }
                var langMap = {
                    "html": "HTML",
                    "xml": "XML",
                    "svg": "SVG",
                    "mathml": "MathML",
                    "css": "CSS",
                    "clike": "C-like",
                    "js": "JavaScript",
                    "abap": "ABAP",
                    "apacheconf": "Apache Configuration",
                    "apl": "APL",
                    "arff": "ARFF",
                    "asciidoc": "AsciiDoc",
                    "adoc": "AsciiDoc",
                    "asm6502": "6502 Assembly",
                    "aspnet": "ASP.NET (C#)",
                    "autohotkey": "AutoHotkey",
                    "autoit": "AutoIt",
                    "shell": "BASH",
                    "bash": "BASH",
                    "basic": "BASIC",
                    "csharp": "C#",
                    "dotnet": "C#",
                    "cpp": "C++",
                    "cil": "CIL",
                    "csp": "Content-Security-Policy",
                    "css-extras": "CSS Extras",
                    "django": "Django/Jinja2",
                    "jinja2": "Django/Jinja2",
                    "dockerfile": "Docker",
                    "erb": "ERB",
                    "fsharp": "F#",
                    "gcode": "G-code",
                    "gedcom": "GEDCOM",
                    "glsl": "GLSL",
                    "gml": "GameMaker Language",
                    "gamemakerlanguage": "GameMaker Language",
                    "graphql": "GraphQL",
                    "hcl": "HCL",
                    "http": "HTTP",
                    "hpkp": "HTTP Public-Key-Pins",
                    "hsts": "HTTP Strict-Transport-Security",
                    "ichigojam": "IchigoJam",
                    "inform7": "Inform 7",
                    "javastacktrace": "Java stack trace",
                    "json": "JSON",
                    "jsonp": "JSONP",
                    "latex": "LaTeX",
                    "emacs": "Lisp",
                    "elisp": "Lisp",
                    "emacs-lisp": "Lisp",
                    "lolcode": "LOLCODE",
                    "markup-templating": "Markup templating",
                    "matlab": "MATLAB",
                    "mel": "MEL",
                    "n1ql": "N1QL",
                    "n4js": "N4JS",
                    "n4jsd": "N4JS",
                    "nand2tetris-hdl": "Nand To Tetris HDL",
                    "nasm": "NASM",
                    "nginx": "nginx",
                    "nsis": "NSIS",
                    "objectivec": "Objective-C",
                    "ocaml": "OCaml",
                    "opencl": "OpenCL",
                    "parigp": "PARI/GP",
                    "objectpascal": "Object Pascal",
                    "php": "PHP",
                    "php-extras": "PHP Extras",
                    "plsql": "PL/SQL",
                    "powershell": "PowerShell",
                    "properties": ".properties",
                    "protobuf": "Protocol Buffers",
                    "q": "Q (kdb+ database)",
                    "jsx": "React JSX",
                    "tsx": "React TSX",
                    "renpy": "Ren'py",
                    "rest": "reST (reStructuredText)",
                    "sas": "SAS",
                    "sass": "SASS (Sass)",
                    "scss": "SASS (Scss)",
                    "sql": "SQL",
                    "soy": "Soy (Closure Template)",
                    "tap": "TAP",
                    "toml": "TOML",
                    "tt2": "Template Toolkit 2",
                    "ts": "TypeScript",
                    "vbnet": "VB.Net",
                    "vhdl": "VHDL",
                    "vim": "vim",
                    "visual-basic": "Visual Basic",
                    "vb": "Visual Basic",
                    "wasm": "WebAssembly",
                    "wiki": "Wiki markup",
                    "xeoracube": "XeoraCube",
                    "xojo": "Xojo (REALbasic)",
                    "xquery": "XQuery",
                    "yaml": "YAML"
                };
     
                var displayLangText = "";
                if (lang in langMap) displayLangText = langMap[lang];
                else displayLangText = lang;
                if (item.find(".language-mark").length <= 0) {
                    item.prepend(
                        '<span class="language-mark" ref='+lang+'>'+displayLangText+'</span>');
                }
                
            });
        };
    }
};

$(function() {
    if (Obsidian.P()) {
        $('body').addClass('touch')
    }
    if ($('#preview').length) {
        Obsidian.PS();
        // $('.pview a').addClass('pviewa')
        setTimeout(function() {
            $('html, body').removeClass('loading')
        }, 500);
    } else {
        $('#single').css('min-height', window.innerHeight)
        setTimeout(function() {
            $('html, body').removeClass('loading')
        }, 500)
        window.addEventListener('popstate', function(e) {
            if (e.state) location.href = e.state.u;
        })
        Obsidian.player();
        $('.icon-icon, .image-icon').attr('href', '/')
        $('#top').show()
    }
    $(window).on('scroll', function() {
        if ($('.scrollbar').length && !Obsidian.P() && !$('.icon-images').hasClass('active')) {
            var wt = $(window).scrollTop(),
                tw  = $('#top').width(),
                dh = document.body.scrollHeight,
                wh  = $(window).height();
            var width = tw / (dh - wh) * wt;
            $('.scrollbar').width(width)
            if (wt > 80 && window.innerWidth > 800) {
                $('.subtitle').fadeIn()
            } else {
                $('.subtitle').fadeOut()
            }
        }
    })
    $(window).on('touchmove', function(e) {
        if ($('body').hasClass('mu')) {
            e.preventDefault()
        }
    })
    $('body').on('click', function(e) {
        var tag = $(e.target).attr('class') || '',
            rel = $(e.target).attr('rel') || '';
        // .content > ... > img
        if (e.target.nodeName == "IMG" && $(e.target).parents('div.content').length > 0) {
            tag = 'pimg';
        }
        if (!tag && !rel) return;
        switch (true) {
            // nav menu
            case (tag.indexOf('switchmenu') != -1):
                window.scrollTo(0, 0)
                $('html, body').toggleClass('mu');
                return false;
                break;
            // next page
            case (tag.indexOf('more') != -1):
                tag = $('.more');
                if (tag.data('status') == 'loading') {
                    return false
                }
                var num = parseInt(tag.data('page')) || 1;
                if (num == 1) {
                    tag.data('page', 1)
                }
                if (num >= Pages) {
                    return
                }
                tag.html('加载中...').data('status', 'loading')
                Obsidian.loading()
                Obsidian.L(tag.attr('href'), function(data) {
                    var link = $(data).find('.more').attr('href');
                    if (link != undefined) {
                        tag.attr('href', link).html('加载更多').data('status', 'loaded')
                        tag.data('page', parseInt(tag.data('page')) + 1)
                    } else {
                        $('#pager').remove()
                    }
                    var tempScrollTop = $(window).scrollTop();
                    $('#primary').append($(data).find('.post'))
                    $(window).scrollTop(tempScrollTop + 100);
                    Obsidian.loaded()
                    $('html,body').animate({ scrollTop: tempScrollTop + 400 }, 500);
                }, function() {
                    tag.html('加载更多').data('status', 'loaded')
                })
                return false;
                break;
            // home
            case (tag.indexOf('icon-home') != -1):
                $('.toc').fadeOut(100);
                if ($('#preview').hasClass('show')) {
                    history.back();
                } else {
                    location.href = $('.icon-home').data('url')
                }
                return false;
                break;
            // qrcode
            case (tag.indexOf('icon-scan') != -1):
                if ($('.icon-scan').hasClass('tg')) {
                    $('#qr').toggle()
                } else {
                    $('.icon-scan').addClass('tg')
                    $('#qr').qrcode({ width: 128, height: 128, text: location.href}).toggle()
                }
                return false;
                break;
            // audio play
            case (tag.indexOf('icon-play') != -1):
                $('#audio')[0].play()
                $('.icon-play').removeClass('icon-play').addClass('icon-pause')
                return false;
                break;
            // audio pause
            case (tag.indexOf('icon-pause') != -1):
                $('#audio')[0].pause()
                $('.icon-pause').removeClass('icon-pause').addClass('icon-play')
                return false;
                break;
            // history state
            case (tag.indexOf('posttitle') != -1):
                Obsidian.HS($(e.target), 'push')
                // initialArticleTyped();
                return false;
                break;
            // history state
            case (tag.indexOf('menu-link') != -1):
                Obsidian.HS($(e.target), 'push')
                return false;
                break;
            // prev, next post
            case (rel == 'prev' || rel == 'next'):
                if (rel == 'prev') {
                    var t = $('#prev_next a')[0].text
                } else {
                    var t = $('#prev_next a')[1].text
                }
                $(e.target).attr('title', t)
                Obsidian.HS($(e.target), 'replace')
                return false;
                break;
            // toc
            case (tag.indexOf('toc-text') != -1 || tag.indexOf('toc-link') != -1
                  || tag.indexOf('toc-number') != -1):
                hash = '';
                if (e.target.nodeName == 'SPAN'){
                  hash = $(e.target).parent().attr('href')
                }else{
                  hash = $(e.target).attr('href')
                }
                to  = $("a.headerlink[href='" + hash + "']")
                $("html,body").animate({
                  scrollTop: to.offset().top - 50
                }, 300);
                return false;
                break;
            // quick view
            case (tag.indexOf('pviewa') != -1):
                $('body').removeClass('mu')
                setTimeout(function() {
                    Obsidian.HS($(e.target), 'push')
                    $('.toc').fadeIn(1000);
                }, 300)
                return false;
                break;
            // photoswipe
            case (tag.indexOf('pimg') != -1):
                var pswpElement = $('.pswp').get(0);
                if (pswpElement) {
                    var items = [];
                    var index = 0;
                    var imgs = [];
                    $('.content img').each(function(i, v){
                        // get index
                        if (e.target.src == v.src) {
                            index = i;
                        }
                        var item = {
                            src: v.src,
                            w: v.naturalWidth,
                            h: v.naturalHeight
                        };
                        imgs.push(v);
                        items.push(item);
                    });
                    var options = {
                        index: index,
                        shareEl: false,
                        zoomEl: false,
                        allowRotationOnUserZoom: true,
                        history: false,
                        getThumbBoundsFn: function(index) {
                            // See Options -> getThumbBoundsFn section of documentation for more info
                            var thumbnail = imgs[index],
                                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                                rect = thumbnail.getBoundingClientRect(); 

                            return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
                        }
                    };
                    var lightBox= new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                    lightBox.init();
                }
                return false;
                break;
              // comment
            case - 1 != tag.indexOf("comment"): 
                Obsidian.loading(),
                comment = $('#gitalk-container');
                gitalk = new Gitalk({
                  clientID: comment.data('ci'),
                  clientSecret: comment.data('cs'),
                  repo: comment.data('r'),
                  owner: comment.data('o'),
                  admin: comment.data('a'),
                  id: decodeURI(window.location.pathname),
                  distractionFreeMode: comment.data('d')
                })
                $(".comment").removeClass("link")
                gitalk.render('gitalk-container')
                Obsidian.loaded();
                return false;
                break;
            default:
                return true;
                break;
        }
    })
    // 是否自动展开评论
    comment = $("#gitalk-container");
    if (comment.data('ae') == true){
        comment.click();
    }
    initialTyped();
    Obsidian.setCodeRowWithLang();
    console.log("%c Github %c","background:#24272A; color:#73ddd7","","https://github.com/TriDiamond/hexo-theme-obsidian")
})

