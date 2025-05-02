
import styles from './Hero.module.css';
import ScrollLinkWrapper from "../LinkScroll.tsx";

const Hero = () => {
	return (
		<section id="home" className={styles.hero}>
			<div className={styles.overlay}>

				<div className="container">
					<div className={styles.heroContent}>
						<h1>Appliance & Fitness Equipment Repair in Vancouver, WA and Portland, OR</h1>
						<p>Fast, reliable repair services for all major brands in Clark County, WA</p>
						<div className={styles.heroCta}>
							<ScrollLinkWrapper
								to="services"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="btn btn-primary"
							>
								Our Services
							</ScrollLinkWrapper>
							<ScrollLinkWrapper
								to="bookingForm"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="btn btn-secondary"
							>
								Book Now
							</ScrollLinkWrapper>
							<ScrollLinkWrapper
								to="rates"
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
								className="btn btn-secondary"
							>
								Rates
							</ScrollLinkWrapper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

// src/components/Hero/Hero.module.css