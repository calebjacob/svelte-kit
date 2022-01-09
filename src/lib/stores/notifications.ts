import { writable } from 'svelte/store';
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
	notifications.update((value) => {
		return value.filter((n) => {
			return n.id !== notification.id;
		});
	});
}

export function hideErrorNotifications(): void {
	notifications.update((value) => {
		return value.filter((n) => {
			return n.type !== 'ERROR';
		});
	});
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

	notifications.update((value) => {
		return [...value, notification];
	});

	if (autoHide) {
		await timer(4000);
		hideNotification(notification);
	}
}
