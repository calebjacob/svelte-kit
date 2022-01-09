<script lang="ts">
	import TheHeader from '$lib/components/the-header.svelte';
	import TheFooter from '$lib/components/the-footer.svelte';
	import '../styles/font-awesome.css';
	import '../styles/build/index.css';
	import TheNotifications from '$lib/components/the-notifications.svelte';
</script>

<TheHeader />

<main class="wrapper__content">
	<slot />
</main>

<TheFooter />

<TheNotifications />
