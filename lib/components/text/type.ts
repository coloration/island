import { PropType } from "vue";

export interface ITextProps {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl',
  align: 'left' | 'center' | 'right' | 'justify',
  color: 'gray' | 'green' | 'indigo' | 'yellow' | 'red' | 'blue',
  italic: boolean,
  truncate: boolean,
  block: boolean,
  uppercase: boolean,
  underline: boolean,
}

export function textPropsDefaults(exProps?: any) {
  return Object.assign({
    size: {
      type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
      default: 'md'
    },
    align: {
      type: String as PropType<'left' | 'center' | 'right' | 'adjust'>,
      default: 'left'
    },
    italic: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    uppercase: {
      type: Boolean,
      default: false
    },
    underline: {
      type: Boolean,
      default: false
    },
    color: {
      type: String as PropType<'gray' | 'green' | 'indigo' | 'yellow' | 'red' | 'blue'>,
      default: 'gray'
    }
  }, exProps)
} 