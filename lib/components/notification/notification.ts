export interface INotificationProps {
  type?: 'info' | 'warning' | 'success' | 'error',
  title: string
  description: string
  actionText?: string
  position?: 'left-top' | 'right-top' | 'right-bottom' | 'left-bottom',
  onClose?: () => void
  onAction?: () => void
}