import type { ErrorsModule, HandleErrorOptions } from './types';
import { useTheNotifications } from '$lib/modules/notifications';
import logger from '$lib/services/logger';

export function useErrors(): ErrorsModule {
	const { showNotification } = useTheNotifications();

	function handleError(error: Error, options: HandleErrorOptions = {}): void {
		logger.error(error);

		showNotification({
			type: 'ERROR',
			autoHide: false,
			message: options.message || error.message
		});
	}

	function handleErrorQuietly(error: Error) {
		logger.error(error);
	}

	return {
		handleError,
		handleErrorQuietly
	};
}
