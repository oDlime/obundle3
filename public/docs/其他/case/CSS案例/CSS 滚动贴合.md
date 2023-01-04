# CSS 滚动贴合

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
		<main>
			<div class="d1"></div>
			<div class="d2"></div>
			<div class="d3"></div>
			<div class="d4"></div>
		</main>
	</body>
</html>
```

```css
body{
	margin: 0px;
	padding: 0px;
}
main{
	**scroll-snap-type: y mandatory;**
	**overflow: scroll;**
	overflow-x: hidden;
	**height: 100vh;**
}
.d1,.d2,.d3,.d4{
	height:100vh;
	width: 100vw;
	**scroll-snap-align: start;**
}
.d1{
	background-color:rgb(255, 0, 0);
}
.d2{
	background-color: rgb(0, 255, 0);
}
.d3{
	background-color: rgb(0, 0, 255);
}
```
