
// ScrollLinkWrapper.tsx
import  { forwardRef } from 'react';
import { Link as ScrollLink, LinkProps } from 'react-scroll';

// Create a properly typed wrapper for the ScrollLink component
const ScrollLinkWrapper = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
	// Cast the component to any to bypass TypeScript's strict checking
	const ScrollLinkComponent = ScrollLink as any;

	return <ScrollLinkComponent {...props} innerref={ref} />;
});

ScrollLinkWrapper.displayName = 'ScrollLinkWrapper';

export default ScrollLinkWrapper;