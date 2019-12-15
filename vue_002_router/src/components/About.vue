<template>
    <div>
      This is about.  
      <!-- {{$route.params.id}} -->
      {{id}}
      <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'About',
    props: ['id'],
    created (){
      console.log(this.$route)
      // console.log(this.$route.params)
      // params id有利于SEO（搜索引擎优化） /a/b  （SEM搜索引擎营销）
      // query主要用于查询
    }
}
</script>

<style lang="">
    
</style>