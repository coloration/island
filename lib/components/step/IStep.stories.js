import IStep from './IStep.vue'
import { IParagraphText, ITitle, IText } from '../text'

export default {
  title: 'Component/step/IStep',
  component: IStep,
  argTypes: {
    direction: { 
      options: ['horizontal', 'vertical'] ,
      control: { 
        type: 'radio', 
      },
    },
  },
};

const Template = (args) => ({
  components: { IStep, IParagraphText, ITitle },
  setup() {
    return { args }
  },
  template: `
    <div :style="{ display: args.direction === 'horizontal' ? 'flex' : 'block' }">
      <IStep v-bind="args" checked>
        <ITitle :level="3">Product V1 - Early Access</ITitle>
        <IParagraphText top="0.5" bottom="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
      <IStep v-bind="args" step="2">
        <ITitle :level="3">Web3 Compatibility</ITitle>
        <IParagraphText top="0.5" bottom="1">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </IParagraphText>
      </IStep>
    </div>
  `,
});

export const Default = Template.bind({})

Default.args = {
  direction: 'horizontal',
}


export const WithHorizontalAlignJustify = (args) => ({
  components: { IStep, IText },
  setup() {
    return { args }
  },
  template: `
    <div class="flex">
      <IStep v-bind="args" checked>
      </IStep>
      <IStep v-bind="args" checked>
      </IStep>
      <IStep v-bind="args" checked>
      </IStep>
      <IStep v-bind="args" checked>
      </IStep>
      <IStep v-bind="args" step="2" alignEnd>
      </IStep>
    </div>
    <div class="flex justify-between">
      <IText italic>Start</IText>
      <IText italic>End</IText>
    </div>
  `,
})


export const WithVerticalAlignJustify = (args) => ({
  components: { IStep, IText },
  setup() {
    return { args }
  },
  template: `
    <div class="flex">
      <div style="height: 230px;" class="flex flex-col">
        <IStep v-bind="args" direction="vertical" checked>
        </IStep>
        <IStep v-bind="args" direction="vertical" checked>
        </IStep>
        <IStep v-bind="args" direction="vertical" checked>
        </IStep>
        <IStep v-bind="args" direction="vertical" checked>
        </IStep>
        <IStep v-bind="args" direction="vertical" step="2" alignEnd>
        </IStep>
      </div>
      <div class="flex flex-col justify-between">
        <IText italic>Start</IText>
        <IText italic>End</IText>
      </div>
    </div>
  `,
});




