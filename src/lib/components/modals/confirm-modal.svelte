<script lang="ts">
	import type { ConfirmModalOptions } from './types';
	import { closeModal } from '$lib/stores/modal';

	export let options: ConfirmModalOptions = {};

	$: ctaTextCancel = options.ctaTextCancel || 'Never Mind';
	$: ctaTextConfirm = options.ctaTextConfirm || 'Continue';
	$: description = options.description || '';
	$: title = options.title || 'Are you sure?';

	async function cancel() {
		if (options.onCancel) {
			try {
				await options.onCancel();
			} catch (error) {
				console.log(error); // TODO: Handle error with error handler
			}
		}

		closeModal();
	}

	async function confirm() {
		if (options.onConfirm) {
			try {
				await options.onConfirm();
			} catch (error) {
				console.log(error); // TODO: Handle error with error handler
			}
		}

		closeModal();
	}
</script>

<div class="section center">
	<h2 class="title title--2">{title}</h2>

	{#if description}
		<p>{description}</p>
	{/if}

	<hr />

	<div class="layout layout--hz layout--hz-equal">
		<button type="button" class="button button--border" on:click={cancel}>{ctaTextCancel}</button>
		<button type="button" class="button button--primary" on:click={confirm}>{ctaTextConfirm}</button
		>
	</div>
</div>
