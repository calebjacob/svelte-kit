<script lang="ts">
	import { useTheModals } from '$lib/modules/modals';
	import { useTheNotifications } from '$lib/modules/notifications';

	const { openModal } = useTheModals();
	const { showNotification } = useTheNotifications();
</script>

<div class="layout layout--vertical-align">
	<div class="container">
		<section class="section center">
			<span class="icon icon--block icon--large fa-code color-primary" />
			<h1 class="title title--1 uppercase">Time to get Svelte-y.</h1>
			<h2 class="title title--2 color-text-2">Let's have some fun & make something cool.</h2>
		</section>

		<section class="section">
			<div
				class="layout layout--hz layout--hz-equal layout--double-spacing layout--a-start layout--stack-tablet"
			>
				<div>
					<h3 class="title title--3">Something Here</h3>
					<p>Some examples will go here.</p>
				</div>

				<div>
					<h3 class="title title--3">Notifications</h3>

					<div class="group">
						<div class="layout layout--hz layout--j-start margin-b">
							<button
								class="link color-success"
								type="button"
								on:click={() =>
									showNotification({
										type: 'SUCCESS',
										message: 'This was great!'
									})}
							>
								Success
							</button>

							<button
								class="link color-danger"
								type="button"
								on:click={() =>
									showNotification({
										type: 'ERROR',
										message: 'Oops! That was not so great.',
										autoHide: false
									})}
							>
								Error
							</button>

							<button
								class="link color-primary"
								type="button"
								on:click={() =>
									showNotification({
										type: 'GENERIC',
										message: 'This is very regular.'
									})}
							>
								Regular
							</button>
						</div>
					</div>

					<hr />

					<h3 class="title title--3">Modals</h3>

					<div class="group">
						<div class="layout layout--hz layout--j-start margin-b">
							<button
								class="link color-primary"
								type="button"
								on:click={() =>
									openModal.confirm({
										ctaTextCancel: 'No',
										ctaTextConfirm: 'Yes',
										description:
											'Food is pretty important for living - and most of it tastes really good.',
										title: 'Do you like food?',
										onCancel() {
											window.alert('Answer is: NO');
										},
										onConfirm() {
											window.alert('Answer is: YES');
										}
									})}
							>
								Confirm
							</button>
						</div>
					</div>

					<hr />

					<div class="group">
						<p>Something else will go here too...</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
