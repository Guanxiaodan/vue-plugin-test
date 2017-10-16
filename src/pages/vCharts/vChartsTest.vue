<template>
  <div>
    <h1>vCharts测试</h1>
    <div>
      <ve-line
        :data="chartData"
        :colors="chartColors"
        tooltip-visible
        legend-visible
        :width="width"
        :height="height"
        :scale="scale"
        :visualMap="maps"
        :settings="chartSettings">
      </ve-line>
    </div>
  </div>
</template>

<script>
  import 'echarts/lib/component/visualMap'

  export default {
    name: 'hello',
    data () {
      return {}
    },
    created () {
      this.chartData = {
        columns: ['日期', '销售额'],
        rows: [
          { '日期': '1月1日', '销售额': 1523 },
          { '日期': '1月2日', '销售额': 1223 },
          { '日期': '1月3日', '销售额': 2123 },
          { '日期': '1月4日', '销售额': 4123 },
          { '日期': '1月5日', '销售额': 3123 },
          { '日期': '1月6日', '销售额': 7123 }
        ]
      }
      this.chartColors = [
        '#19d4ae', '#5ab1ef', '#fa6e86',
        '#ffb980', '#0067a6', '#c4b4e4',
        '#d87a80', '#9cbbff', '#d9d0c7',
        '#87a997', '#d49ea2', '#5b4947',
        '#7ba3a8'
      ]
//      this.grid = { left: 20, right: 20 }
      this.scale = { y: true }
      this.width = '80%'
      this.height = '350px'
      this.chartSettings = {
        yAxisType: ['KMB'],
        area: false
      }
      this.maps = {
        top: 10,
        right: 10,
        precision: 1,
        pieces: [{
          gt: 0,
          lte: 2000,
          color: '#096'
        }, {
          gt: 2000,
          lte: 4000,
          color: '#ffde33'
        }, {
          gt: 4000,
          lte: 6000,
          color: '#ff9933'
        }, {
          gt: 6000,
          lte: 7000,
          color: '#cc0033'
        }, {
          gt: 7000,
          color: 'yellowgreen'
        }],
        outOfRange: {
          color: '#999'
        }
      }
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
