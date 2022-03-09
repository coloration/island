export const GLOBAL_DOM_ID = 'coloration-island-excontainer'

export function getGlobalDOMContainer (id: string = GLOBAL_DOM_ID) {
  let container: HTMLElement = document.getElementById(id)!

  if (!container) {
    container = document.createElement('div')
    container.id = id
    document.body.appendChild(container)
  }

  return container
}