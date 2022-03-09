import INotification from './INotification.vue'
import { iNotification } from './index'
import { IButton } from '../button'
import { ref } from 'vue'


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

// export const Default = Template.bind({})

// Default.args = {
//   type: 'primary',
// }

export const FunctionCall = () => ({
  components: { IButton },
  template: `
    <div>
      <IButton @click="handleClick">Go</IButton>
      <IButton color="red" @click="handleClose">Close</IButton>
      <div>{{ tip }}</div>
    </div>
  `,
  setup () {

    const tip = ref('unclose')

    let close
    function handleClick () {
      tip.value = 'unclose'
      close = iNotification({
        title: '你好',
        description: '我好你好',
        onClose () {
          tip.value = 'closed'
        }
      }).close
    }

    function handleClose () {
      close && close()
    }

    return {
      handleClick,
      handleClose,
      tip
    }
  }
})