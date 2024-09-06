import Button from '../components/Button';
import Badge from '../components/Badge';

function UtilityPage() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
			<div className='space-y-4'>
				<h1 className='text-4xl font-bold text-primary mb-8'>text-primary-default</h1>
				<h1 className='text-4xl font-bold text-primary-light mb-8'>text-primary-light</h1>
				<h1 className='text-4xl font-bold text-primary-dark mb-8'>text-primary-dark</h1>
				<Button variant='default' size='md' onClick={() => alert('Primary Button Clicked!')}>
					Primary Button
				</Button>{' '}
				<br />
				<Button variant='light' size='sm' className='mt-4'>
					Light Button
				</Button>{' '}
				<br />
				<Button variant='dark' size='lg' className='mt-4'>
					Dark Button
				</Button>{' '}
				<br />
				<Button variant='default' size='md' disabled className='mt-4'>
					Disabled Button
				</Button>{' '}
				<br />
				<Badge variant='default' size='md'>
					Default Badge
				</Badge>{' '}
				<br />
				<Badge variant='light' size='lg'>
					Light Badge
				</Badge>{' '}
				<br />
				<Badge variant='dark' size='sm'>
					Dark Badge
				</Badge>{' '}
				<br />
				<Badge variant='default' size='md' rounded>
					99+
				</Badge>{' '}
				<br />
				<Badge variant='dark' size='sm' rounded>
					5
				</Badge>{' '}
				<br />
			</div>
		</div>
	);
}

export default UtilityPage;
