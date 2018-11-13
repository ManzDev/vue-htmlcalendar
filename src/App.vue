<template>
  <div>
    <html-almanaque></html-almanaque>
  </div>
</template>

<script>
import HTMLAlmanaque from './components/HTMLAlmanaque';

export default {
  components: {
    "html-almanaque": HTMLAlmanaque
  }
}
</script>

<style lang="postcss" scoped>
  div {
    display: flex;
  }
</style>
