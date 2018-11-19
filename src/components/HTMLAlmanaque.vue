<template>
  <div class="almanaque">
    <div class="year">{{ year }}</div>
    <div class="months">
      <html-calendar v-for="m in 12" :key="m"
                     :month="m" :year="year" :theme="theme"
                     @click-event="getClick(d)"></html-calendar>
    </div>
  </div>
</template>

<script>
import HTMLCalendar from '~/components/HTMLCalendar';

const THEMES = ['normal', 'rainbow', 'minimalist'];

export default {
  name: 'Almanaque',
  components: {
    'html-calendar': HTMLCalendar
  },
  props: {
    year: {
      type: Number,
      default: new Date().getFullYear(),
    },
    theme: {
      type: String,
      default: 'normal',
      validator: value => THEMES.includes(value)
    }
  },
  methods: {
    getClick(d) {
      console.log('Evento!');
      console.log('this', this);
      console.log('d', d);
    }
  }
};
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
    font-family: Montserrat, sans-serif;
    font-size: 72px;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-weight: 800;
  }
</style>
