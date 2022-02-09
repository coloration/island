import IVerticalStep from './IVerticalStep.vue'

export default {
  title: 'Component/IVerticalStep',
  component: IVerticalStep,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IVerticalStep },
  setup() {
    return { ...args }
  },
  template: `
    <IVerticalStep title="Product V1 - Early Access" checked>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </IVerticalStep>
    <IVerticalStep title="Web3 Compatibility" step="2">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </IVerticalStep>
    <IVerticalStep checked step="3">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillpariaturpariaturum dolore eu fugiat nulla pariatur.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum pariatur dolore eu fugiat nulla pariatur.
    </IVerticalStep>
    
    <IVerticalStep title="Activity Feed Integration">
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </IVerticalStep>
  `,
});

export const Default = Template.bind({})

Default.args = {
  type: 'primary',
}

export const Type = () => ({
  components: { IVerticalStep },
  template: `
    <div>
      <IVerticalStep>Primary</IVerticalStep>
      <IVerticalStep type="normal">Normal</IVerticalStep>
      <IVerticalStep type="ghost">Ghost</IVerticalStep>
    </div>
  `
})