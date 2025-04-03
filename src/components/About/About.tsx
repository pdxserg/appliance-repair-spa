// src/components/About/About.tsx
import styles from './About.module.css';
import { FiCheckCircle } from 'react-icons/fi';
import avaImg from '@/assets/images/gallery/ava.webp'

const About = () => {
	return (
		<section id="about" className={`section ${styles.aboutSection}`}>
			<div className="container">
				<h2 className="section-title">About Us</h2>

				<div className={styles.aboutContent}>
					<div className={styles.aboutText}>
						<p>
							With over 10 years of experience in appliance and fitness equipment repair,
							we pride ourselves on delivering fast, reliable, and affordable service to
							residents throughout Clark County, Washington.
						</p>

						<p>
							Our team of certified technicians is trained to work on all major brands
							and models of household appliances and fitness equipment. We stay up-to-date
							with the latest technological advancements to ensure we can provide the best
							service possible.
						</p>

						<div className={styles.benefits}>
							<div className={styles.benefit}>
								<FiCheckCircle className={styles.benefitIcon} />
								<span>Licensed & Insured</span>
							</div>

							<div className={styles.benefit}>
								<FiCheckCircle className={styles.benefitIcon} />
								<span>90-Day Warranty</span>
							</div>
							<div className={styles.benefit}>
								<FiCheckCircle className={styles.benefitIcon} />
								<span>Affordable Pricing</span>
							</div>
						</div>
					</div>

					<div className={styles.aboutImage}>
						<img src={avaImg} alt="Technician repairing an appliance" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;