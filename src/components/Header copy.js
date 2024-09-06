import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/steeze-and-needle-logo.png';
import search from '../assets/search.svg';
import mic from '../assets/mic.svg';
import account from '../assets/account.svg';
import help from '../assets/help.svg';
import cart from '../assets/cart.svg';

const Header = () => {
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
		<header className='flex flex-col justify-between shadow-md h-auto md:h-[132px] bg-white'>
			<div className='flex items-center justify-center bg-primary text-sm text-white text-center h-auto md:h-[42px] py-[14px]'>
				Welcome to worldwide Steeze & Needle
			</div>

			<div className='flex flex-col md:flex-row items-center h-full'>
				<div className='container mx-auto px-4 py-4 lg:py-2 flex items-center justify-between max-w-[1200px] h-auto lg:h-[48px]'>
					{/* Logo */}
					<div className='w-3/4'>
						<Link to='/' onClick={() => window.scrollTo(0, 0)} className='hover:text-primary-light'>
							<img src={logo} alt='steeze and needle logo' className='w-3/5 lg:w-[150px]' />
						</Link>
					</div>

					<div className='w-full hidden md:flex items-center justify-between gap-3 rounded-full border border-primary px-2 lg:px-4 py-1 lg:mr-4'>
						<img src={search} className='w-[12px] lg:w-auto' alt='Search' />
						<input
							type='text'
							className='w-full text-sm lg:text-base outline-none'
							placeholder='Search artisans, fabrics and more...'
						/>
						<img src={mic} className='w-[12px] lg:w-auto cursor-pointer' alt='mic' />
					</div>

					{/* User Profile / Cart */}
					<div className='w-3/4 flex flex-col md:flex-row items-center md:space-x-4 lg:space-x-8'>
						<div className='flex items-center justify-end md:justify-around w-full gap-4'>
							<Link to='/login' className='flex items-center gap-1 hover:text-primary-light'>
								<img src={account} className='w-[20px] md:w-[16px] lg:w-auto' alt='account-icon' />
								{!isSmallScreen && <small>Account</small>}
							</Link>
							<Link to='/profile' className='flex items-center gap-1 hover:text-primary-light'>
								<img src={help} className='w-[28px] md:w-[24px]' alt='help-icon' />
								{!isSmallScreen && <small>Help</small>}
							</Link>
							<Link to='/cart' className='flex items-center gap-1 hover:text-primary-light'>
								<img src={cart} className='w-[20px] md:w-[16px] lg:w-auto' alt='user-cart' />
								{!isSmallScreen && <small>Cart</small>}
							</Link>
						</div>
					</div>
				</div>

				{isSmallScreen && (
					<div className='w-full px-4 pb-4'>
						<div className='w-full flex md:hidden items-center justify-between rounded-full border border-primary px-3 py-2'>
							<img src={search} className='w-[14px] mr-1' alt='Search' />
							<input
								type='text'
								className='w-full text-sm lg:text-base outline-none'
								placeholder='Search artisans, fabrics and more...'
							/>
							<img src={mic} className='w-[14px] cursor-pointer' alt='mic' />
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Header;
