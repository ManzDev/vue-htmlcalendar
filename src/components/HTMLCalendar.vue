<template>
  <div :class="theme" class="calendar">
    <div class="month">{{ monthName }}</div>
    <div v-for="w in weekDays" :key="w" class="week">{{ w }}</div>
    <div class="days">
      <div v-for="d in offsetDays" :key="`o${d}`" class="offset"></div>
      <div v-for="d in lastDay" :key="d" :class="{
        day: true,
        sunday: isSunday(d),
        today: isToday(d)
      }" @click="clickDay(d)">{{ d }}</div>
    </div>
  </div>
</template>

<script>
const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const DATE = new Date();

export default {
  props: {
    month: {
      type: Number,
      default: DATE.getMonth() + 1
    },
    year: {
      type: Number,
      default: DATE.getFullYear(),
    },
    today: {
      type: Number,
      default: DATE.getDate()
    },
    theme: {
      type: String,
      default: 'normal'
    }
  },
  data() {
    return {
    };
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
    },
    weekDays: () => ['L', 'M', 'X', 'J', 'V', 'S', 'D']
  },
  mounted() {
    //console.log('Componente montado.', this.$el);
  },
  methods: {
    isSunday(d) {
      const weekday = new Date(this.year, this.month - 1, d).getDay();
      return weekday == 0;
    },
    isToday(d) {
      return ((d == DATE.getDate()) &&
              ((this.month - 1) == DATE.getMonth()) &&
              (this.year == DATE.getFullYear()));
    },
    clickDay(d) {
      this.$emit('click-event', d);
    }
  }
};
</script>

<style lang="postcss" scoped>
.calendar {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin: 10px;
  width: 378px;
  border: 1px solid #50c08d;

  & .month {
    font-family: Montserrat, Impact, sans-serif;
    background: #50c08d;
    color: #fff;
    text-align: center;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.75);
    padding: 6px 0;
    font-size: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  & .week {
    display: flex;
    justify-content: center;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    width: 50px;
    margin: 1px;
    padding: 2px 0;
    color: #fff;
    background: #aaa;
    border: 1px solid #aaa;
  }

  & .days {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
  }

  & .offset,
  & .day {
    width: 50px;
    height: 50px;
    margin: 1px;
    font-family: Roboto, sans-serif;
    font-size: 16px;
    border: 1px solid transparent;
    color: #666;
  }

  & .day {
    --day-background: #fff;
    background: var(--day-background);
    border: 1px solid #999;
    cursor: pointer;

    &:hover {
      border: 1px solid #50c08d;
      background: #50c08d;
      color: #fff;
    }
  }

  & .sunday {
    font-weight: bold;
    background: #f5c7c7;
    border: 1px solid transparent;
    color: red;
  }

  & .today {
    background: steelblue;
    color: white;
  }

  /* Themes */

  &.normal {
    & .day {
      --day-background: #ddd;
      border: 1px solid #ccc;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
    }
  }

  &.rainbow {
    border: 1px solid #aaa;

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
}
</style>
