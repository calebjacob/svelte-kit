import { useModals } from './modals';
import type { ModalsModule } from './types';

let modal: ModalsModule;

function useTheModals(): ModalsModule {
	if (!modal) {
		modal = useModals();
	}

	return modal;
}

export { useTheModals };
