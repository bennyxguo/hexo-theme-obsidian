# Hexo-theme-obsidian
> A dark Hexo theme, it's responsive, simple but elegant.

**[PREVIEW](http://tridiamond.tech)** |
**[中文文档](https://github.com/TriDiamond/hexo-theme-obsidian/blob/master/README_CN.md)** |
**[CHANGES](https://github.com/TriDiamond/hexo-theme-obsidian/blob/master/CHANGELOG.md)**


![screenshot](https://s2.ax1x.com/2019/10/01/uNBcND.png)

## Install

``` bash
$ git clone https://github.com/TriDiamond/hexo-theme-obsidian.git obsidian
```

## Usage

### Activate Theme

Open `Hexo` config file `_config.yml`, set theme to `obsidian`

``` yaml
...
theme: obsidian
...
```

### Theme settings

Open `/themes/obsidian/_config.yml` can change the theme configs

``` yaml

#! ---------------------------------------------------------------
#! Obsidian theme use manual highlight.js
#! To maintain the code block css display properly
#! please change your default highlight setting as off!!
#! Rebuild files after you changed the config:
#! `hexo clean && hexo g`
#! ---------------------------------------------------------------
#! highlight:
#!  enable: false
#!  line_number: true
#!  auto_detect: true
#!  tab_replace:
#! ---------------------------------------------------------------

# ---------------------------------------------------------------
# Theme default settings
# ---------------------------------------------------------------

# Menu setting | format = title_name: link_url
menu:
  PAGE: /page

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
descriptionOne: "Think like an artist, develop like an artisan"
descriptionTwo: "艺术家思维去思考问题，工匠创造精神去开发"

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
  enable: false
  autoExpand: false
  clientID: ''
  clientSecret: ''
  repo: ''
  owner: ''
  admin: ['']
  # Ensure uniqueness and length less than 50
  id: location.pathname
  # Facebook-like distraction

# Valine comment plugin (recommended!)
# see https://valine.js.org/quickstart.html
valine:
  enable: true
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
  
```

### Code block style

> Turn off default `highlight` to ensure code block style display properly. 
  Because Obsidian theme use manual highlight.js
  To maintain the code block css display properly
  please change your default highlight setting as off!!

```yaml
...

highlight:
  enable: false
  line_number: true
  auto_detect: true
  tab_replace:

...
```

> Rebuild files after you changed the config

```bash
hexo clean && hexo g
```

### Post template

Post template settings

``` markdown

title: My awesome title
date: 2019-07-14 18:38:45
categories:
    - Category1
    - Category2
tags: 
    - Tag1
    - Tag2
mp3: http://domain.com/awesome.mp3
cover: http://domain.com/awesome.jpg

```

### Create categories page

Run Hexo command to generate categories page

```bash
hexo new page categories
```

Categories template

```
title: categories
date: 2019-07-14 12:39:04
type: "categories"
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

## Update Theme

> Please backup your `_config.yml` file before update

``` bash
cd themes/osidian
git pull
```