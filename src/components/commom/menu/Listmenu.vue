<template>
    <li class="active">
      <img src="@/assets/icons/notas.svg" alt="">
      {{teste}}</li>
</template>
<script>
export default {
  name: 'ata',
  props:['teste']
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
li{
  img{
    padding-right: 15px;
  }
  text-align:left;
  list-style: none;
  font-size: 14px;
  line-height: 18px;
  color:$green5;
  font-weight: 600;
  position: relative;
  padding: 20px 0px;
  &.active{
    &:after{
      content: '';
      position: absolute;
      left: -25px;
      top: 0;
      width: 4px;
      height: 100%;
      background-color: $green5;
      display: inline-block;
      border-radius: 4px;

    }
  }
}
</style>
