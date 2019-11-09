# Changelog
[中文更变日志](https://github.com/TriDiamond/hexo-theme-obsidian/blob/master/CHANGELOG_CN.md)

## 🚀 v1.4.1 (Nov 9, 2019)

✨ Shipped a complete redesigned `archives` page UI and enhanced modern `link style`! Stay being awesome! 👽

### Features ✨
- Complete redesigned `Archives` page!
- Added fade in transition for all pages!
- Archives page now also allow custom header name config! Check out the example theme config below:

```yaml
# Page custom titles
page_titles:
  categories: "Categories"
  tags: "Tags"
  archives: "Archived"
```

### Changes 💥
- New link styles for all pages!
- Redesigned the Read full article button for home page!

## 🚀 v1.4.0 (Nov 8, 2019)

🎉 Lets celebrate the new `Categories` and `Tags` page UI！Now the categories page support multi-levels! Hope you guys love this update! ❤️

### Features ✨
- Added a icon logo display next to the original logo (Which was just a word).
- New icon logo has a spinning effect when you come back to the top of the page!
- Complete new `Categories` and `Tags` page UI with multi-level categories support! (#12)
- English fonts changed to google's `Rubik` fonts, now looks way more awesome!
- Added pages title custom title name, can be changed in theme config file.

Page custom titles
```yaml
# Page custom titles
page_titles:
  categories: "Categories"
  tags: "Tags"
```

### Changes 💥
- All navigation bars added shadows to standout a bit more, well just to look more awesome!
- Article page navigation home icon changed to the icon logo of the site.

## 🚀 v1.3.5 (Nov 4, 2019)

Code block styles and color syntax looks way more awesome now! OMG！Hope you all enjoy this update！❤️

### Changes 💥
- Loader leaving added smoother transition effect.
- Changed code highlighting plugin, swapped highlight.js with codemirror to have a better color syntax. A more IDE like syntax! ✨(#6)
- Restyled the code block, now looks even more professional! ✨
- Complete rewritten TOC css styles, added a pulsing active ball to the current title. Also fixed the clicking space glitchy issue. (#13)

### Bug fixes 🐛
- Fixed a few icon position problems.
- Fixed article nav bar subtitle overflowing issue.
- Fixed a few font-family issue here and there.

## 🚀 v1.3.4 (Oct 24, 2019)

### Changes 💥
- Enhanced web app UI responsive styles.
- Enhanced `ul` and `ol` UI styles.

### Bug fixes 🐛
- Fixed font page link styles.
- Fixed TOC title too long cause overflowing.
- Fixed header with link on hover text.

## 🚀 v1.3.3 (Oct 23, 2019)

### Features ✨
- Added social sharing feature - [`share.js`](https://github.com/overtrue/share.js)

### Changes 💥
- Changed the loading icon to `Load Awesome`'s `la-ball-atom`. - [`Load Awesome`](https://github.com/danielcardoso/load-awesome)

## 🚀 v1.3.2 (Oct 21, 2019)

### Changes 💥
- Changed the font color of `*word*` (italic) font in post content.

### Bug fixes 🐛
- Home page added first post reacting height, if the first post's height is higher than the window height, it will react to it's content's full height.

## 🚀 v1.3.1 (Oct 18, 2019)

### Features ✨
- Added busuanzi site statistic support.

### Changes 💥
- Changed view count support base on comment plugin.

### Bug fixes 🐛
- Fixed when article categories are empty, generating files failed.
- Fixed responsive style problems.

## 🚀 v1.3.0 (Oct 18, 2019)

Upgraded UI, a much more smooth and elegant look! ✨

### Features ✨
- Added post category display next to post date!

### Changes 💥
- Regraded overall UI, looks much more smooth and elegant. ✨
- Added water waves for the reading tracking ball! 🔵
- Upgraded all the control icons.`
- Replenished the playing tracking effect.
- Replenished all the responsive styles
- Css changed to use stylus instead of traditional css, for easier editing.
- Moved all the plugin js and css to CDN, to speed up blog start up speed.

### Bug fixes 🐛
- Fixed the language problem with loading more.
- Fixed the article comments are same for all articles.

## 🚀 v1.2.0 (Oct 15, 2019)

Enhanced bunch of features and add bunch of fun stuffs. Hope you all enjoy them!

### Features ✨
- Added English language support! Hooray！
- Home page added "Read article" so it's more clear that it's just a summary, click to read full article.
- Added back to top button, also with a fun progress tracking effect!
- Footer theme added theme version display.
- Article added a parameter to set the number of characters this particular article should keep.

### Changes 💥
- Added sticky effect for both home page and article page navigation bar, with auto hide when scroll, allow reading with less undistraction.
- Re-added google analytics js, which was removed before.
- Article top progress bar is enlarged to more catch eyeballs.

### Bug fixes 🐛
- Fixed slogan height shaking issue.
- Fixed screen flashes when scrolling.

## 🚀 v1.1.0 (Oct 12, 2019)

Added a few more features and enhanced a bit here and there. Have fun and enjoy blogging! ❤️

### Features ✨
- Added [Valine](https://valine.js.org) comment plugin support.
- Article page enhanced TOC style and feature.
- Article page added user profile box.
- Added Article view count.

### Changes 💥
- Article page changed to grid layout.
- Article page changed to two column layout, now with sidebar.

## 🚀 v1.0.0 (Oct 10, 2019)
#### Features ✨
- Very first complete version of the theme