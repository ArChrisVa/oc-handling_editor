// Will return whether the current environment is in a regular browser
// and not CEF

declare global {
    interface Window {
        invokeNative: boolean;
    }
}

export const isEnvBrowser = (): boolean => !window.invokeNative;

// Basic no operation function
export const noop = () => {};
