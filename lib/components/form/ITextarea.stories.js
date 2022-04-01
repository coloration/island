import ITextarea from './ITextarea.vue'
import ILabel from './ILabel.vue'

export default {
  title: 'Component/form/ITextarea',
  component: ITextarea,
  argTypes: {
    size: { 
      control: { 
        type: 'radio', options: [undefined, 'xs', 'sm', 'md', 'lg' ] 
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
  components: { ITextarea, ILabel },
  data () {
    return {
      selectValue: '1'
    }
  },
  setup() {
    return { args }
  },
  template: `
    <div style="width: 200px; padding-top: 70px;">
      <ILabel 
        for="default" 
        required
        tooltip="Excepteur sint occaecat cupidata non proident, sunt.">
        Default
      </ILabel>
      <ITextarea 
        v-bind="args"
        id="default"
        placeholder="something cool ..." 
        v-model="selectValue"
      >
        <option value="1">Italy</option>
        <option value="2">USA</option>
        <option value="3">United Kingdom</option>
      </ITextarea>
    </div>
    <div>{{ selectValue }}</div>
  `,
});

export const Default = Template.bind({})

Default.args = {
  content: 'Primary',
  type: 'primary',
}


// export const Feature = () => ({
//   components: { IInput, ILabel },
//   template: `
//     <div style="display: flex; gap: 12px;">
//       <div>
//         <ILabel for="prefix">
//           W/ Prefix
//         </ILabel>
//         <IInput 
//           id="prefix"
//           prefix="USD"
//           placeholder="something cool ..." />
//       </div>
//       <p />
//       <div>
//         <ILabel for="subfix">
//           W/ Suffix
//         </ILabel>
//         <IInput 
//           id="subfix"
//           suffix="%"
//           placeholder="something cool ..." />
//       </div>
//       <p />
//       <div>
//         <ILabel for="suggest">
//           W/ Suggest
//         </ILabel>
//         <IInput 
//           id="suggest"
//           suggest="Supporting text goes here!"
//           placeholder="something cool ..." />
//       </div>
//       <p />
//     </div>
//   `
// })






