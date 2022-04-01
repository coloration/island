import ITab from './ITab.vue'

export default {
  title: 'Component/tab/ITab',
  component: ITab,
  argTypes: {
    type: { 
      control: { 
        type: 'inline-radio', options: ['normal', 'underline'] 
      } 
    },
    size: { 
      control: { 
        type: 'inline-radio', options: ['sm', 'md', 'lg'] 
      } 
    },
  },
};

const Template = (args) => ({
  components: { ITab },
  setup() {
    return { args }
  },
  template: `
    <ITab v-bind="args" />
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