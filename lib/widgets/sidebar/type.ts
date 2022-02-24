export type SidebarOption = {
  name: string
  icon?: Object
  value: string | Omit<SidebarOption, 'icon'>
}