import type { SvelteComponent } from 'svelte';
import type { Writable } from 'svelte/store';

export interface ModalsModule {
	activeModal: Writable<Modal | null>;
	closeModal(): void;
	openModal: {
		confirm: (options: ConfirmModalOptions) => void;
	};
}

export interface Modal {
	component: new (...args: any) => SvelteComponent;
	isOpen: boolean;
	props: Record<string, unknown>;
}

export interface OpenModalOptions {
	component: new (...args: any) => SvelteComponent;
	props: Record<string, unknown>;
}

export interface ConfirmModalOptions {
	ctaTextCancel?: string;
	ctaTextConfirm?: string;
	description?: string;
	iconClass?: string;
	title?: string;
	onCancel?: () => Promise<void> | void;
	onConfirm?: () => Promise<void> | void;
}
