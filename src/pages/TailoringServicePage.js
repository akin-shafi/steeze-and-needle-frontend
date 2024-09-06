import { useState } from 'react';

function TailoringServicePage() {
	const [serviceType, setServiceType] = useState('normal');

	const handleServiceChange = (e) => {
		setServiceType(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Requested Tailoring Service:', serviceType);
		// Submit the service request to the backend
	};

	return (
		<div className='max-w-lg mx-auto p-6 bg-white rounded-md shadow-md'>
			<h2 className='text-2xl font-bold mb-6'>Request Tailoring Service</h2>
			<form onSubmit={handleSubmit}>
				<div className='mb-4'>
					<label className='block mb-2 text-gray-700'>Service Type</label>
					<select value={serviceType} onChange={handleServiceChange} className='w-full border-gray-300 rounded-md'>
						<option value='normal'>Normal Service</option>
						<option value='express'>Express Service</option>
					</select>
				</div>
				<button className='w-full bg-blue-500 text-white py-2 rounded-md'>Submit Request</button>
			</form>
		</div>
	);
}

export default TailoringServicePage;
