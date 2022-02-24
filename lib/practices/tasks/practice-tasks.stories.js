import Tasks from './Tasks.vue'

export default {
  title: 'Practice/Tasks',
  component: Tasks,
}

export const PracticeTasks = () => ({
  components: { Tasks },
  template: `
    <Tasks />
  `,
})


