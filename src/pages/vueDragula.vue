<template>
  <div>
    <h1>vueDragula测试</h1>
    <div>不算成功
      <a href="https://github.com/Astray-git/vue-dragula">https://github.com/Astray-git/vue-dragula</a>
    </div>
    <div class="wrapper">
      <div class="container" v-dragula="colOne" bag="first-bag" >
        <div class="item" v-for="(text, index) in colOne" :key="index">{{index}}---{{text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        colOne: [11.44, 'shseoihabi', 'osidhfahepigaw']
      }
    },
    created () {
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
