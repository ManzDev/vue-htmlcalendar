<template>
  <div>
    <html-almanaque :year="year"></html-almanaque>
  </div>
</template>

<script>
import HTMLAlmanaque from '~/components/HTMLAlmanaque';

export default {
  name: 'App',
  components: {
    'html-almanaque': HTMLAlmanaque
  },
  props: {
    year: {
      type: Number,
      default: new Date().getFullYear()
    }
  },
  mounted() {
    document.title = 'VueCalendar';
    console.info(this.year, typeof(this.year));
    this.createNav();
  },
  methods: {
    createNav() {
      //this.$router.push({ path: '/', name: 'Home' });
    }
  }
};
</script>

<style lang="postcss">
  body {
    margin: 0;
  }

  h1 {
    text-align: center;
  }

  nav.top {
    display: flex;
    background: #000;
    width: 100%;
    height: 50px;
    justify-content: center;
    align-items: center;

    & a {
      font-family: Roboto, sans-serif;
      color: #41b783;
      margin: 0 5px;
      padding: 5px 10px;

      &:hover {
        background: #41b783;
        color: #000;
        text-decoration: none;
      }
    }
  }
</style>
