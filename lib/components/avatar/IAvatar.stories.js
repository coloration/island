import IAvatar from './IAvatar.vue'

export default {
  title: 'Component/avatar/IAvatar',
  component: IAvatar,
  argTypes: {
    size: { 
      options: [undefined, 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'inline-radio' } 
    },
    src: {
      control: { type: 'text' }
    },
    border: {
      control: { type: 'boolean' }
    },
    notice: {
      control: { type: 'boolean' }
    },
    name: {
      control: { type: 'text' }
    }
  },
};

const Template = (args) => ({
  components: { IAvatar },
  setup() {
    return { args }
  },
  template: `
    <div class="flex items-center">
      <IAvatar v-bind="args" />
    </div>
  `,
});

export const Default = Template.bind({})

Default.args = {
  src: 'https://tse1-mm.cn.bing.net/th/id/R-C.65e439879aa61497589862adad1f88f6?rik=jDN9PbfgKozvdA&riu=http%3a%2f%2fscimg.jianbihuadq.com%2f202006%2f2020062019313121.jpg&ehk=KNd6VIpIB3vIh47ExDwI0l43YYaKMH5z5Ha7xgwG90E%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
}

export const WithBorder = () => ({
  components: { IAvatar },
  template: `
    <IAvatar name="刘" size="lg" border />
  `
})


export const WithName = () => ({
  components: { IAvatar },
  template: `
    <IAvatar name="刘" size="xl" />
    <IAvatar name="David" size="xl" />
  `
})

export const WithNotice = () => ({
  components: { IAvatar },
  template: `
    <IAvatar name="刘" size="lg" notice />
  `
})





