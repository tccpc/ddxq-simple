<template lang="html">
  <div class="neigbox">
    <header>
      邻居
    </header>
    <div class="contains">
      <ul>
        <li v-link="{path: '/bbs'}">
          <span class="iconfont2">&#xe62d;</span>
          <div>
            <h3>论坛</h3>
            <p>晒晒生活，聊聊八卦</p>
          </div>
        </li>
        <li v-link="{path:'/market'}">
          <span class="iconfont2">&#xe644;</span>
          <div>
            <h3>二手市场</h3>
            <p>闲置自用，二手转让</p>
          </div>
        </li>
        <li v-link="{path:'/neicircle'}">
          <span class="iconfont2">&#xe614;</span>
          <div>
            <h3>邻里团</h3>
            <p>邻里组织，共享实惠</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { changeIndex } from "../vuex/action"
  export default {
    vuex: {
      actions: {
        change: changeIndex
      }
    },
    data(){
      return {}
    },
    ready() {
      this.change(2);
    },
    computed: {},
    mounted () {},
    methods: {},
    components: {}
  }
</script>

