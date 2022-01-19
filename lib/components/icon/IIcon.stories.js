import IIcon from './IIcon.vue'

export default {
  title: 'Component/IIcon',
  component: IIcon,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IIcon },
  setup() {
    return { ...args }
  },
  template: `
    <IIcon />
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

