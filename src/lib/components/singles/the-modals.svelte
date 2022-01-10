<script lang="ts">
	import { activeModal } from '$lib/stores/modals';
	import Modal from '$lib/components/shared/modal.svelte';
</script>

{#if $activeModal}
	<!-- TODO: Disable/enable scroll on open -->
	<!-- TODO: Add transition animation -->

	<Modal>
		<svelte:component this={$activeModal.component} {...$activeModal.props} />
	</Modal>
{/if}
