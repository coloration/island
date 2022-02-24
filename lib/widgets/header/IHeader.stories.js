import IHeader from './IHeader.vue'

export default {
  title: 'Widget/IHeader',
  component: IHeader,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IHeader },
  setup() {
    return { ...args }
  },
  template: `
    <IHeader 
      :type="type">{{ content }}</IHeader>
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

export const Type = () => ({
  components: { IHeader },
  template: `
    <div>
      <IHeader>Primary</IHeader>
      <IHeader type="normal">Normal</IHeader>
      <IHeader type="ghost">Ghost</IHeader>
    </div>
  `
})