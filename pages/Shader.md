- {{video https://youtu.be/f4s1h2YETNY}}
-
## Note (summarized by myself)
	- ### What is shader
	  Shader is like a function receiving coordinates, time, or user input as inputs and return a color on each pixel.
	- ### why shader is running so fast
	  Because of GPU, which has a lot of tiny units running in parallel at same time to handle each pixel.
	  > Picture the tiny microprocessors as a table of pipes, and the data of each pixel as a ping pong ball. 
	  ![picture from [*The book of Shaders*](https://thebookofshaders.com/01/), straightforward](https://thebookofshaders.com/01/04.jpeg)
	- ### what is GLSL
	  Language for OpenGL
	- ### [[OpenGL]]
	- ### Uniforms
	  The input for each pixel, readonly variables with certain data type.
	- ### gl_FragCoord
	  A variable we need to calculate to control the final present of canvas.
	-
## Learning Resource
	- ### books
		- [*The Book of Shaders*](https://thebookofshaders.com) - best learning guide for shaders I think, with practical interactive example and pretty good writing style.
	- https://blog.maximeheckel.com/posts/the-study-of-shaders-with-react-three-fiber/ #[[React Three Fiber]]