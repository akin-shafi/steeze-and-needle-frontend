import Product from './Product';
import images1 from '../assets/images1.jpeg';
import images2 from '../assets/images2.jpg';
import images3 from '../assets/images3.jpg';
import images4 from '../assets/images4.jpg';

import images5 from '../assets/images5.jpg';
import images6 from '../assets/images6.jpg';
import images7 from '../assets/images7.jpeg';
import images8 from '../assets/images8.jpg';

import images9 from '../assets/images9.png';
import images10 from '../assets/images10.jpg';
import images11 from '../assets/images11.jpeg';
import images12 from '../assets/images12.jpg';
import { Link } from 'react-router-dom';

const AllClothing = () => (
	<div className='p-category flex w-full whitespace-nowrap overflow-x-auto gap-2 lg:gap-4'>
		<Link to='/product'>
			<Product image={images1} title="Men's Shirt" rating={4} price={29.99} />
		</Link>
		<Link to='/product'>
			<Product image={images2} title="Men's Suit" rating={5} price={99.99} />
		</Link>
		<Link to='/product'>
			<Product image={images3} title="Men's Jeans" rating={3} price={49.99} />
		</Link>
		<Link to='/product'>
			<Product image={images4} title="Men's Wear" rating={3} price={55.99} />
		</Link>

		<Product image={images5} title="Women's Dress" rating={5} price={59.99} />
		<Product image={images6} title="Women's Blouse" rating={4} price={39.99} />
		<Product image={images7} title="Women's Skirt" rating={4} price={29.99} />
		<Product image={images8} title="Women's Wear" rating={4} price={22.99} />

		<Product image={images9} title="Kid's Dress" rating={5} price={49.99} />
		<Product image={images10} title="Kid's Jeans" rating={3} price={24.99} />
		<Product image={images11} title="Kid's Jeans" rating={3} price={24.99} />
		<Product image={images12} title="Kid's Wear" rating={4} price={32.99} />
	</div>
);

const MenClothing = () => (
	<div className='p-category flex w-full whitespace-nowrap overflow-x-auto gap-2 lg:gap-4'>
		<Product image={images1} title="Men's Shirt" rating={4} price={29.99} />
		<Product image={images2} title="Men's Suit" rating={5} price={99.99} />
		<Product image={images3} title="Men's Jeans" rating={3} price={49.99} />
		<Product image={images4} title="Men's Wear" rating={3} price={55.99} />
	</div>
);

const WomenClothing = () => (
	<div className='p-category flex w-full whitespace-nowrap overflow-x-auto gap-2 lg:gap-4'>
		<Product image={images5} title="Women's Dress" rating={5} price={59.99} />
		<Product image={images6} title="Women's Blouse" rating={4} price={39.99} />
		<Product image={images7} title="Women's Skirt" rating={4} price={29.99} />
		<Product image={images8} title="Women's Wear" rating={4} price={22.99} />
	</div>
);

const KidsClothing = () => (
	<div className='p-category flex w-full whitespace-nowrap overflow-x-auto gap-2 lg:gap-4'>
		<Product image={images9} title="Kid's Dress" rating={5} price={49.99} />
		<Product image={images10} title="Kid's Jeans" rating={3} price={24.99} />
		<Product image={images11} title="Kid's Jeans" rating={3} price={24.99} />
		<Product image={images12} title="Kid's Wear" rating={4} price={32.99} />
	</div>
);

export { AllClothing, MenClothing, WomenClothing, KidsClothing };
