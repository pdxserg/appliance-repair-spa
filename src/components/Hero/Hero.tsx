
import { Link } from 'react-scroll';
import styles from './Hero.module.css';

const Hero = () => {
	return (
		<section id="home" className={styles.hero}>
			<div className={styles.overlay}>
				<div className="container">
					<div className={styles.heroContent}>
						<h1>Appliance & Fitness Equipment Repair</h1>
						<p>Fast, reliable repair services for all major brands in Clark County, WA</p>
						<div className={styles.heroCta}>
							<Link
								to="services"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="btn btn-primary"
							>
								Our Services
							</Link>
							<Link
								to="contact"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="btn btn-secondary"
							>
								Contact Us
							</Link>
							<Link
								to="rates"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="btn btn-secondary"
							>
								Rates
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

// src/components/Hero/Hero.module.css