<script lang="ts">
	import { useTheNotifications } from '$lib/modules/notifications';
	import { slideAndFade } from '$lib/transitions/slide-and-fade';

	const { hideNotification, notifications } = useTheNotifications();
</script>

<div class="notifications">
	<div class="notifications__wrapper">
		{#each $notifications as notification (notification.id)}
			<div
				class="notifications__item"
				class:notifications__item--error={notification.type === 'ERROR'}
				class:notifications__item--success={notification.type === 'SUCCESS'}
				transition:slideAndFade
			>
				<div class="notifications__content">
					<div class="layout layout--icon">
						<span
							class="icon fa"
							class:fa-exclamation-circle={notification.type === 'ERROR'}
							class:fa-info-circle={notification.type === 'GENERIC'}
							class:fa-check-circle={notification.type === 'SUCCESS'}
						/>

						<p>{notification.message}</p>

						{#if !notification.autoHide}
							<button
								type="button"
								class="button button--small button--transparent"
								on:click={() => hideNotification(notification)}>OK</button
							>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
