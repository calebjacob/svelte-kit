<script lang="ts">
	import { closeModal } from '$lib/stores/modals';

	function keyupHandler(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<svelte:window on:keyup={keyupHandler} />

<div class="modal" role="dialog" aria-modal="true">
	<div class="modal__backdrop" on:click={closeModal} />

	<div class="modal__wrapper">
		<div class="modal__content">
			<slot />
		</div>

		<button type="button" class="modal__close icon fa-times" title="Close" on:click={closeModal} />
	</div>
</div>
