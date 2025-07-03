import React from 'react';

// Mock all the SVG components as simple divs
const mockSvgComponent = (name: string) => {
    const Component = React.forwardRef<
        HTMLDivElement,
        React.HTMLAttributes<HTMLDivElement>
    >((props, ref) =>
        React.createElement('div', {
            ...props,
            ref,
            'data-testid': name,
            'children': props.children
        })
    );
    Component.displayName = name;

    return Component;
};

export default mockSvgComponent('Svg');
export const Circle = mockSvgComponent('Circle');
export const Ellipse = mockSvgComponent('Ellipse');
export const G = mockSvgComponent('G');
export const Text = mockSvgComponent('Text');
export const TSpan = mockSvgComponent('TSpan');
export const TextPath = mockSvgComponent('TextPath');
export const Path = mockSvgComponent('Path');
export const Polygon = mockSvgComponent('Polygon');
export const Polyline = mockSvgComponent('Polyline');
export const Line = mockSvgComponent('Line');
export const Rect = mockSvgComponent('Rect');
export const Use = mockSvgComponent('Use');
export const Image = mockSvgComponent('Image');
export const Symbol = mockSvgComponent('Symbol');
export const Defs = mockSvgComponent('Defs');
export const LinearGradient = mockSvgComponent('LinearGradient');
export const RadialGradient = mockSvgComponent('RadialGradient');
export const Stop = mockSvgComponent('Stop');
export const ClipPath = mockSvgComponent('ClipPath');
export const Pattern = mockSvgComponent('Pattern');
export const Mask = mockSvgComponent('Mask');
export const Marker = mockSvgComponent('Marker');
export const ForeignObject = mockSvgComponent('ForeignObject');

// Export the default Svg component
const Svg = mockSvgComponent('Svg');
export { Svg };
