import type { Writable } from 'svelte/store';

export interface NotificationsModule {
	hideNotification(notification: Notification): void;
	hideErrorNotifications(): void;
	notifications: Writable<Notification[]>;
	showNotification(options: ShowNotificationOptions): void;
}

type NotificationType = 'ERROR' | 'GENERIC' | 'SUCCESS';

export interface Notification {
	autoHide: boolean;
	id: string;
	message: string;
	type: NotificationType;
}

export interface ShowNotificationOptions {
	autoHide?: boolean;
	message: string;
	type: NotificationType;
}
