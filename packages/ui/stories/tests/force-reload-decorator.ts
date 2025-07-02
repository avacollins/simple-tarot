/* eslint-disable no-undef */

/**
 * This decorator uses sessionStorage to store a flag (storybook-should-reload) that indicates whether a reload should occur.
 * When the decorator runs for the first time for a story, it sets the flag to true.
 * On subsequent visits or reloads to the same story (within the same browser session), the decorator checks the flag.
 * If the flag is true, it triggers window.location.reload() to perform a full page reload, and then sets the flag back to false to prevent further reloads.
 * This ensures that the story and its play function run on a fresh page load for the first time.
 */
const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

const location = typeof window !== 'undefined' ? window.location : { reload: () => {} };
export const forceReloadDecorator = (storyFn, _) => {
    const reloadKey = 'storybook-should-reload';
    const shouldReload = sessionStorage?.getItem(reloadKey) === 'true';

    if (shouldReload) {
        sessionStorage.setItem(reloadKey, 'false'); // Prevent infinite reloads
        location.reload();
    } else {
        sessionStorage?.setItem(reloadKey, 'true'); // Set for next story render
    }

    return storyFn();
};
