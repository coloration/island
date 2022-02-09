import IButton from './IButton.vue'
import IconAccessibility from '~icons/carbon/accessibility'
import IconPlus from '~icons/bytesize/plus'
import IconArrowRight from '~icons/carbon/arrow-right'
import IArrowLeftButton from './IArrowLeftButton.vue'
import IArrowRightButton from './IArrowRightButton.vue'
import IPlusButton from './IPlusButton.vue'

export default {
  title: 'Component/IButton',
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
    return { ...args }
  },
  template: `
    <IButton 
      :type="type" 
      :size="size" 
      :block="block"
      :color="color">{{ content }}</IButton>
  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Primary',
  type: 'primary',
}

export const Type = () => ({
  components: { IButton },
  template: `
    <div>
      <IButton type="primary">Primary</IButton>
      <IButton>Normal</IButton>
      <IButton type="ghost">Ghost</IButton>
    </div>
  `
})


export const Size = () => ({
  components: { IButton },
  template: `
    <div>
      <IButton size="xs">Button</IButton>
      <IButton size="sm">Button</IButton>
      <IButton>Button</IButton>
      <IButton size="lg">Button</IButton>
      <p />
      <IButton type="primary" size="xs">Button</IButton>
      <IButton type="primary" size="sm">Button</IButton>
      <IButton type="primary">Button</IButton>
      <IButton type="primary" size="lg">Button</IButton>
      <p />
      <IButton type="ghost" size="xs">Button</IButton>
      <IButton type="ghost" size="sm">Button</IButton>
      <IButton type="ghost">Button</IButton>
      <IButton type="ghost" size="lg">Button</IButton>
      <p />
    </div>
  `
})

export const Color = () => ({
  components: { IButton },
  template: `
  <div>
    <IButton color="red">Button</IButton>
    <IButton color="green">Button</IButton>
    <IButton>Button</IButton>
    <IButton color="gray">Button</IButton>
    <p />
    <IButton type="primary" color="red">Button</IButton>
    <IButton type="primary" color="green">Button</IButton>
    <IButton type="primary">Button</IButton>
    <IButton type="primary" color="gray">Button</IButton>
    <p />
    <IButton type="ghost" color="red">Button</IButton>
    <IButton type="ghost" color="green">Button</IButton>
    <IButton type="ghost">Button</IButton>
    <IButton type="ghost" color="gray">Button</IButton>
    <p />
  </div>
  `
})

export const Status = () => ({
  components: { IButton },
  template: `
  <div>
    <IButton block>Block Button</IButton>
    <IButton>Button</IButton>
    <IButton disabled>Disabled Button</IButton>
    <IButton loading>Button</IButton>
    <p />
    <IButton type="primary" block>Block Button</IButton>
    <IButton type="primary">Button</IButton>
    <IButton type="primary" disabled>Disabled Button</IButton>
    <IButton type="primary" loading>Button</IButton>
    <p />
    <IButton type="ghost" block>Block Button</IButton>
    <IButton type="ghost">Button</IButton>
    <IButton type="ghost" disabled>Disabled Button</IButton>
    <IButton type="ghost" loading>Button</IButton>
    <p />
  </div>
  `
})


export const Icon = () => ({
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
  <div>
    <IButton>
      <IconAccessibility class="w-4 h-4" />
      Good Boy
    </IButton>
    <IButton>
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