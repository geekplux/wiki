* Install Emacs on Mac
```sh
$ brew install emacs-plus --with-dragon-icon --with-native-comp
```

--with-native-comp is necessary for greater *compatibility*
* [EmacsWiki: Site Map](https://www.emacswiki.org)
* Guide
** [mastering-emacs-in-one-year-guide](https://github.com/redguardtoo/mastering-emacs-in-one-year-guide/blob/master/guide-zh.org)
** [Mastering Emacs](https://www.masteringemacs.org) #Books
** [Writing GNU Emacs Extensions: 9781565922617: Computer Science Books @ Amazon.com](https://www.amazon.com/Writing-GNU-Emacs-Extensions-Glickstein/dp/1565922611) #Books
* emacs life
** [Planet Emacslife](https://planet.emacslife.com)
** [A Life Configuring Emacs](https://alhassy.github.io/emacs.d/)
* videos
** [Using Emacs Series - C'est la Z](https://cestlaz.github.io/stories/emacs/)
* starter
** [[doomemacs]]
* mode
** [[org-mode]]
** [GitHub - rougier/notebook-mode: GNU Emacs notebook mode](https://github.com/rougier/notebook-mode)
* themes
** [GitHub - 404cn/nano-theme.el: Emacs theme split from nano-emacs.](https://github.com/404cn/nano-theme.el)
* packages
** [[org-roam]]
** [GitHub - rougier/svg-lib: Emacs SVG libraries for creatings tags, icons and bars](https://github.com/rougier/svg-lib)
* troubleshooting
** export [[org]] to [[pdf]]
*** with broken links

```elisp
(after! org
  (setq org-export-with-broken-links t))
```
*** [[pdflatex]] not found
**** on [[MacOS]] 
```sh
