import styles from './Contact.module.css';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Contact = () => {
	return (
		<section id="contact" className={`section ${styles.contactSection}`}>
			<div className="container">
				<h2 className="section-title">Contact Us</h2>

				<div className={styles.contactContent}>
					<div className={styles.contactInfo}>
						<div className={styles.infoItem}>
							<FiMapPin className={styles.infoIcon} />
							<div>
								<h3>Service Area</h3>
								<p>Clark County, WA - All Cities</p>
							</div>
						</div>

						<div className={styles.infoItem}>
							<FiPhone className={styles.infoIcon} />
							<div>
								<h3>Phone</h3>
								<p><a href="tel:+1234567890">(123) 456-7890</a></p>
							</div>
						</div>

						<div className={styles.infoItem}>
							<FiMail className={styles.infoIcon} />
							<div>
								<h3>Email</h3>
								<p><a href="mailto:mailto:kaspianstarus@gmail.com">info@repairpro.com</a></p>
							</div>
						</div>

						<div className={styles.infoItem}>
							<FiClock className={styles.infoIcon} />
							<div>
								<h3>Working Hours</h3>
								<p>Monday - Friday: 9AM - 7PM</p>
								<p>Saturday: 9AM - 3PM</p>
								<p>Sunday: Closed</p>
							</div>
						</div>
					</div>

					<div className={styles.map}>
						<iframe
							 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d549278.8397114694!2d-122.78827324183786!3d45.7532902022134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495ca76e1726eb9%3A0x523d5209c6000fec!2sClark%20County%2C%20WA!5e0!3m2!1sen!2sus!4v1743607037501!5m2!1sen!2sus"
							width="100%"
							height="450"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							title="Map of Clark County, WA"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;