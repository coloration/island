import IAvatarGroup from './IAvatarGroup.vue'
import IAvatar from './IAvatar.vue'
import { IText } from '../icon'
import IconPlus from '~icons/bytesize/plus'

export default {
  title: 'Component/avatar/IAvatarGroup',
  component: IAvatarGroup,
  subComponent: IAvatar,
  argTypes: {
    size: { 
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { 
        type: 'inline-radio'
      } 
    },
    border: { 
      control: { 
        type: 'boolean'
      } 
    },
    order: { 
      options: [-1, 1],
      control: { 
        type: 'inline-radio'
      } 
    },
  },
};

const Template = (args) => ({
  components: { IAvatarGroup, IAvatar, IconPlus },
  setup() {
    return { args }
  },
  template: `
    <div>
      <IAvatarGroup v-bind="args">
        <IAvatar name="Liu" />
        <IAvatar src="https://tse1-mm.cn.bing.net/th/id/R-C.65e439879aa61497589862adad1f88f6?rik=jDN9PbfgKozvdA&riu=http%3a%2f%2fscimg.jianbihuadq.com%2f202006%2f2020062019313121.jpg&ehk=KNd6VIpIB3vIh47ExDwI0l43YYaKMH5z5Ha7xgwG90E%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1" />
      </IAvatarGroup>
    </div>
  `,
});

export const Default = Template.bind({})

Default.args = {
}

export const WithBorder = Template.bind({})

WithBorder.args = {
  border: true,
  size: 'lg'
}

export const WithOrder = Template.bind({})

WithOrder.args = {
  order: -1,
  size: 'lg'
}
