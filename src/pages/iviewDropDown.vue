<template>
  <div>
    <h1>iview下拉框测试</h1>
    <Dropdown @on-click="changes">
      <a href="javascript:void(0)">
        hover 触发
        <Icon type="arrow-down-b"></Icon>
      </a>
      <Dropdown-menu slot="list">
        <Dropdown-item :name="212">驴打滚</Dropdown-item>
        <Dropdown-item :name="22">炸酱面</Dropdown-item>
        <Dropdown-item :name="46">豆汁儿</Dropdown-item>
        <Dropdown-item :name="842">冰糖葫芦</Dropdown-item>
        <Dropdown-item :name="858">北京烤鸭</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      changes (item) {
        console.log(item)
      }
    },
    created () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
