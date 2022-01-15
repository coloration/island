import IDropdown from './IDropdown.vue'

export default {
  title: 'Component/IDropdown',
  component: IDropdown,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IDropdown },
  setup() {
    return { ...args }
  },
  template: `
    <IDropdown 
      :options="options">{{ content }}</IDropdown>
  `,
});

export const Default = Template.bind({})

Default.args = {
  options: [
    {
      value: 0,
      name: 'Most Popular'
    },
    {
      value: 1,
      name: 'Newest'
    },
    {
      value: 2,
      name: 'Lowest Price'
    },
    {
      value: 3,
      name: 'Highest Price'
    }
  ],
}

export const Type = () => ({
  components: { IDropdown },
  template: `
    <div>
      <IDropdown>Primary</IDropdown>
      <IDropdown type="normal">Normal</IDropdown>
      <IDropdown type="ghost">Ghost</IDropdown>
    </div>
  `
})