export interface ErrorsModule {
	handleError(error: Error, options?: HandleErrorOptions): void;
	handleErrorQuietly(error: Error): void;
}

export interface HandleErrorOptions {
	message?: string;
}
