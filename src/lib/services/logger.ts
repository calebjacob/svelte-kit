import { browser } from '$app/env';

function error(e: Error): void {
	console.error(e);
}

function info(message: string, data: object = {}, localOnly = true): void {
	if (localOnly && browser && window.location.hostname !== 'localhost') {
		return;
	}

	console.log(`[INFO] ${message}`, data);
}

export default { error, info };
