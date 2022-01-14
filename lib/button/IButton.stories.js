import IButton from './IButton.vue'

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
      <IButton>Primary</IButton>
      <IButton type="normal">Normal</IButton>
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
      <IButton type="normal" size="xs">Button</IButton>
      <IButton type="normal" size="sm">Button</IButton>
      <IButton type="normal">Button</IButton>
      <IButton type="normal" size="lg">Button</IButton>
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
    <IButton type="normal" color="red">Button</IButton>
    <IButton type="normal" color="green">Button</IButton>
    <IButton type="normal">Button</IButton>
    <IButton type="normal" color="gray">Button</IButton>
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
    <IButton type="normal" block>Block Button</IButton>
    <IButton type="normal">Button</IButton>
    <IButton type="normal" disabled>Disabled Button</IButton>
    <IButton type="normal" loading>Button</IButton>
    <p />
    <IButton type="ghost" block>Block Button</IButton>
    <IButton type="ghost">Button</IButton>
    <IButton type="ghost" disabled>Disabled Button</IButton>
    <IButton type="ghost" loading>Button</IButton>
    <p />
  </div>
  `
})