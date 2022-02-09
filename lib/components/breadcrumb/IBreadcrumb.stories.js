import IBreadcrumb from './IBreadcrumb.vue'

export default {
  title: 'Component/IBreadcrumb',
  component: IBreadcrumb,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IBreadcrumb },
  setup() {
    return { ...args }
  },
  template: `
    <IBreadcrumb 
      :options="options" />
    <IBreadcrumb 
      split="·"
      :options="options" />
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
}
