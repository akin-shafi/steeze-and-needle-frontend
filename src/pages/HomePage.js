import Hero from '../components/Hero';
import Button from '../components/Button';
import Tabs from '../components/Tabs';
import Icon1 from '../assets/icon-1.svg';
import Icon2 from '../assets/icon-2.svg';
import BannerAds from '../assets/banner-ads.png';
import BannerAds2 from '../assets/banner-ads-2.png';
import BannerAdsMobile1 from '../assets/banner-mobile-1.png';
import BannerAdsMobile2 from '../assets/banner-mobile-2.png';
import { AllClothing, MenClothing, WomenClothing, KidsClothing } from '../components/ProductCategories';
import SimpleSlider from '../components/Slider';

function HomePage() {
	const tabsData = [
		{
			label: 'All',
			content: <AllClothing />,
		},
		{
			label: 'Menswear',
			content: <MenClothing />,
		},
		{
			label: 'Womenswear',
			content: <WomenClothing />,
		},
		{
			label: 'Kidswear',
			content: <KidsClothing />,
		},
		{
			label: 'Tailoring',
			content: <MenClothing />,
		},
		{
			label: 'Fabrics',
			content: <WomenClothing />,
		},
	];

	return (
		<div className='min-h-screen w-full xl:w-[1201px] px-4 mx-auto'>
			<div className='container space-y-16'>
				<Hero />

				<section className='trending'>
					<div className='flex flex-col md:flex-row lg:flex-row items-center justify-between space-y-4 lg:space-y-0'>
						<div className='w-full md:w-2/3'>
							<h3 className='text-[#1A1A1A] text-2xl lg:text-4xl font-semibold leading-10 lg:leading-[62.54px]'>
								Trending..
							</h3>
							<p className='text-[#656567] text-sm lg:text-base lg:leading-6'>
								Dive into a world of fashion innovation at Steeze and Needle. Our carefully curated collections bring
								together the latest trends and timeless classics, ensuring you find the perfect pieces for every
								occasion.
							</p>
						</div>

						<div className='w-full md:w-1/3 md:text-end'>
							<Button variant='default' size='md' rounded>
								<span className='text-xs'>View All Products</span>
							</Button>
						</div>
					</div>
				</section>

				<section className='products'>
					<div className=''>
						<Tabs tabs={tabsData} />
					</div>
				</section>

				<section className='space-y-10'>
					<div className=''>
						<p className='text-sm text-[#98989A] text-[18px] uppercase'>About us</p>
						<div className='w-full md:w-2/3'>
							<h3 className='text-[#1A1A1A] text-2xl lg:text-4xl font-semibold leading-10 lg:leading-[62.54px]'>
								Our Experience.
							</h3>
							<p className='text-[#656567] text-sm lg:text-base lg:leading-6'>
								At Steeze and needle, we breathe life into fashion, blending creativity with commitment. Our journey is
								fueled by a dedication to delivering unparalleled style and quality. Join us in redefining fashion and
								embracing a community where every purchase tells a story.
							</p>
						</div>
					</div>

					<div className='grid md:grid-cols-3 gap-2 lg:gap-4'>
						<div className='flex flex-col border rounded-xl bg-white p-5 lg:p-10 w-full xl:w-[359.67px] xl:h-[236px] gap-3'>
							<div className='flex items-center w-full lg:w-[279.67px] gap-4'>
								<img src={Icon1} className='w-[50px] lg:w-[56px] h-[56px]' alt='Passionate' />
								<p className='text-[#262626] lg:text-[20px] font-semibold'>Passionate Craftsmanship</p>
							</div>
							<p className='leading-[24px] text-sm lg:text-base text-[#666666]'>
								Every garment at Steeze and Needle is crafted with passion, reflecting our commitment to quality and
								innovation.
							</p>
						</div>

						<div className='flex flex-col border rounded-xl bg-white p-5 lg:p-10 w-full xl:w-[359.67px] xl:h-[236px] gap-3'>
							<div className='flex items-center w-full lg:w-[279.67px] gap-4'>
								<img src={Icon1} className='w-[50px] lg:w-[56px] h-[56px]' alt='Passionate' />
								<p className='text-[#262626] lg:text-[20px] font-semibold'>Passionate Craftsmanship</p>
							</div>
							<p className='leading-[24px] text-sm lg:text-base font-normal text-[#666666]'>
								Every garment at Steeze and Needle is crafted with passion, reflecting our commitment to quality and
								innovation.
							</p>
						</div>

						<div className='flex flex-col border rounded-xl bg-white p-5 lg:p-10 w-full xl:w-[359.67px] xl:h-[236px] gap-3'>
							<div className='flex items-center w-full lg:w-[279.67px] gap-4'>
								<img src={Icon2} className='w-[50px] lg:w-[56px] h-[56px]' alt='Passionate' />
								<p className='text-[#262626] lg:text-[20px] font-semibold'>Customer-Centric Approach</p>
							</div>
							<p className='leading-[24px] text-sm lg:text-base font-normal text-[#666666]'>
								At Steeze and needle platform, our customers are at the heart of everything we do.
							</p>
						</div>
					</div>
				</section>

				<section className='banner-ads'>
					<img src={BannerAds} className='hidden md:block w-full h-full' alt='banner-ads' />
					<img src={BannerAdsMobile1} className='md:hidden w-full h-full' alt='banner-ads' />
				</section>

				<section className='space-y-10'>
					<div className='flex flex-col md:flex-row lg:flex-row items-center justify-between space-y-4 lg:space-y-0'>
						<div className='w-full md:w-2/3'>
							<p className='text-sm text-[#98989A] text-[18px] uppercase'>Testimonials</p>
							<h3 className='text-[#1A1A1A] text-2xl lg:text-4xl font-semibold leading-10 lg:leading-[62.54px]'>
								Customers Love.
							</h3>
							<p className='text-[#656567] text-sm lg:text-base lg:leading-6'>
								At Steeze and needle, our customers are the heartbeat of our brand. Explore the heartfelt testimonials
								shared by those who have experienced the magic of Steeze and Needle fashion.
							</p>
						</div>
						<div className='w-full md:w-1/3 md:text-end'>
							<Button variant='default' size='md' rounded>
								<span className='text-xs'>View All Testimonials</span>
							</Button>
						</div>
					</div>

					<div className=''>
						<SimpleSlider />
					</div>

					<section className='banner-ads'>
						<img src={BannerAds2} className='hidden md:block w-full h-full' alt='banner-ads' />
						<img src={BannerAdsMobile2} className='md:hidden w-full h-full' alt='banner-ads' />
					</section>
				</section>
			</div>
		</div>
	);
}

export default HomePage;
