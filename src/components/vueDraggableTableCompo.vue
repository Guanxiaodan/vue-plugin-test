<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>Actual table with tr/td tags</th>
      </tr>
      </thead>
      <draggable v-model="list" :element="'tbody'">
        <tr v-for="(person, index) in list" :key="person">
          <local-td :item="person"></local-td>
          <td>{{person}}</td>
        </tr>
      </draggable>
    </table>
  </div>
</template>


<script>
  /**
   *
   * 目前该组件不可用，请参阅
   * https://jsfiddle.net/dede89/L54yu3L9/
   * 进行修改
   * */
  import draggable from 'vuedraggable'
  const localTable = draggable.localTable

  export default {
    name: 'hello',
    data () {
      return {
      }
    },
    created () {
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }


</style>
