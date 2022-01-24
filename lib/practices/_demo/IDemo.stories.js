import IDemo from './IDemo.vue'

export default {
  title: 'Practice/IDemo',
  component: IDemo,
}

export const PracticeIDemo = () => ({
  components: { IDemo },
  template: `
    <IDemo />
  `,
})


