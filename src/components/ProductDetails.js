import { useState } from 'react';
import MaleWear from '../assets/male-wear.png';
import ThumbNail1 from '../assets/m-1.png';
import ThumbNail2 from '../assets/m-2.png';
import ThumbNail3 from '../assets/m-3.png';
import ThumbNail4 from '../assets/m-4.png';
import ShoppingBag from '../assets/shopping-bag.svg';
import CartIcon1 from '../assets/cart-icon-1.svg';
import Badge from '../components/Badge';
import Button from '../components/Button';
import SizeSelector from '../components/SizeSelector';
import MaterialColor from '../components/MaterialColor';
import SimpleSlider from '../components/Slider';
import FAQ from '../components/FAQ';

function ProductDetails() {
	// eslint-disable-next-line no-unused-vars
	const [selectedColor, setSelectedColor] = useState('');
	// eslint-disable-next-line no-unused-vars
	const [selectedSize, setSelectedSize] = useState(null);

	const handleColorSelect = (color) => {
		setSelectedColor(color);
		console.log('Selected Color:', color);
	};

	const handleSizeSelect = (size) => {
		setSelectedSize(size);
		console.log('Selected Size:', size);
	};

	return (
		<div className='container space-y-16'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
				{/* Image with Thumbnail */}
				<div className='w-full xl:w-[560px] xl:h-[565px] relative'>
					<img src={MaleWear} className='w-full object-contain' alt='male wear' />
					<div className='absolute hidden xl:block lg:left-[20px] top-1/2 transform -translate-y-1/2 w-[83px] h-[243px] p-[10px] rounded-lg gap-3'>
						<div className='flex flex-col gap-1 lg:gap-3'>
							<img src={ThumbNail1} className='w-full cursor-pointer' alt='male wear' />
							<img src={ThumbNail2} className='w-full cursor-pointer' alt='male wear' />
							<img src={ThumbNail3} className='w-full cursor-pointer' alt='male wear' />
							<img src={ThumbNail4} className='w-full cursor-pointer' alt='male wear' />
						</div>
					</div>
				</div>

				{/* Description */}
				<div className=''>
					<div className='flex flex-col space-y-4'>
						<div className='flex flex-col xl:flex-row gap-4 lg:gap-8'>
							<div className=''>
								<div className='flex items-center'>
									<p className='text-sm mr-2'>Men's Casual Outerwear</p>
									<Badge color='bg-[#FFE566] text-[#262626] px-[10px] py-[2px] w-[67px] h-[25px]' rounded>
										12 Left
									</Badge>
								</div>
								<div className='flex xl:block items-center justify-between'>
									<h4 className='text-md lg:text-xl font-semibold leading-[24px] lg:leading-[30px]'>
										Yoruba Stylist Agbada
									</h4>
									<h5 className='text-lg lg:text-2xl font-semibold leading-[30px] lg:leading-[36px]'>$69.99</h5>
								</div>
							</div>

							<div className='flex items-start justify-between gap-4'>
								<Button variant='v-dark' size='lg' rounded>
									<div className='flex items-center gap-2'>
										<img src={ShoppingBag} className='w-[19.25px] h-[21px]' alt='shopping' />
										<span className='text-sm'>Fit now</span>
									</div>
								</Button>
								<div className=''>
									<Button variant='outline' size='lg' rounded>
										<div className='flex items-center gap-2'>
											<img src={CartIcon1} className='w-[20.89px] h-[19.5px]' alt='cart' />
											<span className='text-sm'>Add To cart</span>
										</div>
									</Button>
								</div>
							</div>
						</div>

						<div className='border border-gray-2 rounded-lg p-3 lg:p-6 space-y-4'>
							<div className='grid grid-cols-2'>
								<div className=''>
									<h3 className='text-sm md:text-lg font-semibold'>Material</h3>
									<p className='text-xs md:text-base'>High-Quality Denim (100% Cotton)</p>
								</div>
								<div className=''>
									<h3 className='text-sm md:text-lg font-semibold'>Fit</h3>
									<p className='text-xs md:text-base'>Classic Fit</p>
								</div>
							</div>

							<div className='grid grid-cols-2'>
								<div className=''>
									<h3 className='text-sm md:text-lg font-semibold'>
										<span className='hidden lg:inline-block'>Material</span> Color
									</h3>
									<MaterialColor onColorSelect={handleColorSelect} />
								</div>
								<div className=''>
									<h3 className='text-sm md:text-lg font-semibold'>Sizes</h3>
									<div>
										<SizeSelector onSizeSelect={handleSizeSelect} />
									</div>
								</div>
							</div>
						</div>

						<div className='border border-gray-2 rounded-lg p-3 lg:p-6'>
							<h3 className='text-lg font-medium leading-7'>
								<span className='hidden md:inline-block'>Tailoring/</span>Shipping Information
							</h3>
							<ul className='list-disc pl-5 ml-2 space-y-1'>
								<li className='text-sm'>
									Standard shipping: <span className='font-semibold'>3-5 business days</span>
								</li>
								<li className='text-sm'>Express shipping options available at checkout</li>
							</ul>
						</div>

						<div className='border border-gray-2 rounded-lg p-3 lg:p-6'>
							<h3 className='text-lg font-medium leading-7'>Features</h3>
							<ul className='list-disc pl-5 ml-2 space-y-1'>
								<li className='text-sm'>Distressed detailing for a rugged look</li>
								<li className='text-sm'>Button-up front closure with engraved metal buttons</li>
								<li className='text-sm'>Two side pockets for added functionality</li>
								<li className='text-sm'>Adjustable buttoned cuffs for a personalized fit</li>
								<li className='text-sm'>Back waist tabs for customizable styling</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<section className='space-y-10'>
				<div className='flex flex-col md:flex-row lg:flex-row items-center justify-between space-y-4 lg:space-y-0'>
					<div className='w-full md:w-2/3'>
						<p className='text-sm text-[#98989A] text-[18px] uppercase'>Product Reviews</p>
						<h3 className='text-[#1A1A1A] text-2xl lg:text-4xl font-semibold uppercase leading-10 lg:leading-[62.54px]'>
							Reviews
						</h3>
						<p className='text-[#656567] text-sm lg:text-base lg:leading-6'>
							At Steeze and Needle, our customers are the heartbeat of our brand. Explore the heartfelt testimonials
							shared by those who have experienced the magic of Steeze and Needle fashion.
						</p>
					</div>
				</div>

				<div className=''>
					<SimpleSlider />
				</div>
			</section>

			<section className='space-y-10'>
				<div className='flex flex-col md:flex-row lg:flex-row items-center justify-between space-y-4 lg:space-y-0'>
					<div className='w-full md:w-2/3'>
						<p className='text-sm text-[#98989A] text-[18px] uppercase'>FAQs</p>
						<h3 className='text-[#1A1A1A] text-2xl lg:text-4xl font-semibold uppercase leading-10 lg:leading-[62.54px]'>
							Frequently asked questions
						</h3>
						<p className='text-[#656567] text-sm lg:text-base lg:leading-6'>
							Ease into the world of Steeze and Needle with clarity. Our FAQs cover a spectrum of topics, ensuring you
							have the information you need for a seamless shopping experience.
						</p>
					</div>
				</div>

				<div className=''>
					<FAQ />
				</div>
			</section>
		</div>
	);
}

export default ProductDetails;
