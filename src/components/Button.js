import React from 'react';

const Button = ({ children, onClick, variant = 'default', size = 'md', disabled = false, rounded = false }) => {
	const baseStyle = `font-normal focus:outline-none focus:ring-2 focus:ring-offset-2`;

	const sizeClasses = {
		sm: 'px-3 py-1 text-sm',
		md: 'px-4 py-2',
		lg: 'px-6 py-3 text-lg',
	};

	const variantClasses = {
		default: 'bg-primary text-white hover:bg-primary-dark text-primary border border-primary',
		light: 'bg-primary-light text-white hover:bg-primary text-primary-light border border-primary-light',
		dark: 'bg-primary-dark text-white hover:bg-primary text-primary-dark border border-primary-dark',
		'v-dark': 'bg-[#262626] text-white hover:bg-[#282828] border border-[#262626]',
		outline: 'bg-none text-[#262626] border border-gray-200 text-gray-900 hover:bg-gray-200',
	};

	const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg';

	const roundedClass = rounded ? 'rounded-full' : 'rounded';

	const combinedClasses = `${baseStyle} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${roundedClass}`;

	return (
		<button onClick={onClick} className={combinedClasses} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
