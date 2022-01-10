export interface ConfirmModalOptions {
	ctaTextCancel?: string;
	ctaTextConfirm?: string;
	description?: string;
	title?: string;
	onCancel?: () => Promise<void> | void;
	onConfirm?: () => Promise<void> | void;
}
