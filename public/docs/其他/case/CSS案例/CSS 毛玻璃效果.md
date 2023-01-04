# CSS 毛玻璃效果

![Untitled](CSS%20%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C%208017eb6c7a6d4dafbfb091cec35fd84e/Untitled.png)

```html
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8">
		<title>test</title>
		<link rel="stylesheet" href="css/test.css"/>
		<script src="js/test.js"></script>
	</head>
	<body>
		<div class="box"></div>
	</body>
</html>
```

```css
body{
	margin: 0px;
	padding: 0px;
	text-align: center;
	background-image: url(../img/wallhaven-8orqmj.png);
	background-size: 100%;
}
.box{
	display: inline-block;
	width: 700px;
	height: 400px;
	border-radius: 20px;
	background-color: rgba(225, 237, 239, .2);
	margin-top: 200px;
	***backdrop-filter: blur(25px);***
	box-shadow: 4px 4px 30px rgba(0,0,0,.5);
}
```

***backdrop-filter: blur(25px);更多滤镜***

[backdrop-filter - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/backdrop-filter)

![hue-rotate(190deg);](CSS%20%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C%208017eb6c7a6d4dafbfb091cec35fd84e/Untitled%201.png)

hue-rotate(190deg);

![invert(70%);](CSS%20%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C%208017eb6c7a6d4dafbfb091cec35fd84e/Untitled%202.png)

invert(70%);

![sepia(90%);](CSS%20%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C%208017eb6c7a6d4dafbfb091cec35fd84e/Untitled%203.png)

sepia(90%);

![saturate(1500%);](CSS%20%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C%208017eb6c7a6d4dafbfb091cec35fd84e/Untitled%204.png)

saturate(1500%);

![brightness(600%);](CSS%20%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C%208017eb6c7a6d4dafbfb091cec35fd84e/Untitled%205.png)

brightness(600%);

![contrast(200%);](CSS%20%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C%208017eb6c7a6d4dafbfb091cec35fd84e/Untitled%206.png)

contrast(200%);

![grayscale(3200%);](CSS%20%E6%AF%9B%E7%8E%BB%E7%92%83%E6%95%88%E6%9E%9C%208017eb6c7a6d4dafbfb091cec35fd84e/Untitled%207.png)

grayscale(3200%);
