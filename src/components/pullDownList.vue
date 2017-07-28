<template>
  <div id="pull-down-list">
    <span id="addBtn" v-on:click.stop="isVisible()">&#xe501</span>
    <div
      v-for="item in items"
      v-on:click.stop="selected(item)"
      v-bind:style="styleObj"
    >
      <span class="selectImg" v-bind:class="item.classObj">&#xe501</span>
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
          {id: 0, name: 'wang', classObj: {isSelected: false}},
          {id: 1, name: 'shi', classObj: {isSelected: false}},
          {id: 2, name: 'qi', classObj: {isSelected: false}}
        ],
        styleObj: {
          display: 'none'
        }
      }
    },
    methods: {
      isVisible () {
        this.styleObj = 'block'
      },
      selected (item) {
        if (item.classObj.isSelected) {
          item.classObj.isSelected = false
        } else {
          item.classObj.isSelected = true
        }
      }
    }
  }

</script>

<style>
  * {
    box-sizing: border-box;
    user-select: none;
  }

  #pull-down-list #addBtn {
    font-family: iconfont;
    display: inline-block;
    color: #0086b3;
    padding: 10px 0;
    font-size: 20px;
  }

  #pull-down-list #addBtn:hover {
    cursor: pointer;
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
    background-color: #eee;
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

  #pull-down-list div .isSelected {
    color: #55a532;
  }

  #pull-down-list div .personName {
    line-height: 40px;
    display: inline-block;
    color: #aaa;
    height: 40px;
  }
</style>
