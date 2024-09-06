const Badge = ({ children, variant = 'default', size = 'md', rounded = false, color }) => {
	const baseStyle = `inline-flex items-center justify-center font-semibold`;

	const sizeClasses = {
		sm: 'px-2 py-1 text-xs',
		md: 'px-3 py-1.5 text-sm',
		lg: 'px-4 py-2 text-base',
	};

	const variantClasses = {
		default: 'bg-primary',
		light: 'bg-primary-light',
		dark: 'bg-primary-dark',
	};

	// Use the custom color if provided, otherwise fall back to the variant
	const colorClass = color ? color : variantClasses[variant];

	const roundedClasses = rounded ? 'rounded-full' : 'rounded-md';

	const combinedClasses = `${baseStyle} ${sizeClasses[size]} ${colorClass} ${roundedClasses}`;

	return <span className={combinedClasses}>{children}</span>;
};

export default Badge;
