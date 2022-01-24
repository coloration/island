import ITab from './ITab.vue'
import IRoundTab from './IRoundTab.vue'

export default {
  title: 'Component/ITab',
  component: ITab,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { ITab, IRoundTab },
  setup() {
    return { ...args }
  },
  template: `
    <ITab 
      :options="options" />

    <ITab 
      type="underline"
      :options="options" />
    <IRoundTab :options="options" />
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

export const Type = () => ({
  components: { ITab },
  template: `
    <div>
      <ITab>Primary</ITab>
      <ITab type="normal">Normal</ITab>
      <ITab type="ghost">Ghost</ITab>
    </div>
  `
})