

import {FiHome, FiSettings, FiImage, FiInfo, FiPhone, FiDollarSign, FiMail} from 'react-icons/fi';
import styles from './Navbar.module.css';
import ScrollLinkWrapper from "../LinkScroll.tsx";

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
						<ScrollLinkWrapper
							to="home"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}

						>
							<FiHome className={styles.navIcon}/>
							<span>Home</span>
						</ScrollLinkWrapper>
					</li>
					<li className={styles.navItem}>
						<ScrollLinkWrapper
							to="services"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiSettings className={styles.navIcon}/>
							<span>Services</span>
						</ScrollLinkWrapper>
					</li>
					<li className={styles.navItem}>
						<ScrollLinkWrapper
							to="bookingForm"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiMail className={styles.navIcon}/>
							<span>Book Now</span>
						</ScrollLinkWrapper>
					</li>
					<li className={styles.navItem}>
						<ScrollLinkWrapper
							to="gallery"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiImage className={styles.navIcon}/>
							<span>Gallery</span>
						</ScrollLinkWrapper>
					</li>
					<li className={styles.navItem}>
						<ScrollLinkWrapper
							to="about"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiInfo className={styles.navIcon}/>
							<span>About</span>
						</ScrollLinkWrapper>
					</li>
					<li className={styles.navItem}>
						<ScrollLinkWrapper
							to="rates"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiDollarSign className={styles.navIcon}/>
							<span>Rates</span>
						</ScrollLinkWrapper>
					</li>
					<li className={styles.navItem}>
						<ScrollLinkWrapper
							to="contact"
							spy={true}
							smooth={true}
							offset={-70}
							duration={500}
							onClick={closeNav}
							className={styles.navLink}
							activeClass={styles.active}
						>
							<FiPhone className={styles.navIcon}/>
							<span>Contact</span>
						</ScrollLinkWrapper>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;

