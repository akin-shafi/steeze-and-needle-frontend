import { useState } from 'react';

const SizeSelector = ({ onSizeSelect }) => {
	const [selectedSize, setSelectedSize] = useState('M');

	const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

	const handleSizeClick = (size) => {
		setSelectedSize(size);
		onSizeSelect(size);
	};

	return (
		<div className='flex space-x-0.5'>
			{sizes.map((size) => (
				<button
					key={size}
					onClick={() => handleSizeClick(size)}
					className={`w-[30px] h-[30px] px-[2px] py-[12px] text-xs lg:text-sm border rounded-md flex items-center justify-center 
            ${selectedSize === size ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}
            transition duration-150 ease-in-out`}
				>
					{size}
				</button>
			))}
		</div>
	);
};

export default SizeSelector;
