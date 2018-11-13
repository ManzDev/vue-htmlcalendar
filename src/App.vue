<template>
  <div>
    <html-calendar theme="minimalist"></html-calendar>
    <html-calendar :month="8" theme="rainbow" :today="5"></html-calendar>
  </div>
</template>

<script>
import HTMLCalendar from './components/HTMLCalendar';

export default {
  components: {
    "html-calendar": HTMLCalendar
  }
}
</script>

<style lang="postcss" scoped>
  div {
    display: flex;
  }
</style>
