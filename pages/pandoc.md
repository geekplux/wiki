* [Pandoc - About pandoc](https://pandoc.org)
* ```
pandoc -f markdown -t org [FILES]
  ```
* convert logseq markdown to org
  ``` sh
pandoc -f markdown -t org --wrap preserve -o pages/<filename>.org pages/<filename>.md
 ```
