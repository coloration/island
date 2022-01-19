import ISelect from './ISelect.vue'
import ILabel from './ILabel.vue'

export default {
  title: 'Component/ISelect',
  component: ISelect,
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
  components: { ISelect, ILabel },
  setup() {
    return { ...args }
  },
  template: `
    <div style="width: 200px; padding-top: 70px;">
      <ILabel 
        for="default" 
        required
        tooltip="Excepteur sint occaecat cupidata non proident, sunt.">
        Default
      </ILabel>
      <ISelect 
        id="default"
        placeholder="something cool ..." 
      >
        <option>Italy</option>
        <option>USA</option>
        <option>United Kingdom</option>
      </ISelect>
    </div>
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


// export const Status = () => ({
//   components: { IInput, ILabel },
//   template: `
//     <div style="display: flex; gap: 12px;">
//       <div>
//         <ILabel for="disabled">
//           Disabled
//         </ILabel>
//         <IInput 
//           id="disabled"
//           disabled
//           placeholder="something cool ..." />
//       </div>
//       <p />
//       <div>
//         <ILabel for="error">
//           Error
//         </ILabel>
//         <IInput 
//           id="error"
//           color="red"
//           placeholder="something cool ..."
//           suggest="This field is required!"
//         />
//       </div>
//       <p />
//       <div>
//         <ILabel for="success">
//           Success
//         </ILabel>
//         <IInput 
//           id="success"
//           color="green"
//           placeholder="something cool ..." 
//           suggest="Sounds good!"
//         />
//       </div>
//       <p />
//     </div>
//   `
// })





