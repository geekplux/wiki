- functions
	- css flamp  https://developer.mozilla.org/en-US/docs/Web/CSS/clamp
		- ```css
		  h1 {
		    font-size: clamp(48px, 5vw, 76px); /* min val max */
		  }
		  ```
- css [[font-family]] for [[chinese]]: https://github.com/geeknees/Astrokyo/blob/60a350bf431b87e0aa384a2acff50da0bfd84be2/src/layouts/Layout.astro#L142
	- ```
	    body {
	      font-family: 'Noto Serif JP', 'ヒラギノ角ゴ Pro W3',
	        'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴシック',
	        'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Verdana, sans-serif;
	    }
	  
	    button {
	      font-family: 'Noto Sans JP', 'ヒラギノ角ゴ Pro W3',
	        'Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴシック',
	        'Hiragino Kaku Gothic Pro', 'メイリオ', Meiryo, Verdana, sans-serif;
	    }
	  ```