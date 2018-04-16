export interface NotificationDetails extends NotificationOptions {
  title: string;
  click_action?: string;
}

export interface MessagePayload {
  notification?: NotificationDetails;
  data?: object;
}
