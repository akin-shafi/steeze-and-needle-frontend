import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/steeze-and-needle-logo.png';
import FB from '../assets/fb.svg';
import TW from '../assets/tw.svg';
import LN from '../assets/ln.svg';

const Footer = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<footer className='bg-white'>
			<div className='py-[30px] lg:py-[80px] px-5 xl:px-[162px] grid grid-cols-1 md:grid-cols-2 gap-8'>
				{/* About Section */}
				<div>
					<div className='space-y-10'>
						<div className='flex items-center justify-between'>
							<Link to='/'>
								<img src={logo} alt='steeze and needle logo' className='w-2/4 lg:w-[188px] h-auto lg:h-[43px]' />
							</Link>
							{isSmallScreen && (
								<div className='flex items-center gap-2'>
									<img src={FB} className='w-[25px] cursor-pointer' alt='icons' />
									<img src={TW} className='w-[25px] cursor-pointer' alt='icons' />
									<img src={LN} className='w-[25px] cursor-pointer' alt='icons' />
								</div>
							)}
						</div>

						<div className='lg:w-[480px] flex items-center gap-4'>
							<input
								type='email'
								placeholder='Enter your email'
								className='w-full py-2 lg:py-4 pl-4 lg:pl-8 pr-3 lg:pr-5 border rounded-full text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-primary'
							/>
							<button className=' bg-primary text-white text-sm lg:text-base px-6 py-2 lg:py-4 rounded-full'>
								Submit
							</button>
						</div>
					</div>
				</div>

				{/* Navigation Section */}
				<div>
					{isSmallScreen && (
						<div className='flex items-center justify-center space-x-10'>
							<Link to='/' className='text-sm lg:text-base font-bold'>
								Home
							</Link>
							<Link to='/fabrics' className='text-sm lg:text-base font-bold'>
								Products
							</Link>
							<Link to='/' className='text-sm lg:text-base font-bold'>
								Contact
							</Link>
						</div>
					)}

					<div className='hidden md:grid grid-cols-2 md:grid-cols-4 gap-4'>
						<div>
							<p className='text-base lg:text-xl font-bold mb-2 lg:mb-4'>Home</p>
							<div className='flex flex-col space-y-4'>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Features
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Popular Products
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Testimonials
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									FAQ
								</Link>
							</div>
						</div>
						<div>
							<p className='text-base lg:text-xl font-bold mb-2 lg:mb-4'>Menswear</p>
							<div className='flex flex-col space-y-4'>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Casual
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Formal
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Party
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Business
								</Link>
							</div>
						</div>
						<div>
							<p className='text-base lg:text-xl font-bold mb-2 lg:mb-4'>Womenwear</p>
							<div className='flex flex-col space-y-4'>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Casual
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Formal
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Party
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Business
								</Link>
							</div>
						</div>
						<div>
							<p className='text-base lg:text-xl font-bold mb-2 lg:mb-4'>Kidswear</p>
							<div className='flex flex-col space-y-4'>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Casual
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Formal
								</Link>
								<Link to='/' className='text-sm lg:text-lg hover:underline'>
									Party
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright Section */}
			<div className='lg:h-[103px] flex flex-col lg:flex-row space-y-4 lg:space-y-0 items-center justify-between border-t border-gray-600 py-[40px] px-5 xl:px-[162px] text-sm lg:text-lg'>
				<div className='flex flex-col md:flex-row items-center gap-2 lg:gap-8'>
					<p className='order-2 md:order-1'>Terms & Conditions</p>
					<p className='order-1 md:order-2'>Privacy Policy</p>
				</div>
				{!isSmallScreen && (
					<div className='flex items-center gap-2'>
						<img src={FB} className='w-[30px] cursor-pointer' alt='icons' />
						<img src={TW} className='w-[30px] cursor-pointer' alt='icons' />
						<img src={LN} className='w-[30px] cursor-pointer' alt='icons' />
					</div>
				)}
				<p>© {new Date().getFullYear()} Steeze and Needle. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
