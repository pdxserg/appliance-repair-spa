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
		<div className={styles.serviceCard}>
			<div className={styles.cardIcon}>
				{getIcon(service.icon)}
			</div>
			<h3>{service.name}</h3>
			<p>{service.description}</p>
		</div>
	);
};

export default ServiceCard;

// src/components/Services/Services.module.css