<template>
    <tr>
        <td>{{valores.orderNfId}}</td>
        <td>{{valores.buyers[0]['name']}}</td>
        <td>{{valores.providers[0]['name']}}</td>
        <td>{{valores.emissionDate}}</td>
        <td>R$ {{valores.value}}</td>
        <td>{{valores.orderStatusBuyer}}</td>
        <td><button class="btn">Dados do cedente</button> </td>
    </tr>
</template>
<script>
export default {
  name: 'table-body-tr',
  props:{
      valores:Object
  },
}
</script>
