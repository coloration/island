import IMenu from './IMenu.vue'

export default {
  title: 'Widget/IMenu',
  component: IMenu,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IMenu },
  setup() {
    return { ...args }
  },
  template: `
    <IMenu 
      :type="type">{{ content }}</IMenu>
  `,
});

export const Default = Template.bind({})

Default.args = {
}

