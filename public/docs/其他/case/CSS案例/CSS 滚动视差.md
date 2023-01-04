# 滚动视差

~~~ html
<div class="box">
        <div class="g-container">
            <div class="section-one">translateZ(-1)</div>
            <div class="section-two">translateZ(-2)</div>
            <div class="section-three">translateZ(-3)</div>
        </div> 
    </div>
~~~

~~~ CSS
.box{
    height: 50vh;
    overflow-y: scroll;
    perspective: 2px;
    transform-style: preserve-3d;
}
.g-container {
  transform-style: preserve-3d;
  height: 2000px;
  
}
.g-container .section-one {
  transform: translateZ(-1px);
}
.g-container .section-two {
  transform: translateZ(-2px);
}
.g-container .section-three {
  transform: translateZ(-3px);
}
~~~

