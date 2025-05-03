import styles from './Rates.module.css';
import { FiMapPin, FiDollarSign } from 'react-icons/fi';

const Rates = () => {
	return (
		<section id="rates" className={`section ${styles.ratesSection}`}>
			<div className="container">
				<h2 className="section-title">Service Call Fees</h2>
				<div >
					<p><strong>✔️ Service Call Fee Includes:</strong><br/>
						Your <strong>trip charge</strong> and a <strong>comprehensive diagnostic</strong> of your
						appliance issue.</p>

					<p><strong>💡 Transparent Pricing:</strong><br/>
						We charge a <strong>flat labor rate</strong> — not by the hour. That means the labor cost in
						your estimate <strong>won’t change</strong>, even if the repair takes longer or needs more
						visits.</p>

					<p><strong>✅ No Extra Fee If You Proceed:</strong><br/>
						If you choose to move forward with the repair, <strong>your service call fee is completely
							waived</strong> — you'll <strong>only pay for the repair</strong> you approve.</p>

					<p><strong>🛠 Clear Estimates Up Front:</strong><br/>
						Before we begin any work, <strong>your technician will provide a full estimate</strong> for your
						review and approval.</p>
				</div>

				<div className={styles.ratesContent}>
					<div className={styles.ratesCards}>
						<div className={styles.rateCard}>
							<div className={styles.rateIconContainer}>
								<FiMapPin className={styles.rateIcon}/>
							</div>
							<div className={styles.rateDetails}>
								<h3>Local Service - $89</h3>
								<p>Serving Vancouver, Hazel Dell, Orchards, Salmon Creek, Camas, Washougal, Battle
									Ground, Brush Prairie, and Ridgefield.</p>
							</div>
						</div>

						<div className={styles.rateCard}>
							<div className={styles.rateIconContainer}>
								<FiMapPin className={styles.rateIcon}/>
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