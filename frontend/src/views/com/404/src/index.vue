<template>
  <div class="page-404">
    <h3>{{msg}}</h3>
    <div>{{href}} 找不相关页面哦</div>
    <div class="help" @click="sayhell">为啥</div>
    <div class="btn">返回首页</div>
  </div>
</template>

<script lang="ts">
export { default } from './view';
</script>
<style lang="scss">
@import './view.scss';
</style>
