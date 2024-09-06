import { useState } from 'react';

const StatusIndicator = ({ onColorSelect }) => {
	const [selectedColor, setSelectedColor] = useState('#000000');

	const colors = [
		{ color: '#000000', label: 'Black' },
		{ color: '#d49971', label: 'Brown' },
		{ color: '#dfd379', label: 'Yellow' },
	];

	const handleClick = (color) => {
		setSelectedColor(color);
		onColorSelect(color);
	};

	return (
		<div className='inline-flex items-center space-x-2 px-[9px] py-[6px] border border-gray-200 rounded-full'>
			{colors.map((item, index) => (
				<div
					key={index}
					onClick={() => handleClick(item.color)}
					className='flex items-center justify-center w-[20px] h-[20px] rounded-full cursor-pointer'
					style={{ backgroundColor: item.color }}
				>
					{selectedColor === item.color && (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={2}
							stroke='currentColor'
							className='w-4 h-4 text-white'
						>
							<path strokeLinecap='round' strokeLinejoin='round' d='M5 13l4 4L19 7' />
						</svg>
					)}
				</div>
			))}
		</div>
	);
};

export default StatusIndicator;
