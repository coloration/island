import IMenu from './IMenu.vue'

export default {
  title: 'Component/IMenu',
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
  type: 'primary',
}

export const Type = () => ({
  components: { IMenu },
  template: `
    <div>
      <IMenu>Primary</IMenu>
      <IMenu type="normal">Normal</IMenu>
      <IMenu type="ghost">Ghost</IMenu>
    </div>
  `
})