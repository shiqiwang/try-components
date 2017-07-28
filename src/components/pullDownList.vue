<template>
  <div id="pull-down-list">
    <div v-for="item in items">
      <span class="selectImg">&#xe501</span>
      <span v-bind:data-id="item.id" class="personName">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pull-down-list',
    data () {
      return {
        items: [
          {id: 0, name: 'wang'},
          {id: 1, name: 'shi'},
          {id: 2, name: 'qi'}
        ],
        isSelected: false
      }
    }
//    methods: {
//      classChange: function () {
//        if(this.isSelected) {
//
//        }
//      }
//    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
  }

  #pull-down-list {
    border: 1px #ccc solid;
    box-shadow: aliceblue;
    border-radius: 4px;
    width: 120px;
  }

  #pull-down-list div {
    height: 40px;
  }

  #pull-down-list div:hover {
    cursor: pointer;
  }

  #pull-down-list div .selectImg {
    font-family:iconfont;
    font-size: 18px;
    color: #ccc;
    float: left;
    height: 40px;
    width: 40px;
    line-height:40px;
  }

  #pull-down-list div .personName {
    line-height: 40px;
    display: inline-block;
    color: #aaa;
    height: 40px;
  }
</style>
