import Campaigns from './Campaigns.vue'

export default {
  title: 'Practice/Campaigns',
  component: Campaigns,
}

export const PracticeCampaigns = () => ({
  components: { Campaigns },
  template: `
    <Campaigns />
  `,
})


