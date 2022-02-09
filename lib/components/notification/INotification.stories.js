import INotification from './INotification.vue'

export default {
  title: 'Component/INotification',
  component: INotification,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { INotification },
  setup() {
    return { ...args }
  },
  template: `
    <div>
      <INotification 
        :visible="true"
        title="Merged Pull Request"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing sed do eiusmod tempor incididunt ut labore et dolore.">
      </INotification>
    </div>
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

export const Type = () => ({
  components: { INotification },
  template: `
    <div>
      <INotification>Primary</INotification>
      <INotification type="normal">Normal</INotification>
      <INotification type="ghost">Ghost</INotification>
    </div>
  `
})