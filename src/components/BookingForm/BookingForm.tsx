
import styles from './BookingForm.module.css';
import {useForm} from 'react-hook-form'

const BookingForm = () => {
	const {register, handleSubmit}= useForm()
	return (
		<section
			id="bookingForm"
			className={`section ${styles.aboutSection}`}>
			<div className="container">
				<h2 className="section-title">Book now</h2>

				<div className={styles.aboutContent}>
					<div>
						<form onSubmit={handleSubmit((data)=>{
							console.log(data)
						})}>
							<input {...register('First name')} placeholder="First name"/>
							<input {...register('Last name')} placeholder="Last name"/>
							<input {...register('Phone number')} placeholder="Phone number"/>
							<input {...register('E-mail address')} placeholder="E-mail address"/>
							<input {...register('ZIP')} placeholder="ZIP"/>

							<input type="submit"/>
						</form>

					</div>



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