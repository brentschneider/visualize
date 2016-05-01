
# Project desctiption: Optimize the heck out of the theme



### Goal 

Optimize the [Visualize Template](http://templated.co/visualize)


### process

- Installed:
	- grunt
	- uncss
- Reduced images using imageOptim App
- Second pass with PS save for web


### Savings highlights

Moved jquery => CDN
main.css: 31.98 kB → 6.46 kB
font-awesome.min.css: 31.98 kB → 6.46 kB
Single scripts JS: 25 kb
Image fulls: 1.5 MB → 508 KB


----------------------

### Results Before:

- 19 requests, 199 / 233 ms load time

```bash
ROOT Total  	( 2.9 MB ) for 37 items
|
|- assets/   	( 1 MB ) for 16 items
|  |
|  |- css/		( 74 KB ) for 3 items
|  |- fonts/	( 852 KB ) for 7 items
|  `- js/		( 115 KB ) for 5 items
|  
|- images/  	( 1.9 MB ) for 19 items
|  |
|  |- fulls/	( 1.5 MB ) for 8 items
|  |- thumbs/	( 283 KB ) for 8 items
|  |- avatar.jpg( 16 KB )
|  `- bg.jpg 	( 73 KB )
|  
`- index.html = ( 4 KB )
```


## Result After:

- 16 requests, 205 / 229 ms load time

```bash
ROOT Total  	1,663,126 bytes (1.7 MB on disk) 35 items
|
|- assets/   	( 905 KB ) for 14 items
|  |
|  |- css/		( 16 KB ) for 3 items
|  |- fonts/	( 852 KB ) for 7 items
|  `- js/		( 25 KB ) for 2 items
|  
|- images/  	( 811 KB ) for 20 items
|  |
|  |- fulls/	( 508 KB ) for 8 items
|  |- thumbs/	( 233 KB ) for 8 items
|  |- avatar.jpg( 16 KB )
|  `- bg.jpg 	( 45 KB )
|  
`- index.html = ( 4 KB )
```