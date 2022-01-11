import type { ConfirmModalOptions, ModalsModule, Modal, OpenModalOptions } from './types';
import { writable } from 'svelte/store';
import ConfirmModal from '$lib/components/modals/confirm-modal.svelte';

export function useModals(): ModalsModule {
	const activeModal = writable<Modal | null>(null);

	function closeModal() {
		activeModal.set(null);
	}

	const openModal = {
		confirm(options: ConfirmModalOptions) {
			setActiveModal({
				props: {
					options
				},
				component: ConfirmModal
			});
		}
	};

	function setActiveModal(options: OpenModalOptions) {
		activeModal.set({
			isOpen: true,
			component: options.component,
			props: options.props
		});
	}

	return {
		activeModal,
		closeModal,
		openModal
	};
}
