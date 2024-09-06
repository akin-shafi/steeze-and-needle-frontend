import React, { useState } from 'react';

const Tabs = ({ tabs, fabric = false }) => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<div>
			{/* Tab Navigation */}
			<div
				className={`flex flex-col md:flex-row md:justify-between ${
					!fabric ? 'border-b border-t' : ''
				} md:py-4 w-full overflow-x-auto whitespace-nowrap`}
			>
				<div className={`flex gap-2 ${fabric ? 'border border-gray-200 rounded-full p-1' : ''}`}>
					{tabs.map((tab, index) => (
						<React.Fragment key={index}>
							{tab.label && !['Tailoring', 'Fabrics']?.includes(tab.label) && (
								<button
									key={index}
									className={`flex justify-between py-2 px-4 text-xs md:text-sm focus:outline-none uppercase ${
										activeTab === index && !fabric
											? 'border-b-2 border-primary text-primary font-semibold'
											: activeTab === index && fabric
											? 'border border-primary bg-primary-light text-white rounded-full'
											: fabric
											? 'bg-gray-200 rounded-full'
											: 'text-gray-600 hover:text-primary font-semibold'
									}`}
									onClick={() => setActiveTab(index)}
								>
									<div className='flex items-center gap-1'>
										{fabric && tab.icon && <img src={tab.icon} className='w-[8px] lg:w-[15px]' alt='icon' />}
										{tab.label}
									</div>
								</button>
							)}
						</React.Fragment>
					))}
				</div>
				<div className='flex'>
					{tabs.map((tab, index) => (
						<React.Fragment key={index}>
							{tab.label && ['Tailoring', 'Fabrics'].includes(tab.label) && (
								<button
									className={`w-full md:w-auto block md:flex items-center justify-between py-2 px-4 ml-2 my-2 md:my-0 border rounded-full font-semibold text-sm focus:outline-none ${
										activeTab === index ? 'text-white font-bold bg-[#262626]' : 'text-gray-600 hover:text-primary-light'
									}`}
									onClick={() => setActiveTab(index)}
								>
									{tab.label}
								</button>
							)}
						</React.Fragment>
					))}
				</div>
				{/* Tab Content */}
			</div>

			{fabric && (
				<div className='my-4'>
					<h4 className='text-xl font-bold'>Formal Elegance</h4>
					<p className='text-base'>
						Explore timeless elegance with our Formal Elegance collection, featuring refined pieces for a polished look.
					</p>
				</div>
			)}

			<div className='py-3'>{tabs[activeTab] && <div>{tabs[activeTab].content}</div>}</div>
		</div>
	);
};

export default Tabs;
