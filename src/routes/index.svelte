<script lang="ts">
	import { showNotification } from '$lib/stores/notifications';
</script>

<div class="layout layout--vertical-align">
	<div class="container">
		<section class="section center">
			<span class="icon icon--block icon--large fa-laptop-code color-secondary" />
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
								class="link"
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

					<div class="group">
						<p>Something else will go here too...</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>
