import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar from '../assets/avatar.svg';
import rating from '../assets/rating.svg';
import quote from '../assets/quote.svg';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	const [isActive, setIsActive] = useState(false);

	const handleClick = (e) => {
		setIsActive(true);
		onClick(e);
	};
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', color: isActive ? 'black' : '' }}
			onClick={handleClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	const [isActive, setIsActive] = useState(false);

	const handleClick = (e) => {
		setIsActive(true);
		onClick(e);
	};
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', color: isActive ? 'black' : '' }}
			onClick={handleClick}
		/>
	);
}

function SimpleSlider() {
	var settings = {
		dots: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		pauseOnHover: true,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					infinite: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					infinite: true,
				},
			},
		],
		nextArrow: <SampleNextArrow className='bg-red-500' />,
		prevArrow: <SamplePrevArrow className='bg-red-500' />,
	};

	const duplicate = Array.from({ length: 6 });
	return (
		<div className='slider-container space-x-10'>
			<Slider {...settings}>
				{duplicate.map((_, index) => (
					<div key={index} className='w-full bg-white p-8 rounded-2xl shadow gap-8'>
						<div className='flex items-center justify-between mb-4'>
							<span className='flex items-center space-x-2'>
								<img src={avatar} className='w-10 lg:w-auto' alt='avatar' />
								<div className='flex flex-col'>
									<span className='lg:text-xl'>Tola</span>
									<img src={rating} className='w-16 lg:w-auto' alt='rating' />
								</div>
							</span>
							<img src={quote} className='w-6 lg:w-auto' alt='quote' />
						</div>
						<p className='leading-[27px] text-sm lg:text-lg'>
							Absolutely love the style and warmth of the jacket. A perfect blend of fashion and functionality!
						</p>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default SimpleSlider;
