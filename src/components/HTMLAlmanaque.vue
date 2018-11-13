<template>
  <div class="almanaque">
    <div class="year">{{ year }}</div>
    <div class="months">
      <html-calendar v-for="m in 12" :key="m" :month="m" :theme="theme" v-on:click-event="getClick($event)"></html-calendar>
    </div>
  </div>
</template>

<script>
import HTMLCalendar from '~/components/HTMLCalendar';

export default {
  props: {
    year: {
      type: Number,
      default: () => new Date().getFullYear()
    },
    theme: {
      type: String,
      default: 'rainbow'
    }
  },
  methods: {
    getClick(p) {
      console.log('Evento!');
      console.log(this);
      console.log(p);
    }
  },
  components: {
    "html-calendar": HTMLCalendar
  }
}
</script>

<style lang="postcss" scoped>
  .almanaque {
    display: flex;
    flex-direction: column;
  }

  .months {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .year {
    display: block;
    font-size: 72px;
    text-align: center;
    font-weight: 800;
  }
</style>
