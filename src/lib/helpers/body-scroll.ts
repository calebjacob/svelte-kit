import { browser } from '$app/env';

let scrollY = 0;
let prevBodyPosition = '';
let prevBodyOverflow = '';
let prevBodyWidth = '';

export function disableBodyScroll() {
	if (!browser) {
		return;
	}

	scrollY = window.scrollY;
	prevBodyPosition = document.body.style.position;
	prevBodyOverflow = document.body.style.overflow;
	prevBodyWidth = document.body.style.width;
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollY}px`;
	document.body.style.overflow = 'hidden';
	document.body.style.width = '100%';
}

export function enableBodyScroll() {
	if (!browser) {
		return;
	}

	document.body.style.position = prevBodyPosition || '';
	document.body.style.top = '';
	document.body.style.overflow = prevBodyOverflow || '';
	document.body.style.width = prevBodyWidth || '';
	window.scrollTo(0, scrollY);
}
