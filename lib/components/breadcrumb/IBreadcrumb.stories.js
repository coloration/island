import IBreadcrumb from './IBreadcrumb.vue'
import { IArrowIcon } from '../icon'
export default {
  title: 'Component/breadcrumb/IBreadcrumb',
  component: IBreadcrumb,
  argTypes: {
    
  },
};

const Template = (args) => ({
  components: { IBreadcrumb },
  setup() {
    return { args }
  },
  template: `
    <IBreadcrumb v-bind="args" />
  `,
});

export const Default = Template.bind({})

Default.args = {
  options: [
    { name: 'Account', value: () => console.log('acount') },
    { name: 'Notifications', value: '/abc' },
    { name: 'Integrations', value: () => console.log('Integrations') },
    { name: 'Plans', value: () => console.log('Integrations') },
    { name: 'Billing', value: () => console.log('Integrations') },
  ],
  active: 4,
}


export const WithIconSplit = (args) => ({
  components: { IBreadcrumb },
  setup() {

    return { args, IArrowIcon }
  },
  template: `
    <IBreadcrumb v-bind="args" :split="IArrowIcon" :splitProps="{ direction: 'right' }" />
  `,
})


WithIconSplit.args = {
  options: [
    { name: 'Account', value: () => console.log('acount') },
    { name: 'Notifications', value: '/abc' },
    { name: 'Integrations', value: () => console.log('Integrations') },
    { name: 'Plans', value: () => console.log('Integrations') },
    { name: 'Billing', value: () => console.log('Integrations') },
  ],
  active: 4,
}