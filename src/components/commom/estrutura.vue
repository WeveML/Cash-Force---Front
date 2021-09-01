<template>
    <div class="propostas">
        <Menu/>
        <div class="corpo">
            <teste/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Menu from '@/components/commom/menu/'

export default {
  name: 'Notas',
  components: {
    Menu
  }
}
</script>
<style scoped lang="scss">
.propostas{
    display: flex;
    flex-wrap: wrap;
}
.corpo{
    width: 100%;
    height:100vh;
    background-color:red;
}
</style>