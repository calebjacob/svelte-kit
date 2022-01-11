<script lang="ts">
	import { useTheModals } from '$lib/modules/modals';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut } from 'svelte/easing';
	import { disableBodyScroll, enableBodyScroll } from '$lib/helpers/body-scroll';

	const { activeModal, closeModal } = useTheModals();

	$: {
		if ($activeModal) {
			disableBodyScroll();
		} else {
			enableBodyScroll();
		}
	}

	function keyupHandler(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}
</script>

<svelte:window on:keyup={keyupHandler} />

{#if $activeModal}
	<div
		class="modal"
		role="dialog"
		aria-modal="true"
		transition:fade={{ duration: 300, easing: cubicInOut }}
	>
		<div class="modal__backdrop" on:click={closeModal} />

		<div
			class="modal__wrapper"
			transition:fly={{ duration: 400, y: 30, opacity: 1, easing: cubicInOut }}
		>
			<div class="modal__content">
				<svelte:component
					this={$activeModal.component}
					close={closeModal}
					{...$activeModal.props}
				/>
			</div>

			<button
				type="button"
				class="modal__close icon fa-times"
				title="Close"
				on:click={closeModal}
			/>
		</div>
	</div>
{/if}
