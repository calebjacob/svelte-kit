<script lang="ts">
	import { browser } from '$app/env';
	import { activeModal, closeModal } from '$lib/stores/modal';
	import { fade, fly } from 'svelte/transition';
	import { cubicInOut, backOut } from 'svelte/easing';

	$: {
		if (browser) {
			if ($activeModal) {
				disableScroll();
			} else {
				enableScroll();
			}
		}
	}

	let scrollY = 0;
	let prevBodyPosition = '';
	let prevBodyOverflow = '';
	let prevBodyWidth = '';

	function disableScroll() {
		scrollY = window.scrollY;
		prevBodyPosition = document.body.style.position;
		prevBodyOverflow = document.body.style.overflow;
		prevBodyWidth = document.body.style.width;
		document.body.style.position = 'fixed';
		document.body.style.top = `-${scrollY}px`;
		document.body.style.overflow = 'hidden';
		document.body.style.width = '100%';
	}

	function enableScroll() {
		document.body.style.position = prevBodyPosition || '';
		document.body.style.top = '';
		document.body.style.overflow = prevBodyOverflow || '';
		document.body.style.width = prevBodyWidth || '';
		window.scrollTo(0, scrollY);
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
				<svelte:component this={$activeModal.component} {...$activeModal.props} />
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
