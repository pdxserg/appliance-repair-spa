

import { FiMenu, FiX, FiPhone } from 'react-icons/fi';
import styles from './Header.module.css';
import ScrollLinkWrapper from "../LinkScroll.tsx";


interface HeaderProps {
	isScrolled: boolean;
	isNavOpen: boolean;
	toggleNav: () => void;
}

const Header = ({ isScrolled, isNavOpen, toggleNav }: HeaderProps) => {
	return (
		<header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<a href="#home">
						<h1 className={styles.desktopTitle}>Kaspian Star Appliance & Fitness Repair</h1>
						<h1 className={styles.mobileTitle}>KS Repair</h1>
					</a>
				</div>

				<div className={styles.contactInfo}>
					<ScrollLinkWrapper
						to="bookingForm"
						spy={true}
						smooth={true}
						offset={-70}
						duration={500}
						// className="btn btn-secondary"
						className={`btn btn-secondary ${styles.shiny}`}
					>
						Book Now
					</ScrollLinkWrapper>
					{/*<a href="mailto:kaspianstarus@gmail.com" className={styles.contactItem}>*/}
					{/*	<FiMail className={styles.icon}/>*/}
					{/*	<span className={styles.contactText}>kaspianstarus@gmail.com</span>*/}
					{/*</a>*/}
					<a href="tel:+13604040169" className={styles.contactItem}>
						<FiPhone className={styles.icon}/>
						<span className={styles.contactText}>(360) 404-0169</span>
					</a>

				</div>

				<button
					className={styles.menuToggle}
					onClick={toggleNav}
					aria-expanded={isNavOpen}
					aria-label="Toggle navigation menu"
				>
					{isNavOpen ? <FiX/> : <FiMenu />}
				</button>
			</div>
		</header>
	);
};

export default Header;