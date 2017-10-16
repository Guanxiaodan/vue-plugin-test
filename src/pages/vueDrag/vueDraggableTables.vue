<template>
  <div>
    <h1>vuedraggable拖拽Table</h1>
    <a href="https://jsfiddle.net/dede89/L54yu3L9/">https://jsfiddle.net/dede89/L54yu3L9/</a>

    <div>
      <table>
        <thead>
        <tr>
          <th>索引</th>
          <th>名称</th>
          <th>籍贯</th>
        </tr>
        </thead>
        <draggable v-model="people" :element="'tbody'" @end="removes">
          <tr class="item" v-for="(person, index) in people" :key="index">
            <td>{{index}}</td>
            <td>{{person.name}}</td>
            <td>{{person.home}}</td>
          </tr>
        </draggable>
      </table>
      <div>
        <div v-for="i in people">{{i.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import draggable from 'src/pages/vueDrag/vueDraggable'

  export default {
    data () {
      return {
        people: [
          {home: '山西', name: 'Abby'},
          {home: '太原', name: 'Brooke'},
          {home: '运城', name: 'Courtenay'},
          {home: '北京', name: 'David'}
        ]
      }
    },
    methods: {
      removes (item) {
        console.log('看看触发事件了没', item)
      }
    },
    created () {
    },
    components: {
      draggable
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

  .item {
    font-size: 20px;
    background: #6ae9ff;
    width: 20rem;
    border: 1px solid;
    border-radius: 3rem;
  }

  .item:hover {
    cursor: pointer;
  }


</style>
