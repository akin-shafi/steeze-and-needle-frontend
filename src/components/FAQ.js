import { useState } from 'react';
import PlusIcon from '../assets/plus-icon.svg';
import CloseIcon from '../assets/close-icon.svg';

const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqs = [
		{
			question: 'Does the jacket come in different colors?',
			answer: 'Yes, the jacket is available in several colors including black, blue, and gray.',
		},
		{
			question: 'Are there any inside pockets in the jacket?',
			answer: 'Yes, the jacket features two inside pockets for additional storage.',
		},
		{
			question: 'Can I machine wash the denim jacket?',
			answer: 'Yes, the jacket is machine washable. Please follow the care instructions on the label.',
		},
		{
			question: 'How do I style the jacket for different occasions?',
			answer: 'The jacket can be styled casually with jeans or dressed up with chinos.',
		},
		{
			question: 'Is the distressed detailing on the jacket prone to fraying?',
			answer: 'No, the distressed detailing is designed for durability.',
		},
		{
			question: 'How do I determine the right size for me?',
			answer: 'Please refer to our sizing chart for accurate measurements.',
		},
	];

	const toggleFAQ = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 rounded-lg p-0 lg:p-6'>
			{faqs.map((faq, index) => (
				<div
					key={index}
					className='border border-gray-200 rounded-lg p-4 flex flex-col justify-between min-h-[75px] h-fit'
				>
					<div
						className='flex justify-between items-center cursor-pointer text-sm mg:text-lg font-semibold'
						onClick={() => toggleFAQ(index)}
					>
						<h3>{faq.question}</h3>
						{activeIndex === index ? (
							<img src={CloseIcon} className='w-[10px]' alt='Close Icon' />
						) : (
							<img src={PlusIcon} className='w-[12px]' alt='Plus Icon' />
						)}
					</div>
					<div
						className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
							activeIndex === index ? 'max-h-40' : 'max-h-0'
						}`}
					>
						<div className='mt-4 text-sm'>
							<p>{faq.answer}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default FAQ;
