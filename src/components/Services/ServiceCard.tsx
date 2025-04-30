// src/components/Services/ServiceCard.tsx
import {ServiceItem} from '../../types';
import styles from './Services.module.css';
import {FiActivity, FiSettings} from 'react-icons/fi';
import {BiSolidDryer, BiSolidWasher} from "react-icons/bi";
import {GiChickenOven, GiThermometerCold} from "react-icons/gi";
import {TbMicrowave, TbTreadmill} from "react-icons/tb";
import {MdDirectionsBike, MdOutlineWaterDrop} from "react-icons/md";
import {CgGym} from "react-icons/cg";

interface ServiceCardProps {
	service: ServiceItem;
}

const ServiceCard = ({service}: ServiceCardProps) => {
	const getIcon = (iconName: string) => {
		switch (iconName) {
			case 'washing-machine':
				return <BiSolidWasher/>;
			case 'dryer':
				return <BiSolidDryer/>;
			case 'dishwasher':
				return <MdOutlineWaterDrop/>;
			case 'fridge':
				return <GiThermometerCold/>;
			case 'oven':
				return <GiChickenOven/>;
			case 'microwave':
				return <TbMicrowave/>;
			case 'treadmill':
				return <TbTreadmill/>;
			case 'bike':
				return <MdDirectionsBike/>;
			case 'elliptical':
				return <FiActivity/>;
			case 'dumbbell':
				return <CgGym/>;
			default:
				return <FiSettings/>;
		}
	};

	return (
		<div className={styles.serviceCard} itemScope itemType="https://schema.org/Service">
			<div className={styles.cardIcon}>
				{getIcon(service.icon)}
			</div>
			<div>
				<h3 itemProp="name">{service.name}</h3>
				<p itemProp="description">{service.description}</p>
				<meta itemProp="serviceType" content={`${service.name} Service`}/>
				<meta itemProp="areaServed" content="Vancouver WA"/>
				<meta itemProp="areaServed" content="Portland OR"/>
				<meta itemProp="provider" content="Kaspian Star Appliance & Fitness Repair"/>
				<meta itemProp="priceRange" content="$$"/>
			</div>

			{/*<h3>{service.name}</h3>*/}
			{/*<p>{service.description}</p>*/}
		</div>
	);
};

export default ServiceCard;

// src/components/Services/Services.module.css