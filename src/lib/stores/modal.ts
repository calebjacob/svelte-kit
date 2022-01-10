import type { SvelteComponent } from 'svelte';
import { writable } from 'svelte/store';
import type { ConfirmModalOptions } from '$lib/components/modals/types';
import ConfirmModal from '$lib/components/modals/confirm-modal.svelte';

interface Modal {
	component: new (...args: any) => SvelteComponent;
	isOpen: boolean;
	props: Record<string, unknown>;
}

interface OpenModalOptions {
	component: new (...args: any) => SvelteComponent;
	props: Record<string, unknown>;
}

export const activeModal = writable<Modal | null>(null);

export function closeModal() {
	activeModal.set(null);
}

export const openModal = {
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
