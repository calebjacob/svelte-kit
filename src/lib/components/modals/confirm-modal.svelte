<script lang="ts">
	import type { ConfirmModalOptions } from '$lib/modules/modals/types';
	import { useErrors } from '$lib/modules/errors';

	export let close: () => void;
	export let options: ConfirmModalOptions = {};

	const { handleError } = useErrors();

	$: ctaTextCancel = options.ctaTextCancel || 'Never Mind';
	$: ctaTextConfirm = options.ctaTextConfirm || 'Continue';
	$: description = options.description || '';
	$: iconClass = options.iconClass || 'fa-question-circle';
	$: title = options.title || 'Are you sure?';

	async function cancel() {
		if (options.onCancel) {
			try {
				await options.onCancel();
				close();
			} catch (error) {
				handleError(error as Error);
			}
		}
	}

	async function confirm() {
		if (options.onConfirm) {
			try {
				await options.onConfirm();
				close();
			} catch (error) {
				handleError(error as Error);
			}
		}
	}
</script>

<div class="section center">
	<div class="group">
		<span class="icon icon--block icon--large {iconClass}" />

		<h2 class="title title--2">{title}</h2>

		{#if description}
			<p>{description}</p>
		{/if}
	</div>

	<hr />

	<div class="layout layout--hz layout--hz-equal">
		<button type="button" class="button button--border" on:click={cancel}>{ctaTextCancel}</button>
		<button type="button" class="button button--primary" on:click={confirm}>{ctaTextConfirm}</button
		>
	</div>
</div>
