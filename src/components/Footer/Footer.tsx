import {
	FiPhone,
	FiMail,
	FiFacebook,
	FiInstagram,
	FiMapPin,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import styles from "./Footer.module.css";
import ScrollLinkWrapper from "../LinkScroll.tsx";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const serviceAreas = [
		// Clark County, WA
		"Vancouver", "Camas", "Battle Ground", "Ridgefield", "Washougal", "La Center", "Yacolt", "Hazel Dell", "Salmon Creek",
		"Orchards", "Brush Prairie", "Minnehaha", "Walnut Grove", "Five Corners", "Felida", "Mount Vista",
		"Barberton", "Lake Shore", "Cherry Grove", "Amboy", "Dollars Corner", "Hockinson",

		// Portland Area, OR
		"Portland", "Beaverton", "Gresham", "Hillsboro", "Tigard", "Lake Oswego", "Oregon City", "Milwaukie", "Tualatin",
		"West Linn", "Wilsonville", "Troutdale", "Sherwood", "Happy Valley", "Canby", "Newberg", "Forest Grove", "Cornelius",
		"Fairview", "Wood Village", "King City", "Durham", "Maywood Park", "Aloha", "Cedar Mill", "Cedar Hills",
		"Oak Grove", "Clackamas", "Damascus"
	];

	return (
		<footer className={styles.footer}>
			<div className="container">
				<div className={styles.footerContent}>
					<div className={styles.footerLogo}>
						<h2>Kaspian Star LLC</h2>
						<p>
							Looking for reliable appliance or fitness equipment repair near you?
							We proudly serve Clark County, WA and Portland, OR metro area.
						</p>
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
							<li><ScrollLinkWrapper to="home" smooth offset={-70} duration={500}>Home</ScrollLinkWrapper></li>
							<li><ScrollLinkWrapper to="services" smooth offset={-70} duration={500}>Services</ScrollLinkWrapper></li>
							<li><ScrollLinkWrapper to="gallery" smooth offset={-70} duration={500}>Gallery</ScrollLinkWrapper></li>
							<li><ScrollLinkWrapper to="about" smooth offset={-70} duration={500}>About</ScrollLinkWrapper></li>
							<li><ScrollLinkWrapper to="contact" smooth offset={-70} duration={500}>Contact</ScrollLinkWrapper></li>
						</ul>
					</div>

					<div className={styles.footerContact}>
						<h3>Contact Info</h3>
						<div className={styles.contactItem}>
							<FiMapPin />
							<span>Serving Clark County, WA & Portland Metro</span>
						</div>
						<div className={styles.contactItem}>
							<FiPhone />
							<a href="tel:+13604040169">(360) 404-0169</a>
						</div>
						<div className={styles.contactItem}>
							<FiMail />
							<a href="mailto:kaspianstarus@gmail.com">kaspianstarus@gmail.com</a>
						</div>
					</div>
				</div>

				<div className={styles.serviceAreas}>
					<h4>Service Areas</h4>
					<ul className={styles.areasList}>
						{serviceAreas.map((city) => (
							<li key={city}>{city}</li>
						))}
					</ul>
				</div>

				<div className={styles.footerBottom}>
					<p>&copy; {currentYear} Kaspian Star LLC. All rights reserved.</p>
					<p>
						<a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;


// // src/components/Footer/Footer.tsx
//
// import {FiPhone, FiMail, FiFacebook, FiInstagram, FiMapPin, } from 'react-icons/fi';
// import styles from './Footer.module.css';
// import {FcGoogle} from "react-icons/fc";
// import ScrollLinkWrapper from "../LinkScroll.tsx";
//
// const Footer = () => {
// 	const currentYear = 2018//new Date().getFullYear();
//
// 	return (
// 		<footer className={styles.footer}>
// 			<div className="container">
// 				<div className={styles.footerContent}>
// 					<div className={styles.footerLogo}>
// 						<h2>Kaspian Star LLC</h2>
// 						<p>Looking for reliable appliance or fitness equipment repair near you? We proudly serve Vancouver WA, Battle Ground,
// 							Camas, Washougal, Ridgefield, and Portland OR. Book your service today!</p>
// 						<div className={styles.social}>
// 							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
// 								<FiFacebook />
// 							</a>
// 							<a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
// 								<FiInstagram />
// 							</a>
// 							<a href="https://g.page/r/CacEO8r3g4sNEAI" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews">
// 								<FcGoogle />
// 							</a>
// 						</div>
// 					</div>
//
// 					<div className={styles.footerNav}>
// 						<h3>Quick Links</h3>
// 						<ul>
// 							<li>
// 								<ScrollLinkWrapper to="home" spy={true} smooth={true} offset={-70} duration={500}>
// 									Home
// 								</ScrollLinkWrapper>
// 							</li>
// 							<li>
// 								<ScrollLinkWrapper to="services" spy={true} smooth={true} offset={-70} duration={500}>
// 									Services
// 								</ScrollLinkWrapper>
// 							</li>
// 							<li>
// 								<ScrollLinkWrapper to="gallery" spy={true} smooth={true} offset={-70} duration={500}>
// 									Gallery
// 								</ScrollLinkWrapper>
// 							</li>
// 							<li>
// 								<ScrollLinkWrapper to="about" spy={true} smooth={true} offset={-70} duration={500}>
// 									About
// 								</ScrollLinkWrapper>
// 							</li>
// 							<li>
// 								<ScrollLinkWrapper to="contact" spy={true} smooth={true} offset={-70} duration={500}>
// 									Contact
// 								</ScrollLinkWrapper>
// 							</li>
// 						</ul>
// 					</div>
//
// 					<div className={styles.footerContact}>
// 						<h3>Contact Info</h3>
// 						<div className={styles.contactItem}>
// 							<FiMapPin />
// 							<span>Clark County, WA</span>
// 						</div>
// 						<div className={styles.contactItem}>
// 							<FiPhone />
// 							<a href="tel:+1234567890">(360) 404-0169</a>
// 						</div>
// 						<div className={styles.contactItem}>
// 							<FiMail />
// 							<a href="mailto:info@repairpro.com">kaspianstarus@gmail.com</a>
// 						</div>
// 					</div>
// 				</div>
//
// 				<div className={styles.footerBottom}>
// 					<p>&copy; {currentYear} RepairPro. All rights reserved.</p>
// 					<p>
// 						<a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
// 					</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// };
//
// export default Footer;