<script lang="ts">
	import '../styles/font-awesome.css';
	import '../styles/build/index.css';
	import { onMount } from 'svelte';
	import TheHeader from '$lib/components/singles/the-header.svelte';
	import TheFooter from '$lib/components/singles/the-footer.svelte';
	import TheNotifications from '$lib/components/singles/the-notifications.svelte';
	import TheModal from '$lib/components/singles/the-modal.svelte';

	onMount(() => {
		calculateAppHeight();
	});

	function calculateAppHeight() {
		document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
	}
</script>

<svelte:window on:resize={calculateAppHeight} />

<TheHeader />

<main class="wrapper__content">
	<slot />
</main>

<TheFooter />
<TheNotifications />
<TheModal />
