// src/components/Services/Services.tsx
import { useState } from 'react';
import { applianceServices } from '../../data/applianceServices';
import { fitnessServices } from '../../data/fitnessServices';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const Services = () => {
	const [activeTab, setActiveTab] = useState<'appliance' | 'fitness'>('appliance');

	return (
		<section id="services" className={`section ${styles.servicesSection}`}>
			<div className="container">
				<h2 className="section-title">Our Services</h2>

				<div className={styles.tabContainer}>
					<button
						className={`${styles.tabButton} ${activeTab === 'appliance' ? styles.active : ''}`}
						onClick={() => setActiveTab('appliance')}
					>
						Appliance Repair
					</button>
					<button
						className={`${styles.tabButton} ${activeTab === 'fitness' ? styles.active : ''}`}
						onClick={() => setActiveTab('fitness')}
					>
						Fitness Equipment Repair
					</button>
				</div>

				<div className={styles.servicesGrid}>
					{activeTab === 'appliance' ? (
						applianceServices.map(service => (
							<ServiceCard key={service.id} service={service} />
						))
					) : (
						fitnessServices.map(service => (
							<ServiceCard key={service.id} service={service} />
						))
					)}
				</div>
			</div>
		</section>
	);
};

export default Services;

