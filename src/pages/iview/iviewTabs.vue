<template>
  <div>
    <Tabs :value=to>
      <TabPane label="标签一" name="name1">
        <Button type="primary" @click="jump">点击我跳转到tab2页</Button>
      </TabPane>
      <TabPane label="标签二" name="name2" id="tab2">
        <Button type="primary" @click="back">点击我回到第一页</Button>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        to: 'name1'
      }
    },
    methods: {
      jump () {
        this.to = 'name2'
      },
      back () {
        this.to = 'name1'
      }
    },
    created () {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
