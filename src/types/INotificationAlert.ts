/* type IAnchorOrigin = {
  vertical: string;
  horizontal: string;
}; */

export interface INotificationAlert {
  show: boolean;
  errorMsg: string;
  severity: string;
  autoHideDuration: number;
  anchorOrigin: any;
  onClose: any;
}
