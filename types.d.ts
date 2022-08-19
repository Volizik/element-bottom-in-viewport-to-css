declare module 'element-bottom-in-viewport-to-css' {
    interface Arguments {
        cssVariable: string;
        elementId: string;
    }

    export const useElementBottomInViewPortToCss: (props: Arguments) => void;
}
