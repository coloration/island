import MyAccount from './MyAccount.vue'
import MyNotifications from './MyNotifications.vue'
import ConnectedApps from './ConnectedApps.vue'
import Plans from './Plans.vue'
import BillAndInvoices from './BillAndInvoices.vue'
import GiveFeedback from './GiveFeedback.vue'

export default {
  title: 'Practice/Settings',
  component: MyAccount,
}

export const PracticeMyAccount = () => ({
  components: { MyAccount },
  template: `
    <MyAccount />
  `,
})

export const PracticeMyNotifications = () => ({
  components: { MyNotifications },
  template: `
    <MyNotifications />
  `,
})

export const PracticeConnectedApps = () => ({
  components: { ConnectedApps },
  template: `
    <ConnectedApps />
  `,
})

export const PracticePlans = () => ({
  components: { Plans },
  template: `
    <Plans />
  `,
})

export const PracticeBillAndInvoices = () => ({
  components: { BillAndInvoices },
  template: `
    <BillAndInvoices />
  `,
})

export const PracticeGiveFeedback = () => ({
  components: { GiveFeedback },
  template: `
    <GiveFeedback />
  `,
})


