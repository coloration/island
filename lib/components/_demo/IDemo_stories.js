import IDemo from './IDemo.vue'

export default {
  title: 'Component/IDemo',
  component: IDemo,

    // https://storybook.js.org/docs/vue/essentials/controls
    
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