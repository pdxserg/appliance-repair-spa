// src/components/Footer/Footer.tsx
import { Link } from 'react-scroll';
import {FiPhone, FiMail, FiFacebook, FiInstagram, FiMapPin, } from 'react-icons/fi';
import styles from './Footer.module.css';
import {FcGoogle} from "react-icons/fc";

const Footer = () => {
	const currentYear = 2018//new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footerContent}>
					<div className={styles.footerLogo}>
						<h2>Kaspian Star LLC</h2>
						<p>Professional appliance and fitness equipment repair services in Clark County, WA.</p>
						<div className={styles.social}>
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
								<FiFacebook />
							</a>
							<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
								<FiInstagram />
							</a>
							<a href="https://g.page/r/CacEO8r3g4sNEAI" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews">
								<FcGoogle />
							</a>
						</div>
					</div>

					<div className={styles.footerNav}>
						<h3>Quick Links</h3>
						<ul>
							<li>
								<Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
									Home
								</Link>
							</li>
							<li>
								<Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
									Services
								</Link>
							</li>
							<li>
								<Link to="gallery" spy={true} smooth={true} offset={-70} duration={500}>
									Gallery
								</Link>
							</li>
							<li>
								<Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
									About
								</Link>
							</li>
							<li>
								<Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div className={styles.footerContact}>
						<h3>Contact Info</h3>
						<div className={styles.contactItem}>
							<FiMapPin />
							<span>Clark County, WA</span>
						</div>
						<div className={styles.contactItem}>
							<FiPhone />
							<a href="tel:+1234567890">(123) 456-7890</a>
						</div>
						<div className={styles.contactItem}>
							<FiMail />
							<a href="mailto:info@repairpro.com">info@repairpro.com</a>
						</div>
					</div>
				</div>

				<div className={styles.footerBottom}>
					<p>&copy; {currentYear} RepairPro. All rights reserved.</p>
					<p>
						<a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;