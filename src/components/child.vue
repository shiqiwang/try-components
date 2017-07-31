<template>
  <table id="childTable">
    <caption>child</caption>
    <tr>
      <th>person id</th>
      <th>person name</th>
    </tr>
    <tr>
      <td>{{personId}}</td>
      <td>{{personName}}</td>
    </tr>
  </table>
</template>

<script>
  export default {
    name: 'child',
    props: {
      personId: {type: Number, required: true},
      personName: String
    },
    data () {
      return {
        count: 1
      }
    },
    mounted: function () {
      this.$emit('getData', this.count)
    }
  }
</script>

<style>
  #childTable {
    margin: 10px auto;
    border: 1px solid #999999;
  }

  #childTable th {
    padding: 10px;
  }

  #childTable td {
    padding: 0 10px 10px;
  }
</style>
