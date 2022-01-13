import Button from './Button.vue';

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { ...args }
  },
  template: '<Button>{{ content }}</Button>',
});

export const Primary = Template.bind({})
Primary.args = {
  content: 'Button',
}