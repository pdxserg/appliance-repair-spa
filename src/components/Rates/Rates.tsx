import styles from './Rates.module.css';
import { FiMapPin, FiDollarSign } from 'react-icons/fi';

const Rates = () => {
	return (
		<section id="rates" className={`section ${styles.ratesSection}`}>
			<div className="container">
				<h2 className="section-title">Service Call Fees</h2>
				<p className={styles.introText}>
					Our service call fee covers the trip charge and a comprehensive diagnostic assessment of your appliance issue.
					We offer transparent pricing with a flat labor rate instead of hourly billing, ensuring the labor cost on your
					repair estimate remains fixed even if the repair takes longer than expected or requires additional visits to
					install parts. Your technician will provide a complete estimate for your review and approval before performing
					any work beyond the initial diagnosis.
				</p>

				<div className={styles.ratesContent}>
					<div className={styles.ratesCards}>
						<div className={styles.rateCard}>
							<div className={styles.rateIconContainer}>
								<FiMapPin className={styles.rateIcon} />
							</div>
							<div className={styles.rateDetails}>
								<h3>Local Service - $89</h3>
								<p>Serving Vancouver, Hazel Dell, Orchards, Salmon Creek, Camas, Washougal, Battle Ground, Brush Prairie, and Ridgefield.</p>
							</div>
						</div>

						<div className={styles.rateCard}>
							<div className={styles.rateIconContainer}>
								<FiMapPin className={styles.rateIcon} />
							</div>
							<div className={styles.rateDetails}>
								<h3>Regional Service - $119</h3>
								<p>Serving Woodland, La Center, Amboy, and Yacolt.</p>
							</div>
						</div>

						<div className={styles.rateCard}>
							<div className={styles.rateIconContainer}>
								<FiDollarSign className={styles.rateIcon} />
							</div>
							<div className={styles.rateDetails}>
								<h3>Payment Options</h3>
								<div className={styles.paymentOptions}>
									<span className={styles.paymentMethod}>Cash</span>
									<span className={styles.paymentMethod}>Check</span>
									<span className={styles.paymentMethod}>Zelle</span>
									<span className={styles.paymentMethod}>Venmo</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Rates;