<template>
  <div class="calendar">
    <div class="month">{{ monthName }}</div>
    <div class="offset" :key="`o${d}`" v-for="d in offsetDays"></div>
    <div :class="{
        day: true,
        sunday: isSunday(d),
        today: isToday(d)
      }" :key="d" v-for="d in lastDay" @click="clickDay($event, d)">{{ getData(d) }}</div>
  </div>
</template>

<script>
const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const WEEKS = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
const THEMES = ['rainbow', 'minimalist'];
const DATE = new Date();

export default {
  props: {
    month: {
      type: Number,
      default: () => DATE.getMonth() + 1
    },
    year: {
      type: Number,
      default: () => DATE.getFullYear()
    },
    today: {
      type: Number,
      default: () => DATE.getDate()
    },
    theme: {
      type: String,
      default: 'normal'
    }
  },
  data() {
    return {
    }
  },
  computed: {
    // Long way
    lastDay: function() {
      return new Date(this.year, this.month, 0).getDate();
    },
    // Short way
    firstDay() {
      return new Date(this.year, this.month - 1, 1).getDay();
    },
    monthName() {
      return MONTHS[this.month - 1];
    },
    offsetDays() {
      return (this.firstDay > 0) ? this.firstDay - 1 : 6;
    }
  },
  methods: {
    getData(d) {
      const weekday = new Date(this.year, this.month - 1, d).getDay();
      return `${WEEKS[weekday]}${d}`;
    },
    isSunday(d) {
      const weekday = new Date(this.year, this.month - 1, d).getDay();
      return weekday == 0;
    },
    isToday(d) {
      return d == this.today;
    },
    clickDay(event, d) {
      console.log('click', event, d);
    }
  },
  mounted() {
    console.log('Componente montado.', this.$el);

    if (THEMES.includes(this.theme))
      this.$el.classList.add(this.theme);
  }
}
</script>

<style lang="postcss" scoped>
.calendar {
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
  max-width: 380px;
  border-top: 5px solid red;
  border: 1px solid #000;

  & .month {
    font-family: Montserrat, Impact, sans-serif;
    background: #50c08d;
    color: #fff;
    text-align: center;
    text-shadow: 2px 2px 8px #000;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 100%;
    height: 40px;
  }

  &.rainbow {
    & .month {
      background: linear-gradient(90deg, red, orange, yellow, green, blue, purple, pink);
    }
  }

  &.minimalist {
    border-color: grey;
    & .month { background: grey; }

    & .day {
      border-color: grey;
      border-radius: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  & .offset,
  & .day {
    width: 50px;
    height: 50px;
    margin: 1px;
    border: 1px solid transparent;
    color: #666;
  }

  & .day {
    border: 1px solid #555;
  }

  & .sunday {
    font-weight: bold;
    background: #ff9494;
    border: 1px solid transparent;
    color: red;
  }

  & .today {
    background: steelblue;
    color: white;
  }
}
</style>
