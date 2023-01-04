# CSS 镂空效果

![Untitled](CSS 镂空效果/Untitled.png)

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
		<!-- <div class="box"></div> -->
		<div class="bg"><p class="text">Bundle</p></div>
		
	</body>
</html>
```

```css
body{
	margin: 0px;
	padding: 0px;
	text-align: center;	
}
.bg{
	background-image: url(../img/wallhaven-8orqmj.png);
	background-size: 100%;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
.text{
	font-size: 200px;
	font-weight: 800;
}
```
