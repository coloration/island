import Messages from './Messages.vue'

export default {
  title: 'Practice/Messages',
  component: Messages,
}

export const PracticeMessages = () => ({
  components: { Messages },
  template: `
    <Messages />
  `,
})


