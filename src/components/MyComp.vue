<template>
  <div>
    <ul class="dir" v-for="(value1,index1) in adata" :key="index1">
      <div class="dirname" @click="dirnameclick($event)">{{value1.name}}</div>
      <div class="diritem">
        <MyComp :adata="value1.dirs" :asrc="asrc+'/'+value1.name"/>
        <li class="filename" v-for="(value2,index2) in value1.files" :key="index2">
          <a :href="murl+'/#/'+asrc+'/'+value1.name+'/'+value2">{{value2}}</a>
        </li>
      </div>
    </ul>
  </div>
</template>
<script>
var aurl = window.location.origin;
export default {
  name: "MyComp",
  data(){
    return {
      murl:aurl
    }
  },
  props:['adata','asrc'],
  methods:{
    dirnameclick:function(event){
      event.target.classList.toggle('active')
    }
  }
}
</script>

<style scoped>
  ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  ul ul{
    border-left: 1px #c9c9c9 dotted;
  }
  .dirname{
    /*border: 1px solid black;*/
    /*border-radius: 5px;*/
    border-top: 1px #eaeaea solid;
    padding: 5px 0px 5px 10px;
    cursor: pointer;

  }
  li{
    /*border-left:2px solid #b0b0b0;*/
  }
  .diritem{
    display: none;
    margin-left: 20px;
  }
  .active ~ .diritem{
    display: block;
  }
</style>