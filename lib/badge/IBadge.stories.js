import IBadge from './IBadge.vue'
import IPrueBadge from './IPrueBadge.vue'

export default {
  title: 'Component/IBadge',
  component: IBadge,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IBadge, IPrueBadge },
  setup() {
    return { ...args }
  },
  template: `
    <IBadge>{{ content }}</IBadge>
    <IBadge color="indigo">{{ content }}</IBadge>
    <IBadge color="light-blue">{{ content }}</IBadge>
    <IBadge color="green" size="lg">{{ content }}</IBadge>
    <IBadge color="yellow">{{ content }}</IBadge>
    <IBadge color="red">{{ content }}</IBadge>
    <IBadge color="blue">{{ content }}</IBadge>
    <IBadge type="dark">{{ content }}</IBadge>
    <p />
    <IPrueBadge>5%</IPrueBadge>
    <IPrueBadge color="indigo">15%</IPrueBadge>
    <IPrueBadge color="green">25%</IPrueBadge>
    <IPrueBadge color="yellow">-5%</IPrueBadge>
    <IPrueBadge color="red">65%</IPrueBadge>
    <IPrueBadge color="blue">-95%</IPrueBadge>
  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Working on'
}

export const Type = () => ({
  components: { IBadge },
  template: `
    <div>
      <IBadge>Primary</IBadge>
      <IBadge type="normal">Normal</IBadge>
      <IBadge type="ghost">Ghost</IBadge>
    </div>
  `
})