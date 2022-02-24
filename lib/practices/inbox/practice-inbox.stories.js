import Inbox from './Inbox.vue'

export default {
  title: 'Practice/Inbox',
  component: Inbox,
}

export const PracticeInbox = () => ({
  components: { Inbox },
  template: `
    <Inbox />
  `,
})


