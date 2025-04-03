// src/components/Header/Header.tsx

import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi';
import styles from './Header.module.css';

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
						<h1>RepairPro</h1>
					</a>
				</div>

				<div className={styles.contactInfo}>
					<a href="mailto:kaspianstarus@gmail.com" className={styles.contactItem}>
						<FiMail className={styles.icon}/>
						<span className={styles.contactText}>info@repairpro.com</span>
					</a>
					<a href="tel:+1234567890" className={styles.contactItem}>
						<FiPhone className={styles.icon}/>
						<span className={styles.contactText}>(123) 456-7890</span>
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