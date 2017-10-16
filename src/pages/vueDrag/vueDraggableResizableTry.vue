<template>
  <div>
    <input type="text" v-model="y">
    <div style="height: 500px; width: 500px; margin: 1rem; border: 1px solid red; position: relative;">
      <!--<vue-draggable-resizable :y="y" :w="100" :h="100" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">-->
        <!--<p style="background: skyblue">-->
          <!--Hello! I'm a flexible component. You can drag me around and you can resize me.<br>-->
          <!--X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p>-->
      <!--</vue-draggable-resizable>-->
      <vue-draggable-resizable :w="70" :h="130" v-on:dragging="onDrag" v-on:resizing="onResize" :parent="true">
      <div style="background: pink">左: {{ x }} / 上: {{ y }} - 宽: {{ width }} / 高: {{ height }}</div>
      </vue-draggable-resizable>
      <!--<vue-draggable-resizable :w="100" :h="100" :handles="['tm','bm','ml','mr']"></vue-draggable-resizable>-->
    </div>
  </div>

</template>

<script>
  //  import VueDraggableResizable from 'vue-draggable-resizable'

  export default {
    data: function () {
      return {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      }
    },
    methods: {
      onResize: function (x, y, width, height) {
        console.log('12121212')
        this.x = x
        this.y = y
        this.width = width
        this.height = height
      },
      onDrag: function (x, y) {
        console.log('5454544545')
        this.x = x
        this.y = y
      }
    }
  }
</script>
