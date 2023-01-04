<template>
  <my-comp :adata="adata1.dirs" :asrc="adata1.name"/>
</template>

<script>
import MyComp from "@/components/MyComp.vue";
import {dirdata} from "@/nodes/dirdata";
export default {
  name: 'App',
  data(){
    return {
      adata1:dirdata
    }
  },
  components: {
    MyComp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
