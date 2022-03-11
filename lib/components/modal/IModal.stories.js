import IModal from './IModal.vue'
import { IButton, IFlexRow, ILine, ICheckbox, IParagraphText, ILabel, IInput, IText, ITextarea } from '../../components'
import { ref } from 'vue';

export default {
  title: 'Component/IModal',
  component: IModal,
  argTypes: {
    type: { 
      control: { 
        type: 'radio', options: [undefined, 'primary', 'normal', 'ghost'] } 
      },
  },
};

export const Default = () => ({
  components: { IModal, IButton },
  setup() {
    const visible = ref(false)

    function toggleVisible () {
      visible.value = !visible.value
    }

    return { visible, toggleVisible }
  },
  template: `
    <IButton @click="toggleVisible"> Open </IButton>
    <IModal :visible="visible" title="你好吗" @close="toggleVisible">
      <p v-for="i in 100">你好啊</p>
    </IModal>
  `,
});

export const NoLine = () => ({
  components: { IModal, IButton, IParagraphText },
  setup() {
    const visible = ref(false)

    function toggleVisible () {
      visible.value = !visible.value
    }

    return { visible, toggleVisible }
  },
  template: `
    <IButton @click="toggleVisible"> Open </IButton>
    <IModal :visible="visible" title="你好吗" @close="toggleVisible" :line-visible="false">
      <IParagraphText size="sm">
        control.options' is deprecated and will be removed in Storybook 7.0. 
        Define 'options' directly on the argType instead, and use 'control.labels' for custom labels.
        control.options' is deprecated and will be removed in Storybook 7.0. 
        Define 'options' directly on the argType instead, and use 'control.labels' for custom labels.
        </ IParagraphText>
        <IParagraphText size="sm">
        control.options' is deprecated and will be removed in Storybook 7.0. 
        Define 'options' directly on the argType instead, and use 'control.labels' for custom labels.
      </IParagraphText>
    </IModal>
  `,
});

export const CustomFooter = () => ({
  components: { IModal, IButton, IFlexRow, ILine, ILabel, IInput, IText, ITextarea },
  setup() {
    const visible = ref(false)

    function toggleVisible () {
      visible.value = !visible.value
    }

    return { visible, toggleVisible }
  },
  template: `
    <IButton @click="toggleVisible"> Open </IButton>
    <IModal :visible="visible" title="Send Feedback" @close="toggleVisible">
      
      <IText size="sm" style="margin-bottom: 1rem;">
        Let us know what you think 🙌
      </IText>

      <div>
        <ILabel for="name" required>Name</ILabel>
        <IInput size="sm" id="name" />
      </div>

      <div>
        <ILabel for="email" required>Email</ILabel>
        <IInput size="sm" id="email" />
      </div>

      <div>
        <ILabel for="Message" required>Message</ILabel>
        <ITextarea size="sm" id="Message" />
      </div>

      <template #footer>
        <ILine />
        <div style="padding: 0.75rem 1.25rem;">
          <IFlexRow horizontal="end">
            <IButton size="sm" style="margin-right: 0.5rem">Cancel</IButton>
            <IButton type="primary" size="sm">Yes, I do</IButton>
          </IFlexRow>
        </div>
      </template>
    </IModal>
  `,
})

export const CustomFooterSlot = () => ({
  components: { IModal, IButton, ICheckbox },
  setup() {
    const visible = ref(false)

    function toggleVisible () {
      visible.value = !visible.value
    }

    return { visible, toggleVisible }
  },
  template: `
    <IButton @click="toggleVisible"> Open </IButton>
    <IModal :visible="visible" title="你好吗" @close="toggleVisible" :width="300">
      <p>你好啊</p>

      <template #footer-rest>
        <ICheckbox>
          可选条件
        </ICheckbox>
      </template>

      <template #footer-cancel-button-name>
        取消
      </template>

      <template #footer-confirm-button>
        <IButton color="red" size="sm" type="primary">删除</IButton>
      </template>
    </IModal>
  `,
})

