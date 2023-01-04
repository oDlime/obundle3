# CSS 新拟态效果

![Untitled](CSS%20%E6%96%B0%E6%8B%9F%E6%80%81%E6%95%88%E6%9E%9C%20421a9522efe64e10b01b138a59fc3984/Untitled.png)

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
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
		<div class="box"></div>
	</body>
</html>
```

```css
body{
	background-color: #efeeee;
}
.box{
	display: inline-block;
	width: 100px;
	height: 100px;
	margin: 40px;
	transition: .1s;
	background-color: #efeeee;
	border-radius: 10px;
	box-shadow: 18px 18px 30px rgba(0, 0, 0, .1),
	-18px -18px 30px rgba(255, 255, 255, 1);
}
.box:hover{
	box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1),
	0px 0px 0px rgba(255, 255, 255, 1),
	inset 18px 18px 30px rgba(0, 0, 0, 0.1),
	inset -18px -18px 30px rgba(255, 255, 255, 1);
}
```
