import IParagraphText from './IParagraphText.vue'

export default {
  title: 'Component/text/IParagraphText',
  component: IParagraphText,
  argTypes: {
    align: {
      options: ['left', 'center', 'right', 'justify'],
      control: { type: 'inline-radio' }
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      control: { type: 'inline-radio' }
    },
    color: {
      options: ['gray', 'green', 'indigo', 'yellow', 'red', 'blue'],
      control: { type: 'inline-radio' }
    },
    clamp: {
      control: { type: 'number' }
    },
    bottom: {
      description: 'padding bottom ${number} rem.',
      control: { type: 'number' }
    },
    top: {
      description: 'padding top ${number} rem.',
      control: { type: 'number' }
    }
  },
};

const Template = (args) => ({
  components: { IParagraphText },
  setup() {
    return { args }
  },
  template: `
    <IParagraphText 
      v-bind="args" 
      class="bg-red-500" 
      style="text-indent: 2rem;">锦织敦史也因参与制作《偶像大师》而对自己的动画之道有了信心，并产生了要制作原创动画的想法。这一愿望在2018年1月播出的《DARLING in the FRANXX》中实现：过去负责制作《偶像大师》的A-1高圆寺工作室正是今日的CloverWorks，共同参与制作的TRIGGER（扳机社）在当年也负责过《偶像大师》的外包工作；制片人福岛祐一、演出高雄统子、副监督赤井俊文、作画林勇雄等诸多制作人员也与当年的“爱马仕班”重合。</IParagraphText>
    <IParagraphText v-bind="args">然而故事却在临近完结的第20话急转直下地将舞台扩展至宇宙，与突如其来的外星人进行战斗，在致敬元素的大杂烩下最终以机械降神般的方式来解决矛盾完结故事。这使观众难免产生落差与失望，使本片落得个虎头蛇尾、评价两极的尴尬境地。</IParagraphText>
  `,
});

export const Default = Template.bind({})


Default.args = {
  bottom: 1
}

