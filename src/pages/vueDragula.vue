<template>
  <div>
    <h1>vueDragula测试</h1>
    <div class="wrapper">
      <div class="container" v-dragula="colOne" bag="first-bag">
        <!-- with click -->
        <div class="item" v-for="text in colOne">{{text}}</div>
      </div>
      <div class="container" v-dragula="colTwo" bag="first-bag">
        <div v-for="text in colTwo">{{text}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        colOne: [11.44, 'shseoihabi', 'osidhfahepigaw'],
        colTwo: [8379, '啊数额分别', '埃尔文回复']
      }
    },
    created () {
      this.vueDragula.options('my-bag', {
        direction: 'vertical'
      })
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

  /*.item {*/
    /*border:1px solid #eee;*/
    /*margin-bottom: 5px;*/
    /*font-size: 20px;*/
  /*}*/
</style>
