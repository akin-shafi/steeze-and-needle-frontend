import cartIcon from '../assets/cart-icon.svg';

const Product = ({ image, title, rating, price }) => {
	return (
		<div className='bg-white border rounded-lg p-2 md:p-4'>
			<div className='relative w-[80px] h-[90px] lg:w-[200px] lg:h-[300px] mb-1 mx-auto'>
				<img src={image} alt={title} className='w-full h-full object-contain rounded-md mb-4' />
				<img
					src={cartIcon}
					alt={title}
					className='absolute right-0 lg:right-[10px] bottom-0 lg:bottom-[10px] w-[30px] lg:w-[45px] rounded-full cursor-pointer'
				/>
			</div>
			<div className='md:space-y-1 text-xs'>
				<h3 className='text-[#262626] md:text-md lg:text-lg font-semibold'>{title}</h3>
				<div className='flex flex-col md:flex-row md:items-center'>
					<small className='lg:text-base text-yellow-500'>{'★'.repeat(rating)}</small>
					<small className='md:ml-2 text-gray-600'>({rating} stars)</small>
				</div>
				<p className='text-sm text-[#4C4C4D] font-semibold'>₦{price}</p>
			</div>
		</div>
	);
};

export default Product;
