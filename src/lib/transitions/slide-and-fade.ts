// https://svelte.dev/tutorial/custom-css-transitions
// https://svelte.dev/repl/f5c42c6dc6774f29ad9350cd2dc2d299?version=3.38.3

import { slide } from 'svelte/transition';
import type { TransitionConfig } from 'svelte/transition';
import { cubicInOut } from 'svelte/easing';

interface Options {
	delay?: number;
	duration?: number;
}

export function slideAndFade(
	node: HTMLElement,
	{ delay = 0, duration = 500 }: Options
): TransitionConfig {
	const slideTrans = slide(node, {
		duration,
		delay,
		easing: cubicInOut
	});

	return {
		duration,
		delay,
		easing: cubicInOut,
		css: (t) => {
			return `
					${slideTrans.css ? slideTrans.css(t, 1 - t) : ''}
					opacity: ${t};
				`;
		}
	};
}
