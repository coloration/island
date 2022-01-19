import IDemo from './IDemo.vue'

export default {
  title: 'Practice/IDemo',
  component: IDemo,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IDemo },
  setup() {
    return { ...args }
  },
  template: `
    <IDemo 
      :type="type">{{ content }}</IDemo>
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

export const Type = () => ({
  components: { IDemo },
  template: `
    <div>
      <IDemo>Primary</IDemo>
      <IDemo type="normal">Normal</IDemo>
      <IDemo type="ghost">Ghost</IDemo>
    </div>
  `
})