import IToast from './IToast.vue'

export default {
  title: 'Component/IToast',
  component: IToast,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IToast },
  setup() {
    return { ...args }
  },
  template: `
    <IToast 
      :type="type">{{ content }}</IToast>
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

export const Type = () => ({
  components: { IToast },
  template: `
    <div>
      <IToast>Primary</IToast>
      <IToast type="normal">Normal</IToast>
      <IToast type="ghost">Ghost</IToast>
    </div>
  `
})