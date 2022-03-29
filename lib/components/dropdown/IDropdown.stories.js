import { ref } from 'vue'
import IDropdown from './IDropdown.vue'
import { IButton, IDirectionIcon } from '../../components'

export default {
  title: 'Component/IDropdown',
  component: IDropdown,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

const Template = (args) => ({
  components: { IDropdown, IButton, IDirectionIcon },
  setup() {
    const visible = ref(true)
    return { visible, ...args }
  },
  template: `
    <div style="height: 300px;">
      <IDropdown 
        :options="options"  v-model:visible="visible">
        <IButton type="primary">
          操作 {{ visible }}
          <IDirectionIcon />
        </IButton>

        <template #drop-content>
          <div style="width: 100px; padding: 1rem;" @click="visible = false">
            111222
          </div>
        </template>
      </IDropdown>


      <IDropdown 
        :options="options">

      </IDropdown>
    </div>
  `,
})

export const Default = Template.bind({})

Default.args = {
  options: [
    {
      value: 0,
      name: 'Most Popular'
    },
    {
      value: 1,
      name: 'Newest'
    },
    {
      value: 2,
      name: 'Lowest Price'
    },
    {
      value: 3,
      name: 'Highest Price'
    }
  ],
}