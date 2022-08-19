import { useEffect } from 'react';

export const useElementBottomInViewPortToCss = ({
    elementId,
    cssVariable,
}) => {
    useEffect(() => {
        const element = document.getElementById(elementId);

        if (!element) {
            console.error(
                `[useElementBottomInViewPortToCss]: Can't find element by id "${elementId}"`,
            );
            return;
        }

        const onDocumentScroll = () => {
            if (!element) return;
            const { height, top } = element.getBoundingClientRect();
            const position = Math.max(height + top, 0);
            document.documentElement.style.setProperty(cssVariable, `${position}px`);
        };

        const observer = new IntersectionObserver(([entry]) => {
            const method = entry.isIntersecting ? 'addEventListener' : 'removeEventListener';
            document[method]('scroll', onDocumentScroll);
        });
        observer.observe(element);

        return () => {
            document.removeEventListener('scroll', onDocumentScroll);
        };
    }, [elementId, cssVariable]);
};
