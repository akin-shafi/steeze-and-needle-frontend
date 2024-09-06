import Tabs from '../components/Tabs';
import { AllClothing, MenClothing, WomenClothing, KidsClothing } from '../components/ProductCategories';
import mIcon from '../assets/men-icon.svg';
import wIcon from '../assets/women-icon.svg';
import kIcon from '../assets/kid-icon.svg';

function FabricListingPage() {
	const tabsData = [
		{
			label: 'All',
			icon: '',
			content: <AllClothing />,
		},
		{
			label: "Men's wear",
			icon: mIcon,
			content: <MenClothing />,
		},
		{
			label: "Women's wear",
			icon: wIcon,
			content: <WomenClothing />,
		},
		{
			label: "Kid's wear",
			icon: kIcon,
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
				<section className='space-y-10'>
					<div className=''>
						<p className='text-sm text-[#98989A] text-[18px] uppercase'>Products</p>
						<div className='flex flex-col lg:flex-row items-end justify-between gap-10'>
							<div className='w-full'>
								<h3 className='text-[#1A1A1A] text-xl lg:text-5xl font-semibold leading-10 lg:leading-[62.54px]'>
									Discover Now
								</h3>
								<p className='text-[#656567] text-sm lg:text-base lg:leading-6'>
									Dive into the world of fashion excellence at Steeze and Needle. Our curated selection brings together
									the latest trends and timeless classics, offering you a diverse array of clothing items that resonate
									with your unique style.
								</p>
							</div>
							<div className='w-full grid grid-cols-2 md:grid-cols-3 border rounded-lg p-[20px] lg:py-[30px] lg:px-[40px] gap-4 lg:gap-2'>
								<div className=''>
									<h4 className='text-base lg:text-lg font-bold'>Exclusive Offers</h4>
									<p className='text-sm'>30% off on select items</p>
								</div>
								<div className=''>
									<h4 className='text-base lg:text-lg font-bold'>New Arrivals</h4>
									<p className='text-sm'>50+ new arrivals Daily</p>
								</div>
								<div className='col-span-2 md:col-span-1'>
									<h4 className='text-base lg:text-lg font-bold'>Over 1,500 +</h4>
									<p className='text-sm'>curated fashion products.</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className='products'>
					<div className=''>
						<Tabs tabs={tabsData} fabric={true} />
					</div>
				</section>
			</div>
		</div>
	);
}

export default FabricListingPage;
