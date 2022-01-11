import { useNotifications } from './notifications';
import type { NotificationsModule } from './types';

let notifications: NotificationsModule;

function useTheNotifications(): NotificationsModule {
	if (!notifications) {
		notifications = useNotifications();
	}

	return notifications;
}

export { useTheNotifications };
