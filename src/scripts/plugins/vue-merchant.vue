<template>
  <ul class="merchant-list">
    <li v-for="merchant in merchantList" v-link="{name: 'detail', params: {id:merchant.id}}">
      <img v-bind:src="merchant.merchantimg" alt="" />
      <section>
        <b>
          {{merchant.mername}}
          <image v-if="merchant.isnew" src="./images/merchantnew.png" alt="" />
        </b>
        <i>{{merchant.time}} | 月售{{merchant.monthsale}}</i>
        <span>{{merchant.pro}}</span>
      </section>
    </li>
  </ul>
</template>
