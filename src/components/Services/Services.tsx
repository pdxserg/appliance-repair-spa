// src/components/Services/Services.tsx
import { useState } from 'react';
import { applianceServices } from '../../data/applianceServices';
import { fitnessServices } from '../../data/fitnessServices';
import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const Services = () => {
	const [activeTab, setActiveTab] = useState<'appliance' | 'fitness'>('appliance');

	return (
		<section id="services"
		         className={`section ${styles.servicesSection}`}
		         itemScope
		         itemType="https://schema.org/Service"
		>
			<div className="container">
				<h2 className="section-title">Our Services</h2>
				<p itemProp="description">
					Our experienced technicians offer fast and affordable repair services for home appliances and
					fitness equipment
					in Vancouver WA, Clark County. We specialize in washer repair, dryer repair,
					dishwasher
					repair, fridge repair, treadmill repair, elliptical repair, and more.
				</p>
				<meta itemProp="areaServed" content="Vancouver WA, Clark County, Portland OR"/>
				<meta itemProp="provider" content="Kaspian Star Appliance & Fitness Repair"/>
				<meta itemProp="serviceType" content="Appliance and Fitness Equipment Repair"/>
				<meta itemProp="priceRange" content="$$"/>

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
						<>
							<strong>Samsung, LG, Kenmore, Fridgidaire,  Whirlpool, KitchenAid, Maytag, GE, Electrolux, Speed Queen, Bosch, Miele, </strong>
							{applianceServices.map(service => (
								<ServiceCard key={service.id} service={service}/>
							))
							}
						</>
					) : (
						<>
							<strong>Nordic Track, Sole, Proform, Reebok, Ironman, Bowflex, Horizon, Peleton, Lifespan, Star Trac, Life Fitness, Precor, Landice, and TRUE </strong>
							{fitnessServices.map(service => (
								<ServiceCard key={service.id} service={service}/>
							))
							}
						</>

					)}
				</div>
			</div>
		</section>
	);
};

export default Services;

