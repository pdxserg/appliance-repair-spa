
import styles from './BookingForm.module.css';


const BookingForm = () => {
	return (
		<section
			id="bookNow"
			className={`section ${styles.aboutSection}`}>
			<div className="container">
				<h2 className="section-title">Book now</h2>

				<div className={styles.aboutContent}>
					<div className={styles.aboutText}>
						<p>
							With over 10 years of experience in appliance and fitness equipment repair,
							we pride ourselves on delivering fast, reliable, and affordable service to
							residents throughout Clark County, Washington.
						</p>


					</div>
				</div>
			</div>
		</section>
	);
};

export default BookingForm;