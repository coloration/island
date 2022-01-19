export interface IPlainOption<T = string, K = string | number> {
  name: T,
  value: K
}

export type ITabOption = IPlainOption<string, string | number | Function> & { icon?: any }

export type IBreadcrumbOption = IPlainOption<string, string | number | Function> & { icon?: any }