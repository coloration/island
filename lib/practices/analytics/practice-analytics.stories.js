import Analytics from './Analytics.vue'

export default {
  title: 'Practice/Analytics',
  component: Analytics,
}

export const PracticeAnalytics = () => ({
  components: { Analytics },
  template: `
    <Analytics />
  `,
})


