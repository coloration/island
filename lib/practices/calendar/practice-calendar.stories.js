import Calendar from './Calendar.vue'

export default {
  title: 'Practice/Calendar',
  component: Calendar,
}

export const PracticeCalendar = () => ({
  components: { Calendar },
  template: `
    <Calendar />
  `,
})


