<p align="center"><a href="https://tridiamond.tech" target="_blank" rel="noopener noreferrer"><img width="100" src="https://img-blog.csdnimg.cn/20200930013332450.png" alt="TriDiamond logo"></a></p>

<h1 align="center">Hexo Theme: Obsidian</h1>

<div align="center">

v1.x | ᴅᴇsɪɢɴᴇᴅ & ᴄᴏᴅᴇᴅ ʙʏ ᴛʀɪᴅɪᴀᴍᴏɴᴅ <br>
A dark Hexo theme, it's responsive, simple but elegant.

  <p align="center">
    <img src="https://img.shields.io/github/v/release/TriDiamond/hexo-theme-obsidian">
    <img src="https://img.shields.io/github/release-date/TriDiamond/hexo-theme-obsidian">
    <img src="https://img.shields.io/github/license/TriDiamond/hexo-theme-obsidian">
    <a href="https://gitter.im/TriDiamond/hexo-theme-obsidian?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"><img src="https://badges.gitter.im/TriDiamond/hexo-theme-obsidian.svg"></a>
  </p>

**[PREVIEW](https://obsidian.tridiamond.tech/)** | **[CHANGES](https://github.com/TriDiamond/hexo-theme-obsidian/blob/master/CHANGELOG.md)**

🇨🇳 **[中文文档](https://github.com/TriDiamond/hexo-theme-obsidian/blob/master/README_CN.md)** |
**[更变日志](https://github.com/TriDiamond/hexo-theme-obsidian/blob/master/CHANGELOG_CN.md)**

</div>

> I am working on a brand new theme called [`Aurora`](https://github.com/auroral-ui/hexo-theme-aurora), therefore this theme currently is not actively maintained. If you are from my blog website, the theme displayed there is the new theme.

<details>
  <summary>View new theme screenshots</summary>

![](https://img-blog.csdnimg.cn/202103280030531.png)

![](https://img-blog.csdnimg.cn/20210328003140590.png)

</details>

![screenshot](https://res.cloudinary.com/tridiamond/image/upload/v1573323147/blog/A-Obsidian-full_ubmo0d.png)

<details>
<summary>More screen shots</summary>

## Categories Page

![screenshot](https://res.cloudinary.com/tridiamond/image/upload/v1573148012/blog/A-Obsidian-categories_mgdti7.png)

## Categories Leveled

![screenshot](https://res.cloudinary.com/tridiamond/image/upload/v1573148016/blog/A-Obsidian-categories-level_xtxty9.png)

## Archives

![screenshot](https://res.cloudinary.com/tridiamond/image/upload/v1573323148/blog/A-Obsidian-archives_ffpwf9.png)

## Articles

![screenshot](https://res.cloudinary.com/tridiamond/image/upload/v1573148016/blog/A-Obsidian-articles_wlsu2v.png)

</details>

## Install

```bash
git clone https://github.com/TriDiamond/hexo-theme-obsidian.git obsidian
```

## Usage

### Activate Theme

Open `Hexo` config file `_config.yml`, set theme to `obsidian`

```yaml
---
theme: obsidian
```

### Installing required packages

First open your terminal, and `cd` in the theme folder `obsidian`.

```shell
cd themes/obsidian
```

Then run `npm` to install all required packages for the theme.

```shell
npm install
```

### Theme settings

Open `/themes/obsidian/_config.yml` can change the theme configs

<details>
<summary>Full detail config</summary>

```yaml
#! ---------------------------------------------------------------
#!  ▄▀▄ █▀▄ ▄▀▀ ▀ █▀▄ ▀ ▄▀▄ █▄░█
#!  █░█ █▀█ ░▀▄ █ █░█ █ █▀█ █░▀█
#!  ░▀░ ▀▀░ ▀▀░ ▀ ▀▀░ ▀ ▀░▀ ▀░░▀
#! ᴅᴇsɪɢɴᴇᴅ & ᴄᴏᴅᴇᴅ ʙʏ ᴛʀɪᴅɪᴀᴍᴏɴᴅ
#! ---------------------------------------------------------------
#! Theme Obsidian - A dark Hexo theme, it's responsive, simple but elegant.
#! Thanks to and inspirated by CSS-Tricks
#! @author: TriDiamond
#! @github: https://github.com/TriDiamond
#! @changelogs: https://github.com/TriDiamond/hexo-theme-obsidian/blob/master/CHANGELOG.md
#! @feedbacks: https://github.com/TriDiamond/hexo-theme-obsidian/issues/new
#! ---------------------------------------------------------------

#! ---------------------------------------------------------------
#!  █▄░█ ▄▀▄ ▀█▀ █▀▀ ▄▀▀
#!  █░▀█ █░█ ░█░ █▀▀ ░▀▄
#!  ▀░░▀ ░▀░ ░▀░ ▀▀▀ ▀▀░ v1.x
#! ---------------------------------------------------------------
#! Since version `v1.3.5` code block highlight has changed from `highlight.js` to
#! `codemirror`, but the Hexo default highlight still need to be disabled to take affect.
#! !! So Please make sure you disabled Hexo's default highlight setting !!
#! ---------------------------------------------------------------
#! Rebuild files after you changed the config:
#! `hexo clean && hexo g`
#! ---------------------------------------------------------------
#! highlight:
#!  enable: false
#!  line_number: true
#!  auto_detect: true
#!  tab_replace:
#! ---------------------------------------------------------------

# Theme version
# !! DO NOT EDIT THIS !!
version: '1.4.9.3'

# ---------------------------------------------------------------
# Theme default settings
# ---------------------------------------------------------------

# Menu setting | format = title_name: link_url
menu:
  PAGE: /page

# Page custom titles
page_titles:
  categories: 'Categories'
  tags: 'Tags'
  archives: 'Archived'

# Social media links
socials:
  github: ""
  twitter: ""
  stackoverflow: ""

# Enable table of content
TOC: true

# Home page first post default cover image, default use cover
welcome_cover: /img/cover.jpg

# Article default cover image
cover: /img/welcome-cover.jpg

# Avatar
avatar: https://s2.ax1x.com/2019/09/19/nLtSiD.png

# Disable default scrollbar
scrollbar: true

# Website keywords used for SEO
keywords: TriDiamond Obsidian

# Website slogans
descriptionOne: 'Think like an artist, develop like an artisan'
descriptionTwo: '艺术家思维去思考问题，工匠创造精神去开发'

# If you use google analytics, please fill in the ID
google_analytics:

# Website favicon
favicon: /img/favicon.png

# rss file
rss: atom.xml

# ---------------------------------------------------------------
# Article Music settings
# ---------------------------------------------------------------

# Auto play article audio
autoplay: false

# default mp3 file
mp3:
  - statics/chengdu.mp3

# ---------------------------------------------------------------
# Plugins
# ---------------------------------------------------------------

# Gitalk comment plugin
# see https://github.com/gitalk/gitalk
gitalk:
  enable: true
  autoExpand: false
  clientID: ''
  clientSecret: ''
  repo: ''
  owner: ''
  admin: ['']
  # Ensure uniqueness and length less than 50
  id: location.pathname
  # Facebook-like distraction
  proxy: https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token
  # Custom proxy server

# Valine comment plugin (recommended!)
# see https://valine.js.org/quickstart.html
valine:
  enable: false
  app_id:
  app_key:
  notify: false
  verify: false
  avatar: 'mp'
  placeholder: 'Leave your throughs behind~'
  visitor: true

# Enable symbols-count-time plugin
# see https://github.com/theme-next/hexo-symbols-count-time
symbols_count_time:
  enable: true
  wordCount: true
  readCount: true
  awl: 4
  wpm: 275
  suffix: mins.

# Enable html truncate
# see https://github.com/TriDiamond/hexo-html-truncate
html_truncate:
  enable: true
  # Characters kept for posts
  postLength: 250
  # Characters kept for cover posts
  coverLength: 100
  ellipsis: '...'
  # Excluding html tags
  excludes: ['img']
  # Characters count including white spaces
  keepWhitespaces: true
  # Reserving the last complete word, without breaking the word
  reserveLastWord: true

# Enable Busuanzi statistic plugin
# see http://ibruce.info/2015/04/04/busuanzi/
busuanzi:
  enable: true

# Enable social media sharing
# see https://github.com/overtrue/share.js/
sharejs:
  enable: true
  disabled: 'facebook,douban,linkedin,diandian,tencent,google'

# Use codemirror instead of highlight js for better colors
# if you want more language support check the modes list at official website
# modes see: https://codemirror.net/mode/
# see https://codemirror.net/
codemirror:
  modes: ['javascript', 'css', 'xml', 'htmlmixed', 'clike', 'php', 'shell', 'python']

# Enabling mathjax support
mathjax: true

# This function is only used for those that server is located in China. If your server is located in outside China, you do not need to add the following code.
#beianloc:
beian: 
# Enable
  enable: true
# Beian location，for example：粤ICP备
  beianloc:
# Beian ID，for example：2021022134号。
  beianid:

# Police Beian
police:
# Enable
  enable: true
# Beian location，for example: 粤公网安备
  beianloc:
# Beian ID, for example: 44010602009049号
  beianid:
# Beian Icon, for example: /img/beian.png
  beianicon:

# Custom mouse style
mouse:
# Enable custom mouse style
  enable: true
# Default style
  default: /default.png
# Hover sytle
  pointer: /hover.png

# APlayer, now only support netease music list
aplayer:
  # Enable aplayer
  enable: true
  # Music list ID
  musiclist: ""
  
# Live2D
l2d:
  # Enable live2d
  enable: true
```

</details>

### Comments

You can choose from using Valine or Gitalk

- If you are using `Valine`, you need to turn off `busuanzi`,because Valine has article view count support.
- If you are using `Gitalk`, you may turn on `busuanzi`, to have article view count enable.

### Code block style

> Since version `v1.3.5` code block highlight has changed from `highlight.js` to
> `codemirror`, Hexo default highlight need to be disabled to take affect.
> !! So Please make sure you disabled Hexo's default highlight setting !!

Hexo configuration file `_config.yml` located at the ROOT path of your blog.

> ⚠️ Please note do not make these changes in the theme's config file,
> changing configs in the theme config file `_config.yml`
> will not work properly.

```yaml
---
highlight:
  enable: false
  line_number: true
  auto_detect: true
  tab_replace:
```

Codemirror settings

```yaml
# Use codemirror instead of highlight js for better color syntax
# if you want more language support check the modes list at official website
# modes see: https://codemirror.net/mode/
# see https://codemirror.net/
codemirror:
  modes: ['javascript', 'css', 'xml', 'htmlmixed', 'clike', 'php', 'shell', 'python']
```

Rebuild files after you changed the config

```bash
hexo clean && hexo g
```

### Preview character length

This post parameter changes how many characters are kept for the preview at home page.

```markdown
title: My awesome title
date: 2019-07-14 18:38:45
categories: - Category1 - Category2
tags: - Tag1 - Tag2
mp3: http://domain.com/awesome.mp3
cover: http://domain.com/awesome.jpg
preview: 300
```

### Post template

Post template settings

```markdown
title: My awesome title
date: 2019-07-14 18:38:45
categories: - Category1 - Category2
tags: - Tag1 - Tag2
mp3: http://domain.com/awesome.mp3
cover: http://domain.com/awesome.jpg

author: 3rdparty author
socials: 
  page: https://example
avatar: /example.jpg
slogan: example

socials:
    page: 
        link: social platform link
        name: the iconfont you want to use, for example: icon-bilibili-fill
        path: the css file of your iconfont, for example: /css/font_bilibili/iconfont.css
    page2: 
        link: 
        name: 
        path: 
    page3: 
        link: 
        name: 
        path: 
```

### Create categories page

Run Hexo command to generate categories page

```bash
hexo new page categories
```

Categories template

```yaml
title: categories
date: 2019-07-14 12:39:04
type: 'categories'
```

> Theme will auto generate categories contents.

### Create tags page

Run Hexo command to generate tags page

```bash
hexo new page tags
```

Tags page template

```
title: tags
date: 2014-12-22 12:39:04
type: "tags"
```

> Theme will auto generate tags contents.

### MathJax Support

Default enables mathjax support, can change it to `false` to turn it off.

```yaml
# Enabling mathjax support
mathjax: true
```

## Update Theme

> Please backup your `_config.yml` file before update

```bash
cd themes/osidian
git pull
```

## Using the search engine

### Installation guide

Install by npm

```bash
$ npm install hexo-generator-search --save
```

Adding the plugin config in your root `_config.yml`

```yaml
search:
  path: search.xml
  field: post
  content: true
```

Regenerate files

```bash
hexo clean && hexo g
```

## Related

I have made a [`Typro`](https://typora.io/) theme [`Obsidian`](https://github.com/TriDiamond/typro-theme-obsidian) especially for this blog theme.

## Feedback

> Please check the [ISSUES](https://github.com/TriDiamond/hexo-theme-obsidian/issues) before try to use the following contact methods!
> Maybe the question you have had being asked by others or it's already being answered. Thanks!

You can give me feedback or issue you have through the following methods:

- [Create a issue!](https://github.com/TriDiamond/hexo-theme-obsidian/issues/new)
- Joint QQGroup `909955326`
- [Join Telegram Group](https://t.me/joinchat/R2m4eho2lbcHLR7nDvxd6A)

## Donation

Are you **enjoying this project** ? 👋

You can express your ❤️ by _buying me a coffee_ ☕️ to keep this project **maintained and stay alive**, I would ❤️ to **dedicate more time and effort** on it!

If there are enough coffee ☕️ I would like to become a **full time open source developer**! Keep producing more _awesome themes and applications to the world_!

However you could just **sharing this project with your friends**, that would _help me a lot as well_! 👊

Thanks for your love in advance! ☀️

|                                                                                                                Donating using Paypal                                                                                                                 |
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://www.buymeacoffee.com/tridiamond" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" height="60" width="217" style="height: 60px !important;width: 217px !important;" ></a> |

> All donator will be enlisted as Coffee Supporter and displayed in the Sponsor list in this section.

---

|                                         Wechat 微信支付                                         |                                        Alipay 支付宝支付                                        |
| :---------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------: |
| <img src="https://img-blog.csdnimg.cn/20210330175112304.png" alt="Buy Me A Coffee" width="150"> | <img src="https://img-blog.csdnimg.cn/20210330175153827.png" alt="Buy Me A Coffee" width="150"> |

> 所有赞助人将被列为咖啡支持者，并在本节的赞助人名单中显示。

## Join the Community

<a href="https://discord.gg/VC7CrYfds5" target="_blank"><img src="https://discordapp.com/api/guilds/801943105913225246/widget.png?style=banner3" alt="ObsidiaNext Community Discord Server"></a>
