export interface IPlainOption<T = string, K = string | number> {
  name: T,
  value: K
}

export type ITabOption = IPlainOption<string, string | number | Function> & { icon?: any }

export type IBreadcrumbOption = IPlainOption<string, string | number | Function> & { icon?: any }

export type IMenuOption = IPlainOption<string, string | number | Function> & { icon?: any, group?: string, children: Omit<IMenuOption, 'group'> }