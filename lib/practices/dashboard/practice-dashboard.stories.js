import Dashboard from './Dashboard.vue'

export default {
  title: 'Practice/Dashboard',
  component: Dashboard,
}

export const PracticeDashboard = () => ({
  components: { Dashboard },
  template: `
    <Dashboard />
  `,
})


