<script lang="ts">
	import type { ConfirmModalOptions } from './types';
	import { closeModal } from '$lib/stores/modals';

	export let options: ConfirmModalOptions = {
		title: 'Are you sure?'
	};

	function cancel() {
		// TODO: Call onCancel prop if passed in
		closeModal();
	}

	function confirm() {
		// TODO: Call onConfirm prop if passed in
		closeModal();
	}
</script>

<div class="section center">
	<h2 class="title title--2">{options.title}</h2>

	{#if options.description}
		<p>{options.description}</p>
	{/if}

	<hr />

	<div class="layout layout--hz layout--hz-equal">
		<button type="button" class="button button--border" on:click={cancel}>Never Mind</button>
		<button type="button" class="button button--primary" on:click={confirm}>Continue</button>
	</div>
</div>
