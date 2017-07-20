<template>
  <div>
    <h1>iview穿梭框测试</h1>
    <Transfer
      :data="tasks"
      :target-keys="targetKeys2"
      filterable
      :filter-method="filterMethod"
      @on-change="handleChange2"></Transfer>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tasks: [],
        targetKeys2: []
      }
    },
    methods: {
      getMockData () {
        let mockData = []
        for (let i = 1; i <= 20; i++) {
          mockData.push({
            key: i.toString(),
            label: '内容' + i,
            description: '内容' + i + '的描述信息',
            disabled: Math.random() * 3 < 1
          })
        }
        return mockData
      },
      getTargetKeys () {
        return this.getMockData()
          .filter(() => Math.random() * 2 > 1)
          .map(item => item.key)
      },
      handleChange2 (newTargetKeys) {
        this.targetKeys2 = newTargetKeys
      },
      filterMethod (data, query) {
        return data.label.indexOf(query) > -1
      }
    },
    created () {
      this.tasks = [{key: 1, label: '生活a'}, {key: 3, label: 'xiangshang'}, {key: 2, label: '幸福'}, {key: 0, label: '谦虚'}]
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
