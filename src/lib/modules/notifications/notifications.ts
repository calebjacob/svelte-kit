import type { NotificationsModule, Notification, ShowNotificationOptions } from './types';
import timer from '$lib/helpers/timer';
import { v4 as uuid } from 'uuid';
import { writable } from 'svelte/store';

export function useNotifications(): NotificationsModule {
	const notifications = writable([] as Notification[]);

	function hideNotification(notification: Notification) {
		notifications.update((value) => {
			return value.filter((n) => {
				return n.id !== notification.id;
			});
		});
	}

	function hideErrorNotifications(): void {
		notifications.update((value) => {
			return value.filter((n) => {
				return n.type !== 'ERROR';
			});
		});
	}

	async function showNotification({ autoHide = true, message, type }: ShowNotificationOptions) {
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

	return {
		hideNotification,
		hideErrorNotifications,
		notifications,
		showNotification
	};
}
