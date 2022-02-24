import Commerce from './Commerce.vue'

export default {
  title: 'Practice/Commerce',
  component: Commerce,
}

export const PracticeCommerce = () => ({
  components: { Commerce },
  template: `
    <Commerce />
  `,
})


