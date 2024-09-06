import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import GMail from '../../assets/g-icon.svg';
import Envelope from '../../assets/e-icon.svg';
import Lock from '../../assets/l-icon.svg';
import EyeOpened from '../../assets/eye-opened.svg';
import LoginBanner from '../../assets/login-banner.svg';

const LoginPage = () => {
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
		<div className='grid grid-cols-1 md:grid-cols-2'>
			<div className='min-h-screen md:min-h-[794px] flex items-center justify-center bg-gray-100'>
				<div className='bg-transparent p-8 rounded-lg w-full max-w-md'>
					<h1 className='text-2xl font-bold mb-4'>Hi, Welcome Back!</h1>
					<p className='text-gray-400 mb-8'>Login to your account to enjoy</p>
					<button className='w-full flex items-center justify-center py-2 mb-4 text-black bg-white rounded-lg font-medium'>
						<img src={GMail} alt='Google Icon' className='w-5 h-5 mr-2' />
						Sign in with Google
					</button>
					<div className='flex items-center my-4'>
						<hr className='flex-grow border-t border-gray-600' />
						<span className='mx-3 text-gray-400'>or Sign in with Email</span>
						<hr className='flex-grow border-t border-gray-600' />
					</div>
					<div className='mb-4'>
						<label htmlFor='email' className='block text-sm font-medium'>
							Email address
						</label>
						<div className='mt-1 flex items-center border border-gray-200 rounded-md bg-white'>
							<span className='inline-block p-2 rounded-l-lg'>
								<img src={Envelope} alt='Email Icon' className='w-5 h-5' />
							</span>
							<input
								type='email'
								id='email'
								className='block w-full px-4 py-2 border-0 outline-0 rounded-r-lg'
								placeholder='wale@example.com'
							/>
						</div>
					</div>
					<div className='mb-6'>
						<label htmlFor='password' className='block text-sm font-medium'>
							Password
						</label>
						<div className='mt-1 flex items-center border border-gray-200 rounded-md bg-white'>
							<span className='inline-block p-2 rounded-l-lg'>
								<img src={Lock} alt='Lock Icon' className='w-5 h-5' />
							</span>
							<input
								type='password'
								id='password'
								className='block w-full px-4 py-2 border-0 outline-0'
								placeholder='Enter your password'
							/>
							<span className='inline-block p-2 rounded-r-lg'>
								<img src={EyeOpened} alt='Eye Icon' className='w-5 h-5' />
							</span>
						</div>
					</div>
					<div className='flex items-center justify-between mb-6'>
						<label className='inline-flex items-center'>
							<input type='checkbox' className='form-checkbox h-4 w-4 text-primary' />
							<span className='ml-2 text-sm text-gray-400'>Remember me</span>
						</label>
						<Link to='/forgot-password' className='text-sm text-primary hover:underline'>
							Forgot your password?
						</Link>
					</div>
					<button className='w-full py-2 text-white bg-primary font-medium rounded-lg hover:bg-primary-dark'>
						Log In
					</button>
					<p className='mt-4 text-sm text-gray-400'>
						Not registered yet?{' '}
						<Link to='/register' className='text-sm text-primary hover:underline'>
							Create an Account
						</Link>
					</p>
				</div>
			</div>

			{!isSmallScreen && (
				<div className='flex items-center justify-center'>
					<img src={LoginBanner} alt='Google Icon' className='w-full h-full object-cover' />
				</div>
			)}
		</div>
	);
};

export default LoginPage;
