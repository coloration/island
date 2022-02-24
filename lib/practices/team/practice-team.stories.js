import Team from './Team.vue'

export default {
  title: 'Practice/Team',
  component: Team,
}

export const PracticeTeam = () => ({
  components: { Team },
  template: `
    <Team />
  `,
})


