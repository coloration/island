import IInput from './IInput.vue'
import ILabel from './ILabel.vue'

export default {
  title: 'Component/IInput',
  component: IInput,
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
  components: { IInput, ILabel },
  data () {
    return {
      val: 123
    }
  },
  setup() {
    return { ...args }
  },
  template: `
    <div style="width: 200px; padding-top: 70px;">
      <ILabel 
        for="default" 
        required
        tooltip="Excepteur sint occaecat cupidata non proident, sunt.">
        Default? {{ val }}
      </ILabel>
      <IInput 
        v-model="val"
        id="default"
        placeholder="something cool ..." />
    </div>
  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Primary',
  type: 'primary',
}


export const Feature = () => ({
  components: { IInput, ILabel },
  template: `
    <div style="display: flex; gap: 12px;">
      <div>
        <ILabel for="prefix">
          W/ Prefix
        </ILabel>
        <IInput 
          id="prefix"
          prefix="USD"
          placeholder="something cool ..." />
      </div>
      <p />
      <div>
        <ILabel for="subfix">
          W/ Suffix
        </ILabel>
        <IInput 
          id="subfix"
          suffix="%"
          placeholder="something cool ..." />
      </div>
      <p />
      <div>
        <ILabel for="suggest">
          W/ Suggest
        </ILabel>
        <IInput 
          id="suggest"
          suggest="Supporting text goes here!"
          placeholder="something cool ..." />
      </div>
      <p />
    </div>
  `
})


export const Status = () => ({
  components: { IInput, ILabel },
  template: `
    <div style="display: flex; gap: 12px;">
      <div>
        <ILabel for="disabled">
          Disabled
        </ILabel>
        <IInput 
          id="disabled"
          disabled
          placeholder="something cool ..." />
      </div>
      <p />
      <div>
        <ILabel for="error">
          Error
        </ILabel>
        <IInput 
          id="error"
          color="red"
          placeholder="something cool ..."
          suggest="This field is required!"
        />
      </div>
      <p />
      <div>
        <ILabel for="success">
          Success
        </ILabel>
        <IInput 
          id="success"
          color="green"
          placeholder="something cool ..." 
          suggest="Sounds good!"
        />
      </div>
      <p />
    </div>
  `
})


export const Size = () => ({
  components: { IInput, ILabel },
  template: `
    <div style="display: flex; gap: 12px;">
      <div>
        <ILabel for="small">
          Small
        </ILabel>
        <IInput 
          id="small"
          size="sm" />
      </div>
      <p />
      <div>
        <ILabel for="Normal">
          Normal
        </ILabel>
        <IInput 
          id="Normal" />
      </div>
      <p />
      <div>
        <ILabel for="Large">
          Large
        </ILabel>
        <IInput 
          id="Large"
          suffix="$"
          size="lg" />
      </div>
      <p />
    </div>
  `
})


