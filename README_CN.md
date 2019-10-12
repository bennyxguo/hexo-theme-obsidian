# Hexo-theme-obsidian
> 一款暗色的Hexo主题, 拥有响应式布局, 简约而优雅.

**[预览](http://tridiamond.tech)** |
**[English Doc](https://github.com/TriDiamond/hexo-theme-obsidian/blob/master/README.md)** |
**[更新日志](https://github.com/TriDiamond/hexo-theme-obsidian/blob/master/CHANGELOG.md)**

![screenshot](https://s2.ax1x.com/2019/10/01/uNBcND.png)

## 安装

``` bash
$ git clone https://github.com/TriDiamond/hexo-theme-obsidian.git obsidian
```

## 使用

### 启用主题

打开 `Hexo` 配置文件 `_config.yml`, 设置主题为 `obsidian`

``` yaml
...
theme: obsidian
...
```

### 主题配置

打开 `/themes/obsidian/_config.yml` 文件可以改变主题配置

``` yaml

#! ---------------------------------------------------------------
#! Obsidian theme 使用手动启用 highlight.js 代码高亮
#! 为了可以正常显示代码高亮的样式
#! 请务必在hexo默认配置里面关闭highlight
#! ---------------------------------------------------------------
#! highlight:
#!  enable: false
#!  line_number: true
#!  auto_detect: true
#!  tab_replace:
#! ---------------------------------------------------------------

# ---------------------------------------------------------------
# 主题默认设置
# ---------------------------------------------------------------

# 菜单设置 | 格式 = 菜单名: 菜单url
menu:
  PAGE: /page

# 是否启用目录
TOC: true

# 首页封面使用的封面图， 不配置默认使用cover配置的图片
welcome_cover: /img/cover.jpg

# 文章默认封面图
cover: /img/welcome-cover.jpg

# 文章内的默认头像
avatar: https://s2.ax1x.com/2019/09/19/nLtSiD.png

# 关闭默认滚动条
scrollbar: true

# 网站的关键词，都好分割，用于SEO优化
keywords: TriDiamond Obsidian

# 网站口号
descriptionOne: "Think like an artist, develop like an artisan"
descriptionTwo: "艺术家思维去思考问题，工匠创造精神去开发"

# 如果使用google analytics, 请填写ID
google_analytics:

# 网页图标
favicon: /img/favicon.png

# rss文件
rss: atom.xml

# ---------------------------------------------------------------
# 文章音乐设置
# ---------------------------------------------------------------

# 自动播放音乐
autoplay: false

# 默认mp3文件
mp3: 
  - statics/chengdu.mp3

# ---------------------------------------------------------------
# 主题插件
# ---------------------------------------------------------------

# Gitalk 评论插件
# 查看 https://github.com/gitalk/gitalk
gitalk:
  autoExpand: false
  clientID: ''
  clientSecret: ''
  repo: ''
  owner: ''
  admin: ['']
  # Ensure uniqueness and length less than 50
  id: location.pathname
  # Facebook-like distraction

# Valine 评论插件 (推荐使用!)
# 查看 https://valine.js.org/quickstart.html
valine:
  enable: true
  app_id:
  app_key:
  notify: false
  verify: false
  avatar: 'mp'
  placeholder: 'Leave your throughs behind~'
  visitor: true

# 文章字数和阅读时间统计插件
# see https://github.com/theme-next/hexo-symbols-count-time
symbols_count_time:
  enable: true
  wordCount: true
  readCount: true
  awl: 4
  wpm: 275
  suffix: mins.

# html截取插件（用于首页截取内容）
# see https://github.com/TriDiamond/hexo-html-truncate
html_truncate:
  enable: true
  # 文章保留多少个字符
  postLength: 250
  # 封面文章保留多少个字符
  coverLength: 100
  # 省略符号
  ellipsis: '...'
  # 需要过滤的html标签
  excludes: ['img']
  # 截取时保留空白空格字符
  keepWhitespaces: true
  # 截取到最后的时候保留完成的字（只对英文有用）
  reserveLastWord: true
  
```

### 代码块样式

> 因为Obsidian theme 使用手动启用 highlight.js 代码高亮
  为了可以正常显示代码高亮的样式
  请务必在hexo默认配置里面关闭`highlight`。

```yaml
...

highlight:
  enable: false
  line_number: true
  auto_detect: true
  tab_replace:

...
```

> 修改了默认highlight配置后需要重新生成文件

```bash
hexo clean && hexo g
```

### 文章模版

文章模版设置

``` markdown

title: My awesome title
date: 2019-07-14 18:38:45
categories:
    - 分类1
    - 分类2
tags: 
    - 标签1
    - 标签2
mp3: http://domain.com/awesome.mp3
cover: http://domain.com/awesome.jpg

```

### 创建分类页

运行 Hexo 命令

```bash
hexo new page categories
```

分类模版

```
title: categories
date: 2019-07-14 12:39:04
type: "categories"
```

> 主题会自动生成分类内容，模版里面留空不用改动就可以了。

### 创建标签页

运行 Hexo 命令

```bash
hexo new page tags
```

标签模版

```
title: tags
date: 2014-12-22 12:39:04
type: "tags"
```

> 主题会自动生成标签内容，模版里面留空不用改动就可以了。

## 更新主题

> 更新前请先备份主题里的 `_config.yml` 文件

``` bash
cd themes/osidian
git pull
```