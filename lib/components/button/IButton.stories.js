import IButton from './IButton.vue'
import IconAccessibility from '~icons/carbon/accessibility'
import IconPlus from '~icons/bytesize/plus'
import IconArrowRight from '~icons/carbon/arrow-right'
import IArrowLeftButton from './IArrowLeftButton.vue'
import IArrowRightButton from './IArrowRightButton.vue'
import IPlusButton from './IPlusButton.vue'

export default {
  title: 'Component/button/IButton',
  component: IButton,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
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
    color: { 
      control: { 
        type: 'radio', options: [undefined, 'indigo', 'red', 'green', 'gray'] 
      } 
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    loading: {
      control: {
        type: 'boolean'
      }
    },
  },
};

const Template = (args) => ({
  components: { IButton },
  setup() {
    return { args }
  },
  template: `
    <IButton 
      v-bind="args">{{ args.content }}</IButton>
  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Button Demo',
  type: 'normal',
}

export const WithType = () => ({
  components: { IButton },
  template: `
  <div class="flex gap-4 items-start mb-4">
      <IButton type="primary">Primary</IButton>
      <IButton>Normal</IButton>
      <IButton type="ghost">Ghost</IButton>
  </div>
  `
})


export const WithSize = () => ({
  components: { IButton },
  template: `
    <div class="flex gap-4 items-start mb-4">
      <IButton size="xs">Button</IButton>
      <IButton size="sm">Button</IButton>
      <IButton>Button</IButton>
      <IButton size="lg">Button</IButton>
    </div>
    <div class="flex gap-4 items-start mb-4">
      <IButton type="primary" size="xs">Button</IButton>
      <IButton type="primary" size="sm">Button</IButton>
      <IButton type="primary">Button</IButton>
      <IButton type="primary" size="lg">Button</IButton>
    </div>
    <div class="flex gap-4 items-start">
      <IButton type="ghost" size="xs">Button</IButton>
      <IButton type="ghost" size="sm">Button</IButton>
      <IButton type="ghost">Button</IButton>
      <IButton type="ghost" size="lg">Button</IButton>
    </div>
  `
})

export const WithColor = () => ({
  components: { IButton },
  template: `
  <div class="flex gap-4 items-start mb-4">
    <IButton color="red">Button</IButton>
    <IButton color="green">Button</IButton>
    <IButton>Button</IButton>
    <IButton color="gray">Button</IButton>
  </div>
  <div class="flex gap-4 items-start mb-4">
    <IButton type="primary" color="red">Button</IButton>
    <IButton type="primary" color="green">Button</IButton>
    <IButton type="primary">Button</IButton>
    <IButton type="primary" color="gray">Button</IButton>
  </div>
  <div class="flex gap-4 items-start mb-4">
    <IButton type="ghost" color="red">Button</IButton>
    <IButton type="ghost" color="green">Button</IButton>
    <IButton type="ghost">Button</IButton>
    <IButton type="ghost" color="gray">Button</IButton>
  </div>
  `
})

export const WithBooleanProp = () => ({
  components: { IButton },
  template: `
  <IButton block>Block Button</IButton>
  <div class="flex gap-4 items-start my-4">
    <IButton>Button</IButton>
    <IButton disabled>Disabled Button</IButton>
    <IButton loading>Button</IButton>
  </div>
  <IButton type="primary" block>Block Button</IButton>
  <div class="flex gap-4 items-start my-4">
    <IButton type="primary">Button</IButton>
    <IButton type="primary" disabled>Disabled Button</IButton>
    <IButton type="primary" loading>Button</IButton>
  </div>
  <IButton type="ghost" block>Block Button</IButton>
  <div class="flex gap-4 items-start my-4">
    <IButton type="ghost">Button</IButton>
    <IButton type="ghost" disabled>Disabled Button</IButton>
    <IButton type="ghost" loading>Button</IButton>
  </div>
  `
})


export const WithIcon = () => ({
  components: { 
      IButton, 
      IconAccessibility, 
      IconPlus, 
      IconArrowRight, 
      IPlusButton,
      IArrowLeftButton,
      IArrowRightButton,
  },
  template: `
  <div class="flex gap-4 items-start mb-4">
    <IButton>
      <IconAccessibility class="w-4 h-4" />
      Good Boy
    </IButton>
    <IButton type="primary">
      <IconPlus class="w-4 h-4" />
      Add View
    </IButton>
    <IButton type="normal">
      See All Questions
      <IconArrowRight class="w-4 h-4" />
    </IButton>
    <IButton type="ghost">
      <IconAccessibility class="w-4 h-4" />
    </IButton>
    <IButton type="ghost" color="red">
      <IconAccessibility class="w-4 h-4" />
    </IButton>

    <IPlusButton>Add Event</IPlusButton>
    <IPlusButton type="normal"></IPlusButton>

    <IArrowLeftButton> Back </IArrowLeftButton>
    <IArrowRightButton> Back </IArrowRightButton>
  </div>
  `
})