// src/components/Navbar/Navbar.tsx
import { Link } from 'react-scroll';
import {FiHome, FiSettings, FiImage, FiInfo, FiPhone, FiDollarSign} from 'react-icons/fi';
import styles from './Navbar.module.css';

interface NavbarProps {
	isOpen: boolean;
	closeNav: () => void;
}

const Navbar = ({ isOpen, closeNav }: NavbarProps) => {
	return (
		<nav className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
			<div className={styles.navContainer}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link
							to="home"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiHome className={styles.navIcon} />
							<span>Home</span>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link
							to="services"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiSettings className={styles.navIcon} />
							<span>Services</span>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link
							to="gallery"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiImage className={styles.navIcon} />
							<span>Gallery</span>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiInfo className={styles.navIcon} />
							<span>About</span>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Link
							to="rates"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiDollarSign className={styles.navIcon} />
							<span>Rates</span>
						</Link>
					</li><li className={styles.navItem}>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiPhone className={styles.navIcon} />
							<span>Contact</span>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

