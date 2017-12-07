<template>
  <div class="hello">
    <h1>测试啊啊啊啊</h1>
    <div>
      <selectt v-model="model5" disabled style="width:200px">
        <optionn v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</optionn>
      </selectt>
      <selectt v-model="model6" style="width:200px">
        <optionn value="beijing">New York</optionn>
        <optionn value="shanghai" disabled>London</optionn>
        <optionn value="shenzhen">Sydney</optionn>
      </selectt>
    </div>
  </div>
</template>

<script>
  import {selectt, optionn} from '../../selsect/index'

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
        model5: '',
        model6: ''
      }
    },
    components: {
      selectt, optionn
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
