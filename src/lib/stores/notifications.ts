import { get, writable } from 'svelte/store';
import { v4 as uuid } from 'uuid';
import timer from '$lib/helpers/timer';

type NotificationType = 'SUCCESS' | 'ERROR' | 'GENERIC';

interface Notification {
	autoHide: boolean;
	id: string;
	message: string;
	type: NotificationType;
}

interface ShowNotificationOptions {
	autoHide?: boolean;
	message: string;
	type: NotificationType;
}

export const notifications = writable([] as Notification[]);

export function hideNotification(notification: Notification) {
	const allNotifications = get(notifications).filter((n) => {
		return n.id !== notification.id;
	});

	notifications.set(allNotifications);
}

export function hideErrorNotifications(): void {
	const allNotifications = get(notifications).filter((n) => {
		return n.type !== 'ERROR';
	});

	notifications.set(allNotifications);
}

export async function showNotification({
	autoHide = true,
	message,
	type
}: ShowNotificationOptions) {
	const notification = {
		autoHide,
		id: uuid(),
		message,
		type
	};

	const allNotifications = [...get(notifications), notification];

	notifications.set(allNotifications);

	if (autoHide) {
		await timer(4000);
		hideNotification(notification);
	}
}
