<template>
  <div class="hello">
    <h1>测试啊啊啊啊</h1>
    <div>
      <select v-model="model1" style="width:200px">
        <option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</option>
      </select>
    </div>
  </div>
</template>

<script>
  import {select, option} from '../../selsect/index'

  export default {
    name: 'hello',
    data () {
      return {
        cityList: [
          {
            value: 'New York',
            label: 'New York'
          },
          {
            value: 'London',
            label: 'London'
          },
          {
            value: 'Sydney',
            label: 'Sydney'
          },
          {
            value: 'Ottawa',
            label: 'Ottawa'
          },
          {
            value: 'Paris',
            label: 'Paris'
          },
          {
            value: 'Canberra',
            label: 'Canberra'
          }
        ],
        model1: ''
      }
    },
    components: {
      select, option
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
