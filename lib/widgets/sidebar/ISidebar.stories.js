import ISidebar from './ISidebar.vue'

export default {
  title: 'Widget/ISidebar',
  component: ISidebar,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { ISidebar },
  setup() {
    return { ...args }
  },
  template: `
    <ISidebar 
      :type="type">{{ content }}</ISidebar>
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

export const Type = () => ({
  components: { ISidebar },
  template: `
    <div>
      <ISidebar>Primary</ISidebar>
      <ISidebar type="normal">Normal</ISidebar>
      <ISidebar type="ghost">Ghost</ISidebar>
    </div>
  `
})