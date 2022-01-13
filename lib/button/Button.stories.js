import Button from './Button.vue'

export default {
  title: 'Component/Button',
  component: Button,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'danger', 'success'] } 
      },
    size: { 
      control: { 
        type: 'radio', options: [undefined, 'md', 'lg', 'xs', 'sm'] 
      } 
    },
    block: {
      control: {
        type: 'boolean'
      }
    },
    glost: {
      control: {
        type: 'boolean'
      }
    },
  },
};

const Template = (args) => ({
  components: { Button },
  setup() {
    return { ...args }
  },
  template: `
    <Button 
      :type="type" 
      :size="size" 
      :block="block"
      :glost="glost">{{ content }}</Button>
  `,
});

export const Primary = Template.bind({})
Primary.args = {
  content: 'Button',
  type: undefined,
  size: undefined,
  block: false,
}