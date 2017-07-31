
<template>
  <div>
    <div id="parent">
      {{count}}
      <div>parent</div>
      <child v-bind:person-id="id" v-bind:person-name="name" v-on:getData="getData"></child>
    </div>
  </div>
</template>

<script>
  import child from './child.vue'
  export default {
    name: 'parent',
    components: {
      child
    },
    data () {
      return {
        id: 0,
        name: 'wang',
        count: ''
      }
    },
    methods: {
      getData: function (res) {
        this.count = res
      }
    }
  }
</script>

<style>

</style>
