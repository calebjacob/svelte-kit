# Structure

The following folders are a good start to organizing typical application logic. Adding more specific folders/subfolders may be appropriate as the app scales.

## Components

All components belong in `src/lib/components`.

If a parent/child component design is required, a subfolder could be necessary in any of the corresponding folders. For example, if you were working on a `ShoppingCart` component, the structure might look like this:

```
src/lib/components/shared/shopping-cart/index.svelte
src/lib/components/shared/shopping-cart/items.svelte
src/lib/components/shared/shopping-cart/payment.svelte
```

#### Shared (src/lib/components/shared)

A component shared throughout the app and can have multiple instances at any one time (buttons, inputs, etc).

#### Singles (src/lib/components/singles)

A component that should only ever have a single instance rendered at any one time (main header, main footer, etc). Single components should follow a `the-x` naming convention. The keyword `the` helps make it obvious when a component is meant to be used as a single.

## Helpers

Simple and reusable helper methods can live here. For example, you might have a `dollars()` helper method, which would format a number in to a US dollar format `dollars(4.2) > "$4.20"`.

## Modules

Modules are designed to share re-usable code and state throughout the app.

Some modules might need to export a single instance (singleton) that's shared throughout the whole codebase. However, other modules might need to be designed to create a new instance each time it's used. We can very easily support both of these module "flavors" with the following folder/file structure. Let's use a `session` module as an example:

- `modules/session/index.ts`: The entry point for the module that exposes the public API (the `useX()` module method, public types, etc). If a module should share a single instance each time it's used, that can be accomplished by creating a private module instance and returning it via a `useTheSession()` naming convention. If a module should create a new instance each time it's used, you'd simply export the hook via the `useSession()` naming convention (without the `The`).

- `modules/session/session.ts`: The module logic itself which exports a `useSession()` method to generate a module instance. This file could be broken down in to multiple subfiles if a module is becoming too large. The redundant folder and file name makes searching for the file much easier as the project grows.

- `modules/session/types.ts`: Any types/interfaces will be defined and exported here for the `session` module. Some of these might be exposed in the `index.ts` file if they should be public. This will help cut down on clutter inside the main module logic file `session.ts`.

## Services

This is a fairly broad category that could contain singletons, HTTP/API abstractions, and third party library instances.

## Transitions

The built-in Svelte transitions are great, but sometimes you need to create unique/custom transitions that are shared throughout the app.
