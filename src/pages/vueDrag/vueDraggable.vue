<template>
  <div>
    <h1>vuedraggable测试</h1>
    <a href="https://www.npmjs.com/package/vuedraggable">https://www.npmjs.com/package/vuedraggable</a>
    <div>
      <draggable v-model="myArray">
        <transition-group>
          <div class="item" v-for="(element, index) in myArray" :key="index">
            {{index}}----{{element}}
          </div>
        </transition-group>
      </draggable>
      <p>{{myArray}}</p>
    </div>
  </div>
</template>

<script>
  import draggable from 'src/pages/vueDrag/vueDraggable'

  export default {
    name: 'hello',
    data () {
      return {
        myArray: ['任务一', '任务er', '任务san', '任务si', '任务wu', '任务liu', '任务qi']
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
    background: pink;
    width: 20rem;
    border: 1px solid;
    border-radius: 3rem;
  }

</style>
