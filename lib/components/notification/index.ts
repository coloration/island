import { App, ExtractPropTypes, createVNode, render, ComponentPublicInstance } from 'vue'
import Notification from './INotification.vue'
import { INotificationProps } from './notification'
import { getGlobalDOMContainer } from '../../utils'
import { withInstallFunction } from '../../utils/install'


export function iNotification (options: INotificationProps) {
  
  const container = getGlobalDOMContainer()
  const props: ExtractPropTypes<INotificationProps> = {
    ...options,
    
  }
  const vm = createVNode(Notification, props)
  
  render(vm, container)

  const cmp: ComponentPublicInstance<{ visible: boolean }> = vm.component!.proxy as any

  cmp.visible = true
  function close () {
    cmp.visible = false
    vm.props!.onClose?.()

  }

  function destroy () {
    render(null, container)
  }

  return {
    close,
    destroy
  }

  
}


const INotification = withInstallFunction(iNotification, '$iNotification')



export { INotification }