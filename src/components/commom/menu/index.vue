<template>
    <div class="menu">
        <img alt="Logo CF" src="@/assets/img/logo.svg">
        <ul>
            <Listmenu teste="Notas Fiscais"/>
        </ul>
    </div>
</template>

<script>
import Listmenu from '@/components/commom/menu/Listmenu.vue';
export default {
  name: 'menu',
    components: {
    Listmenu 
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu{
    min-height: 100vh;
    width: 288px;
    background-color:$light4;
    padding:24px 25px ;
}
ul{
    padding: 0px;
    margin-top: 25px;
}
@media screen and (max-width:768px){
    .menu{
        width: 100vw;
        min-height:auto
    }
}
</style>
